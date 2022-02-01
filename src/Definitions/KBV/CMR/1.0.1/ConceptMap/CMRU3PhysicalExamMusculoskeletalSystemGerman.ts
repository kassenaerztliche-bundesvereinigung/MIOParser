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

// Diese Conceptmap verknüpft die Codes für U3 - Bewegungsapparat mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU3PhysicalExamMusculoskeletalSystemGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Physical_Exam_Musculoskeletal_System_German",
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
                code: "225606002",
                display: "Abnormal movement (finding)",
                target: [
                    {
                        code: "Spontanmotorik",
                        display: "Spontanmotorik",
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
            },
            {
                code: "8652009",
                display: "Opisthotonus (finding)",
                target: [
                    {
                        code: "Opisthotonus",
                        display: "Opisthotonus",
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
                code: "299745004+299746003",
                display:
                    "Palmar reflex absent (finding) + Palmar reflex equivocal (finding)",
                target: [
                    {
                        code: "Handgreifreflex",
                        display: "Handgreifreflex",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "299742001+299743006",
                display: "Moro reflex absent (finding) + Moro reflex equivocal (finding)",
                target: [
                    {
                        code: "MoroReaktion",
                        display: "Moro-Reaktion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "299757008+299758003",
                display:
                    "Sucking reflex absent (finding) + Sucking reflex equivocal (finding)",
                target: [
                    {
                        code: "Saugreflex",
                        display: "Saugreflex",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:116676008=72704001",
                display:
                    "Clinical finding (finding) : Associated morphology (attribute) = Fracture (morphologic abnormality)",
                target: [
                    {
                        code: "klinischeFrakturzeichen",
                        display: "klinische Frakturzeichen",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU3PhysicalExamMusculoskeletalSystemGerman;
