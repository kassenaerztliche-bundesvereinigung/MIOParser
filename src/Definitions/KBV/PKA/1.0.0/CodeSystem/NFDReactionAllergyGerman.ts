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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_NFD_Reaction_Allergy_German
type NFDReactionAllergyGerman =
    | "Anaphylaxie"
    | "AngioOedem"
    | "Asthma"
    | "AtopischeDermatitis"
    | "Bindehautentzuendung"
    | "Bronchospasmus"
    | "BulloeseEruption"
    | "Diarrhoee"
    | "Dyspnoe"
    | "Ekzem"
    | "EngeBrust"
    | "Erbrechen"
    | "Herzrhythmusstoerungen"
    | "Husten"
    | "JuckreizderHaut"
    | "KardiorespiratorischerStillstand"
    | "Krampfanfall"
    | "MedikamentenreaktionmitEosinophilieundsystemischenSymptomen"
    | "Niesen"
    | "OedemdesKehlkopfes"
    | "OkulaereHyperaemie"
    | "PapuloeseEruption"
    | "Rhinitis"
    | "Schwellung"
    | "StevensJohnsonSyndrom"
    | "TrockeneAugen"
    | "Uebelkeit"
    | "Urtikaria"
    | "Vaskulitis";

const NFDReactionAllergyGerman: t.Type<NFDReactionAllergyGerman> = t.union([
    t.literal("Anaphylaxie"),
    t.literal("AngioOedem"),
    t.literal("Asthma"),
    t.literal("AtopischeDermatitis"),
    t.literal("Bindehautentzuendung"),
    t.literal("Bronchospasmus"),
    t.literal("BulloeseEruption"),
    t.literal("Diarrhoee"),
    t.literal("Dyspnoe"),
    t.literal("Ekzem"),
    t.literal("EngeBrust"),
    t.literal("Erbrechen"),
    t.literal("Herzrhythmusstoerungen"),
    t.literal("Husten"),
    t.literal("JuckreizderHaut"),
    t.literal("KardiorespiratorischerStillstand"),
    t.literal("Krampfanfall"),
    t.literal("MedikamentenreaktionmitEosinophilieundsystemischenSymptomen"),
    t.literal("Niesen"),
    t.literal("OedemdesKehlkopfes"),
    t.literal("OkulaereHyperaemie"),
    t.literal("PapuloeseEruption"),
    t.literal("Rhinitis"),
    t.literal("Schwellung"),
    t.literal("StevensJohnsonSyndrom"),
    t.literal("TrockeneAugen"),
    t.literal("Uebelkeit"),
    t.literal("Urtikaria"),
    t.literal("Vaskulitis")
]);

export const NFDReactionAllergyGermanArray: string[] = [
    "Anaphylaxie",
    "AngioOedem",
    "Asthma",
    "AtopischeDermatitis",
    "Bindehautentzuendung",
    "Bronchospasmus",
    "BulloeseEruption",
    "Diarrhoee",
    "Dyspnoe",
    "Ekzem",
    "EngeBrust",
    "Erbrechen",
    "Herzrhythmusstoerungen",
    "Husten",
    "JuckreizderHaut",
    "KardiorespiratorischerStillstand",
    "Krampfanfall",
    "MedikamentenreaktionmitEosinophilieundsystemischenSymptomen",
    "Niesen",
    "OedemdesKehlkopfes",
    "OkulaereHyperaemie",
    "PapuloeseEruption",
    "Rhinitis",
    "Schwellung",
    "StevensJohnsonSyndrom",
    "TrockeneAugen",
    "Uebelkeit",
    "Urtikaria",
    "Vaskulitis"
];

export default NFDReactionAllergyGerman;
