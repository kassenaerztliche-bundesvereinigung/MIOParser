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
import CMRU7PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7PhysicalExamMusculoskeletalSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_Physical_Exam_Musculoskeletal_System

type CMRU7PhysicalExamMusculoskeletalSystem =
    | "422949007"
    | "43029002"
    | "298180004"
    | "366420008";

type CMRU7PhysicalExamMusculoskeletalSystemType = t.KeyofC<{
    "422949007": null;
    "43029002": null;
    "298180004": null;
    "366420008": null;
}>;

const CMRU7PhysicalExamMusculoskeletalSystem: CMRU7PhysicalExamMusculoskeletalSystemType =
    t.keyof({
        "422949007": null,
        "43029002": null,
        "298180004": null,
        "366420008": null
    });
export const CMRU7PhysicalExamMusculoskeletalSystemArray: string[] = [
    "422949007",
    "43029002",
    "298180004",
    "366420008"
];

export const CMRU7PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
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
                code: "298180004",
                display: "Finding of range of joint movement (finding)"
            },
            {
                code: "366420008",
                display: "Peripheral reflex finding (finding)"
            }
        ]
    }
];

export { CMRU7PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU7PhysicalExamMusculoskeletalSystem;
