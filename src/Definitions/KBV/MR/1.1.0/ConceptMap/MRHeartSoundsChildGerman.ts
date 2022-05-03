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

// Diese Conceptmap verknüpft die Codes für die Herztöne des Kindes mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRHeartSoundsChildGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Heart_Sounds_Child_German",
        element: [
            {
                code: "249045009",
                display: "Fetal heart sounds present (finding)",
                target: [
                    {
                        code: "+",
                        display: "+",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "289446001",
                display: "Fetal heart sounds absent (situation)",
                target: [
                    {
                        code: "o",
                        display: "Ø",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRHeartSoundsChildGerman;
