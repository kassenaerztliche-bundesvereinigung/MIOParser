import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_U9_Age_Appropriate_Development_German
type CMRU3U9AgeAppropriateDevelopmentGerman =
    | "altersgemaesseEntwicklung"
    | "nichtaltersgemaesseEntwicklung";

const CMRU3U9AgeAppropriateDevelopmentGerman: t.Type<CMRU3U9AgeAppropriateDevelopmentGerman> =
    t.union([
        t.literal("altersgemaesseEntwicklung"),
        t.literal("nichtaltersgemaesseEntwicklung")
    ]);

export const CMRU3U9AgeAppropriateDevelopmentGermanArray: string[] = [
    "altersgemaesseEntwicklung",
    "nichtaltersgemaesseEntwicklung"
];

export default CMRU3U9AgeAppropriateDevelopmentGerman;
