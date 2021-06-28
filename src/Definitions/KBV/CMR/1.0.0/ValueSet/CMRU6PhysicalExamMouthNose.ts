/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Physical_Exam_Mouth_Nose

type CMRU6PhysicalExamMouthNose =
    | "125593007"
    | "367381002"
    | "300255008"
    | "232209000"
    | "38160000";

const CMRU6PhysicalExamMouthNose: t.Type<CMRU6PhysicalExamMouthNose> = t.union(
    [
        t.literal("125593007"),
        t.literal("367381002"),
        t.literal("300255008"),
        t.literal("232209000"),
        t.literal("38160000")
    ],
    "CMRU6PhysicalExamMouthNose"
);

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

export default CMRU6PhysicalExamMouthNose;
