import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U9_Development_Assessment_German
type CMRU9DevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "Sprache"
    | "InteraktionKommunikation";

const CMRU9DevelopmentAssessmentGerman: t.Type<CMRU9DevelopmentAssessmentGerman> =
    t.union([
        t.literal("Grobmotorik"),
        t.literal("Feinmotorik"),
        t.literal("PerzeptionKognition"),
        t.literal("SozialeemotionaleKompetenz"),
        t.literal("Sprache"),
        t.literal("InteraktionKommunikation")
    ]);

export const CMRU9DevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "Sprache",
    "InteraktionKommunikation"
];

export default CMRU9DevelopmentAssessmentGerman;
