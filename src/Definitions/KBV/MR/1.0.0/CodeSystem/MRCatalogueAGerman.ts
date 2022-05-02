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
