import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Physical_Exam_Eyes_German
type CMRU6PhysicalExamEyesGerman =
    | "InspektionmorphologischeAuffaelligkeiten"
    | "InspektionNystagmus"
    | "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie"
    | "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks"
    | "InspektionKopffehlhaltung"
    | "PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks";

const CMRU6PhysicalExamEyesGerman: t.Type<CMRU6PhysicalExamEyesGerman> = t.union([
    t.literal("InspektionmorphologischeAuffaelligkeiten"),
    t.literal("InspektionNystagmus"),
    t.literal(
        "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie"
    ),
    t.literal(
        "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks"
    ),
    t.literal("InspektionKopffehlhaltung"),
    t.literal("PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks")
]);

export const CMRU6PhysicalExamEyesGermanArray: string[] = [
    "InspektionmorphologischeAuffaelligkeiten",
    "InspektionNystagmus",
    "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie",
    "PruefungderBlickfolgemiteinemgeraeuschlosendasKindinteressierendenObjektzBLichtquelleFixationsschwaecherechtslinks",
    "InspektionKopffehlhaltung",
    "PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks"
];

export default CMRU6PhysicalExamEyesGerman;
