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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Physical_Exam_Musculoskeletal_System

type CMRU2PhysicalExamMusculoskeletalSystem =
    | "422949007"
    | "43029002"
    | "225606002"
    | "366725004"
    | "8652009"
    | "298180004"
    | "299742001+299743006"
    | "299796002"
    | "299763004+299764005"
    | "404684003:116676008=72704001";

const CMRU2PhysicalExamMusculoskeletalSystem: t.Type<CMRU2PhysicalExamMusculoskeletalSystem> = t.union(
    [
        t.literal("422949007"),
        t.literal("43029002"),
        t.literal("225606002"),
        t.literal("366725004"),
        t.literal("8652009"),
        t.literal("298180004"),
        t.literal("299742001+299743006"),
        t.literal("299796002"),
        t.literal("299763004+299764005"),
        t.literal("404684003:116676008=72704001")
    ],
    "CMRU2PhysicalExamMusculoskeletalSystem"
);

export const CMRU2PhysicalExamMusculoskeletalSystemArray: string[] = [
    "422949007",
    "43029002",
    "225606002",
    "366725004",
    "8652009",
    "298180004",
    "299742001+299743006",
    "299796002",
    "299763004+299764005",
    "404684003:116676008=72704001"
];

export const CMRU2PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "422949007",
                display: "Musculoskeletal asymmetry (finding)"
            },
            {
                code: "43029002",
                display: "Abnormal posture (finding)"
            },
            {
                code: "225606002",
                display: "Abnormal movement (finding)"
            },
            {
                code: "366725004",
                display: "Finding of muscle tone (finding)"
            },
            {
                code: "8652009",
                display: "Opisthotonus (finding)"
            },
            {
                code: "298180004",
                display: "Finding of range of joint movement (finding)"
            },
            {
                code: "299742001+299743006",
                display: "Moro reflex absent (finding) + Moro reflex equivocal (finding)"
            },
            {
                code: "299796002",
                display: "Galant's reflex absent (finding)"
            },
            {
                code: "299763004+299764005",
                display:
                    "Stepping reflex absent (finding)+Stepping reflex equivocal (finding)"
            },
            {
                code: "404684003:116676008=72704001",
                display:
                    "Clinical finding (finding) : Associated morphology (attribute) = Fracture (morphologic abnormality)"
            }
        ]
    }
];

export default CMRU2PhysicalExamMusculoskeletalSystem;
