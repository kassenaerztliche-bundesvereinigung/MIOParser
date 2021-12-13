import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Source_of_Information_German
type VaccinationSourceofInformationGerman =
    | "Unbekannt"
    | "SonstigePerson"
    | "Angehoeriger"
    | "ArztAerztin"
    | "Patient";

const VaccinationSourceofInformationGerman: t.Type<VaccinationSourceofInformationGerman> =
    t.union([
        t.literal("Unbekannt"),
        t.literal("SonstigePerson"),
        t.literal("Angehoeriger"),
        t.literal("ArztAerztin"),
        t.literal("Patient")
    ]);

export const VaccinationSourceofInformationGermanArray: string[] = [
    "Unbekannt",
    "SonstigePerson",
    "Angehoeriger",
    "ArztAerztin",
    "Patient"
];

export default VaccinationSourceofInformationGerman;
