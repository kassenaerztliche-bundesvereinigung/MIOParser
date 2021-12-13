import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_U5_Physical_Exam_Eyes_German
type CMRU4U5PhysicalExamEyesGerman =
    | "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom"
    | "InspektionNystagmus"
    | "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie"
    | "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks";

const CMRU4U5PhysicalExamEyesGerman: t.Type<CMRU4U5PhysicalExamEyesGerman> = t.union([
    t.literal(
        "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom"
    ),
    t.literal("InspektionNystagmus"),
    t.literal(
        "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie"
    ),
    t.literal(
        "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks"
    )
]);

export const CMRU4U5PhysicalExamEyesGermanArray: string[] = [
    "InspektionmorphologischeAuffaelligkeitenzBPtosisLeukokorieBulbusgroessenauffaelligkeitenKolobom",
    "InspektionNystagmus",
    "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie",
    "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks"
];

export default CMRU4U5PhysicalExamEyesGerman;
