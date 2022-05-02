import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_Physical_Exam_Musculoskeletal_System_German
type CMRU7PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeleigenreflexe";

const CMRU7PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU7PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeleigenreflexe")
    ]);

export const CMRU7PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeleigenreflexe"
];

export default CMRU7PhysicalExamMusculoskeletalSystemGerman;
