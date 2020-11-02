/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Messages from "../src/Interfaces/Messages";
import MIOParser from "../src";

describe("Messages", () => {
    const capitalizeValues: {
        in: string;
        out: string;
    }[] = [
        { in: "a", out: "A" },
        {
            in: "!a",
            out: "!a"
        },
        {
            in: "",
            out: ""
        }
    ];

    it("capitalize", () => {
        capitalizeValues.forEach((value) => {
            expect(Messages.capitalize(value.in)).toEqual(value.out);
        });
    });

    const values: {
        callback: Function;
        params: (string | string[] | boolean)[];
    }[] = [
        { callback: Messages.NoProfile, params: [] },
        { callback: Messages.NoMeta, params: [] },
        { callback: Messages.UnknownProfile, params: ["profile"] },
        { callback: Messages.FileType, params: ["unknown"] },
        { callback: Messages.InvalidMIO, params: [] },
        { callback: Messages.SyntaxError, params: [] },
        { callback: Messages.Reference, params: ["0000"] },
        { callback: Messages.ReferenceNotFound, params: ["field.name", "0000"] },
        { callback: Messages.Valid, params: [true] },
        { callback: Messages.Valid, params: [false] },
        { callback: Messages.NoComposition, params: ["bundle"] },
        { callback: Messages.OnlyOneComposition, params: ["bundle"] },
        {
            callback: Messages.CompositionRequire,
            params: ["bundle", "profile B", ["profile A"]]
        },
        {
            callback: Messages.CompositionExclude,
            params: ["bundle", "profile B", ["profile A"]]
        }
    ];

    it("MIOParser changes language", () => {
        values.forEach((value) => {
            MIOParser.setLang("de");
            const de = value.callback(...value.params);

            MIOParser.setLang("en");
            const en = value.callback(...value.params);

            expect(de).not.toEqual(en);
        });
    });

    it("changes language", () => {
        values.forEach((value) => {
            const de = value.callback(...value.params, "de");
            const en = value.callback(...value.params, "en");

            expect(de).not.toEqual(en);
        });
    });
});
