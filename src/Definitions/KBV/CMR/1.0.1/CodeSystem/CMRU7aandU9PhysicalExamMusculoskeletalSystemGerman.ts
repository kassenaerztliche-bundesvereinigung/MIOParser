import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_and_U9_Physical_Exam_Musculoskeletal_System_German
type CMRU7aandU9PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeleigenreflexe"
    | "Muskeltonus";

const CMRU7aandU9PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU7aandU9PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeleigenreflexe"),
        t.literal("Muskeltonus")
    ]);

export const CMRU7aandU9PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeleigenreflexe",
    "Muskeltonus"
];

export default CMRU7aandU9PhysicalExamMusculoskeletalSystemGerman;
