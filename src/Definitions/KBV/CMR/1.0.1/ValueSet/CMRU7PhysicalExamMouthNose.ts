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
import CMRU7PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_Physical_Exam_Mouth_Nose

type CMRU7PhysicalExamMouthNose = "300255008" | "125593007" | "59140005" | "38160000";

type CMRU7PhysicalExamMouthNoseType = t.KeyofC<{
    "300255008": null;
    "125593007": null;
    "59140005": null;
    "38160000": null;
}>;

const CMRU7PhysicalExamMouthNose: CMRU7PhysicalExamMouthNoseType = t.keyof({
    "300255008": null,
    "125593007": null,
    "59140005": null,
    "38160000": null
});
export const CMRU7PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "125593007",
    "59140005",
    "38160000"
];

export const CMRU7PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            },
            {
                code: "59140005",
                display: "Abnormal salivary secretion (finding)"
            },
            {
                code: "38160000",
                display: "Abnormal voice (finding)"
            }
        ]
    }
];

export { CMRU7PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU7PhysicalExamMouthNose;
