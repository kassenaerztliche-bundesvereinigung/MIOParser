import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U6_Current_Child_History_German
type CMRU6CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    | "Essverhaltennichtaltersgemaess"
    | "abnormeStuehle"
    | "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle"
    | "regelmaessigesSchnarchen";

const CMRU6CurrentChildHistoryGerman: t.Type<CMRU6CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    ),
    t.literal("Essverhaltennichtaltersgemaess"),
    t.literal("abnormeStuehle"),
    t.literal(
        "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle"
    ),
    t.literal("regelmaessigesSchnarchen")
]);

export const CMRU6CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
    "Essverhaltennichtaltersgemaess",
    "abnormeStuehle",
    "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle",
    "regelmaessigesSchnarchen"
];

export default CMRU6CurrentChildHistoryGerman;
