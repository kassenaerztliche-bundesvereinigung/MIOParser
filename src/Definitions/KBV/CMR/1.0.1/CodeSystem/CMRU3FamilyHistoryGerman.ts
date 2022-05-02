import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Family_History_German
type CMRU3FamilyHistoryGerman =
    | "AugenerkrankungenzBKindlicheKataraktStrabismusAmblyopieerblicheAugenerkrankungen"
    | "angeboreneHoerstoerungenoderOhrfehlbildungen"
    | "Immundefekte";

const CMRU3FamilyHistoryGerman: t.Type<CMRU3FamilyHistoryGerman> = t.union([
    t.literal(
        "AugenerkrankungenzBKindlicheKataraktStrabismusAmblyopieerblicheAugenerkrankungen"
    ),
    t.literal("angeboreneHoerstoerungenoderOhrfehlbildungen"),
    t.literal("Immundefekte")
]);

export const CMRU3FamilyHistoryGermanArray: string[] = [
    "AugenerkrankungenzBKindlicheKataraktStrabismusAmblyopieerblicheAugenerkrankungen",
    "angeboreneHoerstoerungenoderOhrfehlbildungen",
    "Immundefekte"
];

export default CMRU3FamilyHistoryGerman;
