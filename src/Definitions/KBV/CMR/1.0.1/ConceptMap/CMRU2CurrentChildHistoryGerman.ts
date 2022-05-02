// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U2_Current_Child_History_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U2 - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2CurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Current_Child_History_German",
        element: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)",
                target: [
                    {
                        code: "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen",
                        display:
                            "schwerwiegende Erkrankungen seit der letzten Untersuchung, Operationen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "399122003",
                display: "Swallowing problem (finding)",
                target: [
                    {
                        code: "SchwierigkeitenbeimTrinkenSchluckstoerungen",
                        display: "Schwierigkeiten beim Trinken, Schluckstörungen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271863002",
                display: "Stool color abnormal (finding)",
                target: [
                    {
                        code: "StuhlfarbemitFarbtafelerfragen",
                        display: "Stuhlfarbe (mit Farbtafel erfragen)",
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
                code: "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}",
                display:
                    "Finding with explicit context (situation) : { Finding context (attribute) = At risk context (qualifier value), Temporal context (attribute) = Current or specified time (qualifier value), Subject relationship context (attribute) = Subject of record (person), Associated finding (attribute) = Congenital hip dysplasia (disorder) }",
                target: [
                    {
                        code: "RisikofaktorenfuerHueftdysplasie",
                        display: "Risikofaktoren für Hüftdysplasie",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2CurrentChildHistoryGerman;
