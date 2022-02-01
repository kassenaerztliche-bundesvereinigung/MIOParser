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

// Diese Conceptmap verknüpft die Codes für die Biometrie II und III mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRBiometricsIIIIIGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Biometrics_II_III_German",
        element: [
            {
                code: "281688001",
                display: "Biparietal diameter (observable entity)",
                target: [
                    {
                        code: "BPDBiparietalerDurchmesser",
                        display: "BPD (Biparietaler Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "363812007",
                display: "Head circumference (observable entity)",
                target: [
                    {
                        code: "KUKopfumfang",
                        display: "KU (Kopfumfang)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156893001",
                display: "Occipitofrontal diameter of fetal head (observable entity)",
                target: [
                    {
                        code: "FODFrontookzipitalerDurchmesser",
                        display: "FOD (Fronto-okzipitaler Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "439984002:704327008=302553009",
                display:
                    "Diameter of structure by imaging measurement (observable entity):Direct site (attribute)=Entire abdomen (body structure)",
                target: [
                    {
                        code: "ATDAbdomenThoraxquerDurchmesser",
                        display: "ATD (Abdomen/Thorax-quer-Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "249676004",
                display: "Anteroposterior diameter of chest (observable entity)",
                target: [
                    {
                        code: "APDAbdomenThoraxapDurchmesser",
                        display: "APD (Abdomen/Thorax-a. p.-Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156896009",
                display: "Thoracoabdominal circumference of fetus (observable entity)",
                target: [
                    {
                        code: "AUAbdomenThoraxUmfang",
                        display: "AU (Abdomen/Thorax-Umfang)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "396551005",
                display: "Femur length (observable entity)",
                target: [
                    {
                        code: "FLFemurlaenge",
                        display: "FL (Femurlänge)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRBiometricsIIIIIGerman;
