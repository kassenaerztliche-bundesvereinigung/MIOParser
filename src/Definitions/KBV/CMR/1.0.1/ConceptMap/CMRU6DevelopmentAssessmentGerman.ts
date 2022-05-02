// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U6_Development_Assessment_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U6 - Orient. Beurt. Entwicklung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU6DevelopmentAssessmentGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Development_Assessment_German",
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
                code: "4941000175101",
                display: "Difficulty following instructions (finding)",
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
                code: "268672004",
                display: "Disorder of speech and language development (disorder)",
                target: [
                    {
                        code: "Sprache",
                        display: "Sprache",
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

export default CMRU6DevelopmentAssessmentGerman;
