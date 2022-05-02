import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Development_Assessment_German
type CMRU4DevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "StimmungAffekt"
    | "KontaktKommunikation"
    | "RegulationStimulation";

const CMRU4DevelopmentAssessmentGerman: t.Type<CMRU4DevelopmentAssessmentGerman> =
    t.union([
        t.literal("Grobmotorik"),
        t.literal("Feinmotorik"),
        t.literal("PerzeptionKognition"),
        t.literal("SozialeemotionaleKompetenz"),
        t.literal("StimmungAffekt"),
        t.literal("KontaktKommunikation"),
        t.literal("RegulationStimulation")
    ]);

export const CMRU4DevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "StimmungAffekt",
    "KontaktKommunikation",
    "RegulationStimulation"
];

export default CMRU4DevelopmentAssessmentGerman;
