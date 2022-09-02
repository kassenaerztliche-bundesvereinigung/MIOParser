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

// Diese Conceptmap verknüpft die Codes für AllergyIntoleranceCriticality mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const AllergyIntoleranceCriticalityGerman: ConceptMap = [
    {
        source: "http://hl7.org/fhir/allergy-intolerance-criticality",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_PS_Allergy_Intolerance_Criticality_German",
        element: [
            {
                code: "high",
                display: "High Risk",
                target: [
                    {
                        code: "HohesRisiko",
                        display: "Hohes Risiko",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "low",
                display: "Low Risk",
                target: [
                    {
                        code: "NiedrigesRisiko",
                        display: "Niedriges Risiko",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "unable-to-assess",
                display: "Unable to Assess Risk",
                target: [
                    {
                        code: "AusnahmeRisikoNichtEinzuschaetzen",
                        display: "Ausnahme: Risiko nicht einzuschätzen",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default AllergyIntoleranceCriticalityGerman;
