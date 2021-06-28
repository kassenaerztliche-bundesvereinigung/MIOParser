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

// Diese Conceptmap verknüpft die Codes für Hüftlateralität mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";
const CMRBodysiteHipGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Bodysite_Hip_German",
        element: [
            {
                code: "362906008",
                display: "Entire right hip joint (body structure)",
                target: [
                    {
                        code: "rechteHuefte",
                        display: "rechte Hüfte",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "362905007",
                display: "Entire left hip joint (body structure)",
                target: [
                    {
                        code: "linkeHuefte",
                        display: "linke Hüfte",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRBodysiteHipGerman;
