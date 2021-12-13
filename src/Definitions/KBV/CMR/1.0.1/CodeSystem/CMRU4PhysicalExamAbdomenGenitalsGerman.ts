import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Physical_Exam_Abdomen_Genitals_German
type CMRU4PhysicalExamAbdomenGenitalsGerman =
    | "Anomalien"
    | "LeberundMilzgroesse"
    | "Hernien";

const CMRU4PhysicalExamAbdomenGenitalsGerman: t.Type<CMRU4PhysicalExamAbdomenGenitalsGerman> =
    t.union([
        t.literal("Anomalien"),
        t.literal("LeberundMilzgroesse"),
        t.literal("Hernien")
    ]);

export const CMRU4PhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "Anomalien",
    "LeberundMilzgroesse",
    "Hernien"
];

export default CMRU4PhysicalExamAbdomenGenitalsGerman;
