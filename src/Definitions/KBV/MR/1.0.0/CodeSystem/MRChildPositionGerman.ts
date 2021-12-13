import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Child_Position_German
type MRChildPositionGerman = "Querlage" | "Beckenendlage" | "Schaedellage";

const MRChildPositionGerman: t.Type<MRChildPositionGerman> = t.union([
    t.literal("Querlage"),
    t.literal("Beckenendlage"),
    t.literal("Schaedellage")
]);

export const MRChildPositionGermanArray: string[] = [
    "Querlage",
    "Beckenendlage",
    "Schaedellage"
];

export default MRChildPositionGerman;
