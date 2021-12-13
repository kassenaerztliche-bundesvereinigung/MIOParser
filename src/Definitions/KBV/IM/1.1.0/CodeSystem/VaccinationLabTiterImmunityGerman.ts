import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_Titer_Immunity_German
type VaccinationLabTiterImmunityGerman = "Positiv" | "Negativ";

const VaccinationLabTiterImmunityGerman: t.Type<VaccinationLabTiterImmunityGerman> =
    t.union([t.literal("Positiv"), t.literal("Negativ")]);

export const VaccinationLabTiterImmunityGermanArray: string[] = ["Positiv", "Negativ"];

export default VaccinationLabTiterImmunityGerman;
