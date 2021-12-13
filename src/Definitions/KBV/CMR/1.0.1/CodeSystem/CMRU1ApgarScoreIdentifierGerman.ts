import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U1_Apgar_Score_Identifier_German
type CMRU1ApgarScoreIdentifierGerman =
    | "ApgarzumZeitpunkt10MinnachGeburt"
    | "ApgarzumZeitpunkt5MinnachGeburt";

const CMRU1ApgarScoreIdentifierGerman: t.Type<CMRU1ApgarScoreIdentifierGerman> = t.union([
    t.literal("ApgarzumZeitpunkt10MinnachGeburt"),
    t.literal("ApgarzumZeitpunkt5MinnachGeburt")
]);

export const CMRU1ApgarScoreIdentifierGermanArray: string[] = [
    "ApgarzumZeitpunkt10MinnachGeburt",
    "ApgarzumZeitpunkt5MinnachGeburt"
];

export default CMRU1ApgarScoreIdentifierGerman;
