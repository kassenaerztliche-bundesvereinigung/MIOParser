import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Physical_Exam_Skin_German
type CMRU2PhysicalExamSkinGerman =
    | "auffaelligeBlaesse"
    | "Zyanose"
    | "Ikterus"
    | "Haemangiome"
    | "NaeviundanderePigmentanomalien"
    | "Oedeme"
    | "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungNarben"
    | "Hydratationszustand";

const CMRU2PhysicalExamSkinGerman: t.Type<CMRU2PhysicalExamSkinGerman> = t.union([
    t.literal("auffaelligeBlaesse"),
    t.literal("Zyanose"),
    t.literal("Ikterus"),
    t.literal("Haemangiome"),
    t.literal("NaeviundanderePigmentanomalien"),
    t.literal("Oedeme"),
    t.literal("AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungNarben"),
    t.literal("Hydratationszustand")
]);

export const CMRU2PhysicalExamSkinGermanArray: string[] = [
    "auffaelligeBlaesse",
    "Zyanose",
    "Ikterus",
    "Haemangiome",
    "NaeviundanderePigmentanomalien",
    "Oedeme",
    "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungNarben",
    "Hydratationszustand"
];

export default CMRU2PhysicalExamSkinGerman;
