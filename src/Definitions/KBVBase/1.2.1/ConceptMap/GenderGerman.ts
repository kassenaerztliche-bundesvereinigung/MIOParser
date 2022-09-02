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

// Diese Conceptmap verknüpft die Codes für Bevorzugte Sprachen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const GenderGerman: ConceptMap = [
    {
        source: "http://hl7.org/fhir/administrative-gender",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Gender_German",
        element: [
            {
                code: "male",
                display: "Male",
                target: [
                    {
                        code: "maennlich",
                        display: "Männlich",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "female",
                display: "Female",
                target: [
                    {
                        code: "weiblich",
                        display: "Weiblich",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "unknown",
                display: "Unknown",
                target: [
                    {
                        code: "unbekannt",
                        display: "Unbekannt",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    },
    {
        source: "http://fhir.de/CodeSystem/gender-amtlich-de",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Gender_German",
        element: [
            {
                code: "X",
                display: "unbestimmt",
                target: [
                    {
                        code: "unbestimmt",
                        display: "Unbestimmt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "D",
                display: "divers",
                target: [
                    {
                        code: "divers",
                        display: "Divers",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default GenderGerman;
