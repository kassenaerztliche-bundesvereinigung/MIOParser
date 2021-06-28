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

// Diese Conceptmap verknüpft die Codes für U2 - Haut mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU2PhysicalExamSkinGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Skin_German",
        element: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)",
                target: [
                    {
                        code: "auffaelligeBlaesse",
                        display: "auffällige Blässe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3415004",
                display: "Cyanosis (finding)",
                target: [
                    {
                        code: "Zyanose",
                        display: "Zyanose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "162740002",
                display: "On examination - jaundiced color (finding)",
                target: [
                    {
                        code: "Ikterus",
                        display: "Ikterus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "400210000",
                display: "Hemangioma (disorder)",
                target: [
                    {
                        code: "Haemangiome",
                        display: "Hämangiome",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "21119008",
                display:
                    "Pigmented nevus, no International Classification of Diseases for Oncology subtype (morphologic abnormality)",
                target: [
                    {
                        code: "NaeviundanderePigmentanomalien",
                        display: "Naevi und andere Pigmentanomalien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "267038008",
                display: "Edema (finding)",
                target: [
                    {
                        code: "Oedeme",
                        display: "Ödeme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "781645001",
                display: "Injury to skin caused by trauma (finding)",
                target: [
                    {
                        code:
                            "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungNarben",
                        display:
                            "Anhalt für Verletzungen (z.B. Hämatome, Petechien, Verbrennung, Narben)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "251839006",
                display: "Fluid balance finding (finding)",
                target: [
                    {
                        code: "Hydratationszustand",
                        display: "Hydratationszustand",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2PhysicalExamSkinGerman;
