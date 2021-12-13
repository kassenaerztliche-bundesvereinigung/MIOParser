import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_ZAEB_Preventive_Check_Up_German
type ZAEBPreventiveCheckUpGerman =
    | "IndividualprophylaxeKind"
    | "ZahnaerztlicheUntersuchungErwachsen";

const ZAEBPreventiveCheckUpGerman: t.Type<ZAEBPreventiveCheckUpGerman> = t.union([
    t.literal("IndividualprophylaxeKind"),
    t.literal("ZahnaerztlicheUntersuchungErwachsen")
]);

export const ZAEBPreventiveCheckUpGermanArray: string[] = [
    "IndividualprophylaxeKind",
    "ZahnaerztlicheUntersuchungErwachsen"
];

export default ZAEBPreventiveCheckUpGerman;
