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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Snomed

type BodyWeightSnomed =
    | "1162421003"
    | "1162420002"
    | "1162414003"
    | "1162388008"
    | "784399000"
    | "735395000"
    | "445541000"
    | "443245006"
    | "425024002"
    | "424927000"
    | "400967004"
    | "364589006"
    | "363808001"
    | "248351003"
    | "27113001";

const BodyWeightSnomed: t.Type<BodyWeightSnomed> = t.union(
    [
        t.literal("1162421003"),
        t.literal("1162420002"),
        t.literal("1162414003"),
        t.literal("1162388008"),
        t.literal("784399000"),
        t.literal("735395000"),
        t.literal("445541000"),
        t.literal("443245006"),
        t.literal("425024002"),
        t.literal("424927000"),
        t.literal("400967004"),
        t.literal("364589006"),
        t.literal("363808001"),
        t.literal("248351003"),
        t.literal("27113001")
    ],
    "BodyWeightSnomed"
);

export const BodyWeightSnomedArray: string[] = [
    "1162421003",
    "1162420002",
    "1162414003",
    "1162388008",
    "784399000",
    "735395000",
    "445541000",
    "443245006",
    "425024002",
    "424927000",
    "400967004",
    "364589006",
    "363808001",
    "248351003",
    "27113001"
];

export const BodyWeightSnomedValueSet: ValueSet = [];

export default BodyWeightSnomed;
