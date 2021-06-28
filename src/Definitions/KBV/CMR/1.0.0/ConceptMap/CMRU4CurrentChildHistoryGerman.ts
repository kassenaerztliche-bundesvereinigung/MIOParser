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

// Diese Conceptmap verknüpft die Codes für U4 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU4CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code:
                            "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle",
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
                        code:
                            "SchwierigkeitenbeimTrinkenundFuetternErbrechenSchluckstoerungen",
                        display:
                            "Schwierigkeiten beim Trinken und Füttern, Erbrechen, Schluckstörungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271840007+111360009",
                display: "Abnormal feces (finding)+Obstipation (disorder)",
                target: [
                    {
                        code: "abnormeStuehleStuhlfarbemitFarbtafelerfragenObstipation",
                        display:
                            "abnorme Stühle (Stuhlfarbe mit Farbtafel erfragen), Obstipation",
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
            }
        ]
    }
];

export default CMRU4CurrentChildHistoryGerman;
