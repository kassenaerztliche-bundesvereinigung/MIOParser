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

// Diese Conceptmap verknüpft die Codes für Perzentilkörpermaß LOINC mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRPercentileBodyMeasureLoincGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Percentile_Body_Measure_Loinc_German",
        element: [
            {
                code: "8336-0",
                display: "Body weight [Percentile] Per age",
                target: [
                    {
                        code: "Koerpergewicht",
                        display: "Körpergewicht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8303-0",
                display: "Body height [Percentile]",
                target: [
                    {
                        code: "Koerperlaenge",
                        display: "Körperlänge",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "8289-1",
                display: "Head Occipital-frontal circumference Percentile",
                target: [
                    {
                        code: "Kopfumfang",
                        display: "Kopfumfang",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "59574-4",
                display: "Body mass index (BMI) [Percentile]",
                target: [
                    {
                        code: "BMI",
                        display: "BMI",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRPercentileBodyMeasureLoincGerman;
