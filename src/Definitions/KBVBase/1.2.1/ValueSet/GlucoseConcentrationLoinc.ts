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
import GlucoseConcentrationLoincGerman from "../../../../Definitions/KBVBase/1.2.1/ConceptMap/GlucoseConcentrationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Glucose_Concentration_Loinc

type GlucoseConcentrationLoinc = "15074-8" | "2339-0" | "14745-4" | "2344-0";

type GlucoseConcentrationLoincType = t.KeyofC<{
    "15074-8": null;
    "2339-0": null;
    "14745-4": null;
    "2344-0": null;
}>;

const GlucoseConcentrationLoinc: GlucoseConcentrationLoincType = t.keyof({
    "15074-8": null,
    "2339-0": null,
    "14745-4": null,
    "2344-0": null
});
export const GlucoseConcentrationLoincArray: string[] = [
    "15074-8",
    "2339-0",
    "14745-4",
    "2344-0"
];

export const GlucoseConcentrationLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "15074-8",
                display: "Glucose [Moles/volume] in Blood"
            },
            {
                code: "2339-0",
                display: "Glucose [Mass/volume] in Blood"
            },
            {
                code: "14745-4",
                display: "Glucose [Moles/volume] in Body fluid"
            },
            {
                code: "2344-0",
                display: "Glucose [Mass/volume] in Body fluid"
            }
        ]
    }
];

export { GlucoseConcentrationLoincGerman as ConceptMap };

export default GlucoseConcentrationLoinc;
