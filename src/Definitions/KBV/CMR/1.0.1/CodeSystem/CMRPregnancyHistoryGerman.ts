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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Pregnancy_History_German
type CMRPregnancyHistoryGerman =
    | "Gestationsdiabetes"
    | "Diabetesmellitus"
    | "Dauermedikation"
    | "akuteoderchronischeInfektioneninderSchwangerschaft"
    | "AntikoerperSuchtestpositiv"
    | "BStreptokokkenStatusderMutterpositiv"
    | "Mehrlingsschwangerschaft"
    | "PolyHydramnion"
    | "Oligohydramnion"
    | "besonderepsychischeBelastungen"
    | "besonderesozialeBelastungen"
    | "Abusus";

const CMRPregnancyHistoryGerman: t.Type<CMRPregnancyHistoryGerman> = t.union([
    t.literal("Gestationsdiabetes"),
    t.literal("Diabetesmellitus"),
    t.literal("Dauermedikation"),
    t.literal("akuteoderchronischeInfektioneninderSchwangerschaft"),
    t.literal("AntikoerperSuchtestpositiv"),
    t.literal("BStreptokokkenStatusderMutterpositiv"),
    t.literal("Mehrlingsschwangerschaft"),
    t.literal("PolyHydramnion"),
    t.literal("Oligohydramnion"),
    t.literal("besonderepsychischeBelastungen"),
    t.literal("besonderesozialeBelastungen"),
    t.literal("Abusus")
]);

export const CMRPregnancyHistoryGermanArray: string[] = [
    "Gestationsdiabetes",
    "Diabetesmellitus",
    "Dauermedikation",
    "akuteoderchronischeInfektioneninderSchwangerschaft",
    "AntikoerperSuchtestpositiv",
    "BStreptokokkenStatusderMutterpositiv",
    "Mehrlingsschwangerschaft",
    "PolyHydramnion",
    "Oligohydramnion",
    "besonderepsychischeBelastungen",
    "besonderesozialeBelastungen",
    "Abusus"
];

export default CMRPregnancyHistoryGerman;
