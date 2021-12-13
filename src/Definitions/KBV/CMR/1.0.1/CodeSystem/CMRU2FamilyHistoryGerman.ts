import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Family_History_German
type CMRU2FamilyHistoryGerman =
    | "AugenerkrankungenzBStrabismusAmblyopieerblicheAugenkrankheit"
    | "angeboreneHoerstoerungenoderOhrfehlbildungen"
    | "Immundefekte"
    | "Hueftdysplasie";

const CMRU2FamilyHistoryGerman: t.Type<CMRU2FamilyHistoryGerman> = t.union([
    t.literal("AugenerkrankungenzBStrabismusAmblyopieerblicheAugenkrankheit"),
    t.literal("angeboreneHoerstoerungenoderOhrfehlbildungen"),
    t.literal("Immundefekte"),
    t.literal("Hueftdysplasie")
]);

export const CMRU2FamilyHistoryGermanArray: string[] = [
    "AugenerkrankungenzBStrabismusAmblyopieerblicheAugenkrankheit",
    "angeboreneHoerstoerungenoderOhrfehlbildungen",
    "Immundefekte",
    "Hueftdysplasie"
];

export default CMRU2FamilyHistoryGerman;
