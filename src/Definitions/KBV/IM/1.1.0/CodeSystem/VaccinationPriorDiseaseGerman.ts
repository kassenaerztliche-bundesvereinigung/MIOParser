import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Prior_Disease_German
type VaccinationPriorDiseaseGerman =
    | "Infektionskrankheitunspezifiziert"
    | "HepatitisB"
    | "HepatitisA"
    | "PertussisKeuchhusten"
    | "Mumps"
    | "Masern"
    | "VarizellenWindpocken"
    | "Roeteln"
    | "FSMEZentraleuropaeischeFruehsommerMeningoenzephalitis"
    | "Gelbfieber";

const VaccinationPriorDiseaseGerman: t.Type<VaccinationPriorDiseaseGerman> = t.union([
    t.literal("Infektionskrankheitunspezifiziert"),
    t.literal("HepatitisB"),
    t.literal("HepatitisA"),
    t.literal("PertussisKeuchhusten"),
    t.literal("Mumps"),
    t.literal("Masern"),
    t.literal("VarizellenWindpocken"),
    t.literal("Roeteln"),
    t.literal("FSMEZentraleuropaeischeFruehsommerMeningoenzephalitis"),
    t.literal("Gelbfieber")
]);

export const VaccinationPriorDiseaseGermanArray: string[] = [
    "Infektionskrankheitunspezifiziert",
    "HepatitisB",
    "HepatitisA",
    "PertussisKeuchhusten",
    "Mumps",
    "Masern",
    "VarizellenWindpocken",
    "Roeteln",
    "FSMEZentraleuropaeischeFruehsommerMeningoenzephalitis",
    "Gelbfieber"
];

export default VaccinationPriorDiseaseGerman;
