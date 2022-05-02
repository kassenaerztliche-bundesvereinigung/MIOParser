// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U2_Physical_Exam_Skin_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U2 - Haut mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2PhysicalExamSkinGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Skin_German",
        element: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)",
                target: [
                    {
                        code: "auffaelligeBlaesse",
                        display: "auffällige Blässe",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3415004",
                display: "Cyanosis (finding)",
                target: [
                    {
                        code: "Zyanose",
                        display: "Zyanose",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "18165001",
                display: "Jaundice (finding)",
                target: [
                    {
                        code: "Ikterus",
                        display: "Ikterus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "400210000",
                display: "Hemangioma (disorder)",
                target: [
                    {
                        code: "Haemangiome",
                        display: "Hämangiome",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "21119008",
                display:
                    "Pigmented nevus, no International Classification of Diseases for Oncology subtype (morphologic abnormality)",
                target: [
                    {
                        code: "NaeviundanderePigmentanomalien",
                        display: "Naevi und andere Pigmentanomalien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "267038008",
                display: "Edema (finding)",
                target: [
                    {
                        code: "Oedeme",
                        display: "Ödeme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "781645001",
                display: "Injury to skin caused by trauma (finding)",
                target: [
                    {
                        code: "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungNarben",
                        display:
                            "Anhalt für Verletzungen (z.B. Hämatome, Petechien, Verbrennung, Narben)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "251839006",
                display: "Fluid balance finding (finding)",
                target: [
                    {
                        code: "Hydratationszustand",
                        display: "Hydratationszustand",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2PhysicalExamSkinGerman;
