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

// Diese Conceptmap verknüpft die Codes für Hüftanamnese mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRHipHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hip_History_German",
        element: [
            {
                code: "407613009",
                display: "Born by breech delivery (situation)",
                target: [
                    {
                        code: "GeburtausBeckenendlage",
                        display: "Geburt aus Beckenendlage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "700191004",
                display: "Family history of congenital hip dysplasia (situation)",
                target: [
                    {
                        code: "HueftgelenksluxationbzwHueftgelenksdysplasieinHerkunftsfamilie",
                        display:
                            "Hüftgelenksluxation bzw. Hüftgelenksdysplasie in Herkunftsfamilie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "73573004",
                display: "Congenital anomaly of musculoskeletal system (disorder)",
                target: [
                    {
                        code: "StellungsanomaliebzwFehlbildungeninsbderFuesse",
                        display: "Stellungsanomalie bzw. Fehlbildungen (insb. der Füße)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRHipHistoryGerman;
