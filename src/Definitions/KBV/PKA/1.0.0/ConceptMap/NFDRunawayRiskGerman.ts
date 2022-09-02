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

// Diese ConceptMap verknüpft die Codes für Weglaufgefährdung mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const NFDRunawayRiskGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Runaway_Risk",
        element: [
            {
                code: "50239007 : 363713009 = 723509005",
                display:
                    "Wandering (finding) : Has interpretation (attribute) = High risk (qualifier value)",
                target: [
                    {
                        code: "Weglaufgefaehrdung",
                        display: "Weglaufgefährdung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "50239007 : 363713009 = 261665006",
                display:
                    "Wandering (finding) : Has interpretation (attribute) = Unknown (qualifier value)",
                target: [
                    {
                        code: "keineAngabeueberWeglaufgefaehrdung",
                        display: "keine Angabe über Weglaufgefährdung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default NFDRunawayRiskGerman;
