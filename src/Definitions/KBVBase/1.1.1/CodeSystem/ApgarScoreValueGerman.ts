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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Apgar_Score_Value_German
type ApgarScoreValueGerman =
    | "Apgar0"
    | "Apgar1"
    | "Apgar2"
    | "Apgar3"
    | "Apgar4"
    | "Apgar5"
    | "Apgar6"
    | "Apgar7"
    | "Apgar8"
    | "Apgar9"
    | "Apgar10";

const ApgarScoreValueGerman: t.Type<ApgarScoreValueGerman> = t.union([
    t.literal("Apgar0"),
    t.literal("Apgar1"),
    t.literal("Apgar2"),
    t.literal("Apgar3"),
    t.literal("Apgar4"),
    t.literal("Apgar5"),
    t.literal("Apgar6"),
    t.literal("Apgar7"),
    t.literal("Apgar8"),
    t.literal("Apgar9"),
    t.literal("Apgar10")
]);

export const ApgarScoreValueGermanArray: string[] = [
    "Apgar0",
    "Apgar1",
    "Apgar2",
    "Apgar3",
    "Apgar4",
    "Apgar5",
    "Apgar6",
    "Apgar7",
    "Apgar8",
    "Apgar9",
    "Apgar10"
];

export default ApgarScoreValueGerman;
