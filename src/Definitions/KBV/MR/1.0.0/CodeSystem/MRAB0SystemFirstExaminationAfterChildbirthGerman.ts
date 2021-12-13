import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_AB0_System_First_Examination_After_Childbirth_German
type MRAB0SystemFirstExaminationAfterChildbirthGerman = "A" | "B" | "AB" | "0";

const MRAB0SystemFirstExaminationAfterChildbirthGerman: t.Type<MRAB0SystemFirstExaminationAfterChildbirthGerman> =
    t.union([t.literal("A"), t.literal("B"), t.literal("AB"), t.literal("0")]);

export const MRAB0SystemFirstExaminationAfterChildbirthGermanArray: string[] = [
    "A",
    "B",
    "AB",
    "0"
];

export default MRAB0SystemFirstExaminationAfterChildbirthGerman;
