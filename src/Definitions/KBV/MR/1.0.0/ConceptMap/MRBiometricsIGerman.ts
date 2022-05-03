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

// Diese Conceptmap verknüpft die Codes für die Biometrie I mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const MRBiometricsIGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Biometrics_I_German",
        element: [
            {
                code: "248326004:704325000=70847004",
                display:
                    "Body measure (observable entity) : Relative to (attribute) = Structure of amnion (body structure)",
                target: [
                    {
                        code: "FSFruchtsackdurchmesser",
                        display: "FS (Fruchtsackdurchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "276352009",
                display: "Crown rump length (observable entity)",
                target: [
                    {
                        code: "SSLScheitelSteissLaenge",
                        display: "SSL (Scheitel-Steiß-Länge)",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "281688001",
                display: "Biparietal diameter (observable entity)",
                target: [
                    {
                        code: "BPDBiparietalerDurchmesser",
                        display: "BPD (Biparietaler Durchmesser)",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default MRBiometricsIGerman;
