import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_U6_Physical_Exam_Abdomen_Genitals_German
type CMRU5U6PhysicalExamAbdomenGenitalsGerman =
    | "Anomalien"
    | "Hodenhochstandrechtslinks"
    | "Hernien"
    | "LeberundMilzgroesse";

const CMRU5U6PhysicalExamAbdomenGenitalsGerman: t.Type<CMRU5U6PhysicalExamAbdomenGenitalsGerman> =
    t.union([
        t.literal("Anomalien"),
        t.literal("Hodenhochstandrechtslinks"),
        t.literal("Hernien"),
        t.literal("LeberundMilzgroesse")
    ]);

export const CMRU5U6PhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "Anomalien",
    "Hodenhochstandrechtslinks",
    "Hernien",
    "LeberundMilzgroesse"
];

export default CMRU5U6PhysicalExamAbdomenGenitalsGerman;
