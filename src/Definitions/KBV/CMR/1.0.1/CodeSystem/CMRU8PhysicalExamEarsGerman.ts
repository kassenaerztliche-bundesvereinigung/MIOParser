import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Physical_Exam_Ears_German
type CMRU8PhysicalExamEarsGerman =
    | "HoertestmittelsScreeningaudiometrierechts"
    | "HoertestmittelsScreeningaudiometrielinks";

const CMRU8PhysicalExamEarsGerman: t.Type<CMRU8PhysicalExamEarsGerman> = t.union([
    t.literal("HoertestmittelsScreeningaudiometrierechts"),
    t.literal("HoertestmittelsScreeningaudiometrielinks")
]);

export const CMRU8PhysicalExamEarsGermanArray: string[] = [
    "HoertestmittelsScreeningaudiometrierechts",
    "HoertestmittelsScreeningaudiometrielinks"
];

export default CMRU8PhysicalExamEarsGerman;
