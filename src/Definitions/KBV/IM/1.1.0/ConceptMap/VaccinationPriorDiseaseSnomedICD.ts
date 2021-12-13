// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_Vaccination_Prior_Disease_Snomed_ICD
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at â€‹http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für impfrelevante durchgemachte Krankheiten in den Codesystemen SNOMED CT® und ICD

import { ConceptMap } from "../../../../Interfaces";

const VaccinationPriorDiseaseSnomedICD: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://fhir.de/CodeSystem/dimdi/icd-10-gm",
        element: [
            {
                code: "27836007",
                display: "Pertussis (disorder)",
                target: [
                    {
                        code: "A37.-",
                        display: "Keuchhusten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)",
                target: [
                    {
                        code: "A95.-",
                        display: "Gelbfieber",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)",
                target: [
                    {
                        code: "A84.1",
                        display:
                            "Mitteleuropäische Enzephalitis, durch Zecken übertragen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76795007",
                display: "Acute type B viral hepatitis (disorder)",
                target: [
                    {
                        code: "B16.-",
                        display: "Akute Virushepatitis B",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "235869004",
                display: "Chronic viral hepatitis B with hepatitis D (disorder)",
                target: [
                    {
                        code: "B18.0",
                        display: "Chronische Virushepatitis B mit Delta-Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "186639003",
                display: "Chronic viral hepatitis B without delta-agent (disorder)",
                target: [
                    {
                        code: "B18.1-",
                        display: "Chronische Virushepatitis B ohne Delta-Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25102003",
                display: "Acute type A viral hepatitis (disorder)",
                target: [
                    {
                        code: "B15.-",
                        display: "Akute Virushepatitis A",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36653000",
                display: "Rubella (disorder)",
                target: [
                    {
                        code: "B06.-",
                        display: "Röteln [Rubeola] [Rubella]",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36989005",
                display: "Mumps (disorder)",
                target: [
                    {
                        code: "B26.-",
                        display: "Mumps",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14189004",
                display: "Measles (disorder)",
                target: [
                    {
                        code: "B05.-",
                        display: "Masern",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38907003",
                display: "Varicella (disorder)",
                target: [
                    {
                        code: "B01.-",
                        display: "Varizellen [Windpocken]",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationPriorDiseaseSnomedICD;
