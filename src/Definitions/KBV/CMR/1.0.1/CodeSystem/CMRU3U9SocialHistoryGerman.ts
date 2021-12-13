import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U3_U9_Social_History_German
type CMRU3U9SocialHistoryGerman =
    | "besondereBelastungeninderFamilie"
    | "Betreuungssituation";

const CMRU3U9SocialHistoryGerman: t.Type<CMRU3U9SocialHistoryGerman> = t.union([
    t.literal("besondereBelastungeninderFamilie"),
    t.literal("Betreuungssituation")
]);

export const CMRU3U9SocialHistoryGermanArray: string[] = [
    "besondereBelastungeninderFamilie",
    "Betreuungssituation"
];

export default CMRU3U9SocialHistoryGerman;
