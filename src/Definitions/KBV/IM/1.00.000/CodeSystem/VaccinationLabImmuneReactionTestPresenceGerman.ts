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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_German
type VaccinationLabImmuneReactionTestPresenceGerman =
    | "Varizellen-Antikoerpernachweis"
    | "Tetanus-Antikoerpernachweis"
    | "Polio-Antikoerpernachweis"
    | "Pertussis-Antikoerpernachweis"
    | "Mumps-Antikoerpernachweis"
    | "Meningokokken-Antikoerpernachweis"
    | "Masern-Antikoerpernachweis"
    | "Haemophilus-influenzae-B-Antikoerpernachweis"
    | "Hepatitis-B-Antikoerpernachweis"
    | "Hepatitis-A-Antikoerpernachweis"
    | "Diphtherie-Antikoerpernachweis"
    | "Röteln-Antikoerpernachweis"
    | "Tuberkulose-Mendel-Mantoux-Test-positiv"
    | "Tuberkulose-Mendel-Mantoux-Test-negativ"
    | "Tuberkulose-Interferon-gamma-assay-positiv"
    | "Tuberkulose-Interferon-gamma-assay-negativ";

const VaccinationLabImmuneReactionTestPresenceGerman: t.Type<VaccinationLabImmuneReactionTestPresenceGerman> = t.union(
    [
        t.literal("Varizellen-Antikoerpernachweis"),
        t.literal("Tetanus-Antikoerpernachweis"),
        t.literal("Polio-Antikoerpernachweis"),
        t.literal("Pertussis-Antikoerpernachweis"),
        t.literal("Mumps-Antikoerpernachweis"),
        t.literal("Meningokokken-Antikoerpernachweis"),
        t.literal("Masern-Antikoerpernachweis"),
        t.literal("Haemophilus-influenzae-B-Antikoerpernachweis"),
        t.literal("Hepatitis-B-Antikoerpernachweis"),
        t.literal("Hepatitis-A-Antikoerpernachweis"),
        t.literal("Diphtherie-Antikoerpernachweis"),
        t.literal("Röteln-Antikoerpernachweis"),
        t.literal("Tuberkulose-Mendel-Mantoux-Test-positiv"),
        t.literal("Tuberkulose-Mendel-Mantoux-Test-negativ"),
        t.literal("Tuberkulose-Interferon-gamma-assay-positiv"),
        t.literal("Tuberkulose-Interferon-gamma-assay-negativ")
    ]
);

export const VaccinationLabImmuneReactionTestPresenceGermanArray: string[] = [
    "Varizellen-Antikoerpernachweis",
    "Tetanus-Antikoerpernachweis",
    "Polio-Antikoerpernachweis",
    "Pertussis-Antikoerpernachweis",
    "Mumps-Antikoerpernachweis",
    "Meningokokken-Antikoerpernachweis",
    "Masern-Antikoerpernachweis",
    "Haemophilus-influenzae-B-Antikoerpernachweis",
    "Hepatitis-B-Antikoerpernachweis",
    "Hepatitis-A-Antikoerpernachweis",
    "Diphtherie-Antikoerpernachweis",
    "Röteln-Antikoerpernachweis",
    "Tuberkulose-Mendel-Mantoux-Test-positiv",
    "Tuberkulose-Mendel-Mantoux-Test-negativ",
    "Tuberkulose-Interferon-gamma-assay-positiv",
    "Tuberkulose-Interferon-gamma-assay-negativ"
];

export default VaccinationLabImmuneReactionTestPresenceGerman;
