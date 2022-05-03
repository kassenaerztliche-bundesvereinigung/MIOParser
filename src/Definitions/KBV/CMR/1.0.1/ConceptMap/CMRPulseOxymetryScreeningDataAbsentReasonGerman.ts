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

// Diese Conceptmap verknüpft die Codes zur Gründe zur Ablehnung des Pulsoxymetriescreenings mit deutschen Bezeichnungen

import { ConceptMap } from "../../../../Interfaces";

const CMRPulseOxymetryScreeningDataAbsentReasonGerman: ConceptMap = [
    {
        source: "http://snomed.info/sct",
        target: "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Pulse_Oxymetry_Screening_Data_Absent_Reason_German",
        element: [
            {
                code: "428119001:{363589002=250554003,408730004=410534003}",
                display:
                    "Procedure not indicated (situation) : { Associated procedure (attribute) = Measurement of oxygen saturation at periphery (procedure) , Procedure context (attribute) = Not indicated (qualifier value) }",
                target: [
                    {
                        code: "keinPulsoxymetriescreeningBeiPraenatalDiagnostiziertemKritischemHerzfehler",
                        display:
                            "Kein Pulsoxymetrie-Screening bei pränatal diagnostiziertem kritischem Herzfehler",
                        equivalence: "equivalent"
                    }
                ]
            },
            {
                code: "183948000:363589002=250554003",
                display:
                    "Refused procedure - parent's wish (situation) : Associated procedure (attribute) = Measurement of oxygen saturation at periphery (procedure)",
                target: [
                    {
                        code: "elternWuenschenKeineUntersuchung",
                        display: "Eltern wünschen keine Untersuchung",
                        equivalence: "equivalent"
                    }
                ]
            }
        ]
    }
];

export default CMRPulseOxymetryScreeningDataAbsentReasonGerman;
