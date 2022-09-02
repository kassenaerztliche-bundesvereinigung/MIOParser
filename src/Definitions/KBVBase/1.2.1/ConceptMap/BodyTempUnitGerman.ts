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

// Canonical URL for ConceptMap: https://fhir.kbv.de/ConceptMap/KBV_CM_Base_Body_Temp_Unit_German
// undefined

// Diese Conceptmap verknüpft die Ucum Codes zur Messung der Körpertemperatur mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../Interfaces";

const BodyTempUnitGerman: ConceptMap = [
    {
        source: "http://unitsofmeasure.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Body_Temp_Unit_German",
        element: [
            {
                code: "Cel",
                display: "undefined",
                target: [
                    {
                        code: "Celsius",
                        display: "Celsius",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "[degF]",
                display: "undefined",
                target: [
                    {
                        code: "Fahrenheit",
                        display: "Fahrenheit",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default BodyTempUnitGerman;
