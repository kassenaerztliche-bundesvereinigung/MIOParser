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
import { ValueSet } from "../../../../Interfaces";
import CMRU3CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Current_Child_History

type CMRU3CurrentChildHistory = "715949008" | "399122003" | "162214009" | "271863002";

type CMRU3CurrentChildHistoryType = t.KeyofC<{
    "715949008": null;
    "399122003": null;
    "162214009": null;
    "271863002": null;
}>;

const CMRU3CurrentChildHistory: CMRU3CurrentChildHistoryType = t.keyof({
    "715949008": null,
    "399122003": null,
    "162214009": null,
    "271863002": null
});
export const CMRU3CurrentChildHistoryArray: string[] = [
    "715949008",
    "399122003",
    "162214009",
    "271863002"
];

export const CMRU3CurrentChildHistoryValueSet: ValueSet = [
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
                code: "162214009",
                display: "Crying infant (finding)"
            },
            {
                code: "271863002",
                display: "Stool color abnormal (finding)"
            }
        ]
    }
];

export { CMRU3CurrentChildHistoryGerman as ConceptMap };

export default CMRU3CurrentChildHistory;
