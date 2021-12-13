import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_Physical_Exam_Mouth_Nose_German
type CMRU7PhysicalExamMouthNoseGerman =
    | "AuffaelligkeitenanZaehnenundSchleimhaut"
    | "Verletzungszeichen"
    | "Speichelfluss"
    | "auffaelligerStimmklang";

const CMRU7PhysicalExamMouthNoseGerman: t.Type<CMRU7PhysicalExamMouthNoseGerman> =
    t.union([
        t.literal("AuffaelligkeitenanZaehnenundSchleimhaut"),
        t.literal("Verletzungszeichen"),
        t.literal("Speichelfluss"),
        t.literal("auffaelligerStimmklang")
    ]);

export const CMRU7PhysicalExamMouthNoseGermanArray: string[] = [
    "AuffaelligkeitenanZaehnenundSchleimhaut",
    "Verletzungszeichen",
    "Speichelfluss",
    "auffaelligerStimmklang"
];

export default CMRU7PhysicalExamMouthNoseGerman;
