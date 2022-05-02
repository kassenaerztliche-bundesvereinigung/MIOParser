import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence_Tuberculin_German
type VaccinationLabImmuneReactionTestPresenceTuberculinGerman =
    | "TuberkuloseMendelMantouxTestpositiv"
    | "TuberkuloseMendelMantouxTestnegativ"
    | "TuberkuloseInterferongammaassaypositiv"
    | "TuberkuloseInterferongammaassaynegativ";

const VaccinationLabImmuneReactionTestPresenceTuberculinGerman: t.Type<VaccinationLabImmuneReactionTestPresenceTuberculinGerman> =
    t.union([
        t.literal("TuberkuloseMendelMantouxTestpositiv"),
        t.literal("TuberkuloseMendelMantouxTestnegativ"),
        t.literal("TuberkuloseInterferongammaassaypositiv"),
        t.literal("TuberkuloseInterferongammaassaynegativ")
    ]);

export const VaccinationLabImmuneReactionTestPresenceTuberculinGermanArray: string[] = [
    "TuberkuloseMendelMantouxTestpositiv",
    "TuberkuloseMendelMantouxTestnegativ",
    "TuberkuloseInterferongammaassaypositiv",
    "TuberkuloseInterferongammaassaynegativ"
];

export default VaccinationLabImmuneReactionTestPresenceTuberculinGerman;
