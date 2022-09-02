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
import CMRU6PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Physical_Exam_Mouth_Nose

type CMRU6PhysicalExamMouthNose =
    | "125593007"
    | "367381002"
    | "300255008"
    | "232209000"
    | "38160000";

type CMRU6PhysicalExamMouthNoseType = t.KeyofC<{
    "125593007": null;
    "367381002": null;
    "300255008": null;
    "232209000": null;
    "38160000": null;
}>;

const CMRU6PhysicalExamMouthNose: CMRU6PhysicalExamMouthNoseType = t.keyof({
    "125593007": null,
    "367381002": null,
    "300255008": null,
    "232209000": null,
    "38160000": null
});
export const CMRU6PhysicalExamMouthNoseArray: string[] = [
    "125593007",
    "367381002",
    "300255008",
    "232209000",
    "38160000"
];

export const CMRU6PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            },
            {
                code: "367381002",
                display: "Weak mouth closure (finding)"
            },
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)"
            },
            {
                code: "38160000",
                display: "Abnormal voice (finding)"
            }
        ]
    }
];

export { CMRU6PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU6PhysicalExamMouthNose;
