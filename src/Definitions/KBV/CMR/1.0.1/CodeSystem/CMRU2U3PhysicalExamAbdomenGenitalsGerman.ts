import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U3_Physical_Exam_Abdomen_Genitals_German
type CMRU2U3PhysicalExamAbdomenGenitalsGerman =
    | "Anomalien"
    | "Nabelveraenderungen"
    | "LeberundMilzgroesse"
    | "Hernien";

const CMRU2U3PhysicalExamAbdomenGenitalsGerman: t.Type<CMRU2U3PhysicalExamAbdomenGenitalsGerman> =
    t.union([
        t.literal("Anomalien"),
        t.literal("Nabelveraenderungen"),
        t.literal("LeberundMilzgroesse"),
        t.literal("Hernien")
    ]);

export const CMRU2U3PhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "Anomalien",
    "Nabelveraenderungen",
    "LeberundMilzgroesse",
    "Hernien"
];

export default CMRU2U3PhysicalExamAbdomenGenitalsGerman;
