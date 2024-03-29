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

// Diese Conceptmap verknüpft die Codes für die Erreichung der Immunität einer Titeruntersuchung mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const VaccinationLabTiterImmunityGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_Titer_Immunity_German",
        element: [
            {
                code: "365861007:363713009=10828004",
                display:
                    "Finding of immune status (finding) : Has interpretation (attribute) = Positive (qualifier value)",
                target: [
                    {
                        code: "Positiv",
                        display: "Immunität erreicht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "365861007:363713009=260385009",
                display:
                    "Finding of immune status (finding) : Has interpretation (attribute) = Negative (qualifier value)",
                target: [
                    {
                        code: "Negativ",
                        display: "Immunität nicht erreicht",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationLabTiterImmunityGerman;
