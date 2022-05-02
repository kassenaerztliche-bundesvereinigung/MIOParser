import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Biometrics_I_German
type MRBiometricsIGerman =
    | "FSFruchtsackdurchmesser"
    | "SSLScheitelSteissLaenge"
    | "BPDBiparietalerDurchmesser";

const MRBiometricsIGerman: t.Type<MRBiometricsIGerman> = t.union([
    t.literal("FSFruchtsackdurchmesser"),
    t.literal("SSLScheitelSteissLaenge"),
    t.literal("BPDBiparietalerDurchmesser")
]);

export const MRBiometricsIGermanArray: string[] = [
    "FSFruchtsackdurchmesser",
    "SSLScheitelSteissLaenge",
    "BPDBiparietalerDurchmesser"
];

export default MRBiometricsIGerman;
