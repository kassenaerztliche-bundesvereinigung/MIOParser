import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_AB0_System_German
type MRAB0SystemGerman = "A" | "B" | "AB" | "0" | "hBombay";

const MRAB0SystemGerman: t.Type<MRAB0SystemGerman> = t.union([
    t.literal("A"),
    t.literal("B"),
    t.literal("AB"),
    t.literal("0"),
    t.literal("hBombay")
]);

export const MRAB0SystemGermanArray: string[] = ["A", "B", "AB", "0", "hBombay"];

export default MRAB0SystemGerman;
