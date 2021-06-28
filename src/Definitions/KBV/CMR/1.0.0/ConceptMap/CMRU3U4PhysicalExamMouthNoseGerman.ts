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

// Diese Conceptmap verknüpft die Codes für U3, U4 - Mundhöhle, Kiefer, Nase mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU3U4PhysicalExamMouthNoseGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_U4_Physical_Exam_Mouth_Nose_German",
        element: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)",
                target: [
                    {
                        code: "AuffaelligkeitenderSchleimhautunddesKieferkamms",
                        display: "Auffälligkeiten der Schleimhaut und des Kieferkamms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "449790007",
                display: "Orofacial cleft (disorder)",
                target: [
                    {
                        code: "KieferGaumenanomalie",
                        display: "Kiefer- Gaumenanomalie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)",
                target: [
                    {
                        code: "Verletzungszeichen",
                        display: "Verletzungszeichen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65476007:363698007=21974007",
                display:
                    "Abnormal size (finding) : Finding site (attribute) = Tongue structure (body structure)",
                target: [
                    {
                        code: "abnormeGroessederZunge",
                        display: "abnorme Größe der Zunge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)",
                target: [
                    {
                        code: "behinderteNasenatmung",
                        display: "behinderte Nasenatmung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "367381002",
                display: "Weak mouth closure (finding)",
                target: [
                    {
                        code: "orofacialerHypotonus",
                        display: "orofacialer Hypotonus",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU3U4PhysicalExamMouthNoseGerman;
