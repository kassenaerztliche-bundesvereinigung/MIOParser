import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Physical_Exam_Mouth_Nose_German
type CMRU5PhysicalExamMouthNoseGerman = "Verletzungszeichen" | "fehlenderMundschluss";

const CMRU5PhysicalExamMouthNoseGerman: t.Type<CMRU5PhysicalExamMouthNoseGerman> =
    t.union([t.literal("Verletzungszeichen"), t.literal("fehlenderMundschluss")]);

export const CMRU5PhysicalExamMouthNoseGermanArray: string[] = [
    "Verletzungszeichen",
    "fehlenderMundschluss"
];

export default CMRU5PhysicalExamMouthNoseGerman;
