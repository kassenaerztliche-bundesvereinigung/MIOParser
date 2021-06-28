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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Pulse_Oxymetry_Screening_Measurement_Type

type CMRPulseOxymetryScreeningMeasurementType =
    | "250554003:363703001=399455000"
    | "250554003:363703001=262134003";

const CMRPulseOxymetryScreeningMeasurementType: t.Type<CMRPulseOxymetryScreeningMeasurementType> = t.union(
    [
        t.literal("250554003:363703001=399455000"),
        t.literal("250554003:363703001=262134003")
    ],
    "CMRPulseOxymetryScreeningMeasurementType"
);

export const CMRPulseOxymetryScreeningMeasurementTypeArray: string[] = [
    "250554003:363703001=399455000",
    "250554003:363703001=262134003"
];

export const CMRPulseOxymetryScreeningMeasurementTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "250554003:363703001=399455000",
                display:
                    "Measurement of oxygen saturation at periphery (procedure) : Has intent (attribute) = Primary procedure (qualifier value)"
            },
            {
                code: "250554003:363703001=262134003",
                display:
                    "Measurement of oxygen saturation at periphery (procedure) : Has intent (attribute) = Secondary procedure (qualifier value)"
            }
        ]
    }
];

export default CMRPulseOxymetryScreeningMeasurementType;
