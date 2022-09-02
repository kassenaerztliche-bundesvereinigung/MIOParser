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
import CMRU7PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_Physical_Exam_Eyes

type CMRU7PhysicalExamEyes =
    | "737269000"
    | "307699005"
    | "400964006"
    | "34241000119104"
    | "301937002";

type CMRU7PhysicalExamEyesType = t.KeyofC<{
    "737269000": null;
    "307699005": null;
    "400964006": null;
    "34241000119104": null;
    "301937002": null;
}>;

const CMRU7PhysicalExamEyes: CMRU7PhysicalExamEyesType = t.keyof({
    "737269000": null,
    "307699005": null,
    "400964006": null,
    "34241000119104": null,
    "301937002": null
});
export const CMRU7PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006",
    "34241000119104",
    "301937002"
];

export const CMRU7PhysicalExamEyesValueSet: ValueSet = [
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
                code: "34241000119104",
                display: "Ocular torticollis (disorder)"
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)"
            }
        ]
    }
];

export { CMRU7PhysicalExamEyesGerman as ConceptMap };

export default CMRU7PhysicalExamEyes;
