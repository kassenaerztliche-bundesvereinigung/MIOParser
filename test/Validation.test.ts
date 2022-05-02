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
import * as TestUtil from "@kbv/miotestdata";
import Messages from "../src/Definitions/ErrorMessage";

describe("Validation", () => {
    const mioParser = new MIOParser();

    const testFunction = (file: string): void => {
        test(file, (done) => {
            const bundleFile = TestUtil.readFile(file);
            expect(bundleFile).toBeDefined();
            if (!bundleFile) return;

            mioParser.validateString(bundleFile).then((validationResult) => {
                expect(validationResult.message).toEqual(Messages.Valid(false));
                expect(validationResult.valid).toBe(false);
                done();
            });
        });
    };

    TestUtil.runAllBundleFiles("validateString", testFunction, false);
    TestUtil.runAllProfileFiles("validateString", testFunction, false);

    test("ErrorMessage Language", (done) => {
        const mioParser = new MIOParser();

        mioParser.parseString("{}", "application/json").catch((resultDe) => {
            expect(resultDe).toBeDefined();
            if (resultDe) {
                expect(resultDe.message).toBe("Resource has no meta.");
            }

            MIOParser.setLang("de");

            mioParser.parseString("{}", "application/json").catch((resultEn) => {
                expect(resultEn).toBeDefined();
                if (resultEn) {
                    expect(resultEn.message).toBe("Die Ressource hat kein Meta-Element.");
                }
            });

            done();
        });
    });
});
