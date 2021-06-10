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

import fs from "fs";
import MIOParser, { KBVBundleResource } from "../src";
import * as TestUtil from "miotestdata";
import Messages from "../src/Interfaces/Messages";
import Validator from "../src/Validator";

describe("Validation", () => {
    const mioParser = new MIOParser();

    const testFunction = (file: string): void => {
        test(file, async (done) => {
            const validationResult = await mioParser.validateFile(
                new Blob([fs.readFileSync(file)])
            );

            expect(validationResult.errors.length).toBeTruthy();
            expect(validationResult.message).toEqual(Messages.Valid(false));
            expect(validationResult.valid).toBe(false);
            done();
        });
    };

    TestUtil.runAllBundleFiles("validateFile", testFunction, false);
    TestUtil.runAllProfileFiles("validateFile", testFunction, false);

    test("ErrorMessage Language", async (done) => {
        const mioParser = new MIOParser();

        let resultDe;

        try {
            await mioParser.parseString("{}", "application/json");
        } catch (err) {
            resultDe = err;
        }

        expect(resultDe).toBeDefined();
        if (resultDe) {
            expect(resultDe.message).toBe("Resource has no meta.");
        }

        MIOParser.setLang("de");

        let resultEn;

        try {
            await mioParser.parseString("{}", "application/json");
        } catch (err) {
            resultEn = err;
        }

        expect(resultEn).toBeDefined();
        if (resultEn) {
            expect(resultEn.message).toBe("Die Ressource hat kein Meta-Element.");
        }

        done();
    });

    const testCompositionValid = (file: string): void => {
        test(file, async (done) => {
            const result = await mioParser.parseFile(new Blob([fs.readFileSync(file)]));
            const errors = Validator.validateComposition(
                result.value as KBVBundleResource
            );

            if (errors.length) {
                console.log(errors);
            }

            expect(errors.length).toBe(0);
            done();
        });
    };

    describe("validateComposition", () => {
        TestUtil.runAllFiles(
            "validateComposition",
            [
                { mioString: "IM" },
                { mioString: "ZB" },
                { mioString: "MR" },
                { mioString: "UH" }
            ],
            testCompositionValid,
            "Bundles"
        );
    });

    test("validateComposition (invalid)", async (done) => {
        const files = [
            "/data/bundles/IM/error/Bundle-example-multiple-compositions.json",
            "/data/bundles/IM/error/Bundle-example-composition-false-reference.json",
            "/data/bundles/IM/error/Bundle-example-no-composition.json"
        ];

        for (const path of files) {
            const file = TestUtil.getExample(path);
            expect(file).toBeDefined();
            if (file) {
                const result = await mioParser.parseFile(new Blob([file]));
                const errors = Validator.validateComposition(
                    result.value as KBVBundleResource
                );
                expect(errors.length).toBeGreaterThan(0);
            }
        }

        done();
    });
});
