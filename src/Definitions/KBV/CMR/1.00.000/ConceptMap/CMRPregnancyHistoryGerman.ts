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

// Diese Conceptmap verknüpft die Codes für Schwangerschaftsanamnese mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRPregnancyHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Pregnancy_History_German",
        element: [
            {
                code: "721151003",
                display: "Maternal history of gestational diabetes (situation)",
                target: [
                    {
                        code: "Gestationsdiabetes",
                        display: "Gestationsdiabetes",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "704144000",
                display: "Maternal history of diabetes mellitus (situation)",
                target: [
                    {
                        code: "Diabetesmellitus",
                        display: "Diabetes mellitus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code:
                    "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}",
                display:
                    "Procedure needed (situation) + Drug therapy status (situation) : { Temporal context (attribute) = Current or specified time (qualifier value) , Associated procedure (attribute) = Drug therapy (procedure) , Procedure context (attribute) = Needed (qualifier value) , Subject relationship context (attribute) = Mother of subject (person) }",
                target: [
                    {
                        code: "Dauermedikation",
                        display: "Dauermedikation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "160427003:246090004=40609001",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Infectious disease in mother complicating pregnancy, childbirth AND/OR puerperium (disorder)",
                target: [
                    {
                        code: "akuteoderchronischeInfektioneninderSchwangerschaft",
                        display:
                            "akute oder chronische Infektionen in der Schwangerschaft",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "160427003:246090004=165775009",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Indirect Coombs test positive (finding)",
                target: [
                    {
                        code: "AntikoerperSuchtestpositiv",
                        display: "Antikörper-Suchtest positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "160427003:246090004=120001000119107",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Group B streptococcus infection in mother complicating childbirth (disorder)",
                target: [
                    {
                        code: "BStreptokokkenStatusderMutterpositiv",
                        display: "B-Streptokokken-Status der Mutter positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "160427003:246090004=16356006",
                display:
                    "Family history with explicit context pertaining to mother (situation) : Associated finding (attribute) = Multiple pregnancy (disorder)",
                target: [
                    {
                        code: "Mehrlingsschwangerschaft",
                        display: "Mehrlingsschwangerschaft",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "413350009:{246090004=199646006,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Polyhydramnios - delivered (disorder), Subject relationship context (attribute) = Mother of subject (person) }",
                target: [
                    {
                        code: "PolyHydramnion",
                        display: "(Poly-)Hydramnion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "413350009:{246090004=59566000,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Oligohydramnios (disorder), Subject relationship context (attribute) = Mother of subject (person) }",
                target: [
                    {
                        code: "Oligohydramnion",
                        display: "Oligohydramnion",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "288256007",
                display: "History of maternal psychiatric problem (situation)",
                target: [
                    {
                        code: "besonderepsychischeBelastungen",
                        display: "besondere psychische Belastungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "413350009:{246090004=284465006,408732007=444301002}",
                display:
                    "Finding with explicit context (situation) : { Associated finding (attribute) = Finding relating to psychosocial functioning (finding), Subject relationship context (attribute) = Mother of subject (person) }",
                target: [
                    {
                        code: "besonderesozialeBelastungen",
                        display: "besondere soziale Belastungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "442080007",
                display: "Drug misuse by mother (situation)",
                target: [
                    {
                        code: "Abusus",
                        display: "Abusus",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRPregnancyHistoryGerman;
