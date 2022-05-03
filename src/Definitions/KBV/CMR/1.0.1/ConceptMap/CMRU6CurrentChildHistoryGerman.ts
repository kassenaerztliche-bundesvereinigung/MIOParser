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

// Diese Conceptmap verknüpft die Codes für U6 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU6CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code: "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
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
                code: "162339002",
                display: "Hearing normal (finding)",
                target: [
                    {
                        code: "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle",
                        display:
                            "Hörvermögen: Reaktion auf leise/laute Schallreize, Kopf- bzw. Blickwendung zur Schallquelle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72863001",
                display: "Snoring (finding)",
                target: [
                    {
                        code: "regelmaessigesSchnarchen",
                        display: "regelmäßiges Schnarchen",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU6CurrentChildHistoryGerman;
