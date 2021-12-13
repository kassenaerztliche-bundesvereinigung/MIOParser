import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Development_Assessment_German
type CMRU8DevelopmentAssessmentGerman =
    | "Grobmotorik"
    | "Feinmotorik"
    | "PerzeptionKognition"
    | "SozialeemotionaleKompetenz"
    | "Sprache"
    | "InteraktionKommunikation";

const CMRU8DevelopmentAssessmentGerman: t.Type<CMRU8DevelopmentAssessmentGerman> =
    t.union([
        t.literal("Grobmotorik"),
        t.literal("Feinmotorik"),
        t.literal("PerzeptionKognition"),
        t.literal("SozialeemotionaleKompetenz"),
        t.literal("Sprache"),
        t.literal("InteraktionKommunikation")
    ]);

export const CMRU8DevelopmentAssessmentGermanArray: string[] = [
    "Grobmotorik",
    "Feinmotorik",
    "PerzeptionKognition",
    "SozialeemotionaleKompetenz",
    "Sprache",
    "InteraktionKommunikation"
];

export default CMRU8DevelopmentAssessmentGerman;
