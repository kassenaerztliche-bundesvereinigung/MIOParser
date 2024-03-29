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
import CMRU5PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Physical_Exam_Mouth_Nose

type CMRU5PhysicalExamMouthNose = "125593007" | "367381002";

type CMRU5PhysicalExamMouthNoseType = t.KeyofC<{ "125593007": null; "367381002": null }>;

const CMRU5PhysicalExamMouthNose: CMRU5PhysicalExamMouthNoseType = t.keyof({
    "125593007": null,
    "367381002": null
});
export const CMRU5PhysicalExamMouthNoseArray: string[] = ["125593007", "367381002"];

export const CMRU5PhysicalExamMouthNoseValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU5PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU5PhysicalExamMouthNose;
