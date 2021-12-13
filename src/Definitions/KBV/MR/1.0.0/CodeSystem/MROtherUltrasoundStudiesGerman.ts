import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Other_Ultrasound_Studies_German
type MROtherUltrasoundStudiesGerman =
    | "UltraschallKontrolluntersuchungennachAnlagebzudenMutterschaftsRichtlinien"
    | "WeiterfuehrendeUltraschallUntersuchungennachAnlageczudenMutterschaftsRichtlinien"
    | "DopplersonographischeUntersuchungennachAnlagedzudenMutterschaftsRichtlinien";

const MROtherUltrasoundStudiesGerman: t.Type<MROtherUltrasoundStudiesGerman> = t.union([
    t.literal(
        "UltraschallKontrolluntersuchungennachAnlagebzudenMutterschaftsRichtlinien"
    ),
    t.literal(
        "WeiterfuehrendeUltraschallUntersuchungennachAnlageczudenMutterschaftsRichtlinien"
    ),
    t.literal(
        "DopplersonographischeUntersuchungennachAnlagedzudenMutterschaftsRichtlinien"
    )
]);

export const MROtherUltrasoundStudiesGermanArray: string[] = [
    "UltraschallKontrolluntersuchungennachAnlagebzudenMutterschaftsRichtlinien",
    "WeiterfuehrendeUltraschallUntersuchungennachAnlageczudenMutterschaftsRichtlinien",
    "DopplersonographischeUntersuchungennachAnlagedzudenMutterschaftsRichtlinien"
];

export default MROtherUltrasoundStudiesGerman;
