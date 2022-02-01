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

// Diese Conceptmap verknüpft die Codes für U4 - Kopf mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU4PhysicalExamHeadGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Physical_Exam_Head_German",
        element: [
            {
                code: "111235007",
                display: "Musculoskeletal disorder of the neck (disorder)",
                target: [
                    {
                        code: "Fehlhaltung",
                        display: "Fehlhaltung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "253978002",
                display: "Dysmorphic features (finding)",
                target: [
                    {
                        code: "Dysmorphiezeichen",
                        display: "Dysmorphiezeichen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "248387005",
                display: "Cranial suture finding (finding)",
                target: [
                    {
                        code: "Schaedelnaehte",
                        display: "Schädelnähte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "206200000",
                display: "Cephalhematoma due to birth trauma (disorder)",
                target: [
                    {
                        code: "Kephalhaematom",
                        display: "Kephalhämatom",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "366372002",
                display: "Finding of level of fontanelle (finding)",
                target: [
                    {
                        code: "Fontanellentonus",
                        display: "Fontanellentonus",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU4PhysicalExamHeadGerman;
