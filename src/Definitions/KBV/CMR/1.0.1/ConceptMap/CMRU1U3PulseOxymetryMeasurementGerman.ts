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

// Diese Conceptmap verknüpft die Codes für Auffälligkeit Sauerstoffsättigung mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRU1U3PulseOxymetryMeasurementGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U1_U3_Pulse_Oxymetry_Measurement_German",
        element: [
            {
                code: "449171008",
                display: "Oxygen saturation below reference range (finding)",
                target: [
                    {
                        code: "auffaellig",
                        display: "auffällig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "448225001",
                display: "Oxygen saturation within reference range (finding)",
                target: [
                    {
                        code: "unauffaellig",
                        display: "unauffällig",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Measurement of oxygen saturation at periphery (prcedure) , Procedure context (attribute) = To be done (qualifier value) }",
                target: [
                    {
                        code: "kontrollbuerftig",
                        display: "kontrollbedürftig",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRU1U3PulseOxymetryMeasurementGerman;
