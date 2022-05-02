import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Percentile_Body_Measure_Loinc_German
type CMRPercentileBodyMeasureLoincGerman =
    | "Koerpergewicht"
    | "Koerperlaenge"
    | "Kopfumfang"
    | "BMI";

const CMRPercentileBodyMeasureLoincGerman: t.Type<CMRPercentileBodyMeasureLoincGerman> =
    t.union([
        t.literal("Koerpergewicht"),
        t.literal("Koerperlaenge"),
        t.literal("Kopfumfang"),
        t.literal("BMI")
    ]);

export const CMRPercentileBodyMeasureLoincGermanArray: string[] = [
    "Koerpergewicht",
    "Koerperlaenge",
    "Kopfumfang",
    "BMI"
];

export default CMRPercentileBodyMeasureLoincGerman;
