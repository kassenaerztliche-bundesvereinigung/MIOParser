// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U7a_U9_Physical_Exam_Eyes_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U7a, U8, U9 - Augen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU7aU9PhysicalExamEyesGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_U9_Physical_Exam_Eyes_German",
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
                code: "22066006",
                display: "Strabismus (disorder)",
                target: [
                    {
                        code: "HornhautreflexbildchenauffaelligStrabismus",
                        display: "Hornhautreflexbildchen: auffällig (Strabismus)",
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
                        code: "Pupillenstatusauffaellig",
                        display: "Pupillenstatus: auffällig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "252853008:363713009=263654008",
                display:
                    "Stereotests (procedure) : Has interpretation (attribute) = Abnormal (qualifier value)",
                target: [
                    {
                        code: "StereoTestauffaellig",
                        display: "Stereo-Test: auffällig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "342061000119102",
                display: "Amblyopia of left eye (disorder)",
                target: [
                    {
                        code: "SehtestmonokularePruefungSehschwaechelinks",
                        display: "Sehtest (monokulare Prüfung): Sehschwäche links",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "336451000119108",
                display: "Amblyopia of right eye (disorder)",
                target: [
                    {
                        code: "SehtestmonokularePruefungSehschwaecherechts",
                        display: "Sehtest (monokulare Prüfung): Sehschwäche rechts",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3289004",
                display: "Anisometropia (disorder)",
                target: [
                    {
                        code: "SehtestmonokularePruefungRechtsLinksDifferenz",
                        display: "Sehtest (monokulare Prüfung): Rechts-Links-Differenz",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU7aU9PhysicalExamEyesGerman;
