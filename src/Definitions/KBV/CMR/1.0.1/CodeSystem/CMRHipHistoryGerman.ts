import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hip_History_German
type CMRHipHistoryGerman =
    | "GeburtausBeckenendlage"
    | "HueftgelenksluxationbzwHueftgelenksdysplasieinHerkunftsfamilie"
    | "StellungsanomaliebzwFehlbildungeninsbderFuesse";

const CMRHipHistoryGerman: t.Type<CMRHipHistoryGerman> = t.union([
    t.literal("GeburtausBeckenendlage"),
    t.literal("HueftgelenksluxationbzwHueftgelenksdysplasieinHerkunftsfamilie"),
    t.literal("StellungsanomaliebzwFehlbildungeninsbderFuesse")
]);

export const CMRHipHistoryGermanArray: string[] = [
    "GeburtausBeckenendlage",
    "HueftgelenksluxationbzwHueftgelenksdysplasieinHerkunftsfamilie",
    "StellungsanomaliebzwFehlbildungeninsbderFuesse"
];

export default CMRHipHistoryGerman;
