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

// Diese Conceptmap verknüpft die Codes für Hüfttyp nach Graf mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRGrafHipUltrasoundClassificationGerman: ConceptMap = [
    {
        source:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Graf_Hip_Ultrasound_Classification_German",
        element: [
            {
                code: "1ab",
                display: "Graf Ia/Ib",
                target: [
                    {
                        code: "IaIb",
                        display: "Ia/Ib",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2a",
                display: "Graf IIa",
                target: [
                    {
                        code: "IIa",
                        display: "IIa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "2cd",
                display: "Graf IIc/D",
                target: [
                    {
                        code: "IIcD",
                        display: "IIc/D",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3a",
                display: "Graf IIIa",
                target: [
                    {
                        code: "IIIa",
                        display: "IIIa",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "3b",
                display: "Graf IIIb",
                target: [
                    {
                        code: "IIIb",
                        display: "IIIb",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "4",
                display: "Graf IV",
                target: [
                    {
                        code: "IV",
                        display: "IV",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRGrafHipUltrasoundClassificationGerman;
