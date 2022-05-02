import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Physical_Exam_Musculoskeletal_System_German
type CMRU6PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "Muskeltonus"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeleigenreflexe";

const CMRU6PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU6PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("Muskeltonus"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeleigenreflexe")
    ]);

export const CMRU6PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "Muskeltonus",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeleigenreflexe"
];

export default CMRU6PhysicalExamMusculoskeletalSystemGerman;
