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

// Diese Conceptmap verknüpft die Codes für U2 - Familienanamnese mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU2FamilyHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Family_History_German",
        element: [
            {
                code: "160346003",
                display: "Family history: Eye disorder (situation)",
                target: [
                    {
                        code:
                            "AugenerkrankungenzBStrabismusAmblyopieerblicheAugenkrankheit",
                        display:
                            "Augenerkrankungen (z. B. Strabismus, Amblyopie, erbliche Augenkrankheit)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "160352002",
                display: "Family history: Ear disorder (situation)",
                target: [
                    {
                        code: "angeboreneHoerstoerungenoderOhrfehlbildungen",
                        display: "angeborene Hörstörungen oder Ohrfehlbildungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "737367001",
                display: "Family history of disorder of immune function (situation)",
                target: [
                    {
                        code: "Immundefekte",
                        display: "Immundefekte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "700191004",
                display: "Family history of congenital hip dysplasia (situation)",
                target: [
                    {
                        code: "Hueftdysplasie",
                        display: "Hüftdysplasie",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2FamilyHistoryGerman;
