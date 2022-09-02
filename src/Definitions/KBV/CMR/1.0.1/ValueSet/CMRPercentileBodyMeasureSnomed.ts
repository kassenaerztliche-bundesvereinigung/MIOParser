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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Percentile_Body_Measure_Snomed

type CMRPercentileBodyMeasureSnomed =
    | "27113001:370130000=415068004"
    | "50373000:370130000=415068004"
    | "363812007:370130000=415068004"
    | "60621009:370130000=415068004";

type CMRPercentileBodyMeasureSnomedType = t.KeyofC<{
    "27113001:370130000=415068004": null;
    "50373000:370130000=415068004": null;
    "363812007:370130000=415068004": null;
    "60621009:370130000=415068004": null;
}>;

const CMRPercentileBodyMeasureSnomed: CMRPercentileBodyMeasureSnomedType = t.keyof({
    "27113001:370130000=415068004": null,
    "50373000:370130000=415068004": null,
    "363812007:370130000=415068004": null,
    "60621009:370130000=415068004": null
});
export const CMRPercentileBodyMeasureSnomedArray: string[] = [
    "27113001:370130000=415068004",
    "50373000:370130000=415068004",
    "363812007:370130000=415068004",
    "60621009:370130000=415068004"
];

export const CMRPercentileBodyMeasureSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "27113001:370130000=415068004",
                display:
                    "Body weight (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            },
            {
                code: "50373000:370130000=415068004",
                display:
                    "Body height measure (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            },
            {
                code: "363812007:370130000=415068004",
                display:
                    "Head circumference (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            },
            {
                code: "60621009:370130000=415068004",
                display:
                    "Body mass index (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            }
        ]
    }
];

export default CMRPercentileBodyMeasureSnomed;
