// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U1_Apgar_Score_Value_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für Apgar-Score Wert mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU1ApgarScoreValueGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U1_Apgar_Score_Value_German",
        element: [
            {
                code: "77714001",
                display: "Apgar score 0 (finding)",
                target: [
                    {
                        code: "Apgar0",
                        display: "Apgar 0",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43610007",
                display: "Apgar score 1 (finding)",
                target: [
                    {
                        code: "Apgar1",
                        display: "Apgar 1",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "39910003",
                display: "Apgar score 2 (finding)",
                target: [
                    {
                        code: "Apgar2",
                        display: "Apgar 2",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26635001",
                display: "Apgar score 3 (finding)",
                target: [
                    {
                        code: "Apgar3",
                        display: "Apgar 3",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38107004",
                display: "Apgar score 4 (finding)",
                target: [
                    {
                        code: "Apgar4",
                        display: "Apgar 4",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24388001",
                display: "Apgar score 5 (finding)",
                target: [
                    {
                        code: "Apgar5",
                        display: "Apgar 5",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10318004",
                display: "Apgar score 6 (finding)",
                target: [
                    {
                        code: "Apgar6",
                        display: "Apgar 6",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13323003",
                display: "Apgar score 7 (finding)",
                target: [
                    {
                        code: "Apgar7",
                        display: "Apgar 7",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12431004",
                display: "Apgar score 8 (finding)",
                target: [
                    {
                        code: "Apgar8",
                        display: "Apgar 8",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64198003",
                display: "Apgar score 9 (finding)",
                target: [
                    {
                        code: "Apgar9",
                        display: "Apgar 9",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49544001",
                display: "Apgar score 10 (finding)",
                target: [
                    {
                        code: "Apgar10",
                        display: "Apgar 10",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU1ApgarScoreValueGerman;
