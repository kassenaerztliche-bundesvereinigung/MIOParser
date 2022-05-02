// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Localisation_Placenta_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für die Lokalisation/Struktur der Plazenta mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRLocalisationPlacentaGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Localisation_Placenta_German",
        element: [
            {
                code: "169952004:260245000=17621005",
                display:
                    "Placental finding (finding) : Finding value (qualifier value) = Normal (qualifier value)",
                target: [
                    {
                        code: "Plazentalokalisationstrukturnormal",
                        display: "Plazentalokalisation/-struktur normal",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1157303009",
                display: "Requires follow-up (finding)",
                target: [
                    {
                        code: "Plazentalokalisationstrukturkontrollbeduerftig",
                        display: "Plazentalokalisation/-struktur kontrollbedürftig",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRLocalisationPlacentaGerman;
