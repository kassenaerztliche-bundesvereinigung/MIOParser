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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Physical_Exam_Mouth_Nose

type CMRU5PhysicalExamMouthNose = "125593007" | "367381002";

const CMRU5PhysicalExamMouthNose: t.Type<CMRU5PhysicalExamMouthNose> = t.union(
    [t.literal("125593007"), t.literal("367381002")],
    "CMRU5PhysicalExamMouthNose"
);

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

export default CMRU5PhysicalExamMouthNose;
