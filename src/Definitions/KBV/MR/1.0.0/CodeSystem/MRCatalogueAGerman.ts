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
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Catalogue_A_German
type MRCatalogueAGerman =
    | "FamiliaereBelastungzBDiabetesHypertonieFehlbildungengenetischeKrankheitenpsychischeKrankheiten"
    | "FruehereeigeneschwereErkrankungenzBHerzLungeLeberNierenZNSPsyche"
    | "BlutungsThromboseneigung"
    | "AllergiezBgegenMedikamente"
    | "FruehereBluttransfusionen"
    | "BesonderepsychischeBelastungzBfamiliaereoderberufliche"
    | "BesonderesozialeBelastungzBIntegrationsproblemewirtschaftlicheProbleme"
    | "RhesusInkompatibilitaetbeivorangegangenenSchwangerschaften"
    | "Diabetesmellitus"
    | "Adipositas"
    | "Kleinwuchs"
    | "Skelettanomalien"
    | "SchwangereunterJahren"
    | "SchwangereueberJahren"
    | "VielgebaerendemehralsKinder"
    | "ZustandnachSterilitaetsbehandlung"
    | "ZustandnachFruehgeburtvorEndederSSW"
    | "ZustandnachMangelgeburt"
    | "ZustandnachodermehrFehlgeburtenAbbruechen"
    | "TotesgeschaedigtesKindinderAnamnese"
    | "KomplikationenbeivorausgegangenenEntbindungen"
    | "Komplikationenpostpartum"
    | "ZustandnachSectio"
    | "ZustandnachanderenUterusoperationen"
    | "RascheSchwangerschaftsfolgewenigeralsJahr"
    | "AndereBesonderheiten";

const MRCatalogueAGerman: t.Type<MRCatalogueAGerman> = t.union([
    t.literal(
        "FamiliaereBelastungzBDiabetesHypertonieFehlbildungengenetischeKrankheitenpsychischeKrankheiten"
    ),
    t.literal("FruehereeigeneschwereErkrankungenzBHerzLungeLeberNierenZNSPsyche"),
    t.literal("BlutungsThromboseneigung"),
    t.literal("AllergiezBgegenMedikamente"),
    t.literal("FruehereBluttransfusionen"),
    t.literal("BesonderepsychischeBelastungzBfamiliaereoderberufliche"),
    t.literal("BesonderesozialeBelastungzBIntegrationsproblemewirtschaftlicheProbleme"),
    t.literal("RhesusInkompatibilitaetbeivorangegangenenSchwangerschaften"),
    t.literal("Diabetesmellitus"),
    t.literal("Adipositas"),
    t.literal("Kleinwuchs"),
    t.literal("Skelettanomalien"),
    t.literal("SchwangereunterJahren"),
    t.literal("SchwangereueberJahren"),
    t.literal("VielgebaerendemehralsKinder"),
    t.literal("ZustandnachSterilitaetsbehandlung"),
    t.literal("ZustandnachFruehgeburtvorEndederSSW"),
    t.literal("ZustandnachMangelgeburt"),
    t.literal("ZustandnachodermehrFehlgeburtenAbbruechen"),
    t.literal("TotesgeschaedigtesKindinderAnamnese"),
    t.literal("KomplikationenbeivorausgegangenenEntbindungen"),
    t.literal("Komplikationenpostpartum"),
    t.literal("ZustandnachSectio"),
    t.literal("ZustandnachanderenUterusoperationen"),
    t.literal("RascheSchwangerschaftsfolgewenigeralsJahr"),
    t.literal("AndereBesonderheiten")
]);

export const MRCatalogueAGermanArray: string[] = [
    "FamiliaereBelastungzBDiabetesHypertonieFehlbildungengenetischeKrankheitenpsychischeKrankheiten",
    "FruehereeigeneschwereErkrankungenzBHerzLungeLeberNierenZNSPsyche",
    "BlutungsThromboseneigung",
    "AllergiezBgegenMedikamente",
    "FruehereBluttransfusionen",
    "BesonderepsychischeBelastungzBfamiliaereoderberufliche",
    "BesonderesozialeBelastungzBIntegrationsproblemewirtschaftlicheProbleme",
    "RhesusInkompatibilitaetbeivorangegangenenSchwangerschaften",
    "Diabetesmellitus",
    "Adipositas",
    "Kleinwuchs",
    "Skelettanomalien",
    "SchwangereunterJahren",
    "SchwangereueberJahren",
    "VielgebaerendemehralsKinder",
    "ZustandnachSterilitaetsbehandlung",
    "ZustandnachFruehgeburtvorEndederSSW",
    "ZustandnachMangelgeburt",
    "ZustandnachodermehrFehlgeburtenAbbruechen",
    "TotesgeschaedigtesKindinderAnamnese",
    "KomplikationenbeivorausgegangenenEntbindungen",
    "Komplikationenpostpartum",
    "ZustandnachSectio",
    "ZustandnachanderenUterusoperationen",
    "RascheSchwangerschaftsfolgewenigeralsJahr",
    "AndereBesonderheiten"
];

export default MRCatalogueAGerman;
