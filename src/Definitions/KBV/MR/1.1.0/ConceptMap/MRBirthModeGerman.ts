// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Birth_Mode_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für den Geburtsmodus mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRBirthModeGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Birth_Mode_German",
        element: [
            {
                code: "236974004",
                display: "Instrumental delivery (procedure)",
                target: [
                    {
                        code: "vaginaloperativ",
                        display: "vaginal operativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "11466000",
                display: "Cesarean section (procedure)",
                target: [
                    {
                        code: "Sektio",
                        display: "Sektio",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "177184002",
                display: "Normal delivery procedure (procedure)",
                target: [
                    {
                        code: "Spontangeburt",
                        display: "Spontangeburt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRBirthModeGerman;
