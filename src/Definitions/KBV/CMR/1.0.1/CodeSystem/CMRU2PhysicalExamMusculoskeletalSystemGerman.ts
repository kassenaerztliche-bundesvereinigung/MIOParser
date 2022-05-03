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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Musculoskeletal_System_German
type CMRU2PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "Muskeltonus"
    | "Opisthotonus"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "MoroReaktion"
    | "GalantReflex"
    | "Schreitautomatismus"
    | "klinischeFrakturzeichen";

const CMRU2PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU2PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("Muskeltonus"),
        t.literal("Opisthotonus"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("MoroReaktion"),
        t.literal("GalantReflex"),
        t.literal("Schreitautomatismus"),
        t.literal("klinischeFrakturzeichen")
    ]);

export const CMRU2PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "Muskeltonus",
    "Opisthotonus",
    "passiveBeweglichkeitdergrossenGelenke",
    "MoroReaktion",
    "GalantReflex",
    "Schreitautomatismus",
    "klinischeFrakturzeichen"
];

export default CMRU2PhysicalExamMusculoskeletalSystemGerman;
