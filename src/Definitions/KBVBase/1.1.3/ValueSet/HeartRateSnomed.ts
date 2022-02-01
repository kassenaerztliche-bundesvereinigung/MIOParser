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
import { ValueSet } from "../../../Interfaces";
import HeartRateSnomedGerman from "../../../../Definitions/KBVBase/1.1.3/ConceptMap/HeartRateGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Heart_Rate_Snomed

type HeartRateSnomed = "364075005" | "78564009" | "249043002";

const HeartRateSnomed: t.Type<HeartRateSnomed> = t.union(
    [t.literal("364075005"), t.literal("78564009"), t.literal("249043002")],
    "HeartRateSnomed"
);

export const HeartRateSnomedArray: string[] = ["364075005", "78564009", "249043002"];

export const HeartRateSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "364075005",
                display: "Heart rate (observable entity)"
            },
            {
                code: "78564009",
                display: "Heart rate measured at systemic artery (observable entity)"
            },
            {
                code: "249043002",
                display: "Fetal heart rate (observable entity)"
            }
        ]
    }
];

export { HeartRateSnomedGerman as ConceptMap };

export default HeartRateSnomed;
