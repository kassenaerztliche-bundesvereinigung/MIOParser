import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Head_German
type CMRU2PhysicalExamHeadGerman =
    | "Fehlhaltung"
    | "Dysmorphiezeichen"
    | "Schaedelnaehte"
    | "Kephalhaematom"
    | "Fontanellentonus"
    | "Crepitatiocapitis";

const CMRU2PhysicalExamHeadGerman: t.Type<CMRU2PhysicalExamHeadGerman> = t.union([
    t.literal("Fehlhaltung"),
    t.literal("Dysmorphiezeichen"),
    t.literal("Schaedelnaehte"),
    t.literal("Kephalhaematom"),
    t.literal("Fontanellentonus"),
    t.literal("Crepitatiocapitis")
]);

export const CMRU2PhysicalExamHeadGermanArray: string[] = [
    "Fehlhaltung",
    "Dysmorphiezeichen",
    "Schaedelnaehte",
    "Kephalhaematom",
    "Fontanellentonus",
    "Crepitatiocapitis"
];

export default CMRU2PhysicalExamHeadGerman;
