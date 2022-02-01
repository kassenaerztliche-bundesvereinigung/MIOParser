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

// Diese Conceptmap verknüpft die Codes für Geschlecht SNOMED mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRGenderBirthGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Gender_Birth_German",
        element: [
            {
                code: "703118005",
                display: "Feminine gender (finding)",
                target: [
                    {
                        code: "W",
                        display: "W",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "703117000",
                display: "Masculine gender (finding)",
                target: [
                    {
                        code: "M",
                        display: "M",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "394744001",
                display: "Gender unspecified (finding)",
                target: [
                    {
                        code: "X",
                        display: "X",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRGenderBirthGerman;
