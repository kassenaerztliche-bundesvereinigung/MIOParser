import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U9_Physical_Exam_Abdomen_Genitals_German
type CMRU9PhysicalExamAbdomenGenitalsGerman = "LeberundMilzgroesse" | "Hernien";

const CMRU9PhysicalExamAbdomenGenitalsGerman: t.Type<CMRU9PhysicalExamAbdomenGenitalsGerman> =
    t.union([t.literal("LeberundMilzgroesse"), t.literal("Hernien")]);

export const CMRU9PhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "LeberundMilzgroesse",
    "Hernien"
];

export default CMRU9PhysicalExamAbdomenGenitalsGerman;
