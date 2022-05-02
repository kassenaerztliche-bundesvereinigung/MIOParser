import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_U3_Physical_Exam_Eyes_German
type CMRU2U3PhysicalExamEyesGerman =
    | "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom"
    | "InspektionNystagmus"
    | "PruefungimdurchfallendenLichtTransilluminationsauffaelligkeitbeiTruebungderbrechendenMedien";

const CMRU2U3PhysicalExamEyesGerman: t.Type<CMRU2U3PhysicalExamEyesGerman> = t.union([
    t.literal(
        "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom"
    ),
    t.literal("InspektionNystagmus"),
    t.literal(
        "PruefungimdurchfallendenLichtTransilluminationsauffaelligkeitbeiTruebungderbrechendenMedien"
    )
]);

export const CMRU2U3PhysicalExamEyesGermanArray: string[] = [
    "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom",
    "InspektionNystagmus",
    "PruefungimdurchfallendenLichtTransilluminationsauffaelligkeitbeiTruebungderbrechendenMedien"
];

export default CMRU2U3PhysicalExamEyesGerman;
