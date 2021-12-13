// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U3_U4_Physical_Exam_Mouth_Nose_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U3, U4 - Mundhöhle, Kiefer, Nase mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU3U4PhysicalExamMouthNoseGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_U4_Physical_Exam_Mouth_Nose_German",
        element: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)",
                target: [
                    {
                        code: "AuffaelligkeitenderSchleimhautunddesKieferkamms",
                        display: "Auffälligkeiten der Schleimhaut und des Kieferkamms",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "449790007",
                display: "Orofacial cleft (disorder)",
                target: [
                    {
                        code: "KieferGaumenanomalie",
                        display: "Kiefer- Gaumenanomalie",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)",
                target: [
                    {
                        code: "Verletzungszeichen",
                        display: "Verletzungszeichen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "65476007:363698007=21974007",
                display:
                    "Abnormal size (finding) : Finding site (attribute) = Tongue structure (body structure)",
                target: [
                    {
                        code: "abnormeGroessederZunge",
                        display: "abnorme Größe der Zunge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)",
                target: [
                    {
                        code: "behinderteNasenatmung",
                        display: "behinderte Nasenatmung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "367381002",
                display: "Weak mouth closure (finding)",
                target: [
                    {
                        code: "orofacialerHypotonus",
                        display: "orofacialer Hypotonus",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU3U4PhysicalExamMouthNoseGerman;
