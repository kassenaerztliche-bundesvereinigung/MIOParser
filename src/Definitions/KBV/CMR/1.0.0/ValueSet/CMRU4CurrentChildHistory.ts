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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Current_Child_History

type CMRU4CurrentChildHistory =
    | "715949008"
    | "399122003"
    | "271840007+111360009"
    | "162214009";

const CMRU4CurrentChildHistory: t.Type<CMRU4CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("399122003"),
        t.literal("271840007+111360009"),
        t.literal("162214009")
    ],
    "CMRU4CurrentChildHistory"
);

export const CMRU4CurrentChildHistoryArray: string[] = [
    "715949008",
    "399122003",
    "271840007+111360009",
    "162214009"
];

export const CMRU4CurrentChildHistoryValueSet: ValueSet = [
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
                code: "271840007+111360009",
                display: "Abnormal feces (finding)+Obstipation (disorder)"
            },
            {
                code: "162214009",
                display: "Crying infant (finding)"
            }
        ]
    }
];

export default CMRU4CurrentChildHistory;
