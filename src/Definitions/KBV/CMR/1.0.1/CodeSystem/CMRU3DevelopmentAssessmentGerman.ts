import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Development_Assessment_German
type CMRU3DevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "StimmungAffekt"
    | "KontaktKommunikation"
    | "RegulationStimulation";

const CMRU3DevelopmentAssessmentGerman: t.Type<CMRU3DevelopmentAssessmentGerman> =
    t.union([
        t.literal("Grobmotorik"),
        t.literal("Feinmotorik"),
        t.literal("PerzeptionKognition"),
        t.literal("SozialeemotionaleKompetenz"),
        t.literal("StimmungAffekt"),
        t.literal("KontaktKommunikation"),
        t.literal("RegulationStimulation")
    ]);

export const CMRU3DevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "StimmungAffekt",
    "KontaktKommunikation",
    "RegulationStimulation"
];

export default CMRU3DevelopmentAssessmentGerman;
