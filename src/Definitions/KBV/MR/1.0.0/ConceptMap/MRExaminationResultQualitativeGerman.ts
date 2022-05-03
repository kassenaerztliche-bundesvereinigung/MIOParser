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

// Diese Conceptmap verknüpft die Codes für die qualitative Beurteilung der Messergebnisse mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRExaminationResultQualitativeGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Result_Qualitative_German",
        element: [
            {
                code: "165774008",
                display: "Indirect Coombs test negative (finding)",
                target: [
                    {
                        code: "AntikoerperSuchtestnegativ",
                        display: "Antikörper-Suchtest negativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "165775009",
                display: "Indirect Coombs test positive (finding)",
                target: [
                    {
                        code: "AntikoerperSuchtestpositiv",
                        display: "Antikörper-Suchtest positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "165791007",
                display: "Rubella antibody absent (finding)",
                target: [
                    {
                        code: "RoetelnAntikoerpertestnegativ",
                        display: "Röteln-Antikörpertest negativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "365588008:{363714003=3527003,363713009=52101004}",
                display:
                    "Finding of rubella antibody titer (finding) : {Interprets (attribute) = Antibody measurement (procedure), Has interpretation (attribute) = Present (qualifier value)}",
                target: [
                    {
                        code: "RoetelnAntikoerpertestpositiv",
                        display: "Röteln-Antikörpertest positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415798001",
                display: "Urine chlamydia trachomatis test positive (finding)",
                target: [
                    {
                        code: "ChlamydiatrachomatisNachweisimUrinpositiv",
                        display: "Chlamydia trachomatis Nachweis im Urin positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "415797006",
                display: "Urine chlamydia trachomatis test negative (finding)",
                target: [
                    {
                        code: "ChlamydiatrachomatisNachweisimUrinnegativ",
                        display: "Chlamydia trachomatis Nachweis im Urin negativ",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "165806002",
                display: "Hepatitis B surface antigen positive (finding)",
                target: [
                    {
                        code: "HBsAntigenimSerumNachweispositiv",
                        display: "HBs-Antigen im Serum, Nachweis positiv",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "406010001",
                display: "Hepatitis B surface antigen negative (finding)",
                target: [
                    {
                        code: "HBsAntigenimSerumNachweisnegativ",
                        display: "HBs-Antigen im Serum, Nachweis negativ",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRExaminationResultQualitativeGerman;
