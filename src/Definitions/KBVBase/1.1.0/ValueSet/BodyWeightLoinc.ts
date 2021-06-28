/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Loinc

type BodyWeightLoinc = "29463-7" | "8339-4";

const BodyWeightLoinc: t.Type<BodyWeightLoinc> = t.union(
    [t.literal("29463-7"), t.literal("8339-4")],
    "BodyWeightLoinc"
);

export const BodyWeightLoincArray: string[] = ["29463-7", "8339-4"];

export const BodyWeightLoincValueSet: ValueSet = [
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

export default BodyWeightLoinc;
