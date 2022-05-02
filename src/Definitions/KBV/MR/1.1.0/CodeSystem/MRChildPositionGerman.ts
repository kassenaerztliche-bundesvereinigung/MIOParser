import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Child_Position_German
type MRChildPositionGerman = "Schaedellage" | "Beckenendlage" | "Querlage";

const MRChildPositionGerman: t.Type<MRChildPositionGerman> = t.union([
    t.literal("Schaedellage"),
    t.literal("Beckenendlage"),
    t.literal("Querlage")
]);

export const MRChildPositionGermanArray: string[] = [
    "Schaedellage",
    "Beckenendlage",
    "Querlage"
];

export default MRChildPositionGerman;
