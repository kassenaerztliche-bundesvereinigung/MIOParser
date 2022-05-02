import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Development_Assessment_German
type CMRU5DevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "Sprache"
    | "StimmungAffekt"
    | "KontaktKommunikation"
    | "RegulationStimulation";

const CMRU5DevelopmentAssessmentGerman: t.Type<CMRU5DevelopmentAssessmentGerman> =
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

export const CMRU5DevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "Sprache",
    "StimmungAffekt",
    "KontaktKommunikation",
    "RegulationStimulation"
];

export default CMRU5DevelopmentAssessmentGerman;
