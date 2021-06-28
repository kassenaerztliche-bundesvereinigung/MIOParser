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

// Diese Conceptmap verknüpft die Codes für U2, U3, U4, U5, U6 - Herz, Kreislauf mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU2U6PhysicalExamHeartBloodCirculationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U6_Physical_Exam_Heart_Blood_Circulation_German",
        element: [
            {
                code: "361135004",
                display: "Abnormal cardiac rate (finding)",
                target: [
                    {
                        code: "Herzfrequenz",
                        display: "Herzfrequenz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "698247007",
                display: "Cardiac arrhythmia (disorder)",
                target: [
                    {
                        code: "Herzrhythmus",
                        display: "Herzrhythmus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "123824001",
                display: "Heart sounds abnormal (finding)",
                target: [
                    {
                        code: "Herztoene",
                        display: "Herztöne",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "88610006",
                display: "Heart murmur (finding)",
                target: [
                    {
                        code: "Herznebengeraeusche",
                        display: "Herznebengeräusche",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50178004",
                display: "Abnormal femoral pulse (finding)",
                target: [
                    {
                        code: "Femoralispulse",
                        display: "Femoralispulse",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2U6PhysicalExamHeartBloodCirculationGerman;
