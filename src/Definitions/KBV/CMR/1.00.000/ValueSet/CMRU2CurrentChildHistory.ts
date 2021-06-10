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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Current_Child_History

type CMRU2CurrentChildHistory =
    | "715949008"
    | "399122003"
    | "271863002"
    | "162214009"
    | "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}";

const CMRU2CurrentChildHistory: t.Type<CMRU2CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("399122003"),
        t.literal("271863002"),
        t.literal("162214009"),
        t.literal(
            "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}"
        )
    ],
    "CMRU2CurrentChildHistory"
);

export const CMRU2CurrentChildHistoryArray: string[] = [
    "715949008",
    "399122003",
    "271863002",
    "162214009",
    "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}"
];

export const CMRU2CurrentChildHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)"
            },
            {
                code: "399122003",
                display: "Swallowing problem (finding)"
            },
            {
                code: "271863002",
                display: "Stool color abnormal (finding)"
            },
            {
                code: "162214009",
                display: "Crying infant (finding)"
            },
            {
                code:
                    "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}",
                display:
                    "Finding with explicit context (situation) : { Finding context (attribute) = At risk context (qualifier value), Temporal context (attribute) = Current or specified time (qualifier value), Subject relationship context (attribute) = Subject of record (person), Associated finding (attribute) = Congenital hip dysplasia (disorder) }"
            }
        ]
    }
];

export default CMRU2CurrentChildHistory;
