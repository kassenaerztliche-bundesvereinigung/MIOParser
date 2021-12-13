import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Development_Assessment_German
type CMRU7aDevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "Sprache"
    | "InteraktionKommunikation";

const CMRU7aDevelopmentAssessmentGerman: t.Type<CMRU7aDevelopmentAssessmentGerman> =
    t.union([
        t.literal("Grobmotorik"),
        t.literal("Feinmotorik"),
        t.literal("PerzeptionKognition"),
        t.literal("SozialeemotionaleKompetenz"),
        t.literal("Sprache"),
        t.literal("InteraktionKommunikation")
    ]);

export const CMRU7aDevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "Sprache",
    "InteraktionKommunikation"
];

export default CMRU7aDevelopmentAssessmentGerman;
