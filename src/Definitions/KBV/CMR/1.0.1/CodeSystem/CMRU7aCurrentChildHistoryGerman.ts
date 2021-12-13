import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U7a_Current_Child_History_German
type CMRU7aCurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    | "Essverhaltennichtaltersgemaess"
    | "abnormeStuehle"
    | "KariesprophylaxemittelsFluorid"
    | "Hoervermoegen"
    | "regelmaessigesSchnarchen"
    | "WirdIhrKindvonderUmgebunggutverstanden"
    | "SindSiemitderSprachentwicklungIhresKindeszufrieden"
    | "StottertIhrKind";

const CMRU7aCurrentChildHistoryGerman: t.Type<CMRU7aCurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    ),
    t.literal("Essverhaltennichtaltersgemaess"),
    t.literal("abnormeStuehle"),
    t.literal("KariesprophylaxemittelsFluorid"),
    t.literal("Hoervermoegen"),
    t.literal("regelmaessigesSchnarchen"),
    t.literal("WirdIhrKindvonderUmgebunggutverstanden"),
    t.literal("SindSiemitderSprachentwicklungIhresKindeszufrieden"),
    t.literal("StottertIhrKind")
]);

export const CMRU7aCurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
    "Essverhaltennichtaltersgemaess",
    "abnormeStuehle",
    "KariesprophylaxemittelsFluorid",
    "Hoervermoegen",
    "regelmaessigesSchnarchen",
    "WirdIhrKindvonderUmgebunggutverstanden",
    "SindSiemitderSprachentwicklungIhresKindeszufrieden",
    "StottertIhrKind"
];

export default CMRU7aCurrentChildHistoryGerman;
