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

// Diese Conceptmap verknüpft die Codes des Kopfumfanges mit deutschen Bezeichnungen

import { ConceptMap } from "../../../Interfaces";

const HeadCircumferenceBodySiteSnomedGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Head_Circumference_BodySite_Snomed_German",
        element: [
            {
                code: "302548004",
                display: "Entire head (body structure)",
                target: [
                    {
                        code: "GesamterKopf",
                        display: "Gesamter Kopf",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "362865009",
                display: "Entire fetal head (body structure)",
                target: [
                    {
                        code: "GesamterFoetalerKopf",
                        display: "Gesamter Fötaler Kopf",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default HeadCircumferenceBodySiteSnomedGerman;
