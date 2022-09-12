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
import CMRU7U9PhysicalExamHeartBloodCirculationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7U9PhysicalExamHeartBloodCirculationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_U9_Physical_Exam_Heart_Blood_Circulation

type CMRU7U9PhysicalExamHeartBloodCirculation =
    | "361135004"
    | "698247007"
    | "123824001"
    | "88610006";

type CMRU7U9PhysicalExamHeartBloodCirculationType = t.KeyofC<{
    "361135004": null;
    "698247007": null;
    "123824001": null;
    "88610006": null;
}>;

const CMRU7U9PhysicalExamHeartBloodCirculation: CMRU7U9PhysicalExamHeartBloodCirculationType =
    t.keyof({
        "361135004": null,
        "698247007": null,
        "123824001": null,
        "88610006": null
    });
export const CMRU7U9PhysicalExamHeartBloodCirculationArray: string[] = [
    "361135004",
    "698247007",
    "123824001",
    "88610006"
];

export const CMRU7U9PhysicalExamHeartBloodCirculationValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU7U9PhysicalExamHeartBloodCirculationGerman as ConceptMap };

export default CMRU7U9PhysicalExamHeartBloodCirculation;
