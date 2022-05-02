import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_U4_Physical_Exam_Skin_German
type CMRU3U4PhysicalExamSkinGerman =
    | "auffaelligeBlaesse"
    | "Zyanose"
    | "Ikterus"
    | "Haemangiome"
    | "NaeviundanderePigmentanomalien"
    | "Oedeme"
    | "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungenNarben"
    | "entzuendlicheHautveraenderungen";

const CMRU3U4PhysicalExamSkinGerman: t.Type<CMRU3U4PhysicalExamSkinGerman> = t.union([
    t.literal("auffaelligeBlaesse"),
    t.literal("Zyanose"),
    t.literal("Ikterus"),
    t.literal("Haemangiome"),
    t.literal("NaeviundanderePigmentanomalien"),
    t.literal("Oedeme"),
    t.literal("AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungenNarben"),
    t.literal("entzuendlicheHautveraenderungen")
]);

export const CMRU3U4PhysicalExamSkinGermanArray: string[] = [
    "auffaelligeBlaesse",
    "Zyanose",
    "Ikterus",
    "Haemangiome",
    "NaeviundanderePigmentanomalien",
    "Oedeme",
    "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungenNarben",
    "entzuendlicheHautveraenderungen"
];

export default CMRU3U4PhysicalExamSkinGerman;
