import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Physical_Exam_Head_German
type CMRU4PhysicalExamHeadGerman =
    | "Fehlhaltung"
    | "Dysmorphiezeichen"
    | "Schaedelnaehte"
    | "Kephalhaematom"
    | "Fontanellentonus";

const CMRU4PhysicalExamHeadGerman: t.Type<CMRU4PhysicalExamHeadGerman> = t.union([
    t.literal("Fehlhaltung"),
    t.literal("Dysmorphiezeichen"),
    t.literal("Schaedelnaehte"),
    t.literal("Kephalhaematom"),
    t.literal("Fontanellentonus")
]);

export const CMRU4PhysicalExamHeadGermanArray: string[] = [
    "Fehlhaltung",
    "Dysmorphiezeichen",
    "Schaedelnaehte",
    "Kephalhaematom",
    "Fontanellentonus"
];

export default CMRU4PhysicalExamHeadGerman;
