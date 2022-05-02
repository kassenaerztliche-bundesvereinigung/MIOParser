import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Physical_Exam_Musculoskeletal_System_German
type CMRU4PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "Muskeltonus"
    | "Opisthotonus"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeleigenreflexe"
    | "Handgreifreflex"
    | "Fussgreifreflex"
    | "Neugeborenenreflexe"
    | "klinischeFrakturzeichen";

const CMRU4PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU4PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("Muskeltonus"),
        t.literal("Opisthotonus"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeleigenreflexe"),
        t.literal("Handgreifreflex"),
        t.literal("Fussgreifreflex"),
        t.literal("Neugeborenenreflexe"),
        t.literal("klinischeFrakturzeichen")
    ]);

export const CMRU4PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "Muskeltonus",
    "Opisthotonus",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeleigenreflexe",
    "Handgreifreflex",
    "Fussgreifreflex",
    "Neugeborenenreflexe",
    "klinischeFrakturzeichen"
];

export default CMRU4PhysicalExamMusculoskeletalSystemGerman;
