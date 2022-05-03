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

// Diese Conceptmap verknüpft die Codes für Allgemeine Angaben zum Fötus beim ersten Ultraschallscreening mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRGeneralInformationGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_General_Information_German",
        element: [
            {
                code: "404684003:{418775008=446522006,363698007=609524001,363713009=52101004}",
                display:
                    "Clinical finding (finding):{Finding method (attribute)=Ultrasonography in first trimester (procedure)|,Finding site (attribute)=Entire embryo proper (body structure),Has interpretation (attribute)=Present (qualifier value)}",
                target: [
                    {
                        code: "Embryodarstellbar",
                        display: "Embryo darstellbar",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "277766008",
                display: "Awareness of heart beat (finding)",
                target: [
                    {
                        code: "Herzaktion",
                        display: "Herzaktion",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRGeneralInformationGerman;
