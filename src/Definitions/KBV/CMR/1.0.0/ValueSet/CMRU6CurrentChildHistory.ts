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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Current_Child_History

type CMRU6CurrentChildHistory =
    | "715949008"
    | "248124006"
    | "271840007"
    | "162339002"
    | "72863001";

const CMRU6CurrentChildHistory: t.Type<CMRU6CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("248124006"),
        t.literal("271840007"),
        t.literal("162339002"),
        t.literal("72863001")
    ],
    "CMRU6CurrentChildHistory"
);

export const CMRU6CurrentChildHistoryArray: string[] = [
    "715949008",
    "248124006",
    "271840007",
    "162339002",
    "72863001"
];

export const CMRU6CurrentChildHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)"
            },
            {
                code: "248124006",
                display: "Eating problem (finding)"
            },
            {
                code: "271840007",
                display: "Abnormal feces (finding)"
            },
            {
                code: "162339002",
                display: "Hearing normal (finding)"
            },
            {
                code: "72863001",
                display: "Snoring (finding)"
            }
        ]
    }
];

export default CMRU6CurrentChildHistory;
