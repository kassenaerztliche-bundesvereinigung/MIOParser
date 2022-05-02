// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_Newborn_Blood_Spot_Screening_Type_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für Typ der Blutabnahme mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRNewbornBloodSpotScreeningTypeGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Newborn_Blood_Spot_Screening_Type_German",
        element: [
            {
                code: "425758004:246513007=261422002",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)",
                target: [
                    {
                        code: "Erstblutabnahme",
                        display: "Erstblutabnahme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425758004:246513007=261426004",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)",
                target: [
                    {
                        code: "Zweitblutabnahme",
                        display: "Zweitblutabnahme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425758004:246513007=261429006",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Third stage of multistaged procedure (qualifier value)",
                target: [
                    {
                        code: "Kontrollblutabnahme",
                        display: "Kontrollblutabnahme",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRNewbornBloodSpotScreeningTypeGerman;
