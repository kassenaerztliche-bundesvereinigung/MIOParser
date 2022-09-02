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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/marital-status

type Maritalstatus = "A" | "D" | "I" | "L" | "M" | "P" | "S" | "T" | "U" | "W" | "UNK";

type MaritalstatusType = t.KeyofC<{
    A: null;
    D: null;
    I: null;
    L: null;
    M: null;
    P: null;
    S: null;
    T: null;
    U: null;
    W: null;
    UNK: null;
}>;

const Maritalstatus: MaritalstatusType = t.keyof({
    A: null,
    D: null,
    I: null,
    L: null,
    M: null,
    P: null,
    S: null,
    T: null,
    U: null,
    W: null,
    UNK: null
});
export const MaritalstatusArray: string[] = [
    "A",
    "D",
    "I",
    "L",
    "M",
    "P",
    "S",
    "T",
    "U",
    "W",
    "UNK"
];

export const MaritalstatusValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        concept: [
            {
                code: "A",
                display: "Annulled"
            },
            {
                code: "D",
                display: "Divorced"
            },
            {
                code: "I",
                display: "Interlocutory"
            },
            {
                code: "L",
                display: "Legally Separated"
            },
            {
                code: "M",
                display: "Married"
            },
            {
                code: "P",
                display: "Polygamous"
            },
            {
                code: "S",
                display: "Never Married"
            },
            {
                code: "T",
                display: "Domestic partner"
            },
            {
                code: "U",
                display: "unmarried"
            },
            {
                code: "W",
                display: "Widowed"
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
        concept: [
            {
                code: "UNK",
                display: ""
            }
        ]
    }
];

export default Maritalstatus;
