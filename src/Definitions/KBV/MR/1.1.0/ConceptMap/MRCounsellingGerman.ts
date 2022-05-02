// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Counselling_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für die Beratung von Schwangeren mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRCounsellingGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Counselling_German",
        element: [
            {
                code: "171054004+440670004+313071005",
                display:
                    "Pregnancy diet education (procedure) + Education about medication intake during pregnancy (procedure) + Counseling for substance abuse (procedure)",
                target: [
                    {
                        code: "ErnaehrunguaJodzufuhrMedikamenteGenussmittelAlkoholTabakundandereDrogen",
                        display:
                            "Ernährung (u.a. Jodzufuhr), Medikamente, Genussmittel (Alkohol, Tabak und andere Drogen)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "313080005+171056002+439816006",
                display:
                    "Work-related counseling (procedure) + Pregnancy exercise education (procedure) + Education about travel during pregnancy (procedure)",
                target: [
                    {
                        code: "TaetigkeitBerufSportReisen",
                        display: "Tätigkeit/Beruf, Sport, Reisen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "370995009",
                display: "Health risks education (procedure)",
                target: [
                    {
                        code: "Risikoberatung",
                        display: "Risikoberatung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409013000",
                display: "Delivery care education (procedure)",
                target: [
                    {
                        code: "GeburtsvorbereitungSchwangerschaftsgymnastik",
                        display: "Geburtsvorbereitung/Schwangerschaftsgymnastik",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156103008",
                display: "Education about screening for malignant neoplasm (procedure)",
                target: [
                    {
                        code: "Krebsfrueherkennungsuntersuchung",
                        display: "Krebsfrüherkennungsuntersuchung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156102003",
                display:
                    "Education about screening for human immunodeficiency virus (procedure)",
                target: [
                    {
                        code: "ZumHIVAntikoerpertest",
                        display: "Zum HIV-Antikörpertest",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243085009",
                display: "Oral health education (procedure)",
                target: [
                    {
                        code: "ZurMundgesundheit",
                        display: "Zur Mundgesundheit",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRCounsellingGerman;
