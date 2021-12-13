import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Gender_Birth_German
type CMRGenderBirthGerman = "W" | "M" | "X";

const CMRGenderBirthGerman: t.Type<CMRGenderBirthGerman> = t.union([
    t.literal("W"),
    t.literal("M"),
    t.literal("X")
]);

export const CMRGenderBirthGermanArray: string[] = ["W", "M", "X"];

export default CMRGenderBirthGerman;
