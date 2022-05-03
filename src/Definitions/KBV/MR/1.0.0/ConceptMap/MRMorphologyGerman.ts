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

// Diese Conceptmap verknüpft die Codes für die Morphologie mit deutschen Bezeichnungen

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
                code: "302292003:363714003=(364146002:704327008=86367003)",
                display:
                    "Finding of trunk structure (finding) : Interprets (attribute) = ( Stomach observable (observable entity) : Direct site (attribute) = Structure of left upper quadrant of abdomen (body structure) )",
                target: [
                    {
                        code: "RumpfDarstellbarkeitdesMagensimlinkenOberbauch",
                        display: "Rumpf - Darstellbarkeit des Magens im linken Oberbauch",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441687008:{363713009=17621005,363714003=169251004}",
                display:
                    "Imaging of genitourinary system abnormal (finding):{Has interpretation (attribute)=Normal (qualifier value),Interprets (attribute)=Ultrasound scan of bladder (procedure)}",
                target: [
                    {
                        code: "RumpfDarstellbarkeitderHarnblase",
                        display: "Rumpf - Darstellbarkeit der Harnblase",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "441920005",
                display: "Radiographic shadow of heart abnormal (finding)",
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
                code: "249042007:246090004=(698247007:371881003=243788004)",
                display:
                    "Fetal heart finding (finding) : Associated finding (attribute) = (Cardiac arrhythmia (disorder) : During (attribute) = Child examination (procedure) )",
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
                code: "169221005:363698007=43487005",
                display:
                    "Ultrasound obstetric scan normal (finding):Finding site (attribute)=All chambers of the heart (body structure)",
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
                code: "406122000+106112009+106111002:{363698007=113305005}",
                display:
                    "Head finding (finding) + Fetal finding (finding) + Clinical sign related to pregnancy (finding) : { Finding site (attribute) = Cerebellar structure (body structure) }",
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
