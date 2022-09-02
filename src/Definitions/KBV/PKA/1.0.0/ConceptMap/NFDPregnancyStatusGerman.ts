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

// Diese ConceptMap verknüpft die Codes für Aktueller Schwangerschaftsstatus mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const NFDPregnancyStatusGerman: ConceptMap = [
    {
        source: "http://loinc.org",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_PS_Pregnancy_Status_German",
        element: [
            {
                code: "LA15173-0",
                display: "Pregnant",
                target: [
                    {
                        code: "schwanger",
                        display: "schwanger",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "LA4489-6",
                display: "Unknown",
                target: [
                    {
                        code: "keineAngabe",
                        display: "keine Angabe",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default NFDPregnancyStatusGerman;
