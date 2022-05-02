// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_CMR_U2_Consultation_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from Loinc (http://loinc.org). Loinc is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (Loinc) Committee and is available at no cost under the license at http://loinc.org/license. Loinc® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für U2 - Beratung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU2ConsultationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Consultation_German",
        element: [
            {
                code: "438650006",
                display: "Dietary education for breast feeding (procedure)",
                target: [
                    {
                        code: "StillenErnaehrung",
                        display: "Stillen/Ernährung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "408433001",
                display:
                    "Recommendation to carer regarding prevention of sudden infant death syndrome (procedure)",
                target: [
                    {
                        code: "ploetzlicherKindstod",
                        display: "plötzlicher Kindstod",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409066002:{363702006=444069008,363702006=426482000}",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of Vitamin D supplement (procedure) , Has focus (attribute) = Prevention of dental caries (procedure) }",
                target: [
                    {
                        code: "InformationzuRachitisprophylaxemittelsVitaminDundKariesprophylaxemittelsFluorid",
                        display:
                            "Information zu Rachitisprophylaxe mittels Vitamin D und Kariesprophylaxe mittels Fluorid",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "409066002:363702006=698350008",
                display:
                    "Education, guidance and counseling (procedure) : Has focus (attribute) = Administration of vitamin K1 via oral route (procedure)",
                target: [
                    {
                        code: "VitaminKProphylaxepruefenundwennnoetigdurchfuehren",
                        display: "Vitamin-K-Prophylaxe prüfen und wenn nötig durchführen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "424673000",
                display:
                    "Community resources education, guidance and counseling (procedure)",
                target: [
                    {
                        code: "InformationenzuregionalenUnterstuetzungsangebotenzBElternKindHilfenFrueheHilfen",
                        display:
                            "Informationen zu regionalen Unterstützungsangeboten (z.B. Eltern-Kind-Hilfen, Frühe Hilfen)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU2ConsultationGerman;
