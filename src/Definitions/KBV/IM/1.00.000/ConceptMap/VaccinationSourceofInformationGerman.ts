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

// Diese Conceptmap verknüpft die Codes für die Quelle der Information mit deutschen Bezeichnern

import { ConceptMap } from "../../../../Interfaces";
const VaccinationSourceofInformationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Source_of_Information_German",
        element: [
            {
                code: "261665006",
                display: "Unknown (qualifier value)",
                target: [
                    {
                        code: "Unbekannt",
                        display: "Unbekannt",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "394863008",
                display: "Non-family member (person)",
                target: [
                    {
                        code: "Sonstige-Person",
                        display: "Sonstige Person",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "125677006",
                display: "Relative (person)",
                target: [
                    {
                        code: "Angehoeriger",
                        display: "Angehöriger",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "158965000",
                display: "Medical practitioner (occupation)",
                target: [
                    {
                        code: "Arzt-Aerztin",
                        display: "Arzt/ Ärztin",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "116154003",
                display: "Patient (person)",
                target: [
                    {
                        code: "Patient",
                        display: "Patient",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationSourceofInformationGerman;
