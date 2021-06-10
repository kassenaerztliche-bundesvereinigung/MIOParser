/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import MIOParser from "../src";
import * as fs from "fs";
import Messages from "../src/Interfaces/Messages";
import * as TestUtil from "miotestdata";

describe("Parse", () => {
    const mioParser = new MIOParser();

    TestUtil.runAllBundleFiles("parseFile", (file) => {
        test(`"${file}"`, async (done) => {
            const blob = new Blob([fs.readFileSync(file)]);
            const result = await mioParser.parseFile(blob);
            if (result.errors.length) console.log(result.errors);
            expect(result.errors.length).toBe(0);
            done();
        });
    });

    TestUtil.runAllBundles("parseFiles", (bundles, value) => {
        test(`all ${value.mioString} Bundles`, async (done) => {
            const blobs: Blob[] = [];
            bundles.forEach((file) => blobs.push(new Blob([fs.readFileSync(file)])));
            const results = await mioParser.parseFiles(blobs);
            const numErrors = results.reduce((a, b) => a + b.errors.length, 0);
            if (numErrors > 0) console.log(results.map((r) => r.errors));
            expect(numErrors).toBe(0);
            done();
        });
    });

    TestUtil.runAllBundleFiles("parseString", (file) => {
        test(`"${file}" `, async (done) => {
            const str = fs.readFileSync(file).toString();
            const result = await mioParser.parseString(str);
            const numErrors = result.errors.length;
            if (numErrors > 0) console.log(result.errors);
            expect(numErrors).toBe(0);
            done();
        });
    });

    TestUtil.runAllBundles("parseStrings", (bundles, value) => {
        test(`all ${value.mioString} Bundles`, async (done) => {
            const strings = bundles.map((file) => fs.readFileSync(file).toString());
            const results = await mioParser.parseStrings(strings);
            const numErrors = results.reduce((a, b) => a + b.errors.length, 0);
            if (numErrors > 0) console.log(results.map((r) => r.errors));
            expect(numErrors).toBe(0);
            done();
        });
    });

    TestUtil.runAllBundles(
        "parseStrings (Invalid)",
        (bundles, value) => {
            test(`all ${value.mioString} Bundles`, async (done) => {
                const strings = bundles.map((file) => fs.readFileSync(file).toString());
                const results = await mioParser.parseStrings(strings);
                results.forEach((result) =>
                    expect(result.errors.length).toBeGreaterThan(0)
                );

                done();
            });
        },
        false
    );

    TestUtil.runAllProfileFiles("parseFile (Profiles)", (file, value) => {
        test(`${value.mioString} Profile "${file}"`, async (done) => {
            const blob = new Blob([fs.readFileSync(file)]);
            const result = await mioParser.parseFile(blob);
            if (result.errors.length) console.log(result.errors);
            expect(result.errors.length).toBe(0);
            done();
        });
    });

    test("Invalid Bundle Basics", async (done) => {
        const checkInvalidMessage = async (
            str: string | undefined,
            expected: string,
            fileType = "application/json"
        ): Promise<void> => {
            const mioParser = new MIOParser();

            let result;

            if (str !== undefined) {
                try {
                    await mioParser.parseString(str, fileType);
                } catch (err) {
                    result = err;
                }
            }

            expect(result).toBeDefined();
            if (result) {
                expect(result.message).toBe(expected);
            }
        };

        await checkInvalidMessage(
            TestUtil.getExample("/data/bundles/error/no-meta.json"),
            Messages.NoMeta()
        );

        await checkInvalidMessage(
            TestUtil.getExample("/data/bundles/error/no-profile.json"),
            Messages.NoProfile()
        );

        await checkInvalidMessage(
            TestUtil.getExample("/data/bundles/error/unknown-profile.json"),
            Messages.UnknownProfile("Unknown_Profile")
        );

        await checkInvalidMessage("", Messages.FileType("undefined"), "undefined");

        done();
    });

    test("Broken JSON", async (done) => {
        const file = "{";
        const blob = new Blob([file]);

        let result = false;

        try {
            await mioParser.parseFile(blob);
        } catch (e) {
            expect(e.message).toEqual(
                "This file contains errors. Please contact the issuer of this document."
            );
            result = true;
        }

        expect(result).toBeTruthy();
        done();
    });

    test("Broken XML", async (done) => {
        const file = "<";
        const blob = new Blob([file]);

        let result = false;

        try {
            await mioParser.parseFile(blob);
        } catch (e) {
            result = true;
        }

        expect(result).toBeTruthy();
        done();
    });
});
