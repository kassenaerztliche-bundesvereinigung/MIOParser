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

// Diese Conceptmap verknüpft die Codes für U6 - Mundhöhle, Kiefer, Nase mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU6PhysicalExamMouthNoseGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Physical_Exam_Mouth_Nose_German",
        element: [
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
                code: "367381002",
                display: "Weak mouth closure (finding)",
                target: [
                    {
                        code: "fehlenderMundschluss",
                        display: "fehlender Mundschluss",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "300255008",
                display: "Oral cavity problem (finding)",
                target: [
                    {
                        code: "AuffaelligkeitenanZaehnenundSchleimhaeuten",
                        display: "Auffälligkeiten an Zähnen und Schleimhäuten",
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
                code: "38160000",
                display: "Abnormal voice (finding)",
                target: [
                    {
                        code: "auffaelligerStimmklangzBHeiserkeitundNaeseln",
                        display: "auffälliger Stimmklang (z.B. Heiserkeit und Näseln)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU6PhysicalExamMouthNoseGerman;
