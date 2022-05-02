import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_General_Information_German
type MRGeneralInformationGerman = "Embryodarstellbar" | "Herzaktion";

const MRGeneralInformationGerman: t.Type<MRGeneralInformationGerman> = t.union([
    t.literal("Embryodarstellbar"),
    t.literal("Herzaktion")
]);

export const MRGeneralInformationGermanArray: string[] = [
    "Embryodarstellbar",
    "Herzaktion"
];

export default MRGeneralInformationGerman;
