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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_U9_Physical_Exam_Mouth_Nose

type CMRU8U9PhysicalExamMouthNose = "300255008" | "449790007" | "125593007";

const CMRU8U9PhysicalExamMouthNose: t.Type<CMRU8U9PhysicalExamMouthNose> = t.union(
    [t.literal("300255008"), t.literal("449790007"), t.literal("125593007")],
    "CMRU8U9PhysicalExamMouthNose"
);

export const CMRU8U9PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "449790007",
    "125593007"
];

export const CMRU8U9PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "449790007",
                display: "Orofacial cleft (disorder)"
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            }
        ]
    }
];

export default CMRU8U9PhysicalExamMouthNose;
