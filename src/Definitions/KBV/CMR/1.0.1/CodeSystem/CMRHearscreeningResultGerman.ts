import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hearscreening_Result_German
type CMRHearscreeningResultGerman =
    | "Hoerbefundunauffaelligbeidseits"
    | "Hoerbefundauffaelligrechts"
    | "Hoerbefundauffaelliglinks";

const CMRHearscreeningResultGerman: t.Type<CMRHearscreeningResultGerman> = t.union([
    t.literal("Hoerbefundunauffaelligbeidseits"),
    t.literal("Hoerbefundauffaelligrechts"),
    t.literal("Hoerbefundauffaelliglinks")
]);

export const CMRHearscreeningResultGermanArray: string[] = [
    "Hoerbefundunauffaelligbeidseits",
    "Hoerbefundauffaelligrechts",
    "Hoerbefundauffaelliglinks"
];

export default CMRHearscreeningResultGerman;
