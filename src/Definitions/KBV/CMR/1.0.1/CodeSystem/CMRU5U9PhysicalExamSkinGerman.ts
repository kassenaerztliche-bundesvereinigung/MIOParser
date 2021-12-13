import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_U9_Physical_Exam_Skin_German
type CMRU5U9PhysicalExamSkinGerman =
    | "auffaelligeBlaesse"
    | "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungenNarben"
    | "entzuendlicheHautveraenderungen";

const CMRU5U9PhysicalExamSkinGerman: t.Type<CMRU5U9PhysicalExamSkinGerman> = t.union([
    t.literal("auffaelligeBlaesse"),
    t.literal("AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungenNarben"),
    t.literal("entzuendlicheHautveraenderungen")
]);

export const CMRU5U9PhysicalExamSkinGermanArray: string[] = [
    "auffaelligeBlaesse",
    "AnhaltfuerVerletzungenzBHaematomePetechienVerbrennungenNarben",
    "entzuendlicheHautveraenderungen"
];

export default CMRU5U9PhysicalExamSkinGerman;
