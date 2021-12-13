import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U2_Current_Child_History_German
type CMRU2CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen"
    | "SchwierigkeitenbeimTrinkenSchluckstoerungen"
    | "StuhlfarbemitFarbtafelerfragen"
    | "auffaelligesSchreien"
    | "RisikofaktorenfuerHueftdysplasie";

const CMRU2CurrentChildHistoryGerman: t.Type<CMRU2CurrentChildHistoryGerman> = t.union([
    t.literal("schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen"),
    t.literal("SchwierigkeitenbeimTrinkenSchluckstoerungen"),
    t.literal("StuhlfarbemitFarbtafelerfragen"),
    t.literal("auffaelligesSchreien"),
    t.literal("RisikofaktorenfuerHueftdysplasie")
]);

export const CMRU2CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationen",
    "SchwierigkeitenbeimTrinkenSchluckstoerungen",
    "StuhlfarbemitFarbtafelerfragen",
    "auffaelligesSchreien",
    "RisikofaktorenfuerHueftdysplasie"
];

export default CMRU2CurrentChildHistoryGerman;
