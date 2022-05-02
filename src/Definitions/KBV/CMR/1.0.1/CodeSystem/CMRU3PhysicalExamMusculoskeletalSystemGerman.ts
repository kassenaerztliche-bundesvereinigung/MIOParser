import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Physical_Exam_Musculoskeletal_System_German
type CMRU3PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "Muskeltonus"
    | "Opisthotonus"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeleigenreflexe"
    | "Handgreifreflex"
    | "MoroReaktion"
    | "Saugreflex"
    | "klinischeFrakturzeichen";

const CMRU3PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU3PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("Muskeltonus"),
        t.literal("Opisthotonus"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeleigenreflexe"),
        t.literal("Handgreifreflex"),
        t.literal("MoroReaktion"),
        t.literal("Saugreflex"),
        t.literal("klinischeFrakturzeichen")
    ]);

export const CMRU3PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "Muskeltonus",
    "Opisthotonus",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeleigenreflexe",
    "Handgreifreflex",
    "MoroReaktion",
    "Saugreflex",
    "klinischeFrakturzeichen"
];

export default CMRU3PhysicalExamMusculoskeletalSystemGerman;
