import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Physical_Exam_Abdomen_Genitals_German
type CMRU8PhysicalExamAbdomenGenitalsGerman =
    | "Hodenhochstandrechtslinks"
    | "Hernien"
    | "LeberundMilzgroesse"
    | "auffaelligerHarnbefundMehrfachteststreifen";

const CMRU8PhysicalExamAbdomenGenitalsGerman: t.Type<CMRU8PhysicalExamAbdomenGenitalsGerman> =
    t.union([
        t.literal("Hodenhochstandrechtslinks"),
        t.literal("Hernien"),
        t.literal("LeberundMilzgroesse"),
        t.literal("auffaelligerHarnbefundMehrfachteststreifen")
    ]);

export const CMRU8PhysicalExamAbdomenGenitalsGermanArray: string[] = [
    "Hodenhochstandrechtslinks",
    "Hernien",
    "LeberundMilzgroesse",
    "auffaelligerHarnbefundMehrfachteststreifen"
];

export default CMRU8PhysicalExamAbdomenGenitalsGerman;
