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

import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_SFHIR_BMP_DOSIEREINHEIT

type KBVVSSFHIRBMPDOSIEREINHEIT =
    | "#"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "o"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "u"
    | "v";

type KBVVSSFHIRBMPDOSIEREINHEITType = t.KeyofC<{
    "#": null;
    "0": null;
    "1": null;
    "2": null;
    "3": null;
    "4": null;
    "5": null;
    "6": null;
    "7": null;
    "8": null;
    "9": null;
    a: null;
    b: null;
    c: null;
    d: null;
    e: null;
    f: null;
    g: null;
    h: null;
    i: null;
    j: null;
    k: null;
    l: null;
    m: null;
    n: null;
    o: null;
    p: null;
    q: null;
    r: null;
    s: null;
    t: null;
    u: null;
    v: null;
}>;

const KBVVSSFHIRBMPDOSIEREINHEIT: KBVVSSFHIRBMPDOSIEREINHEITType = t.keyof({
    "#": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
    q: null,
    r: null,
    s: null,
    t: null,
    u: null,
    v: null
});
export const KBVVSSFHIRBMPDOSIEREINHEITArray: string[] = [
    "#",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v"
];

export const KBVVSSFHIRBMPDOSIEREINHEITValueSet: ValueSet = [
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BMP_DOSIEREINHEIT",
        concept: [
            {
                code: "#",
                display: "Messlöffel"
            },
            {
                code: "0",
                display: "Messbecher"
            },
            {
                code: "1",
                display: "Stück"
            },
            {
                code: "2",
                display: "Pkg."
            },
            {
                code: "3",
                display: "Flasche"
            },
            {
                code: "4",
                display: "Beutel"
            },
            {
                code: "5",
                display: "Hub"
            },
            {
                code: "6",
                display: "Tropfen"
            },
            {
                code: "7",
                display: "Teelöffel"
            },
            {
                code: "8",
                display: "Esslöffel"
            },
            {
                code: "9",
                display: "E"
            },
            {
                code: "a",
                display: "Tasse"
            },
            {
                code: "b",
                display: "Applikatorfüllung"
            },
            {
                code: "c",
                display: "Augenbadewanne"
            },
            {
                code: "d",
                display: "Dosierbriefchen"
            },
            {
                code: "e",
                display: "Dosierpipette"
            },
            {
                code: "f",
                display: "Dosierspritze"
            },
            {
                code: "g",
                display: "Einzeldosis"
            },
            {
                code: "h",
                display: "Glas"
            },
            {
                code: "i",
                display: "Likörglas"
            },
            {
                code: "j",
                display: "Messkappe"
            },
            {
                code: "k",
                display: "Messschale"
            },
            {
                code: "l",
                display: "Mio E"
            },
            {
                code: "m",
                display: "Mio IE"
            },
            {
                code: "n",
                display: "Pipettenteilstrich"
            },
            {
                code: "o",
                display: "Sprühstoß"
            },
            {
                code: "p",
                display: "IE"
            },
            {
                code: "q",
                display: "cm"
            },
            {
                code: "r",
                display: "l"
            },
            {
                code: "s",
                display: "ml"
            },
            {
                code: "t",
                display: "g"
            },
            {
                code: "u",
                display: "kg"
            },
            {
                code: "v",
                display: "mg"
            }
        ]
    }
];

export default KBVVSSFHIRBMPDOSIEREINHEIT;
