/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
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
import Messages from "../src/Definitions/ErrorMessage";
import * as TestUtil from "@kbv/miotestdata";
import { errorToString } from "../src/Interfaces/Util";

describe("Parse", () => {
    const mioParser = new MIOParser();

    TestUtil.runAllBundleFiles("parseFile", (file) => {
        test(`"${file}"`, (done) => {
            const blob = TestUtil.readFileAsBlob(file);
            expect(blob).toBeDefined();
            if (!blob) return;

            mioParser.parseFile(new File([blob], "test-file")).then((result) => {
                if (result.errors.length) console.log(result.errors);
                expect(result.errors.length).toBe(0);
                done();
            });
        });
    });

    TestUtil.runAllBundles("parseFiles", (bundles, value) => {
        test(`all ${value.mioString} Bundles`, (done) => {
            const blobs: Blob[] = [];
            bundles.forEach((file) => blobs.push(new Blob([fs.readFileSync(file)])));
            mioParser
                .parseFiles(blobs.map((b) => new File([b], "test-file")))
                .then((results) => {
                    const numErrors = results.reduce((a, b) => a + b.errors.length, 0);
                    if (numErrors > 0) console.log(results.map((r) => r.errors));
                    expect(numErrors).toBe(0);
                    done();
                });
        });
    });

    TestUtil.runAllBundleFiles("parseString", (file) => {
        test(`"${file}" `, (done) => {
            const str = fs.readFileSync(file).toString();
            mioParser.parseString(str).then((result) => {
                const numErrors = result.errors.length;
                if (numErrors > 0) console.log(result.errors);
                expect(numErrors).toBe(0);
                done();
            });
        });
    });

    TestUtil.runAllBundles("parseStrings", (bundles, value) => {
        test(`all ${value.mioString} Bundles`, (done) => {
            const strings = bundles.map((file) => fs.readFileSync(file).toString());
            mioParser.parseStrings(strings).then((results) => {
                const numErrors = results.reduce((a, b) => a + b.errors.length, 0);
                if (numErrors > 0) console.log(results.map((r) => r.errors));
                expect(numErrors).toBe(0);
                done();
            });
        });
    });

    TestUtil.runAllBundles(
        "parseStrings (Invalid)",
        (bundles, value) => {
            test(`all ${value.mioString} Bundles`, (done) => {
                const strings = bundles.map((file) => fs.readFileSync(file).toString());
                mioParser.parseStrings(strings).then((results) => {
                    results.forEach((result) =>
                        expect(result.errors.length).toBeGreaterThan(0)
                    );
                    done();
                });
            });
        },
        false
    );

    TestUtil.runAllProfileFiles("parseFile (Profiles)", (file, value) => {
        test(`${value.mioString} Profile "${file}"`, (done) => {
            const blob = TestUtil.readFileAsBlob(file);
            expect(blob).toBeDefined();
            if (!blob) return;

            mioParser.parseFile(new File([blob], "test-file")).then((result) => {
                if (result.errors.length) console.log(result.errors);
                expect(result.errors.length).toBe(0);
                done();
            });
        });
    });

    test("Invalid Bundle Basics", (done) => {
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
                expect(errorToString(result)).toBe(expected);
            }
        };

        const a = checkInvalidMessage(
            TestUtil.getExample("/data/bundles/Misc/Error/no-meta.json"),
            Messages.NoMeta()
        );

        const b = checkInvalidMessage(
            TestUtil.getExample("/data/bundles/Misc/Error/no-profile.json"),
            Messages.NoProfile()
        );

        const c = checkInvalidMessage(
            TestUtil.getExample("/data/bundles/Misc/Error/unknown-profile.json"),
            Messages.UnknownProfile("Unknown_Profile")
        );

        const d = checkInvalidMessage("", Messages.FileType("undefined"), "undefined");

        Promise.all([a, b, c, d]).then(() => done());
    });

    test("Broken JSON", (done) => {
        const str = "{";
        mioParser.parseString(str).catch((e) => {
            expect(e.message).toEqual(
                "This file contains errors. Please contact the issuer of this document."
            );
            done();
        });
    });

    test("Broken XML", (done) => {
        const str = "<";
        mioParser.parseString(str).catch((e) => {
            expect(e.message).toBeDefined();
            done();
        });
    });
});
