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

// Diese Conceptmap verknüpft die Codes für den Apgarscore-Zeitpunkt mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";
const ApgarScoreIdentifierGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Apgar_Score_Identifier_German",
        element: [
            {
                code: "169909004",
                display: "Apgar score at 5 minutes (observable entity)",
                target: [
                    {
                        code: "ApgarzumZeitpunkt5MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 5 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "169922007",
                display: "Apgar score at 10 minutes (observable entity)",
                target: [
                    {
                        code: "ApgarzumZeitpunkt10MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 10 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    },
    {
        source: "http://loinc.org",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Apgar_Score_Identifier_German",
        element: [
            {
                code: "9274-2",
                display: "5 minute Apgar Score",
                target: [
                    {
                        code: "ApgarzumZeitpunkt5MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 5 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "9271-8",
                display: "10 minute Apgar Score",
                target: [
                    {
                        code: "ApgarzumZeitpunkt10MinnachGeburt",
                        display: "Apgar zum Zeitpunkt 10 Min. nach Geburt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default ApgarScoreIdentifierGerman;
