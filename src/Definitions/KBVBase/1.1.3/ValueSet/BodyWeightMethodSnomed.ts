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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Method_Snomed

type BodyWeightMethodSnomed = "363808001" | "786458005";

type BodyWeightMethodSnomedType = t.KeyofC<{ "363808001": null; "786458005": null }>;

const BodyWeightMethodSnomed: BodyWeightMethodSnomedType = t.keyof({
    "363808001": null,
    "786458005": null
});
export const BodyWeightMethodSnomedArray: string[] = ["363808001", "786458005"];

export const BodyWeightMethodSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "363808001",
                display: "Measured body weight (observable entity)"
            },
            {
                code: "786458005",
                display: "Self reported usual body weight (observable entity)"
            }
        ]
    }
];

export default BodyWeightMethodSnomed;
