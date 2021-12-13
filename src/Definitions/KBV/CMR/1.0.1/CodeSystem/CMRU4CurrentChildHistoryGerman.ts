import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U4_Current_Child_History_German
type CMRU4CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle"
    | "SchwierigkeitenbeimTrinkenundFuetternErbrechenSchluckstoerungen"
    | "abnormeStuehleStuhlfarbemitFarbtafelerfragenObstipation"
    | "auffaelligesSchreien";

const CMRU4CurrentChildHistoryGerman: t.Type<CMRU4CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle"
    ),
    t.literal("SchwierigkeitenbeimTrinkenundFuetternErbrechenSchluckstoerungen"),
    t.literal("abnormeStuehleStuhlfarbemitFarbtafelerfragenObstipation"),
    t.literal("auffaelligesSchreien")
]);

export const CMRU4CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelle",
    "SchwierigkeitenbeimTrinkenundFuetternErbrechenSchluckstoerungen",
    "abnormeStuehleStuhlfarbemitFarbtafelerfragenObstipation",
    "auffaelligesSchreien"
];

export default CMRU4CurrentChildHistoryGerman;
