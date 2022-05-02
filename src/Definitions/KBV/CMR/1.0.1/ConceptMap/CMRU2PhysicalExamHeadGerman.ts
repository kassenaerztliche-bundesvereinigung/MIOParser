// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U2_Physical_Exam_Head_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U2 - Kopf mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2PhysicalExamHeadGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Head_German",
        element: [
            {
                code: "111235007",
                display: "Musculoskeletal disorder of the neck (disorder)",
                target: [
                    {
                        code: "Fehlhaltung",
                        display: "Fehlhaltung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "253978002",
                display: "Dysmorphic features (finding)",
                target: [
                    {
                        code: "Dysmorphiezeichen",
                        display: "Dysmorphiezeichen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "248387005",
                display: "Cranial suture finding (finding)",
                target: [
                    {
                        code: "Schaedelnaehte",
                        display: "Schädelnähte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "206200000",
                display: "Cephalhematoma due to birth trauma (disorder)",
                target: [
                    {
                        code: "Kephalhaematom",
                        display: "Kephalhämatom",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "366372002",
                display: "Finding of level of fontanelle (finding)",
                target: [
                    {
                        code: "Fontanellentonus",
                        display: "Fontanellentonus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "23149001:363698007=783207002",
                display:
                    "Bone crepitus (finding) : Finding site (attribute) = Bone and/or joint structure of cranium (body structure)",
                target: [
                    {
                        code: "Crepitatiocapitis",
                        display: "Crepitatio capitis",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2PhysicalExamHeadGerman;
