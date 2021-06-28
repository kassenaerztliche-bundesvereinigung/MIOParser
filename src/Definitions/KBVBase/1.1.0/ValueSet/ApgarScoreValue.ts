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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Apgar_Score_Value

type ApgarScoreValue =
    | "77714001"
    | "43610007"
    | "39910003"
    | "26635001"
    | "38107004"
    | "24388001"
    | "10318004"
    | "13323003"
    | "12431004"
    | "64198003"
    | "49544001";

const ApgarScoreValue: t.Type<ApgarScoreValue> = t.union(
    [
        t.literal("77714001"),
        t.literal("43610007"),
        t.literal("39910003"),
        t.literal("26635001"),
        t.literal("38107004"),
        t.literal("24388001"),
        t.literal("10318004"),
        t.literal("13323003"),
        t.literal("12431004"),
        t.literal("64198003"),
        t.literal("49544001")
    ],
    "ApgarScoreValue"
);

export const ApgarScoreValueArray: string[] = [
    "77714001",
    "43610007",
    "39910003",
    "26635001",
    "38107004",
    "24388001",
    "10318004",
    "13323003",
    "12431004",
    "64198003",
    "49544001"
];

export const ApgarScoreValueValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "77714001",
                display: "Apgar score 0 (finding)"
            },
            {
                code: "43610007",
                display: "Apgar score 1 (finding)"
            },
            {
                code: "39910003",
                display: "Apgar score 2 (finding)"
            },
            {
                code: "26635001",
                display: "Apgar score 3 (finding)"
            },
            {
                code: "38107004",
                display: "Apgar score 4 (finding)"
            },
            {
                code: "24388001",
                display: "Apgar score 5 (finding)"
            },
            {
                code: "10318004",
                display: "Apgar score 6 (finding)"
            },
            {
                code: "13323003",
                display: "Apgar score 7 (finding)"
            },
            {
                code: "12431004",
                display: "Apgar score 8 (finding)"
            },
            {
                code: "64198003",
                display: "Apgar score 9 (finding)"
            },
            {
                code: "49544001",
                display: "Apgar score 10 (finding)"
            }
        ]
    }
];

export default ApgarScoreValue;
