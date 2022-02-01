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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Temp_Snomed

type BodyTempSnomed =
    | "386725007"
    | "300076005"
    | "276885007"
    | "708499008"
    | "698832009"
    | "698831002"
    | "431598003"
    | "415974002"
    | "415945006"
    | "364246006"
    | "307047009"
    | "860958002"
    | "415922000";

const BodyTempSnomed: t.Type<BodyTempSnomed> = t.union(
    [
        t.literal("386725007"),
        t.literal("300076005"),
        t.literal("276885007"),
        t.literal("708499008"),
        t.literal("698832009"),
        t.literal("698831002"),
        t.literal("431598003"),
        t.literal("415974002"),
        t.literal("415945006"),
        t.literal("364246006"),
        t.literal("307047009"),
        t.literal("860958002"),
        t.literal("415922000")
    ],
    "BodyTempSnomed"
);

export const BodyTempSnomedArray: string[] = [
    "386725007",
    "300076005",
    "276885007",
    "708499008",
    "698832009",
    "698831002",
    "431598003",
    "415974002",
    "415945006",
    "364246006",
    "307047009",
    "860958002",
    "415922000"
];

export const BodyTempSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "386725007",
                display: "Body temperature (observable entity)"
            },
            {
                code: "300076005",
                display: "Basal body temperature (observable entity)"
            },
            {
                code: "276885007",
                display: "Core body temperature (observable entity)"
            },
            {
                code: "708499008",
                display: "Core body temperature of neonate at birth (observable entity)"
            },
            {
                code: "698832009",
                display:
                    "Core body temperature measured at urinary bladder (observable entity)"
            },
            {
                code: "698831002",
                display:
                    "Core body temperature measured in nasopharynx (observable entity)"
            },
            {
                code: "431598003",
                display: "Core body temperature measured in esophagus (observable entity)"
            },
            {
                code: "415974002",
                display:
                    "Core body temperature measured at tympanic membrane (observable entity)"
            },
            {
                code: "415945006",
                display:
                    "Core body temperature measured in sublingual space (observable entity)"
            },
            {
                code: "364246006",
                display: "Core body temperature measured vaginally (observable entity)"
            },
            {
                code: "307047009",
                display: "Core body temperature measured in rectum (observable entity)"
            },
            {
                code: "860958002",
                display: "Temperature of blood (observable entity)"
            },
            {
                code: "415922000",
                display: "Temperature of forehead (observable entity)"
            }
        ]
    }
];

export default BodyTempSnomed;
