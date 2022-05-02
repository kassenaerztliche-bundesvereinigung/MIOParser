// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U6_Physical_Exam_Eyes_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U6 - Augen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU6PhysicalExamEyesGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Physical_Exam_Eyes_German",
        element: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)",
                target: [
                    {
                        code: "InspektionmorphologischeAuffaelligkeiten",
                        display: "Inspektion: morphologische Auffälligkeiten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)",
                target: [
                    {
                        code: "InspektionNystagmus",
                        display: "Inspektion: Nystagmus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "400964006",
                display: "Iris transillumination (finding)",
                target: [
                    {
                        code: "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie",
                        display:
                            "Brückner-Test: Transilluminationsunterschied (z.B. bei Trübung der brechenden Medien, Strabismus, Anisometropie)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "870705000",
                display: "Poor visual fixation (finding)",
                target: [
                    {
                        code: "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks",
                        display:
                            "Prüfung der Blickfolge mit einem geräuschlosen, das Kind interessierenden Objekt (z.B. Lichtquelle): Fixationsschwäche rechts/links",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34241000119104",
                display: "Ocular torticollis (disorder)",
                target: [
                    {
                        code: "InspektionKopffehlhaltung",
                        display: "Inspektion: Kopffehlhaltung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)",
                target: [
                    {
                        code: "PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks",
                        display:
                            "Pupillenstatus: Vergleich Größe, Form, Lichtreaktion rechts/links",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU6PhysicalExamEyesGerman;
