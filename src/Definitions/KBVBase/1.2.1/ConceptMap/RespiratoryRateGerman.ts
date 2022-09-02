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

// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Respiratory_Rate_German
// undefined

// Diese Conceptmap verknüpft die Codes des Herzfrequenz mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const RespiratoryRateGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Respiratory_Rate_German",
        element: [
            {
                code: "86290005",
                display: "Respiratory rate (observable entity)",
                target: [
                    {
                        code: "Atemfrequenz",
                        display: "Atemfrequenz",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "271625008",
                display: "Rate of spontaneous respiration (observable entity)",
                target: [
                    {
                        code: "AtemfrequenzDerSpontanatmung",
                        display: "Atemfrequenz der Spontanatmung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default RespiratoryRateGerman;
