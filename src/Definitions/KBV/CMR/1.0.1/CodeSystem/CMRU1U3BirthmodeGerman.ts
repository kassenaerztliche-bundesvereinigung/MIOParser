import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U1_U3_Birthmode_German
type CMRU1U3BirthmodeGerman = "Spontan" | "Sectio" | "Vakuum" | "Forceps";

const CMRU1U3BirthmodeGerman: t.Type<CMRU1U3BirthmodeGerman> = t.union([
    t.literal("Spontan"),
    t.literal("Sectio"),
    t.literal("Vakuum"),
    t.literal("Forceps")
]);

export const CMRU1U3BirthmodeGermanArray: string[] = [
    "Spontan",
    "Sectio",
    "Vakuum",
    "Forceps"
];

export default CMRU1U3BirthmodeGerman;
