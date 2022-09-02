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
import CMRU4U5PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4U5PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_U5_Physical_Exam_Eyes

type CMRU4U5PhysicalExamEyes = "737269000" | "307699005" | "400964006" | "870705000";

type CMRU4U5PhysicalExamEyesType = t.KeyofC<{
    "737269000": null;
    "307699005": null;
    "400964006": null;
    "870705000": null;
}>;

const CMRU4U5PhysicalExamEyes: CMRU4U5PhysicalExamEyesType = t.keyof({
    "737269000": null,
    "307699005": null,
    "400964006": null,
    "870705000": null
});
export const CMRU4U5PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006",
    "870705000"
];

export const CMRU4U5PhysicalExamEyesValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)"
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)"
            },
            {
                code: "400964006",
                display: "Iris transillumination (finding)"
            },
            {
                code: "870705000",
                display: "Poor visual fixation (finding)"
            }
        ]
    }
];

export { CMRU4U5PhysicalExamEyesGerman as ConceptMap };

export default CMRU4U5PhysicalExamEyes;
