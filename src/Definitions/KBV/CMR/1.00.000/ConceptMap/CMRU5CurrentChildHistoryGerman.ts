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

// Diese Conceptmap verknüpft die Codes für U5 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU5CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code:
                            "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
                        display:
                            "schwerwiegende Erkrankungen seit der letzten Untersuchung, Operationen, Krampfanfälle, schwere ungewöhnliche und häufige Infektionen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "248124006",
                display: "Eating problem (finding)",
                target: [
                    {
                        code: "Essverhaltennichtaltersgemaess",
                        display: "Essverhalten nicht altersgemäß",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271840007",
                display: "Abnormal feces (finding)",
                target: [
                    {
                        code: "abnormeStuehle",
                        display: "abnorme Stühle",
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
                code: "162339002",
                display: "Hearing normal (finding)",
                target: [
                    {
                        code:
                            "KanndasKindguthoerenKindreagiertauflauteundleiseSchallreizewendetdenKopfzurSchallquelle",
                        display:
                            "Kann das Kind gut hören? (Kind reagiert auf laute und leise Schallreize, wendet den Kopf zur Schallquelle)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU5CurrentChildHistoryGerman;
