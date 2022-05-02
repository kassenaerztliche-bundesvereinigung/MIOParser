import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Birth_Mode_German
type MRBirthModeGerman = "vaginaloperativ" | "Sektio" | "Spontangeburt";

const MRBirthModeGerman: t.Type<MRBirthModeGerman> = t.union([
    t.literal("vaginaloperativ"),
    t.literal("Sektio"),
    t.literal("Spontangeburt")
]);

export const MRBirthModeGermanArray: string[] = [
    "vaginaloperativ",
    "Sektio",
    "Spontangeburt"
];

export default MRBirthModeGerman;
