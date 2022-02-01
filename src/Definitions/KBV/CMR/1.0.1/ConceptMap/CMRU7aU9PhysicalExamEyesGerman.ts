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

// Diese Conceptmap verknüpft die Codes für U7a, U8, U9 - Augen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU7aU9PhysicalExamEyesGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_U9_Physical_Exam_Eyes_German",
        element: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)",
                target: [
                    {
                        code: "InspektionmorphologischeAuffaelligkeiten",
                        display: "Inspektion: morphologische Auffälligkeiten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)",
                target: [
                    {
                        code: "InspektionNystagmus",
                        display: "Inspektion: Nystagmus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "22066006",
                display: "Strabismus (disorder)",
                target: [
                    {
                        code: "HornhautreflexbildchenauffaelligStrabismus",
                        display: "Hornhautreflexbildchen: auffällig (Strabismus)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34241000119104",
                display: "Ocular torticollis (disorder)",
                target: [
                    {
                        code: "InspektionKopffehlhaltung",
                        display: "Inspektion: Kopffehlhaltung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)",
                target: [
                    {
                        code: "Pupillenstatusauffaellig",
                        display: "Pupillenstatus: auffällig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "252853008:363713009=263654008",
                display:
                    "Stereotests (procedure) : Has interpretation (attribute) = Abnormal (qualifier value)",
                target: [
                    {
                        code: "StereoTestauffaellig",
                        display: "Stereo-Test: auffällig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "342061000119102",
                display: "Amblyopia of left eye (disorder)",
                target: [
                    {
                        code: "SehtestmonokularePruefungSehschwaechelinks",
                        display: "Sehtest (monokulare Prüfung): Sehschwäche links",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "336451000119108",
                display: "Amblyopia of right eye (disorder)",
                target: [
                    {
                        code: "SehtestmonokularePruefungSehschwaecherechts",
                        display: "Sehtest (monokulare Prüfung): Sehschwäche rechts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3289004",
                display: "Anisometropia (disorder)",
                target: [
                    {
                        code: "SehtestmonokularePruefungRechtsLinksDifferenz",
                        display: "Sehtest (monokulare Prüfung): Rechts-Links-Differenz",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU7aU9PhysicalExamEyesGerman;
