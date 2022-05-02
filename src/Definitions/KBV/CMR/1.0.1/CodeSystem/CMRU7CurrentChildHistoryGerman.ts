import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7_Current_Child_History_German
type CMRU7CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    | "Essverhaltennichtaltersgemaess"
    | "abnormeStuehle"
    | "KariesprophylaxemittelsFluorid"
    | "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle"
    | "regelmaessigesSchnarchen"
    | "SindSiemitderSprachentwicklungIhresKindeszufrieden"
    | "WirdIhrKindvonderUmgebunggutverstanden";

const CMRU7CurrentChildHistoryGerman: t.Type<CMRU7CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    ),
    t.literal("Essverhaltennichtaltersgemaess"),
    t.literal("abnormeStuehle"),
    t.literal("KariesprophylaxemittelsFluorid"),
    t.literal(
        "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle"
    ),
    t.literal("regelmaessigesSchnarchen"),
    t.literal("SindSiemitderSprachentwicklungIhresKindeszufrieden"),
    t.literal("WirdIhrKindvonderUmgebunggutverstanden")
]);

export const CMRU7CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
    "Essverhaltennichtaltersgemaess",
    "abnormeStuehle",
    "KariesprophylaxemittelsFluorid",
    "HoervermoegenReaktionaufleiselauteSchallreizeKopfbzwBlickwendungzurSchallquelle",
    "regelmaessigesSchnarchen",
    "SindSiemitderSprachentwicklungIhresKindeszufrieden",
    "WirdIhrKindvonderUmgebunggutverstanden"
];

export default CMRU7CurrentChildHistoryGerman;
