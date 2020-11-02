/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Diese Conceptmap verknüpft die Codes für die durchgemachten Infektionskrankheiten mit deutschen Bezeichnern

import { ConceptMap } from "../../../../Interfaces";
const VaccinationPriorDiseaseGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Prior_Disease_German",
        element: [
            {
                code: "40733004",
                display: "Infectious disease (disorder)",
                target: [
                    {
                        code: "Nicht-aufgefuehrt-unspezifiziert",
                        display: "Nicht aufgeführt (unspezifiziert)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)",
                target: [
                    {
                        code: "Pertussis/Keuchhusten",
                        display: "Pertussis/Keuchhusten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)",
                target: [
                    {
                        code: "Gelbfieber",
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
                        code: "FSME-Fruehsommer-Meningoenzephalitis",
                        display: "FSME [Frühsommer Meningoenzephalitis]",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "76795007",
                display: "Acute type B viral hepatitis (disorder)",
                target: [
                    {
                        code: "Hepatitis-B",
                        display: "Hepatitis B",
                        equivalence: "wider"
                    }
                ]
            },
            {
                code: "235869004",
                display: "Chronic viral hepatitis B with hepatitis D (disorder)",
                target: [
                    {
                        code: "Hepatitis-B",
                        display: "Hepatitis B",
                        equivalence: "wider"
                    }
                ]
            },
            {
                code: "186639003",
                display: "Chronic viral hepatitis B without delta-agent (disorder)",
                target: [
                    {
                        code: "Hepatitis-B",
                        display: "Hepatitis B",
                        equivalence: "wider"
                    }
                ]
            },
            {
                code: "25102003",
                display: "Acute type A viral hepatitis (disorder)",
                target: [
                    {
                        code: "Hepatitis-A",
                        display: "Hepatitis A",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36653000",
                display: "Rubella (disorder)",
                target: [
                    {
                        code: "Roeteln",
                        display: "Röteln",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "36989005",
                display: "Mumps (disorder)",
                target: [
                    {
                        code: "Mumps",
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
                        code: "Masern",
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
                        code: "Varizellen-Windpocken",
                        display: "Varizellen/Windpocken",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationPriorDiseaseGerman;
