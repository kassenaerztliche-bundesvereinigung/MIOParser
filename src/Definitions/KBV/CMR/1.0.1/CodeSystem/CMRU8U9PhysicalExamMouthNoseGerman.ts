import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_U9_Physical_Exam_Mouth_Nose_German
type CMRU8U9PhysicalExamMouthNoseGerman =
    | "AuffaelligkeitenanZaehnenundSchleimhaut"
    | "Kieferanomalie"
    | "Verletzungszeichen";

const CMRU8U9PhysicalExamMouthNoseGerman: t.Type<CMRU8U9PhysicalExamMouthNoseGerman> =
    t.union([
        t.literal("AuffaelligkeitenanZaehnenundSchleimhaut"),
        t.literal("Kieferanomalie"),
        t.literal("Verletzungszeichen")
    ]);

export const CMRU8U9PhysicalExamMouthNoseGermanArray: string[] = [
    "AuffaelligkeitenanZaehnenundSchleimhaut",
    "Kieferanomalie",
    "Verletzungszeichen"
];

export default CMRU8U9PhysicalExamMouthNoseGerman;
