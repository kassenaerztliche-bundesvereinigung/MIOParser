import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_U6_Physical_Exam_Head_German
type CMRU5U6PhysicalExamHeadGerman =
    | "Fehlhaltung"
    | "Dysmorphiezeichen"
    | "Schaedelnaehte"
    | "Fontanellentonus";

const CMRU5U6PhysicalExamHeadGerman: t.Type<CMRU5U6PhysicalExamHeadGerman> = t.union([
    t.literal("Fehlhaltung"),
    t.literal("Dysmorphiezeichen"),
    t.literal("Schaedelnaehte"),
    t.literal("Fontanellentonus")
]);

export const CMRU5U6PhysicalExamHeadGermanArray: string[] = [
    "Fehlhaltung",
    "Dysmorphiezeichen",
    "Schaedelnaehte",
    "Fontanellentonus"
];

export default CMRU5U6PhysicalExamHeadGerman;
