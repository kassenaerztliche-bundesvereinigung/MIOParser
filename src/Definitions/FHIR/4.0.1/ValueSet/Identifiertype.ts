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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/identifier-type

type Identifiertype =
    | "DL"
    | "PPN"
    | "BRN"
    | "MR"
    | "MCN"
    | "EN"
    | "TAX"
    | "NIIP"
    | "PRN"
    | "MD"
    | "DR"
    | "ACSN"
    | "UDI"
    | "SNO"
    | "SB"
    | "PLAC"
    | "FILL"
    | "JHN";

type IdentifiertypeType = t.KeyofC<{
    DL: null;
    PPN: null;
    BRN: null;
    MR: null;
    MCN: null;
    EN: null;
    TAX: null;
    NIIP: null;
    PRN: null;
    MD: null;
    DR: null;
    ACSN: null;
    UDI: null;
    SNO: null;
    SB: null;
    PLAC: null;
    FILL: null;
    JHN: null;
}>;

const Identifiertype: IdentifiertypeType = t.keyof({
    DL: null,
    PPN: null,
    BRN: null,
    MR: null,
    MCN: null,
    EN: null,
    TAX: null,
    NIIP: null,
    PRN: null,
    MD: null,
    DR: null,
    ACSN: null,
    UDI: null,
    SNO: null,
    SB: null,
    PLAC: null,
    FILL: null,
    JHN: null
});
export const IdentifiertypeArray: string[] = [
    "DL",
    "PPN",
    "BRN",
    "MR",
    "MCN",
    "EN",
    "TAX",
    "NIIP",
    "PRN",
    "MD",
    "DR",
    "ACSN",
    "UDI",
    "SNO",
    "SB",
    "PLAC",
    "FILL",
    "JHN"
];

export const IdentifiertypeValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v2-0203",
        concept: [
            {
                code: "DL",
                display: ""
            },
            {
                code: "PPN",
                display: ""
            },
            {
                code: "BRN",
                display: ""
            },
            {
                code: "MR",
                display: ""
            },
            {
                code: "MCN",
                display: ""
            },
            {
                code: "EN",
                display: ""
            },
            {
                code: "TAX",
                display: ""
            },
            {
                code: "NIIP",
                display: ""
            },
            {
                code: "PRN",
                display: ""
            },
            {
                code: "MD",
                display: ""
            },
            {
                code: "DR",
                display: ""
            },
            {
                code: "ACSN",
                display: ""
            },
            {
                code: "UDI",
                display: ""
            },
            {
                code: "SNO",
                display: ""
            },
            {
                code: "SB",
                display: ""
            },
            {
                code: "PLAC",
                display: ""
            },
            {
                code: "FILL",
                display: ""
            },
            {
                code: "JHN",
                display: ""
            }
        ]
    }
];

export default Identifiertype;
