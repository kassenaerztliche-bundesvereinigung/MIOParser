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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU1U3PulseOxymetryMeasurementGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU1U3PulseOxymetryMeasurementGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_U3_Pulse_Oxymetry_Measurement

type CMRU1U3PulseOxymetryMeasurement =
    | "449171008"
    | "448225001"
    | "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}";

type CMRU1U3PulseOxymetryMeasurementType = t.KeyofC<{
    "449171008": null;
    "448225001": null;
    "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}": null;
}>;

const CMRU1U3PulseOxymetryMeasurement: CMRU1U3PulseOxymetryMeasurementType = t.keyof({
    "449171008": null,
    "448225001": null,
    "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}": null
});
export const CMRU1U3PulseOxymetryMeasurementArray: string[] = [
    "449171008",
    "448225001",
    "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}"
];

export const CMRU1U3PulseOxymetryMeasurementValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "449171008",
                display: "Oxygen saturation below reference range (finding)"
            },
            {
                code: "448225001",
                display: "Oxygen saturation within reference range (finding)"
            },
            {
                code: "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Measurement of oxygen saturation at periphery (prcedure) , Procedure context (attribute) = To be done (qualifier value) }"
            }
        ]
    }
];

export { CMRU1U3PulseOxymetryMeasurementGerman as ConceptMap };

export default CMRU1U3PulseOxymetryMeasurement;
