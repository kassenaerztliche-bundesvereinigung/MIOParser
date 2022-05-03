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
import CMRU7aPhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aPhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_Physical_Exam_Mouth_Nose

type CMRU7aPhysicalExamMouthNose =
    | "300255008"
    | "125593007"
    | "449790007"
    | "367381002"
    | "232209000";

const CMRU7aPhysicalExamMouthNose: t.Type<CMRU7aPhysicalExamMouthNose> = t.union(
    [
        t.literal("300255008"),
        t.literal("125593007"),
        t.literal("449790007"),
        t.literal("367381002"),
        t.literal("232209000")
    ],
    "CMRU7aPhysicalExamMouthNose"
);

export const CMRU7aPhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "125593007",
    "449790007",
    "367381002",
    "232209000"
];

export const CMRU7aPhysicalExamMouthNoseValueSet: ValueSet = [
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
                code: "449790007",
                display: "Orofacial cleft (disorder)"
            },
            {
                code: "367381002",
                display: "Weak mouth closure (finding)"
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)"
            }
        ]
    }
];

export { CMRU7aPhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU7aPhysicalExamMouthNose;
