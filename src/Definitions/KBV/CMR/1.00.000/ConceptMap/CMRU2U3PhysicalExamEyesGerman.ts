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

// Diese Conceptmap verknüpft die Codes für U2, U3 - Augen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU2U3PhysicalExamEyesGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U3_Physical_Exam_Eyes_German",
        element: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)",
                target: [
                    {
                        code:
                            "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom",
                        display:
                            "Inspektion: morphologische Auffälligkeiten (z. B. Ptosis, Leukokorie, Bulbusgrößenauffälligkeiten, Kolobom)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)",
                target: [
                    {
                        code: "InspektionNystagmus",
                        display: "Inspektion: Nystagmus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "400964006",
                display: "Iris transillumination (finding)",
                target: [
                    {
                        code:
                            "PruefungimdurchfallendenLichtTransilluminationsauffaelligkeitbeiTruebungderbrechendenMedien",
                        display:
                            "Prüfung im durchfallenden Licht: Transilluminationsauffälligkeit bei Trübung der brechenden Medien",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2U3PhysicalExamEyesGerman;
