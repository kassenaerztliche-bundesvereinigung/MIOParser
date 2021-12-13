import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Physical_Exam_Musculoskeletal_System_German
type CMRU5PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "Muskeltonus"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeleigenreflexe"
    | "klinischeFrakturzeichen";

const CMRU5PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU5PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("Muskeltonus"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeleigenreflexe"),
        t.literal("klinischeFrakturzeichen")
    ]);

export const CMRU5PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "Muskeltonus",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeleigenreflexe",
    "klinischeFrakturzeichen"
];

export default CMRU5PhysicalExamMusculoskeletalSystemGerman;
