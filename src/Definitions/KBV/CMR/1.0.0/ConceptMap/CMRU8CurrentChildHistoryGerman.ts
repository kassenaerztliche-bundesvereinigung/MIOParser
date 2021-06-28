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

// Diese Conceptmap verknüpft die Codes für U8 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU8CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Current_Child_History_German",
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
                code: "72863001",
                display: "Snoring (finding)",
                target: [
                    {
                        code: "regelmaessigesSchnarchen",
                        display: "regelmäßiges Schnarchen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425067005",
                display: "Speech and language development finding (finding)",
                target: [
                    {
                        code: "SindSiemitderSprachentwicklungIhresKindeszufrieden",
                        display:
                            "Sind Sie mit der Sprachentwicklung Ihres Kindes zufrieden?",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "288599003",
                display: "Able to use verbal communication (finding)",
                target: [
                    {
                        code: "WirdIhrKindvonderUmgebunggutverstanden",
                        display: "Wird Ihr Kind von der Umgebung gut verstanden?",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "141441000119107",
                display: "Childhood onset stuttering (finding)",
                target: [
                    {
                        code: "StottertIhrKind",
                        display: "Stottert Ihr Kind?",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU8CurrentChildHistoryGerman;
