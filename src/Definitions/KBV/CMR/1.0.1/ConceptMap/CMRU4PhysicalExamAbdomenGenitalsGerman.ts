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

// Diese Conceptmap verknüpft die Codes für U4 - Abdomen, Genitale mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU4PhysicalExamAbdomenGenitalsGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Physical_Exam_Abdomen_Genitals_German",
        element: [
            {
                code: "822987005:{116676008=49755003,363698007=818987002}",
                display:
                    "Finding of abdominopelvic segment of trunk (finding) : {Associated morphology (attribute)  = Developmental anomaly (morphologic abnormality) , Finding site (attribute) = Structure of abdominopelvic cavity (body structure) }",
                target: [
                    {
                        code: "Anomalien",
                        display: "Anomalien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65476007:{363698007=10200004,363698007=78961009}",
                display:
                    "Abnormal size (finding) : {Finding site (attribute) = Liver structure (body structure) , Finding site (attribute) = Splenic structure (body structure)}",
                target: [
                    {
                        code: "LeberundMilzgroesse",
                        display: "Leber- und Milzgröße",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "128545000",
                display: "Hernia of abdominal wall (disorder)",
                target: [
                    {
                        code: "Hernien",
                        display: "Hernien",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU4PhysicalExamAbdomenGenitalsGerman;
