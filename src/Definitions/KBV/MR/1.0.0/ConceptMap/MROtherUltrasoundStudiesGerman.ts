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

// Diese Conceptmap verknüpft die Codes für die weiteren Ultraschalluntersuchungen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MROtherUltrasoundStudiesGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Other_Ultrasound_Studies_German",
        element: [
            {
                code: "89343007",
                display: "Ultrasound study follow-up (procedure)",
                target: [
                    {
                        code: "UltraschallKontrolluntersuchungennachAnlagebzudenMutterschaftsRichtlinien",
                        display:
                            "Ultraschall-Kontrolluntersuchungen (nach Anlage 1b zu den Mutterschafts-Richtlinien)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "373671009",
                display: "Specific ultrasound studies (procedure)",
                target: [
                    {
                        code: "WeiterfuehrendeUltraschallUntersuchungennachAnlageczudenMutterschaftsRichtlinien",
                        display:
                            "Weiterführende Ultraschall-Untersuchungen (nach Anlage 1c zu den Mutterschafts-Richtlinien)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "418090003",
                display: "Ultrasound obstetric doppler (procedure)",
                target: [
                    {
                        code: "DopplersonographischeUntersuchungennachAnlagedzudenMutterschaftsRichtlinien",
                        display:
                            "Dopplersonographische Untersuchungen (nach Anlage 1d zu den Mutterschafts-Richtlinien)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MROtherUltrasoundStudiesGerman;
