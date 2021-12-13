import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Musculoskeletal_System_German
type CMRU2PhysicalExamMusculoskeletalSystemGerman =
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "Muskeltonus"
    | "Opisthotonus"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "MoroReaktion"
    | "GalantReflex"
    | "Schreitautomatismus"
    | "klinischeFrakturzeichen";

const CMRU2PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU2PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("Muskeltonus"),
        t.literal("Opisthotonus"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("MoroReaktion"),
        t.literal("GalantReflex"),
        t.literal("Schreitautomatismus"),
        t.literal("klinischeFrakturzeichen")
    ]);

export const CMRU2PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "Muskeltonus",
    "Opisthotonus",
    "passiveBeweglichkeitdergrossenGelenke",
    "MoroReaktion",
    "GalantReflex",
    "Schreitautomatismus",
    "klinischeFrakturzeichen"
];

export default CMRU2PhysicalExamMusculoskeletalSystemGerman;
