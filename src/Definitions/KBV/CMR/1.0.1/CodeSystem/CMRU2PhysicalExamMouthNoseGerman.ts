import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Mouth_Nose_German
type CMRU2PhysicalExamMouthNoseGerman =
    | "AuffaelligkeitenderSchleimhautunddesKieferkamms"
    | "KieferGaumenanomalie"
    | "Verletzungszeichen"
    | "abnormeGroessederZunge"
    | "behinderteNasenatmung";

const CMRU2PhysicalExamMouthNoseGerman: t.Type<CMRU2PhysicalExamMouthNoseGerman> =
    t.union([
        t.literal("AuffaelligkeitenderSchleimhautunddesKieferkamms"),
        t.literal("KieferGaumenanomalie"),
        t.literal("Verletzungszeichen"),
        t.literal("abnormeGroessederZunge"),
        t.literal("behinderteNasenatmung")
    ]);

export const CMRU2PhysicalExamMouthNoseGermanArray: string[] = [
    "AuffaelligkeitenderSchleimhautunddesKieferkamms",
    "KieferGaumenanomalie",
    "Verletzungszeichen",
    "abnormeGroessederZunge",
    "behinderteNasenatmung"
];

export default CMRU2PhysicalExamMouthNoseGerman;
