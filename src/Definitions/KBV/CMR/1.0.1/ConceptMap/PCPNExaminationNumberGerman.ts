// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_PC_PN_Examination_Number_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für Untersuchungsnummer Teilnahmekarte mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const PCPNExaminationNumberGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_PC_PN_Examination_Number_German",
        element: [
            {
                code: "170107008",
                display: "Child examination - 10 days (procedure)",
                target: [
                    {
                        code: "U2310Lebenstag",
                        display: "U2 3.-10. Lebenstag",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243788004:370131001=133931009",
                display:
                    "Child examination (procedure) : Recipient category =  Infant (person)",
                target: [
                    {
                        code: "U345Lebenswoche",
                        display: "U3 4.-5. Lebenswoche",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170250008",
                display: "Child 3 month examination (procedure)",
                target: [
                    {
                        code: "U434Lebensmonat",
                        display: "U4 3.-4. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170263002",
                display: "Child 6 month examination (procedure)",
                target: [
                    {
                        code: "U567Lebensmonat",
                        display: "U5 6.-7. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170254004",
                display: "Child 1 year examination (procedure)",
                target: [
                    {
                        code: "U61012Lebensmonat",
                        display: "U6 10.-12. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "401140000",
                display: "Child 2 year examination (procedure)",
                target: [
                    {
                        code: "U72124Lebensmonat",
                        display: "U7 21.-24. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170281004",
                display: "Child 3 year examination (procedure)",
                target: [
                    {
                        code: "U7a3436Lebensmonat",
                        display: "U7a 34.-36. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "410635005",
                display: "Child 4 year examination (procedure)",
                target: [
                    {
                        code: "U84648Lebensmonat",
                        display: "U8 46.-48. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243788004:370131001=410602000",
                display:
                    "Child examination (procedure) : Recipient category (attribute) =  Preschool child (person)",
                target: [
                    {
                        code: "U96064Lebensmonat",
                        display: "U9 60.-64.Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default PCPNExaminationNumberGerman;
