// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U5_Current_Child_History_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U5 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU5CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code: "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
                        display:
                            "schwerwiegende Erkrankungen seit der letzten Untersuchung, Operationen, Krampfanfälle, schwere ungewöhnliche und häufige Infektionen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "248124006",
                display: "Eating problem (finding)",
                target: [
                    {
                        code: "Essverhaltennichtaltersgemaess",
                        display: "Essverhalten nicht altersgemäß",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271840007",
                display: "Abnormal feces (finding)",
                target: [
                    {
                        code: "abnormeStuehle",
                        display: "abnorme Stühle",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "162214009",
                display: "Crying infant (finding)",
                target: [
                    {
                        code: "auffaelligesSchreien",
                        display: "auffälliges Schreien",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "162339002",
                display: "Hearing normal (finding)",
                target: [
                    {
                        code: "KanndasKindguthoerenKindreagiertauflauteundleiseSchallreizewendetdenKopfzurSchallquelle",
                        display:
                            "Kann das Kind gut hören? (Kind reagiert auf laute und leise Schallreize, wendet den Kopf zur Schallquelle)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU5CurrentChildHistoryGerman;
