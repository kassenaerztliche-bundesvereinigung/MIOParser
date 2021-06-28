/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Diese Conceptmap verknüpft die Codes für impfrelevante durchgemachte Krankheiten in den Codesystemen SNOMED CT® und ICD

import { ConceptMap } from "../../../../Interfaces";
const VaccinationPriorDiseaseSnomedICD: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "http://fhir.de/CodeSystem/dimdi/icd-10-gm",
        element: [
            {
                code: "27836007",
                display: "Pertussis (disorder)",
                target: [
                    {
                        code: "A37.-",
                        display: "Keuchhusten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)",
                target: [
                    {
                        code: "A95.-",
                        display: "Gelbfieber",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)",
                target: [
                    {
                        code: "A84.1",
                        display:
                            "Mitteleuropäische Enzephalitis, durch Zecken übertragen",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76795007",
                display: "Acute type B viral hepatitis (disorder)",
                target: [
                    {
                        code: "B16.-",
                        display: "Akute Virushepatitis B",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "235869004",
                display: "Chronic viral hepatitis B with hepatitis D (disorder)",
                target: [
                    {
                        code: "B18.0",
                        display: "Chronische Virushepatitis B mit Delta-Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "186639003",
                display: "Chronic viral hepatitis B without delta-agent (disorder)",
                target: [
                    {
                        code: "B18.1-",
                        display: "Chronische Virushepatitis B ohne Delta-Virus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "25102003",
                display: "Acute type A viral hepatitis (disorder)",
                target: [
                    {
                        code: "B15.-",
                        display: "Akute Virushepatitis A",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36653000",
                display: "Rubella (disorder)",
                target: [
                    {
                        code: "B06.-",
                        display: "Röteln [Rubeola] [Rubella]",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36989005",
                display: "Mumps (disorder)",
                target: [
                    {
                        code: "B26.-",
                        display: "Mumps",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "14189004",
                display: "Measles (disorder)",
                target: [
                    {
                        code: "B05.-",
                        display: "Masern",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "38907003",
                display: "Varicella (disorder)",
                target: [
                    {
                        code: "B01.-",
                        display: "Varizellen [Windpocken]",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationPriorDiseaseSnomedICD;
