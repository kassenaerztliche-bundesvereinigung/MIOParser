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

// Diese Conceptmap verknüpft die Codes für Typ der Blutabnahme mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRNewbornBloodSpotScreeningTypeGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target:
            "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Newborn_Blood_Spot_Screening_Type_German",
        element: [
            {
                code: "425758004:246513007=261422002",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)",
                target: [
                    {
                        code: "Erstblutabnahme",
                        display: "Erstblutabnahme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425758004:246513007=261426004",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)",
                target: [
                    {
                        code: "Zweitblutabnahme",
                        display: "Zweitblutabnahme",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "425758004:246513007=261429006",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Third stage of multistaged procedure (qualifier value)",
                target: [
                    {
                        code: "Kontrollblutabnahme",
                        display: "Kontrollblutabnahme",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRNewbornBloodSpotScreeningTypeGerman;
