/*
 * Copyright (c) 2020. Kassenärztliche Bundesvereinigung, KBV
 *
 * This file is part of MIO Viewer.
 *
 * MIO Viewer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation version 3 of the License only.
 *
 * MIO Viewer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with MIO Viewer. If not, see <https://www.gnu.org/licenses/>.
 */

import MIOParser from "../src";
import * as path from "path";
import * as fs from "fs";

describe("Null Test", () => {
    it("loads mio with null", (done) => {
        const mioParser = new MIOParser();
        // eslint-disable-next-line no-undef
        fs.readdir(path.join(__dirname, "Resources", "NullTest"), (error, files) => {
            const filesToParse = files.length;
            let parsedFies = 0;
            if (!error) {
                files.forEach((file) => {
                    const nullFile = fs.readFileSync(
                        // eslint-disable-next-line no-undef
                        path.join(__dirname, "Resources", "NullTest", file)
                    );
                    mioParser.parseFile(new Blob([nullFile])).then((result) => {
                        parsedFies++;
                        if (file.includes("Error")) {
                            expect(result.errors.length).toBeGreaterThan(0);
                            if (result.errors.length === 0)
                                console.error(
                                    nullFile + " should have Errors, but doesn't"
                                );
                        } else {
                            if (result.errors.length !== 0) console.error(result.errors);
                            expect(result.errors.length).toBe(0);
                        }
                        if (parsedFies === filesToParse) done();
                    });
                });
            } else throw new Error(error.message);
        });
    });
});
