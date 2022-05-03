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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Examination_Number_German
type CMRExaminationNumberGerman =
    | "U1Geburt"
    | "U2310Lebenstag"
    | "U345Lebenswoche"
    | "U434Lebensmonat"
    | "U567Lebensmonat"
    | "U61012Lebensmonat"
    | "U72124Lebensmonat"
    | "U7a3436Lebensmonat"
    | "U84648Lebensmonat"
    | "U96064Lebensmonat"
    | "ScreeningaufMukoviszidose"
    | "ErweitertesNeugeborenenScreening"
    | "ScreeningaufHueftgelenksdysplasieundluxation"
    | "Hoerscreening"
    | "Perzentilkurven"
    | "PulsoxymetrieScreeningMessungamFuss";

const CMRExaminationNumberGerman: t.Type<CMRExaminationNumberGerman> = t.union([
    t.literal("U1Geburt"),
    t.literal("U2310Lebenstag"),
    t.literal("U345Lebenswoche"),
    t.literal("U434Lebensmonat"),
    t.literal("U567Lebensmonat"),
    t.literal("U61012Lebensmonat"),
    t.literal("U72124Lebensmonat"),
    t.literal("U7a3436Lebensmonat"),
    t.literal("U84648Lebensmonat"),
    t.literal("U96064Lebensmonat"),
    t.literal("ScreeningaufMukoviszidose"),
    t.literal("ErweitertesNeugeborenenScreening"),
    t.literal("ScreeningaufHueftgelenksdysplasieundluxation"),
    t.literal("Hoerscreening"),
    t.literal("Perzentilkurven"),
    t.literal("PulsoxymetrieScreeningMessungamFuss")
]);

export const CMRExaminationNumberGermanArray: string[] = [
    "U1Geburt",
    "U2310Lebenstag",
    "U345Lebenswoche",
    "U434Lebensmonat",
    "U567Lebensmonat",
    "U61012Lebensmonat",
    "U72124Lebensmonat",
    "U7a3436Lebensmonat",
    "U84648Lebensmonat",
    "U96064Lebensmonat",
    "ScreeningaufMukoviszidose",
    "ErweitertesNeugeborenenScreening",
    "ScreeningaufHueftgelenksdysplasieundluxation",
    "Hoerscreening",
    "Perzentilkurven",
    "PulsoxymetrieScreeningMessungamFuss"
];

export default CMRExaminationNumberGerman;
