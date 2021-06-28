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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Family_History

type CMRU2FamilyHistory = "160346003" | "160352002" | "737367001" | "700191004";

const CMRU2FamilyHistory: t.Type<CMRU2FamilyHistory> = t.union(
    [
        t.literal("160346003"),
        t.literal("160352002"),
        t.literal("737367001"),
        t.literal("700191004")
    ],
    "CMRU2FamilyHistory"
);

export const CMRU2FamilyHistoryArray: string[] = [
    "160346003",
    "160352002",
    "737367001",
    "700191004"
];

export const CMRU2FamilyHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "160346003",
                display: "Family history: Eye disorder (situation)"
            },
            {
                code: "160352002",
                display: "Family history: Ear disorder (situation)"
            },
            {
                code: "737367001",
                display: "Family history of disorder of immune function (situation)"
            },
            {
                code: "700191004",
                display: "Family history of congenital hip dysplasia (situation)"
            }
        ]
    }
];

export default CMRU2FamilyHistory;
