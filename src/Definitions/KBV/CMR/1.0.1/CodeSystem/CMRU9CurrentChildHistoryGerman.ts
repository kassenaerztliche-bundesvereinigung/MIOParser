import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U9_Current_Child_History_German
type CMRU9CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    | "Hoervermoegen"
    | "SindSiemitderSprachentwicklungIhresKindeszufrieden"
    | "WirdIhrKindvonderUmgebunggutverstanden"
    | "StottertIhrKind";

const CMRU9CurrentChildHistoryGerman: t.Type<CMRU9CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    ),
    t.literal("Hoervermoegen"),
    t.literal("SindSiemitderSprachentwicklungIhresKindeszufrieden"),
    t.literal("WirdIhrKindvonderUmgebunggutverstanden"),
    t.literal("StottertIhrKind")
]);

export const CMRU9CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
    "Hoervermoegen",
    "SindSiemitderSprachentwicklungIhresKindeszufrieden",
    "WirdIhrKindvonderUmgebunggutverstanden",
    "StottertIhrKind"
];

export default CMRU9CurrentChildHistoryGerman;
