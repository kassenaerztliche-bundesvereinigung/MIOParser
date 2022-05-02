import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Foetal_Position_German
type CMRFoetalPositionGerman = "Schaedellage" | "Beckenendlage" | "Querlage";

const CMRFoetalPositionGerman: t.Type<CMRFoetalPositionGerman> = t.union([
    t.literal("Schaedellage"),
    t.literal("Beckenendlage"),
    t.literal("Querlage")
]);

export const CMRFoetalPositionGermanArray: string[] = [
    "Schaedellage",
    "Beckenendlage",
    "Querlage"
];

export default CMRFoetalPositionGerman;
