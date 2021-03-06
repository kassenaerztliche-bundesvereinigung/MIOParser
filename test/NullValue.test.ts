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
import * as path from "path";
import * as fs from "fs";

describe("Null Test", () => {
    it("loads mio with null", (done) => {
        const mioParser = new MIOParser();
        // eslint-disable-next-line no-undef
        const files = fs.readdirSync(path.join(__dirname, "Resources", "NullTest"));
        const filesToParse = files.length;
        let parsedFies = 0;

        files.forEach((file) => {
            const nullFile = fs.readFileSync(
                // eslint-disable-next-line no-undef
                path.join(__dirname, "Resources", "NullTest", file)
            );

            mioParser.parseFile(new Blob([nullFile])).then((result) => {
                if (result.errors.length !== 0) console.error(result.errors);
                expect(result.errors.length).toBe(0);

                parsedFies++;
                if (parsedFies === filesToParse) done();
            });
        });
    });
});
