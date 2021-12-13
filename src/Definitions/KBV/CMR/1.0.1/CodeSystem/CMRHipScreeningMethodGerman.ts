import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Hip_Screening_Method_German
type CMRHipScreeningMethodGerman =
    | "HueftsonographischerVorbefundja"
    | "HueftsonographischerVorbefundnein"
    | "HueftsonographischerVorbefundunbekannt"
    | "HueftsonographischerBefundinder45Lebenswoche";

const CMRHipScreeningMethodGerman: t.Type<CMRHipScreeningMethodGerman> = t.union([
    t.literal("HueftsonographischerVorbefundja"),
    t.literal("HueftsonographischerVorbefundnein"),
    t.literal("HueftsonographischerVorbefundunbekannt"),
    t.literal("HueftsonographischerBefundinder45Lebenswoche")
]);

export const CMRHipScreeningMethodGermanArray: string[] = [
    "HueftsonographischerVorbefundja",
    "HueftsonographischerVorbefundnein",
    "HueftsonographischerVorbefundunbekannt",
    "HueftsonographischerBefundinder45Lebenswoche"
];

export default CMRHipScreeningMethodGerman;
