// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_Pregnancy_History_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

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
                code: "417451006+410684002:{408731000=410512000,363589002=416608005,408730004=410525008,408732007=444301002}",
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
