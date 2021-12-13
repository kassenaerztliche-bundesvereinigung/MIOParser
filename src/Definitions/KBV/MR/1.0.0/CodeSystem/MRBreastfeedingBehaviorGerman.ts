import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Breastfeeding_Behavior_German
type MRBreastfeedingBehaviorGerman =
    | "Mutterstillt"
    | "Mutterhatnichtgestillt"
    | "Mutterhatabgestillt";

const MRBreastfeedingBehaviorGerman: t.Type<MRBreastfeedingBehaviorGerman> = t.union([
    t.literal("Mutterstillt"),
    t.literal("Mutterhatnichtgestillt"),
    t.literal("Mutterhatabgestillt")
]);

export const MRBreastfeedingBehaviorGermanArray: string[] = [
    "Mutterstillt",
    "Mutterhatnichtgestillt",
    "Mutterhatabgestillt"
];

export default MRBreastfeedingBehaviorGerman;
