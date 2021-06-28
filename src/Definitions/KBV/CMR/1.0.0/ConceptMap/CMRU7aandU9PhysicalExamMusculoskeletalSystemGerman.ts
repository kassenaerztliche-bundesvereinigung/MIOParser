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

// Diese Conceptmap verknüpft die Codes für U7a, U9 - Bewegungsapparat mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU7aandU9PhysicalExamMusculoskeletalSystemGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_and_U9_Physical_Exam_Musculoskeletal_System_German",
        element: [
            {
                code: "422949007",
                display: "Musculoskeletal asymmetry (finding)",
                target: [
                    {
                        code: "Asymmetrien",
                        display: "Asymmetrien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43029002",
                display: "Abnormal posture (finding)",
                target: [
                    {
                        code: "Schiefhaltung",
                        display: "Schiefhaltung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "298180004",
                display: "Finding of range of joint movement (finding)",
                target: [
                    {
                        code: "passiveBeweglichkeitdergrossenGelenke",
                        display: "passive Beweglichkeit der großen Gelenke",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "366420008",
                display: "Peripheral reflex finding (finding)",
                target: [
                    {
                        code: "Muskeleigenreflexe",
                        display: "Muskeleigenreflexe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "366725004",
                display: "Finding of muscle tone (finding)",
                target: [
                    {
                        code: "Muskeltonus",
                        display: "Muskeltonus",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU7aandU9PhysicalExamMusculoskeletalSystemGerman;
