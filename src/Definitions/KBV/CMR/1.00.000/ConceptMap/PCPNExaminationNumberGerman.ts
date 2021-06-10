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

// Diese Conceptmap verknüpft die Codes für Untersuchungsnummer Teilnahmekarte mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const PCPNExaminationNumberGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_PC_PN_Examination_Number_German",
        element: [
            {
                code: "170107008",
                display: "Child examination - 10 days (procedure)",
                target: [
                    {
                        code: "U2310Lebenstag",
                        display: "U2 3.-10. Lebenstag",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243788004:370131001=133931009",
                display:
                    "Child examination (procedure) : Recipient category =  Infant (person)",
                target: [
                    {
                        code: "U345Lebenswoche",
                        display: "U3 4.-5. Lebenswoche",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170250008",
                display: "Child 3 month examination (procedure)",
                target: [
                    {
                        code: "U434Lebensmonat",
                        display: "U4 3.-4. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170263002",
                display: "Child 6 month examination (procedure)",
                target: [
                    {
                        code: "U567Lebensmonat",
                        display: "U5 6.-7. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170254004",
                display: "Child 1 year examination (procedure)",
                target: [
                    {
                        code: "U61012Lebensmonat",
                        display: "U6 10.-12. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "401140000",
                display: "Child 2 year examination (procedure)",
                target: [
                    {
                        code: "U72124Lebensmonat",
                        display: "U7 21.-24. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "170281004",
                display: "Child 3 year examination (procedure)",
                target: [
                    {
                        code: "U7a3436Lebensmonat",
                        display: "U7a 34.-36. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "410635005",
                display: "Child 4 year examination (procedure)",
                target: [
                    {
                        code: "U84648Lebensmonat",
                        display: "U8 46.-48. Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "243788004:370131001=410602000",
                display:
                    "Child examination (procedure) : Recipient category (attribute) =  Preschool child (person)",
                target: [
                    {
                        code: "U96064Lebensmonat",
                        display: "U9 60.-64.Lebensmonat",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default PCPNExaminationNumberGerman;
