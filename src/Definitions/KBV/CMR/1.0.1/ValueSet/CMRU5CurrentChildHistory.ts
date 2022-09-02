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
import CMRU5CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Current_Child_History

type CMRU5CurrentChildHistory =
    | "715949008"
    | "248124006"
    | "271840007"
    | "162214009"
    | "162339002";

type CMRU5CurrentChildHistoryType = t.KeyofC<{
    "715949008": null;
    "248124006": null;
    "271840007": null;
    "162214009": null;
    "162339002": null;
}>;

const CMRU5CurrentChildHistory: CMRU5CurrentChildHistoryType = t.keyof({
    "715949008": null,
    "248124006": null,
    "271840007": null,
    "162214009": null,
    "162339002": null
});
export const CMRU5CurrentChildHistoryArray: string[] = [
    "715949008",
    "248124006",
    "271840007",
    "162214009",
    "162339002"
];

export const CMRU5CurrentChildHistoryValueSet: ValueSet = [
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
                code: "162214009",
                display: "Crying infant (finding)"
            },
            {
                code: "162339002",
                display: "Hearing normal (finding)"
            }
        ]
    }
];

export { CMRU5CurrentChildHistoryGerman as ConceptMap };

export default CMRU5CurrentChildHistory;
