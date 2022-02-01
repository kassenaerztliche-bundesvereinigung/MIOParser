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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Percentile_Body_Measure_Loinc

type CMRPercentileBodyMeasureLoinc = "8336-0" | "8303-0" | "8289-1" | "59574-4";

const CMRPercentileBodyMeasureLoinc: t.Type<CMRPercentileBodyMeasureLoinc> = t.union(
    [t.literal("8336-0"), t.literal("8303-0"), t.literal("8289-1"), t.literal("59574-4")],
    "CMRPercentileBodyMeasureLoinc"
);

export const CMRPercentileBodyMeasureLoincArray: string[] = [
    "8336-0",
    "8303-0",
    "8289-1",
    "59574-4"
];

export const CMRPercentileBodyMeasureLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "8336-0",
                display: "Body weight [Percentile] Per age"
            },
            {
                code: "8303-0",
                display: "Body height [Percentile]"
            },
            {
                code: "8289-1",
                display: "Head Occipital-frontal circumference Percentile"
            },
            {
                code: "59574-4",
                display: "Body mass index (BMI) [Percentile]"
            }
        ]
    }
];

export default CMRPercentileBodyMeasureLoinc;
