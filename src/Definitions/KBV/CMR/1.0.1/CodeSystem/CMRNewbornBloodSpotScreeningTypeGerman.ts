import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Newborn_Blood_Spot_Screening_Type_German
type CMRNewbornBloodSpotScreeningTypeGerman =
    | "Erstblutabnahme"
    | "Zweitblutabnahme"
    | "Kontrollblutabnahme";

const CMRNewbornBloodSpotScreeningTypeGerman: t.Type<CMRNewbornBloodSpotScreeningTypeGerman> =
    t.union([
        t.literal("Erstblutabnahme"),
        t.literal("Zweitblutabnahme"),
        t.literal("Kontrollblutabnahme")
    ]);

export const CMRNewbornBloodSpotScreeningTypeGermanArray: string[] = [
    "Erstblutabnahme",
    "Zweitblutabnahme",
    "Kontrollblutabnahme"
];

export default CMRNewbornBloodSpotScreeningTypeGerman;
