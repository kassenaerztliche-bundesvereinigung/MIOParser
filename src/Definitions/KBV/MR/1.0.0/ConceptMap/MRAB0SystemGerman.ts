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

// Diese Conceptmap verknüpft die Codes für das AB0-System mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRAB0SystemGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_AB0_System_German",
        element: [
            {
                code: "112144000",
                display: "Blood group A (finding)",
                target: [
                    {
                        code: "A",
                        display: "A",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "112149005",
                display: "Blood group B (finding)",
                target: [
                    {
                        code: "B",
                        display: "B",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "165743006",
                display: "Blood group AB (finding)",
                target: [
                    {
                        code: "AB",
                        display: "AB",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "58460004",
                display: "Blood group O (finding)",
                target: [
                    {
                        code: "0",
                        display: "0",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "115733006",
                display: "Blood group O>h< Bombay Indian variant (finding)",
                target: [
                    {
                        code: "hBombay",
                        display: "0h (Bombay)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRAB0SystemGerman;
