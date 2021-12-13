// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U7a_Current_Child_History_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U7a - Aktuelle Anamnese des Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU7aCurrentChildHistoryGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Current_Child_History_German",
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
                code: "416940007:363589002=234723000",
                display:
                    "Past history of procedure (situation) : Associated procedure (attribute = Topical application of fluoride - tooth (procedure)",
                target: [
                    {
                        code: "KariesprophylaxemittelsFluorid",
                        display: "Kariesprophylaxe mittels Fluorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "162339002",
                display: "Hearing normal (finding)",
                target: [
                    {
                        code: "Hoervermoegen",
                        display: "Hörvermögen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "72863001",
                display: "Snoring (finding)",
                target: [
                    {
                        code: "regelmaessigesSchnarchen",
                        display: "regelmäßiges Schnarchen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "288599003",
                display: "Able to use verbal communication (finding)",
                target: [
                    {
                        code: "WirdIhrKindvonderUmgebunggutverstanden",
                        display: "Wird Ihr Kind von der Umgebung gut verstanden?",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425067005",
                display: "Speech and language development finding (finding)",
                target: [
                    {
                        code: "SindSiemitderSprachentwicklungIhresKindeszufrieden",
                        display:
                            "Sind Sie mit der Sprachentwicklung Ihres Kindes zufrieden?",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "141441000119107",
                display: "Childhood onset stuttering (finding)",
                target: [
                    {
                        code: "StottertIhrKind",
                        display: "Stottert Ihr Kind?",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU7aCurrentChildHistoryGerman;
