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
import CMRU2U6PhysicalExamHeartBloodCirculationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U6PhysicalExamHeartBloodCirculationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U6_Physical_Exam_Heart_Blood_Circulation

type CMRU2U6PhysicalExamHeartBloodCirculation =
    | "361135004"
    | "698247007"
    | "123824001"
    | "88610006"
    | "50178004";

const CMRU2U6PhysicalExamHeartBloodCirculation: t.Type<CMRU2U6PhysicalExamHeartBloodCirculation> =
    t.union(
        [
            t.literal("361135004"),
            t.literal("698247007"),
            t.literal("123824001"),
            t.literal("88610006"),
            t.literal("50178004")
        ],
        "CMRU2U6PhysicalExamHeartBloodCirculation"
    );

export const CMRU2U6PhysicalExamHeartBloodCirculationArray: string[] = [
    "361135004",
    "698247007",
    "123824001",
    "88610006",
    "50178004"
];

export const CMRU2U6PhysicalExamHeartBloodCirculationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "361135004",
                display: "Abnormal cardiac rate (finding)"
            },
            {
                code: "698247007",
                display: "Cardiac arrhythmia (disorder)"
            },
            {
                code: "123824001",
                display: "Heart sounds abnormal (finding)"
            },
            {
                code: "88610006",
                display: "Heart murmur (finding)"
            },
            {
                code: "50178004",
                display: "Abnormal femoral pulse (finding)"
            }
        ]
    }
];

export { CMRU2U6PhysicalExamHeartBloodCirculationGerman as ConceptMap };

export default CMRU2U6PhysicalExamHeartBloodCirculation;
