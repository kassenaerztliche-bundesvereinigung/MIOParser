import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Physical_Exam_Mouth_Nose_German
type CMRU7aPhysicalExamMouthNoseGerman =
    | "AuffaelligkeitenanZaehnenundSchleimhaut"
    | "Verletzungszeichen"
    | "Kieferanomalie"
    | "fehlenderMundschluss"
    | "behinderteNasenatmung";

const CMRU7aPhysicalExamMouthNoseGerman: t.Type<CMRU7aPhysicalExamMouthNoseGerman> =
    t.union([
        t.literal("AuffaelligkeitenanZaehnenundSchleimhaut"),
        t.literal("Verletzungszeichen"),
        t.literal("Kieferanomalie"),
        t.literal("fehlenderMundschluss"),
        t.literal("behinderteNasenatmung")
    ]);

export const CMRU7aPhysicalExamMouthNoseGermanArray: string[] = [
    "AuffaelligkeitenanZaehnenundSchleimhaut",
    "Verletzungszeichen",
    "Kieferanomalie",
    "fehlenderMundschluss",
    "behinderteNasenatmung"
];

export default CMRU7aPhysicalExamMouthNoseGerman;
