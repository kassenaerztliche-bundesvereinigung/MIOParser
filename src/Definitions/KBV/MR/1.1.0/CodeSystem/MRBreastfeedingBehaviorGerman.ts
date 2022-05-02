import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Breastfeeding_Behavior_German
type MRBreastfeedingBehaviorGerman =
    | "Mutterstillt"
    | "Mutterstilltnicht"
    | "Mutterhatabgestillt";

const MRBreastfeedingBehaviorGerman: t.Type<MRBreastfeedingBehaviorGerman> = t.union([
    t.literal("Mutterstillt"),
    t.literal("Mutterstilltnicht"),
    t.literal("Mutterhatabgestillt")
]);

export const MRBreastfeedingBehaviorGermanArray: string[] = [
    "Mutterstillt",
    "Mutterstilltnicht",
    "Mutterhatabgestillt"
];

export default MRBreastfeedingBehaviorGerman;
