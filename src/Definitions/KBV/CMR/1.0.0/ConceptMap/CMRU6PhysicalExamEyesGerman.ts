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

// Diese Conceptmap verknüpft die Codes für U6 - Augen mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRU6PhysicalExamEyesGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Physical_Exam_Eyes_German",
        element: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)",
                target: [
                    {
                        code: "InspektionmorphologischeAuffaelligkeiten",
                        display: "Inspektion: morphologische Auffälligkeiten",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)",
                target: [
                    {
                        code: "InspektionNystagmus",
                        display: "Inspektion: Nystagmus",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "400964006",
                display: "Iris transillumination (finding)",
                target: [
                    {
                        code:
                            "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie",
                        display:
                            "Brückner-Test: Transilluminationsunterschied (z.B. bei Trübung der brechenden Medien, Strabismus, Anisometropie)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "870705000",
                display: "Poor visual fixation (finding)",
                target: [
                    {
                        code:
                            "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks",
                        display:
                            "Prüfung der Blickfolge mit einem geräuschlosen, das Kind interessierenden Objekt (z.B. Lichtquelle): Fixationsschwäche rechts/links",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "34241000119104",
                display: "Ocular torticollis (disorder)",
                target: [
                    {
                        code: "InspektionKopffehlhaltung",
                        display: "Inspektion: Kopffehlhaltung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)",
                target: [
                    {
                        code:
                            "PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks",
                        display:
                            "Pupillenstatus: Vergleich Größe, Form, Lichtreaktion rechts/links",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU6PhysicalExamEyesGerman;
