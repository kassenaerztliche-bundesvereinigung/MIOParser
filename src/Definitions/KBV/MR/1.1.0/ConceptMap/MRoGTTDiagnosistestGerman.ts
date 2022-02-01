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

// Diese Conceptmap verknüpft die Codes für den oralen Glucosetoleranztest (oGTT) Diagnosetest mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const MRoGTTDiagnosistestGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_oGTT_Diagnosistest_German",
        element: [
            {
                code: "372048000",
                display: "Pregnancy with abnormal glucose tolerance test (finding)",
                target: [
                    {
                        code: "Diagnosetestauffaelligja",
                        display: "Diagnosetest auffällig ja",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "1156100006",
                display: "Pregnancy with normal glucose tolerance test (finding)",
                target: [
                    {
                        code: "Diagnosetestauffaellignein",
                        display: "Diagnosetest auffällig nein",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRoGTTDiagnosistestGerman;