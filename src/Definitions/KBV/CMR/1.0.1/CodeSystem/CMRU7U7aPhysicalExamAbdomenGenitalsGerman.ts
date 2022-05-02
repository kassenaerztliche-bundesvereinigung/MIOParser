import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_U7a_Physical_Exam_Abdomen_Genitals_German
type CMRU7U7aPhysicalExamAbdomenGenitalsGerman =
    | "Hodenhochstandrechtslinks"
    | "Hernien"
    | "LeberundMilzgroesse";

const CMRU7U7aPhysicalExamAbdomenGenitalsGerman: t.Type<CMRU7U7aPhysicalExamAbdomenGenitalsGerman> =
    t.union([
        t.literal("Hodenhochstandrechtslinks"),
        t.literal("Hernien"),
        t.literal("LeberundMilzgroesse")
    ]);

export const CMRU7U7aPhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "Hodenhochstandrechtslinks",
    "Hernien",
    "LeberundMilzgroesse"
];

export default CMRU7U7aPhysicalExamAbdomenGenitalsGerman;
