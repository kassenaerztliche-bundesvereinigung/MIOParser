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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Height_Snomed

type BodyHeightSnomed = "169886007";

type BodyHeightSnomedType = t.KeyofC<{ "169886007": null }>;

const BodyHeightSnomed: BodyHeightSnomedType = t.keyof({
    "169886007": null
});
export const BodyHeightSnomedArray: string[] = ["169886007"];

export const BodyHeightSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: []
    },
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169886007",
                display: "Birth length (observable entity)"
            }
        ]
    }
];

export default BodyHeightSnomed;
