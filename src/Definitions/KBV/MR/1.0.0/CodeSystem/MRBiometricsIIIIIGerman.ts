import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_MR_Biometrics_II_III_German
type MRBiometricsIIIIIGerman =
    | "BPDBiparietalerDurchmesser"
    | "KUKopfumfang"
    | "FODFrontookzipitalerDurchmesser"
    | "ATDAbdomenThoraxquerDurchmesser"
    | "APDAbdomenThoraxapDurchmesser"
    | "AUAbdomenThoraxUmfang"
    | "FLFemurlaenge";

const MRBiometricsIIIIIGerman: t.Type<MRBiometricsIIIIIGerman> = t.union([
    t.literal("BPDBiparietalerDurchmesser"),
    t.literal("KUKopfumfang"),
    t.literal("FODFrontookzipitalerDurchmesser"),
    t.literal("ATDAbdomenThoraxquerDurchmesser"),
    t.literal("APDAbdomenThoraxapDurchmesser"),
    t.literal("AUAbdomenThoraxUmfang"),
    t.literal("FLFemurlaenge")
]);

export const MRBiometricsIIIIIGermanArray: string[] = [
    "BPDBiparietalerDurchmesser",
    "KUKopfumfang",
    "FODFrontookzipitalerDurchmesser",
    "ATDAbdomenThoraxquerDurchmesser",
    "APDAbdomenThoraxapDurchmesser",
    "AUAbdomenThoraxUmfang",
    "FLFemurlaenge"
];

export default MRBiometricsIIIIIGerman;
