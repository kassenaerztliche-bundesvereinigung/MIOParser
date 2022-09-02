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

// Diese ConceptMap verknüpft die Codes für Art der Erklärung mit deutschen Bezeichnungen.

import { ConceptMap } from "../../../../Interfaces";

const DPEDeclarationTypeGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_DPE_Declaration_Type_German",
        element: [
            {
                code: "772790007",
                display: "Organ donor card (record artifact)",
                target: [
                    {
                        code: "DPEGewebeOrganspendeerklaerung",
                        display: "DPE_Gewebe_Organspendeerklärung",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "186065003",
                display: "Power of attorney medical report (record artifact)",
                target: [
                    {
                        code: "DPEVorsorgevollmacht",
                        display: "DPE_Vorsorgevollmacht",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "371538006",
                display: "Advance directive report (record artifact)",
                target: [
                    {
                        code: "DPEPatientenverfuegung",
                        display: "DPE_Patientenverfügung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default DPEDeclarationTypeGerman;
