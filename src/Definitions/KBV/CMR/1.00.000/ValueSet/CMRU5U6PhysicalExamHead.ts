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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_U6_Physical_Exam_Head

type CMRU5U6PhysicalExamHead = "111235007" | "253978002" | "248387005" | "366372002";

const CMRU5U6PhysicalExamHead: t.Type<CMRU5U6PhysicalExamHead> = t.union(
    [
        t.literal("111235007"),
        t.literal("253978002"),
        t.literal("248387005"),
        t.literal("366372002")
    ],
    "CMRU5U6PhysicalExamHead"
);

export const CMRU5U6PhysicalExamHeadArray: string[] = [
    "111235007",
    "253978002",
    "248387005",
    "366372002"
];

export const CMRU5U6PhysicalExamHeadValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "111235007",
                display: "Musculoskeletal disorder of the neck (disorder)"
            },
            {
                code: "253978002",
                display: "Dysmorphic features (finding)"
            },
            {
                code: "248387005",
                display: "Cranial suture finding (finding)"
            },
            {
                code: "366372002",
                display: "Finding of level of fontanelle (finding)"
            }
        ]
    }
];

export default CMRU5U6PhysicalExamHead;
