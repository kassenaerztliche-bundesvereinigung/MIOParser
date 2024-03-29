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

// Diese Conceptmap verknüpft die Codes für U6, U7 - Thorax, Lunge, Atemwege mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU6U7PhysicalExamChestLungRespiratoryTractGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract_German",
        element: [
            {
                code: "301272007",
                display: "Chest auscultation finding (finding)",
                target: [
                    {
                        code: "Auskultation",
                        display: "Auskultation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301273002",
                display: "Abnormal breath sounds (finding)",
                target: [
                    {
                        code: "Atemgeraeusch",
                        display: "Atemgeräusch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17077006",
                display: "Abnormal respiratory rate (finding)",
                target: [
                    {
                        code: "Atemfrequenz",
                        display: "Atemfrequenz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "67909005",
                display: "Chest wall retraction (finding)",
                target: [
                    {
                        code: "Einziehungen",
                        display: "Einziehungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "298706004",
                display: "Finding of appearance of thorax (finding)",
                target: [
                    {
                        code: "Thoraxkonfiguration",
                        display: "Thoraxkonfiguration",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "423230008",
                display: "Wide spaced nipples (finding)",
                target: [
                    {
                        code: "Mamillenabstand",
                        display: "Mamillenabstand",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU6U7PhysicalExamChestLungRespiratoryTractGerman;
