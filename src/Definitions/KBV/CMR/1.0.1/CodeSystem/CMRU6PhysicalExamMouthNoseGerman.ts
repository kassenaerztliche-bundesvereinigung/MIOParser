import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Physical_Exam_Mouth_Nose_German
type CMRU6PhysicalExamMouthNoseGerman =
    | "Verletzungszeichen"
    | "fehlenderMundschluss"
    | "AuffaelligkeitenanZaehnenundSchleimhaeuten"
    | "behinderteNasenatmung"
    | "auffaelligerStimmklangzBHeiserkeitundNaeseln";

const CMRU6PhysicalExamMouthNoseGerman: t.Type<CMRU6PhysicalExamMouthNoseGerman> =
    t.union([
        t.literal("Verletzungszeichen"),
        t.literal("fehlenderMundschluss"),
        t.literal("AuffaelligkeitenanZaehnenundSchleimhaeuten"),
        t.literal("behinderteNasenatmung"),
        t.literal("auffaelligerStimmklangzBHeiserkeitundNaeseln")
    ]);

export const CMRU6PhysicalExamMouthNoseGermanArray: string[] = [
    "Verletzungszeichen",
    "fehlenderMundschluss",
    "AuffaelligkeitenanZaehnenundSchleimhaeuten",
    "behinderteNasenatmung",
    "auffaelligerStimmklangzBHeiserkeitundNaeseln"
];

export default CMRU6PhysicalExamMouthNoseGerman;
