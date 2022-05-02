import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_U4_Physical_Exam_Mouth_Nose_German
type CMRU3U4PhysicalExamMouthNoseGerman =
    | "AuffaelligkeitenderSchleimhautunddesKieferkamms"
    | "KieferGaumenanomalie"
    | "Verletzungszeichen"
    | "abnormeGroessederZunge"
    | "behinderteNasenatmung"
    | "orofacialerHypotonus";

const CMRU3U4PhysicalExamMouthNoseGerman: t.Type<CMRU3U4PhysicalExamMouthNoseGerman> =
    t.union([
        t.literal("AuffaelligkeitenderSchleimhautunddesKieferkamms"),
        t.literal("KieferGaumenanomalie"),
        t.literal("Verletzungszeichen"),
        t.literal("abnormeGroessederZunge"),
        t.literal("behinderteNasenatmung"),
        t.literal("orofacialerHypotonus")
    ]);

export const CMRU3U4PhysicalExamMouthNoseGermanArray: string[] = [
    "AuffaelligkeitenderSchleimhautunddesKieferkamms",
    "KieferGaumenanomalie",
    "Verletzungszeichen",
    "abnormeGroessederZunge",
    "behinderteNasenatmung",
    "orofacialerHypotonus"
];

export default CMRU3U4PhysicalExamMouthNoseGerman;
