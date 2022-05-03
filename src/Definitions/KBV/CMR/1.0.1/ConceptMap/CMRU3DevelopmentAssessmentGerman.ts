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

// Diese Conceptmap verknüpft die Codes für U3 - Orient. Beurt. Entwicklung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU3DevelopmentAssessmentGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Development_Assessment_German",
        element: [
            {
                code: "364832000",
                display:
                    "Finding related to ability to perform gross motor function (finding)",
                target: [
                    {
                        code: "Grobmotorik",
                        display: "Grobmotorik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "364944003",
                display:
                    "Finding related to ability to perform fine motor function (finding)",
                target: [
                    {
                        code: "Feinmotorik",
                        display: "Feinmotorik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "285770005",
                display: "Finding of perceptual performance (finding)",
                target: [
                    {
                        code: "PerzeptionKognition",
                        display: "Perzeption/Kognition",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "284490008",
                display: "Finding relating to complex and social behaviors (finding)",
                target: [
                    {
                        code: "SozialeemotionaleKompetenz",
                        display: "Soziale/emotionale Kompetenz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "106126000",
                display: "Emotional state finding (finding)",
                target: [
                    {
                        code: "StimmungAffekt",
                        display: "Stimmung/Affekt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "365997002",
                display: "Finding related to ability to interact with others (finding)",
                target: [
                    {
                        code: "KontaktKommunikation",
                        display: "Kontakt/Kommunikation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "106131003",
                display: "Mood finding (finding)",
                target: [
                    {
                        code: "RegulationStimulation",
                        display: "Regulation/Stimulation",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU3DevelopmentAssessmentGerman;
