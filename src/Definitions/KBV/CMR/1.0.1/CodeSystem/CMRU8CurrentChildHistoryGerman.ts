import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U8_Current_Child_History_German
type CMRU8CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    | "regelmaessigesSchnarchen"
    | "SindSiemitderSprachentwicklungIhresKindeszufrieden"
    | "WirdIhrKindvonderUmgebunggutverstanden"
    | "StottertIhrKind";

const CMRU8CurrentChildHistoryGerman: t.Type<CMRU8CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    ),
    t.literal("regelmaessigesSchnarchen"),
    t.literal("SindSiemitderSprachentwicklungIhresKindeszufrieden"),
    t.literal("WirdIhrKindvonderUmgebunggutverstanden"),
    t.literal("StottertIhrKind")
]);

export const CMRU8CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
    "regelmaessigesSchnarchen",
    "SindSiemitderSprachentwicklungIhresKindeszufrieden",
    "WirdIhrKindvonderUmgebunggutverstanden",
    "StottertIhrKind"
];

export default CMRU8CurrentChildHistoryGerman;
