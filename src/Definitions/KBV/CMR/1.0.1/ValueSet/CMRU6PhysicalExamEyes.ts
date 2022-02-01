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
import CMRU6PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Physical_Exam_Eyes

type CMRU6PhysicalExamEyes =
    | "737269000"
    | "307699005"
    | "400964006"
    | "870705000"
    | "34241000119104"
    | "301937002";

const CMRU6PhysicalExamEyes: t.Type<CMRU6PhysicalExamEyes> = t.union(
    [
        t.literal("737269000"),
        t.literal("307699005"),
        t.literal("400964006"),
        t.literal("870705000"),
        t.literal("34241000119104"),
        t.literal("301937002")
    ],
    "CMRU6PhysicalExamEyes"
);

export const CMRU6PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006",
    "870705000",
    "34241000119104",
    "301937002"
];

export const CMRU6PhysicalExamEyesValueSet: ValueSet = [
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

export { CMRU6PhysicalExamEyesGerman as ConceptMap };

export default CMRU6PhysicalExamEyes;
