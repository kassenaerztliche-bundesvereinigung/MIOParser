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
import CMRU2PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2PhysicalExamMusculoskeletalSystemGerman";

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

type CMRU2PhysicalExamMusculoskeletalSystemType = t.KeyofC<{
    "422949007": null;
    "43029002": null;
    "225606002": null;
    "366725004": null;
    "8652009": null;
    "298180004": null;
    "299742001+299743006": null;
    "299796002": null;
    "299763004+299764005": null;
    "404684003:116676008=72704001": null;
}>;

const CMRU2PhysicalExamMusculoskeletalSystem: CMRU2PhysicalExamMusculoskeletalSystemType =
    t.keyof({
        "422949007": null,
        "43029002": null,
        "225606002": null,
        "366725004": null,
        "8652009": null,
        "298180004": null,
        "299742001+299743006": null,
        "299796002": null,
        "299763004+299764005": null,
        "404684003:116676008=72704001": null
    });
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

export { CMRU2PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU2PhysicalExamMusculoskeletalSystem;
