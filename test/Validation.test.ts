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
import MIOParser from "../src";
import * as TestUtil from "miotestdata";
import Messages from "../src/Interfaces/Messages";

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
});
