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

// Diese Conceptmap verknüpft die Codes für den oralen Glucosetoleranztest (oGTT) Vortest mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const MRoGTTPretestGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_oGTT_Pretest_German",
        element: [
            {
                code: "404684003:{363714003=442260000,363713009=394844007}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Outside reference range (qualifier value)}",
                target: [
                    {
                        code: "Vortestauffaelligja",
                        display: "Vortest auffällig ja",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "404684003:{363714003=442260000,363713009=281301001}",
                display:
                    "Clinical finding (finding) : {Interprets (attribute) = Measurement of glucose 1 hour after glucose challenge for glucose tolerance test (procedure), Has interpretation (attribute) = Within reference range (qualifier value)}",
                target: [
                    {
                        code: "Vortestauffaellignein",
                        display: "Vortest auffällig nein",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRoGTTPretestGerman;
