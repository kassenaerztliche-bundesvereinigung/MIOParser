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

// Diese Conceptmap verknüpft die Codes für Dosierung mittels 4-teiligem Schema mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const NFDDosagePointOfTimeGerman: ConceptMap = [
    {
        source: "http://hl7.org/fhir/event-timing",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Dosage_Point_Of_Time_German",
        element: [
            {
                code: "MORN",
                display: "Morning",
                target: [
                    {
                        code: "morgens",
                        display: "morgens",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "NOON",
                display: "Noon",
                target: [
                    {
                        code: "mittags",
                        display: "mittags",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "EVE",
                display: "Evening",
                target: [
                    {
                        code: "abends",
                        display: "abends",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "NIGHT",
                display: "Night",
                target: [
                    {
                        code: "zurNacht",
                        display: "zur Nacht",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default NFDDosagePointOfTimeGerman;
