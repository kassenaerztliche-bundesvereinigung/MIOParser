/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

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
