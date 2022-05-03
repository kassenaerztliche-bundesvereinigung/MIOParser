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

// Diese Conceptmap verknüpft die Codes für die Lokalisation/Struktur der Plazenta mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRLocalisationPlacentaGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Localisation_Placenta_German",
        element: [
            {
                code: "169954003",
                display: "Placenta normal O/E (finding)",
                target: [
                    {
                        code: "Plazentalokalisationstrukturnormal",
                        display: "Plazentalokalisation/-struktur normal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129125009:408730004=410525008",
                display:
                    "Procedure with explicit context (situation) : Procedure context (attribute) = Needed (qualifier value)",
                target: [
                    {
                        code: "Plazentalokalisationstrukturkontrollbeduerftig",
                        display: "Plazentalokalisation/-struktur kontrollbedürftig",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRLocalisationPlacentaGerman;
