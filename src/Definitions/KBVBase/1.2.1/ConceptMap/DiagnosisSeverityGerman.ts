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

// Diese Conceptmap verknüpft die Codes für die Schwere einer Diagnose mit deutschen Bezeichnern

import { ConceptMap } from "../../../Interfaces";

const DiagnosisSeverityGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Diagnosis_Severity_German",
        element: [
            {
                code: "255604002",
                display: "Mild (qualifier value)",
                target: [
                    {
                        code: "leicht",
                        display: "leicht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "6736007",
                display: "Moderate (severity modifier) (qualifier value)",
                target: [
                    {
                        code: "mittelschwer",
                        display: "mittelschwer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "24484000",
                display: "Severe (severity modifier) (qualifier value)",
                target: [
                    {
                        code: "schwer",
                        display: "schwer",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default DiagnosisSeverityGerman;
