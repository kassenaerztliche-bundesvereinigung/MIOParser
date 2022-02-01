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

// Diese Conceptmap verknüpft die Codes für Kindslage aus Sicht d. Kindes mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRFoetalPositionGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Foetal_Position_German",
        element: [
            {
                code: "394698008:246090004=70028003",
                display:
                    "Birth history (situation) : Associated finding (attribute) = Vertex presentation (finding)",
                target: [
                    {
                        code: "Schaedellage",
                        display: "Schädellage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "407613009",
                display: "Born by breech delivery (situation)",
                target: [
                    {
                        code: "Beckenendlage",
                        display: "Beckenendlage",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "394698008:246090004=199362007",
                display:
                    "Birth history (situation) : Associated finding (attribute) = Transverse lie - delivered (disorder)",
                target: [
                    {
                        code: "Querlage",
                        display: "Querlage",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRFoetalPositionGerman;
