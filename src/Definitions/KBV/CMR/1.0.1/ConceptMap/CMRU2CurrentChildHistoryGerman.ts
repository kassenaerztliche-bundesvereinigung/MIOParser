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

// Diese Conceptmap verknüpft die Codes für U2 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code: "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen",
                        display:
                            "schwerwiegende Erkrankungen seit der letzten Untersuchung, Operationen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "399122003",
                display: "Swallowing problem (finding)",
                target: [
                    {
                        code: "SchwierigkeitenbeimTrinkenSchluckstoerungen",
                        display: "Schwierigkeiten beim Trinken, Schluckstörungen",
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
                code: "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}",
                display:
                    "Finding with explicit context (situation) : { Finding context (attribute) = At risk context (qualifier value), Temporal context (attribute) = Current or specified time (qualifier value), Subject relationship context (attribute) = Subject of record (person), Associated finding (attribute) = Congenital hip dysplasia (disorder) }",
                target: [
                    {
                        code: "RisikofaktorenfuerHueftdysplasie",
                        display: "Risikofaktoren für Hüftdysplasie",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2CurrentChildHistoryGerman;
