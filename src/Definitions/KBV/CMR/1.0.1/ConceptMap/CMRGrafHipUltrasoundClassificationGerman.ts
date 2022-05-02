// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_Graf_Hip_Ultrasound_Classification_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für Hüfttyp nach Graf mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRGrafHipUltrasoundClassificationGerman: ConceptMap = [
    {
        source: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification_German",
        element: [
            {
                code: "1ab",
                display: "Graf Ia/Ib",
                target: [
                    {
                        code: "IaIb",
                        display: "Ia/Ib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2a",
                display: "Graf IIa",
                target: [
                    {
                        code: "IIa",
                        display: "IIa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2cd",
                display: "Graf IIc/D",
                target: [
                    {
                        code: "IIcD",
                        display: "IIc/D",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3a",
                display: "Graf IIIa",
                target: [
                    {
                        code: "IIIa",
                        display: "IIIa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3b",
                display: "Graf IIIb",
                target: [
                    {
                        code: "IIIb",
                        display: "IIIb",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "4",
                display: "Graf IV",
                target: [
                    {
                        code: "IV",
                        display: "IV",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRGrafHipUltrasoundClassificationGerman;
