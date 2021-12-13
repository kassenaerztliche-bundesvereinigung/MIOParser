import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U5_Current_Child_History_German
type CMRU5CurrentChildHistoryGerman =
    | "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    | "Essverhaltennichtaltersgemaess"
    | "abnormeStuehle"
    | "auffaelligesSchreien"
    | "KanndasKindguthoerenKindreagiertauflauteundleiseSchallreizewendetdenKopfzurSchallquelle";

const CMRU5CurrentChildHistoryGerman: t.Type<CMRU5CurrentChildHistoryGerman> = t.union([
    t.literal(
        "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen"
    ),
    t.literal("Essverhaltennichtaltersgemaess"),
    t.literal("abnormeStuehle"),
    t.literal("auffaelligesSchreien"),
    t.literal(
        "KanndasKindguthoerenKindreagiertauflauteundleiseSchallreizewendetdenKopfzurSchallquelle"
    )
]);

export const CMRU5CurrentChildHistoryGermanArray: string[] = [
    "schwerwiegendeErkrankungenseitderletztenUntersuchungOperationenKrampfanfaelleschwereungewoehnlicheundhaeufigeInfektionen",
    "Essverhaltennichtaltersgemaess",
    "abnormeStuehle",
    "auffaelligesSchreien",
    "KanndasKindguthoerenKindreagiertauflauteundleiseSchallreizewendetdenKopfzurSchallquelle"
];

export default CMRU5CurrentChildHistoryGerman;
