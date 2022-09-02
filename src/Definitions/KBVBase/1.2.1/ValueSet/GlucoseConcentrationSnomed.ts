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
import GlucoseConcentrationSnomedGerman from "../../../../Definitions/KBVBase/1.2.1/ConceptMap/GlucoseConcentrationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Glucose_Concentration_Snomed

type GlucoseConcentrationSnomed = "434912009" | "434910001";

type GlucoseConcentrationSnomedType = t.KeyofC<{ "434912009": null; "434910001": null }>;

const GlucoseConcentrationSnomed: GlucoseConcentrationSnomedType = t.keyof({
    "434912009": null,
    "434910001": null
});
export const GlucoseConcentrationSnomedArray: string[] = ["434912009", "434910001"];

export const GlucoseConcentrationSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "434912009",
                display: "Blood glucose concentration (observable entity)"
            },
            {
                code: "434910001",
                display: "Interstitial fluid glucose concentration (observable entity)"
            }
        ]
    }
];

export { GlucoseConcentrationSnomedGerman as ConceptMap };

export default GlucoseConcentrationSnomed;
