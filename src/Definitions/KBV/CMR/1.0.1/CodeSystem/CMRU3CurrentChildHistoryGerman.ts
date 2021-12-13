import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_Current_Child_History_German
type CMRU3CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle"
    | "SchwierigkeitenbeimTrinkenSchluckstoerungenkeinealtersgemaesseErnaehrung"
    | "auffaelligesSchreien"
    | "StuhlfarbemitFarbtafelerfragen";

const CMRU3CurrentChildHistoryGerman: t.Type<CMRU3CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle"
    ),
    t.literal("SchwierigkeitenbeimTrinkenSchluckstoerungenkeinealtersgemaesseErnaehrung"),
    t.literal("auffaelligesSchreien"),
    t.literal("StuhlfarbemitFarbtafelerfragen")
]);

export const CMRU3CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle",
    "SchwierigkeitenbeimTrinkenSchluckstoerungenkeinealtersgemaesseErnaehrung",
    "auffaelligesSchreien",
    "StuhlfarbemitFarbtafelerfragen"
];

export default CMRU3CurrentChildHistoryGerman;
