// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_MR_Morphology_German
// Im folgenden Profil können Codes aus den Codesystemen Snomed, Loinc oder Ucum enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED Clinical Terms® (SNOMED CT®) which is used by permission of SNOMED International. All rights reserved. SNOMED CT®, was originally created by The College of American Pathologists. SNOMED and SNOMED CT are registered trademarks of SNOMED International. Implementers of these artefacts must have the appropriate SNOMED CT Affiliate license. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED "AS IS." ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

// Diese Conceptmap verknüpft die Codes für die Morphologie mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRMorphologyGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Morphology_German",
        element: [
            {
                code: "62991000119101",
                display: "Fetal abdominal wall defect (disorder)",
                target: [
                    {
                        code: "RumpfKonturunterbrechungandervorderenBauchwand",
                        display: "Rumpf - Konturunterbrechung an der vorderen Bauchwand",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1157188005",
                display: "Stomach present in left upper quadrant of abdomen (finding)",
                target: [
                    {
                        code: "RumpfDarstellbarkeitdesMagensimlinkenOberbauch",
                        display: "Rumpf - Darstellbarkeit des Magens im linken Oberbauch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1157173000",
                display: "Bladder present (finding)",
                target: [
                    {
                        code: "RumpfDarstellbarkeitderHarnblase",
                        display: "Rumpf - Darstellbarkeit der Harnblase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "370380004:{363713009=394845008}{363714003=(282290005:704327008=80891009+51185008)}{370130000=118593005}",
                display:
                    "Ultrasound scan finding (finding) : { Has interpretation (attribute) = Potentially abnormal (qualifier value) } { Interprets (attribute) = ( Imaging interpretation (observable entity) : Direct site (attribute) = Heart structure (body structure) + Thoracic structure (body structure) ) } { Property (attribute) = Relative ratio (property) (qualifier value) }",
                target: [
                    {
                        code: "ThoraxAuffaelligeHerzThoraxRelationBlickdiagnose",
                        display:
                            "Thorax - Auffällige Herz/Thorax-Relation (Blickdiagnose)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "445368001",
                display: "Normal position and orientation of heart (finding)",
                target: [
                    {
                        code: "ThoraxLinksseitigeHerzposition",
                        display: "Thorax - Linksseitige Herzposition",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "289444003:371881003=243788004",
                display:
                    "Irregular fetal heart rhythm (finding) : During (attribute) = Child examination (procedure)",
                target: [
                    {
                        code: "ThoraxPersistierendeArrythmieimUntersuchungszeitraum",
                        display:
                            "Thorax - Persistierende Arrythmie im Untersuchungszeitraum",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1157164008",
                display: "All chambers of heart present (finding)",
                target: [
                    {
                        code: "ThoraxDarstellbarkeitdesVierKammerBlicks",
                        display: "Thorax - Darstellbarkeit des Vier-Kammer-Blicks",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "459053006",
                display: "Increased fetal nuchal thickness (finding)",
                target: [
                    {
                        code: "HalsundRueckenUnregelmaessigkeitenderdorsalenHautkontur",
                        display:
                            "Hals und Rücken - Unregelmäßigkeiten der dorsalen Hautkontur",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "144181000119106",
                display: "Fetal ultrasound ventriculomegaly (finding)",
                target: [
                    {
                        code: "KopfVentrikelauffaelligkeiten",
                        display: "Kopf - Ventrikelauffälligkeiten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "79114003",
                display: "Fetal head molding (finding)",
                target: [
                    {
                        code: "KopfAuffaelligkeitenderKopfform",
                        display: "Kopf - Auffälligkeiten der Kopfform",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1157174006",
                display: "Cerebellum present (finding)",
                target: [
                    {
                        code: "KopfDarstellbarkeitdesKleinhirns",
                        display: "Kopf Darstellbarkeit des Kleinhirns",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRMorphologyGerman;
