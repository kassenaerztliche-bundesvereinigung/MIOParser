import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Heart_Sounds_Child_German
type MRHeartSoundsChildGerman = "+" | "o";

const MRHeartSoundsChildGerman: t.Type<MRHeartSoundsChildGerman> = t.union([
    t.literal("+"),
    t.literal("o")
]);

export const MRHeartSoundsChildGermanArray: string[] = ["+", "o"];

export default MRHeartSoundsChildGerman;
