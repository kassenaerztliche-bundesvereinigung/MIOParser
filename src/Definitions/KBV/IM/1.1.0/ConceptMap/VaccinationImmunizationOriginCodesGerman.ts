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

// Diese Conceptmap verknüpft die Codes für die Quelle der Information, die für den Nachtrag einer Impfung verwendet werden, mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const VaccinationImmunizationOriginCodesGerman: ConceptMap = [
    {
        source: "http://terminology.hl7.org/CodeSystem/immunization-origin",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_ImmunizationOriginCodes_German",
        element: [
            {
                code: "recall",
                display: "Parent/Guardian/Patient Recall",
                target: [
                    {
                        code: "ElternPatientenErziehungsberechtigterErinnerung",
                        display: "Eltern/Erziehungsberechtigter/Patienten Erinnerung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "record",
                display: "Written Record",
                target: [
                    {
                        code: "SchriftlicheDokumentation",
                        display: "Schriftliche Dokumentation",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "provider",
                display: "Other Provider",
                target: [
                    {
                        code: "AndererArztodersonstigerimGesundheitsberuf",
                        display: "Anderer Arzt oder sonstiger im Gesundheitsberuf",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default VaccinationImmunizationOriginCodesGerman;
