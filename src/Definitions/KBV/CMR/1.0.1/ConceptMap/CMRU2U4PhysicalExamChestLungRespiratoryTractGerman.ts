// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U2, U3, U4 - Thorax, Lunge, Atemwege mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2U4PhysicalExamChestLungRespiratoryTractGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U4_Physical_Exam_Chest_Lung_Respiratory_Tract_German",
        element: [
            {
                code: "301272007",
                display: "Chest auscultation finding (finding)",
                target: [
                    {
                        code: "Auskultation",
                        display: "Auskultation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301273002",
                display: "Abnormal breath sounds (finding)",
                target: [
                    {
                        code: "Atemgeraeusch",
                        display: "Atemgeräusch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "17077006",
                display: "Abnormal respiratory rate (finding)",
                target: [
                    {
                        code: "Atemfrequenz",
                        display: "Atemfrequenz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "67909005",
                display: "Chest wall retraction (finding)",
                target: [
                    {
                        code: "Einziehungen",
                        display: "Einziehungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "298706004",
                display: "Finding of appearance of thorax (finding)",
                target: [
                    {
                        code: "Thoraxkonfiguration",
                        display: "Thoraxkonfiguration",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "298761006",
                display: "Finding of clavicle structure (finding)",
                target: [
                    {
                        code: "Schluesselbeine",
                        display: "Schlüsselbeine",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2U4PhysicalExamChestLungRespiratoryTractGerman;
