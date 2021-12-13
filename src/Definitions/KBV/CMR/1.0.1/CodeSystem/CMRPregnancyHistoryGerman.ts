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
