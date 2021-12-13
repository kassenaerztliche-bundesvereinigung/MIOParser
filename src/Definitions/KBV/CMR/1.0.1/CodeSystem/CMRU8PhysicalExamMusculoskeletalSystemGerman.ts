import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Physical_Exam_Musculoskeletal_System_German
type CMRU8PhysicalExamMusculoskeletalSystemGerman =
    | "Vorbeugetest"
    | "Asymmetrien"
    | "Schiefhaltung"
    | "Spontanmotorik"
    | "passiveBeweglichkeitdergrossenGelenke"
    | "Muskeltonus"
    | "Muskeleigenreflexe"
    | "HinweisaufRachitisandenExtremitaeten";

const CMRU8PhysicalExamMusculoskeletalSystemGerman: t.Type<CMRU8PhysicalExamMusculoskeletalSystemGerman> =
    t.union([
        t.literal("Vorbeugetest"),
        t.literal("Asymmetrien"),
        t.literal("Schiefhaltung"),
        t.literal("Spontanmotorik"),
        t.literal("passiveBeweglichkeitdergrossenGelenke"),
        t.literal("Muskeltonus"),
        t.literal("Muskeleigenreflexe"),
        t.literal("HinweisaufRachitisandenExtremitaeten")
    ]);

export const CMRU8PhysicalExamMusculoskeletalSystemGermanArray: string[] = [
    "Vorbeugetest",
    "Asymmetrien",
    "Schiefhaltung",
    "Spontanmotorik",
    "passiveBeweglichkeitdergrossenGelenke",
    "Muskeltonus",
    "Muskeleigenreflexe",
    "HinweisaufRachitisandenExtremitaeten"
];

export default CMRU8PhysicalExamMusculoskeletalSystemGerman;
