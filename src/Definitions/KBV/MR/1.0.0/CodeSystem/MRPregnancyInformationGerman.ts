import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Pregnancy_Information_German
type MRPregnancyInformationGerman =
    | "IntrauterinerSitzintrauterineSchwangerschaft"
    | "MehrlingeMehrlingsschwangerschaft"
    | "MonochorialMonochorialeSchwangerschaft";

const MRPregnancyInformationGerman: t.Type<MRPregnancyInformationGerman> = t.union([
    t.literal("IntrauterinerSitzintrauterineSchwangerschaft"),
    t.literal("MehrlingeMehrlingsschwangerschaft"),
    t.literal("MonochorialMonochorialeSchwangerschaft")
]);

export const MRPregnancyInformationGermanArray: string[] = [
    "IntrauterinerSitzintrauterineSchwangerschaft",
    "MehrlingeMehrlingsschwangerschaft",
    "MonochorialMonochorialeSchwangerschaft"
];

export default MRPregnancyInformationGerman;
