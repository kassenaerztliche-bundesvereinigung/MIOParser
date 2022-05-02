import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Percentile_Body_Measure_Snomed_German
type CMRPercentileBodyMeasureSnomedGerman =
    | "Koerpergewicht"
    | "Koerperlaenge"
    | "Kopfumfang"
    | "BMI";

const CMRPercentileBodyMeasureSnomedGerman: t.Type<CMRPercentileBodyMeasureSnomedGerman> =
    t.union([
        t.literal("Koerpergewicht"),
        t.literal("Koerperlaenge"),
        t.literal("Kopfumfang"),
        t.literal("BMI")
    ]);

export const CMRPercentileBodyMeasureSnomedGermanArray: string[] = [
    "Koerpergewicht",
    "Koerperlaenge",
    "Kopfumfang",
    "BMI"
];

export default CMRPercentileBodyMeasureSnomedGerman;
