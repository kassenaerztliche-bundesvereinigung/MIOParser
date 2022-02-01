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

// Diese Conceptmap verknüpft die Codes für Apgar-Score Wert mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU1ApgarScoreValueGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U1_Apgar_Score_Value_German",
        element: [
            {
                code: "77714001",
                display: "Apgar score 0 (finding)",
                target: [
                    {
                        code: "Apgar0",
                        display: "Apgar 0",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "43610007",
                display: "Apgar score 1 (finding)",
                target: [
                    {
                        code: "Apgar1",
                        display: "Apgar 1",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "39910003",
                display: "Apgar score 2 (finding)",
                target: [
                    {
                        code: "Apgar2",
                        display: "Apgar 2",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "26635001",
                display: "Apgar score 3 (finding)",
                target: [
                    {
                        code: "Apgar3",
                        display: "Apgar 3",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38107004",
                display: "Apgar score 4 (finding)",
                target: [
                    {
                        code: "Apgar4",
                        display: "Apgar 4",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24388001",
                display: "Apgar score 5 (finding)",
                target: [
                    {
                        code: "Apgar5",
                        display: "Apgar 5",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10318004",
                display: "Apgar score 6 (finding)",
                target: [
                    {
                        code: "Apgar6",
                        display: "Apgar 6",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "13323003",
                display: "Apgar score 7 (finding)",
                target: [
                    {
                        code: "Apgar7",
                        display: "Apgar 7",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "12431004",
                display: "Apgar score 8 (finding)",
                target: [
                    {
                        code: "Apgar8",
                        display: "Apgar 8",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "64198003",
                display: "Apgar score 9 (finding)",
                target: [
                    {
                        code: "Apgar9",
                        display: "Apgar 9",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "49544001",
                display: "Apgar score 10 (finding)",
                target: [
                    {
                        code: "Apgar10",
                        display: "Apgar 10",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU1ApgarScoreValueGerman;
