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

// Canonical URL for ValueSet: http://fhir.de/ValueSet/VitalSignDE_Body_Height_Loinc

type VitalSignDEBodyHeightLoinc = "8302-2" | "89269-5";

type VitalSignDEBodyHeightLoincType = t.KeyofC<{ "8302-2": null; "89269-5": null }>;

const VitalSignDEBodyHeightLoinc: VitalSignDEBodyHeightLoincType = t.keyof({
    "8302-2": null,
    "89269-5": null
});
export const VitalSignDEBodyHeightLoincArray: string[] = ["8302-2", "89269-5"];

export const VitalSignDEBodyHeightLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "8302-2",
                display: "Body height"
            },
            {
                code: "89269-5",
                display: "Body height Measured --at birth"
            }
        ]
    }
];

export default VitalSignDEBodyHeightLoinc;
