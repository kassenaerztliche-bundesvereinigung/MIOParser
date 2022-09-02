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

// Canonical URL for ValueSet: http://fhir.de/ValueSet/VitalSignDE_Body_Weight_Loinc

type VitalSignDEBodyWeightLoinc = "29463-7" | "8339-4";

type VitalSignDEBodyWeightLoincType = t.KeyofC<{ "29463-7": null; "8339-4": null }>;

const VitalSignDEBodyWeightLoinc: VitalSignDEBodyWeightLoincType = t.keyof({
    "29463-7": null,
    "8339-4": null
});
export const VitalSignDEBodyWeightLoincArray: string[] = ["29463-7", "8339-4"];

export const VitalSignDEBodyWeightLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "29463-7",
                display: "Body weight"
            },
            {
                code: "8339-4",
                display: "Birth weight Measured"
            }
        ]
    }
];

export default VitalSignDEBodyWeightLoinc;
