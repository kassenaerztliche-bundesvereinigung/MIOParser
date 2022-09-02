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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_Base_Reaction_Allergy_German
type ReactionAllergyGerman =
    | "Anaphylaxie"
    | "Angiooedem"
    | "ArzneimittelreaktionmitEosinophilieundsystemischenSymptomen"
    | "Asthmabronchiale"
    | "AtopischeDermatitis"
    | "Bronchospasmus"
    | "BulloeseHauteruption"
    | "Diarrhoe"
    | "Dyspnoe"
    | "Ekzem"
    | "EngegefuehlinderBrust"
    | "EpileptischerAnfall"
    | "Erbrechen"
    | "Hautjucken"
    | "Husten"
    | "KardialeArrhythmien"
    | "KardiorespiratorischerStillstand"
    | "Konjunktivitis"
    | "Larynxoedem"
    | "Niesen"
    | "OkulareHyperaemie"
    | "PapuloeseHauteruption"
    | "Quaddel"
    | "Rhinitis"
    | "StevensJohnsonSyndrom"
    | "TrockeneAugen"
    | "Uebelkeit"
    | "Urtikaria"
    | "Vaskulitis";

const ReactionAllergyGerman: t.Type<ReactionAllergyGerman> = t.union([
    t.literal("Anaphylaxie"),
    t.literal("Angiooedem"),
    t.literal("ArzneimittelreaktionmitEosinophilieundsystemischenSymptomen"),
    t.literal("Asthmabronchiale"),
    t.literal("AtopischeDermatitis"),
    t.literal("Bronchospasmus"),
    t.literal("BulloeseHauteruption"),
    t.literal("Diarrhoe"),
    t.literal("Dyspnoe"),
    t.literal("Ekzem"),
    t.literal("EngegefuehlinderBrust"),
    t.literal("EpileptischerAnfall"),
    t.literal("Erbrechen"),
    t.literal("Hautjucken"),
    t.literal("Husten"),
    t.literal("KardialeArrhythmien"),
    t.literal("KardiorespiratorischerStillstand"),
    t.literal("Konjunktivitis"),
    t.literal("Larynxoedem"),
    t.literal("Niesen"),
    t.literal("OkulareHyperaemie"),
    t.literal("PapuloeseHauteruption"),
    t.literal("Quaddel"),
    t.literal("Rhinitis"),
    t.literal("StevensJohnsonSyndrom"),
    t.literal("TrockeneAugen"),
    t.literal("Uebelkeit"),
    t.literal("Urtikaria"),
    t.literal("Vaskulitis")
]);

export const ReactionAllergyGermanArray: string[] = [
    "Anaphylaxie",
    "Angiooedem",
    "ArzneimittelreaktionmitEosinophilieundsystemischenSymptomen",
    "Asthmabronchiale",
    "AtopischeDermatitis",
    "Bronchospasmus",
    "BulloeseHauteruption",
    "Diarrhoe",
    "Dyspnoe",
    "Ekzem",
    "EngegefuehlinderBrust",
    "EpileptischerAnfall",
    "Erbrechen",
    "Hautjucken",
    "Husten",
    "KardialeArrhythmien",
    "KardiorespiratorischerStillstand",
    "Konjunktivitis",
    "Larynxoedem",
    "Niesen",
    "OkulareHyperaemie",
    "PapuloeseHauteruption",
    "Quaddel",
    "Rhinitis",
    "StevensJohnsonSyndrom",
    "TrockeneAugen",
    "Uebelkeit",
    "Urtikaria",
    "Vaskulitis"
];

export default ReactionAllergyGerman;
