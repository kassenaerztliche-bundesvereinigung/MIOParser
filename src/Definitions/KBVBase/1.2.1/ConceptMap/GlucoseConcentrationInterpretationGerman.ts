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

// Diese Conceptmap verknüpft die Codes zur Beschreibung der Interpretation der Glukose-Konzentration mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const GlucoseConcentrationInterpretationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Glucose_Concentration_Interpretation_German",
        element: [
            {
                code: "404684003:{363713009=260369004,363713009=255358001}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Increasing (qualifier value), Has interpretation (attribute)=Rapid (qualifier value)}",
                target: [
                    {
                        code: "schnellSteigend",
                        display: "schnell steigend",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363713009=260369004}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Increasing (qualifier value)}",
                target: [
                    {
                        code: "steigend",
                        display: "steigend",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363713009=260369004,363713009=255361000}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Increasing (qualifier value) , Has interpretation (attribute)=Slow (qualifier value) }",
                target: [
                    {
                        code: "langsamSteigend",
                        display: "langsam steigend",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363713009=371928007,363713009=260371004,363713009=260369004}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Not significant (qualifier value), Has interpretation (attribute)=Decreasing (qualifier value), Has interpretation (attribute)= Increasing (qualifier value) }",
                target: [
                    {
                        code: "langsamAendernd",
                        display: "langsam ändernd",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363713009=260371004,363713009=255361000}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Decreasing (qualifier value) ,Has interpretation (attribute)=Slow (qualifier value) }",
                target: [
                    {
                        code: "langsamFallend",
                        display: "langsam fallend",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363713009=260371004}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Decreasing (qualifier value) }",
                target: [
                    {
                        code: "fallend",
                        display: "fallend",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363713009=260371004,363713009=255358001}",
                display:
                    "Clinical finding (finding): {Has interpretation (attribute)=Decreasing (qualifier value) ,Has interpretation (attribute)=Rapid (qualifier value)}",
                target: [
                    {
                        code: "schnellFallend",
                        display: "schnell fallend",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default GlucoseConcentrationInterpretationGerman;
