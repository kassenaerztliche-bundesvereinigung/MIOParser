import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Birth_Mode_German
type MRBirthModeGerman = "vagOperation" | "Sektio" | "Spontangeburt";

const MRBirthModeGerman: t.Type<MRBirthModeGerman> = t.union([
    t.literal("vagOperation"),
    t.literal("Sektio"),
    t.literal("Spontangeburt")
]);

export const MRBirthModeGermanArray: string[] = [
    "vagOperation",
    "Sektio",
    "Spontangeburt"
];

export default MRBirthModeGerman;
