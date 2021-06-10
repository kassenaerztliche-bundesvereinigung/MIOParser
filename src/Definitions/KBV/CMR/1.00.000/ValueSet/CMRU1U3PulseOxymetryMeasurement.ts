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

import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_U3_Pulse_Oxymetry_Measurement

type CMRU1U3PulseOxymetryMeasurement = "449171008" | "448225001";

const CMRU1U3PulseOxymetryMeasurement: t.Type<CMRU1U3PulseOxymetryMeasurement> = t.union(
    [t.literal("449171008"), t.literal("448225001")],
    "CMRU1U3PulseOxymetryMeasurement"
);

export const CMRU1U3PulseOxymetryMeasurementArray: string[] = ["449171008", "448225001"];

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
            }
        ]
    }
];

export default CMRU1U3PulseOxymetryMeasurement;
