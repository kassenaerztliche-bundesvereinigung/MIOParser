import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_Physical_Exam_Eyes_German
type CMRU7PhysicalExamEyesGerman =
    | "InspektionmorphologischeAuffaelligkeiten"
    | "InspektionNystagmus"
    | "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie"
    | "InspektionKopffehlhaltung"
    | "PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks";

const CMRU7PhysicalExamEyesGerman: t.Type<CMRU7PhysicalExamEyesGerman> = t.union([
    t.literal("InspektionmorphologischeAuffaelligkeiten"),
    t.literal("InspektionNystagmus"),
    t.literal(
        "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie"
    ),
    t.literal("InspektionKopffehlhaltung"),
    t.literal("PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks")
]);

export const CMRU7PhysicalExamEyesGermanArray: string[] = [
    "InspektionmorphologischeAuffaelligkeiten",
    "InspektionNystagmus",
    "BruecknerTestTransilluminationsunterschiedzBbeiTruebungderbrechendenMedienStrabismusAnisometropie",
    "InspektionKopffehlhaltung",
    "PupillenstatusVergleichGroesseFormLichtreaktionrechtslinks"
];

export default CMRU7PhysicalExamEyesGerman;
