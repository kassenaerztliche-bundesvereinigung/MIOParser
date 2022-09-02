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
import CMRU8PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8PhysicalExamMusculoskeletalSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_Physical_Exam_Musculoskeletal_System

type CMRU8PhysicalExamMusculoskeletalSystem =
    | "298380006"
    | "422949007"
    | "43029002"
    | "225606002"
    | "298180004"
    | "366725004"
    | "366420008"
    | "404684003:{47429007=41345002,363698007=2592007}";

type CMRU8PhysicalExamMusculoskeletalSystemType = t.KeyofC<{
    "298380006": null;
    "422949007": null;
    "43029002": null;
    "225606002": null;
    "298180004": null;
    "366725004": null;
    "366420008": null;
    "404684003:{47429007=41345002,363698007=2592007}": null;
}>;

const CMRU8PhysicalExamMusculoskeletalSystem: CMRU8PhysicalExamMusculoskeletalSystemType =
    t.keyof({
        "298380006": null,
        "422949007": null,
        "43029002": null,
        "225606002": null,
        "298180004": null,
        "366725004": null,
        "366420008": null,
        "404684003:{47429007=41345002,363698007=2592007}": null
    });
export const CMRU8PhysicalExamMusculoskeletalSystemArray: string[] = [
    "298380006",
    "422949007",
    "43029002",
    "225606002",
    "298180004",
    "366725004",
    "366420008",
    "404684003:{47429007=41345002,363698007=2592007}"
];

export const CMRU8PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "298380006",
                display: "Deformity of spine (finding)"
            },
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
                code: "298180004",
                display: "Finding of range of joint movement (finding)"
            },
            {
                code: "366725004",
                display: "Finding of muscle tone (finding)"
            },
            {
                code: "366420008",
                display: "Peripheral reflex finding (finding)"
            },
            {
                code: "404684003:{47429007=41345002,363698007=2592007}",
                display:
                    "Clinical finding (finding) : { Associated with (attribute) = Rickets (disorder), Finding site (attribute) = All extremities (body structure) }"
            }
        ]
    }
];

export { CMRU8PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU8PhysicalExamMusculoskeletalSystem;
