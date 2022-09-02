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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Gender_Extension

type MRGenderExtension = "X";

type MRGenderExtensionType = t.KeyofC<{ X: null }>;

const MRGenderExtension: MRGenderExtensionType = t.keyof({
    X: null
});
export const MRGenderExtensionArray: string[] = ["X"];

export const MRGenderExtensionValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/gender-amtlich-de",
        concept: [
            {
                code: "X",
                display: "unbestimmt"
            }
        ]
    }
];

export default MRGenderExtension;
