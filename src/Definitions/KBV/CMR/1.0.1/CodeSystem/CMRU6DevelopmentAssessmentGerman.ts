import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Development_Assessment_German
type CMRU6DevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "Sprache"
    | "StimmungAffekt"
    | "KontaktKommunikation"
    | "RegulationStimulation";

const CMRU6DevelopmentAssessmentGerman: t.Type<CMRU6DevelopmentAssessmentGerman> =
    t.union([
        t.literal("Grobmotorik"),
        t.literal("Feinmotorik"),
        t.literal("PerzeptionKognition"),
        t.literal("SozialeemotionaleKompetenz"),
        t.literal("Sprache"),
        t.literal("StimmungAffekt"),
        t.literal("KontaktKommunikation"),
        t.literal("RegulationStimulation")
    ]);

export const CMRU6DevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "Sprache",
    "StimmungAffekt",
    "KontaktKommunikation",
    "RegulationStimulation"
];

export default CMRU6DevelopmentAssessmentGerman;
