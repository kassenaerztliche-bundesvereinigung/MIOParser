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

// Diese Conceptmap verknüpft die Codes für U3 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU3CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code: "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle",
                        display:
                            "schwerwiegende Erkrankungen seit der letzten Untersuchung, Operationen, Krampfanfälle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "399122003",
                display: "Swallowing problem (finding)",
                target: [
                    {
                        code: "SchwierigkeitenbeimTrinkenSchluckstoerungenkeinealtersgemaesseErnaehrung",
                        display:
                            "Schwierigkeiten beim Trinken, Schluckstörungen, keine altersgemäße Ernährung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "162214009",
                display: "Crying infant (finding)",
                target: [
                    {
                        code: "auffaelligesSchreien",
                        display: "auffälliges Schreien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271863002",
                display: "Stool color abnormal (finding)",
                target: [
                    {
                        code: "StuhlfarbemitFarbtafelerfragen",
                        display: "Stuhlfarbe (mit Farbtafel erfragen)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU3CurrentChildHistoryGerman;
