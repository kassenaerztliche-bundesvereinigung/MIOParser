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

import ErrorMessage from "../src/Definitions/ErrorMessage";
import MIOParser from "../src";

describe("ErrorMessage", () => {
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
            expect(ErrorMessage.capitalize(value.in)).toEqual(value.out);
        });
    });

    const valuesMessages: {
        // eslint-disable-next-line @typescript-eslint/ban-types
        callback: Function;
        params: (string | string[] | boolean | number)[];
    }[] = [
        { callback: ErrorMessage.NoProfile, params: [] },
        { callback: ErrorMessage.NoMeta, params: [] },
        { callback: ErrorMessage.UnknownProfile, params: ["profile"] },
        { callback: ErrorMessage.FileType, params: ["unknown"] },
        { callback: ErrorMessage.InvalidMIO, params: [] },
        { callback: ErrorMessage.SyntaxError, params: [] },
        { callback: ErrorMessage.Reference, params: ["0000"] },
        { callback: ErrorMessage.Valid, params: [true] },
        { callback: ErrorMessage.Valid, params: [false] },
        { callback: ErrorMessage.NoComposition, params: ["bundle"] },
        { callback: ErrorMessage.OnlyOneComposition, params: ["bundle"] },
        /*
        {
            callback: ErrorMessage.ContextEntry,
            params: []
        },
         */
        {
            callback: ErrorMessage.Scalar,
            params: ["A", "1", ".*"]
        },
        {
            callback: ErrorMessage.MinArray,
            params: [2, 1]
        },
        {
            callback: ErrorMessage.MaxArray,
            params: [2, 3]
        },
        {
            callback: ErrorMessage.Slice,
            params: ["A", "Message"]
        },
        {
            callback: ErrorMessage.Literal,
            params: ["FAIL", "WIN"]
        },
        {
            callback: ErrorMessage.Codec,
            params: ["A", "1", "2", 3]
        },
        {
            callback: ErrorMessage.Excess,
            params: ["Ueberschuss"]
        },
        {
            callback: ErrorMessage.Extensible,
            params: ["ValueSet", "A"]
        },
        {
            callback: ErrorMessage.Constraint,
            params: ["Message", "wd-40"]
        },
        {
            callback: ErrorMessage.NotResolveConstraint,
            params: ["Message", "wd-40", "Error"]
        },
        {
            callback: ErrorMessage.NoTargetWithinBundle,
            params: ["0000-0000"]
        },
        {
            callback: ErrorMessage.WrongTarget,
            params: ["0000-0000", ["A", "B"], "C"]
        },
        {
            callback: ErrorMessage.NoCompositionForUrl,
            params: ["0000-0000"]
        },
        {
            callback: ErrorMessage.NoSections,
            params: []
        },
        {
            callback: ErrorMessage.NoSectionForValue,
            params: ["MR", "path.a"]
        },
        {
            callback: ErrorMessage.ObjectNotPresent,
            params: []
        },
        {
            callback: ErrorMessage.ReferenceNotResolved,
            params: ["Value"]
        }
    ];

    it("MIOParser changes language", () => {
        valuesMessages.forEach((value) => {
            MIOParser.setLang("de");
            const de = value.callback(...value.params);

            MIOParser.setLang("en");
            const en = value.callback(...value.params);

            expect(de).not.toEqual(en);
        });
    });

    it("changes language", () => {
        valuesMessages.forEach((value) => {
            const de = value.callback(...value.params, "de");
            const en = value.callback(...value.params, "en");

            console.log(de);

            expect(de).not.toEqual(en);
        });
    });
});
