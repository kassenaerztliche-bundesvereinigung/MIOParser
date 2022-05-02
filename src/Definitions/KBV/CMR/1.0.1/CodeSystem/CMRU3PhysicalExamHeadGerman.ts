import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Physical_Exam_Head_German
type CMRU3PhysicalExamHeadGerman =
    | "Fehlhaltung"
    | "Dysmorphiezeichen"
    | "Schaedelnaehte"
    | "Kephalhaematom"
    | "Fontanellentonus"
    | "Crepitatiocapitis"
    | "lagebedingteSchaedelasymmetrie";

const CMRU3PhysicalExamHeadGerman: t.Type<CMRU3PhysicalExamHeadGerman> = t.union([
    t.literal("Fehlhaltung"),
    t.literal("Dysmorphiezeichen"),
    t.literal("Schaedelnaehte"),
    t.literal("Kephalhaematom"),
    t.literal("Fontanellentonus"),
    t.literal("Crepitatiocapitis"),
    t.literal("lagebedingteSchaedelasymmetrie")
]);

export const CMRU3PhysicalExamHeadGermanArray: string[] = [
    "Fehlhaltung",
    "Dysmorphiezeichen",
    "Schaedelnaehte",
    "Kephalhaematom",
    "Fontanellentonus",
    "Crepitatiocapitis",
    "lagebedingteSchaedelasymmetrie"
];

export default CMRU3PhysicalExamHeadGerman;
