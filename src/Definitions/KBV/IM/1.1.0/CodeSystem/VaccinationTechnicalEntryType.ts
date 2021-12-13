import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Technical_Entry_Type
type VaccinationTechnicalEntryType = "End" | "Eduai" | "Eduii";

const VaccinationTechnicalEntryType: t.Type<VaccinationTechnicalEntryType> = t.union([
    t.literal("End"),
    t.literal("Eduai"),
    t.literal("Eduii")
]);

export const VaccinationTechnicalEntryTypeArray: string[] = ["End", "Eduai", "Eduii"];

export default VaccinationTechnicalEntryType;
