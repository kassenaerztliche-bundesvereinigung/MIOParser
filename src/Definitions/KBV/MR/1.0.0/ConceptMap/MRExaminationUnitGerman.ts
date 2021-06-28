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

// Diese Conceptmap verknüpft die Codes für die Einheiten der Laborergebnisse mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const MRExaminationUnitGerman: ConceptMap = [
    {
        source: "http://unitsofmeasure.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Unit_German",
        element: [
            {
                code: "{titer}",
                display: "titer",
                target: [
                    {
                        code: "Titer",
                        display: "Titer",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "10*6/uL",
                display: "MillionsPerMicroLiter [Number Concentration Units]",
                target: [
                    {
                        code: "106l",
                        display: "10*6/µl",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "g/dL",
                display: "GramsPerDeciLiter [Mass Concentration Units]",
                target: [
                    {
                        code: "gdl",
                        display: "g/dl",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "mmol/L",
                display: "MilliMolesPerLiter [Most Common Healthcare Units]",
                target: [
                    {
                        code: "mmoll",
                        display: "mmol/l",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "[iU]/mL",
                display:
                    "InternationalUnitsPerMilliLiter [Arbitrary Concentration Units]",
                target: [
                    {
                        code: "IEml",
                        display: "IE/ml",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRExaminationUnitGerman;
