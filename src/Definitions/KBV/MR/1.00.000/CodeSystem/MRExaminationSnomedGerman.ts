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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Examination_Snomed_German
type MRExaminationSnomedGerman =
    | "Laboruntersuchungunspezifisch"
    | "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis"
    | "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter"
    | "RoetelnVirusAntikoerperimSerumNachweis"
    | "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen"
    | "RoetelnVirusAntikoerperimSerumTiter"
    | "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis"
    | "HBsAntigenimSerumNachweis"
    | "HaemoglobinimBlutMasseproVolumen"
    | "HaemoglobinimBlutMolproVolumen"
    | "ErythrozytenimBlutAnzahlproVolumen"
    | "LaboruntersuchungLSR";

const MRExaminationSnomedGerman: t.Type<MRExaminationSnomedGerman> = t.union([
    t.literal("Laboruntersuchungunspezifisch"),
    t.literal("BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis"),
    t.literal("BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter"),
    t.literal("RoetelnVirusAntikoerperimSerumNachweis"),
    t.literal("RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen"),
    t.literal("RoetelnVirusAntikoerperimSerumTiter"),
    t.literal(
        "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis"
    ),
    t.literal("HBsAntigenimSerumNachweis"),
    t.literal("HaemoglobinimBlutMasseproVolumen"),
    t.literal("HaemoglobinimBlutMolproVolumen"),
    t.literal("ErythrozytenimBlutAnzahlproVolumen"),
    t.literal("LaboruntersuchungLSR")
]);

export const MRExaminationSnomedGermanArray: string[] = [
    "Laboruntersuchungunspezifisch",
    "BlutgruppenAntikoerperSuchtestimSerumPlasmaNachweis",
    "BlutgruppenAntikoerperSuchtestimSerumPlasmaTiter",
    "RoetelnVirusAntikoerperimSerumNachweis",
    "RoetelnVirusAntikoerperimSerumKonzentrationIEproVolumen",
    "RoetelnVirusAntikoerperimSerumTiter",
    "ChlamydiatrachomatisDNAauseinerUrinprobemittelsNukleinsaeureamplifizierendemTestNATNachweis",
    "HBsAntigenimSerumNachweis",
    "HaemoglobinimBlutMasseproVolumen",
    "HaemoglobinimBlutMolproVolumen",
    "ErythrozytenimBlutAnzahlproVolumen",
    "LaboruntersuchungLSR"
];

export default MRExaminationSnomedGerman;
