import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Percentile_Body_Measure_Snomed

type CMRPercentileBodyMeasureSnomed =
    | "27113001:370130000=415068004"
    | "50373000:370130000=415068004"
    | "363812007:370130000=415068004"
    | "60621009:370130000=415068004";

const CMRPercentileBodyMeasureSnomed: t.Type<CMRPercentileBodyMeasureSnomed> = t.union(
    [
        t.literal("27113001:370130000=415068004"),
        t.literal("50373000:370130000=415068004"),
        t.literal("363812007:370130000=415068004"),
        t.literal("60621009:370130000=415068004")
    ],
    "CMRPercentileBodyMeasureSnomed"
);

export const CMRPercentileBodyMeasureSnomedArray: string[] = [
    "27113001:370130000=415068004",
    "50373000:370130000=415068004",
    "363812007:370130000=415068004",
    "60621009:370130000=415068004"
];

export const CMRPercentileBodyMeasureSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "27113001:370130000=415068004",
                display:
                    "Body weight (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            },
            {
                code: "50373000:370130000=415068004",
                display:
                    "Body height measure (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            },
            {
                code: "363812007:370130000=415068004",
                display:
                    "Head circumference (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            },
            {
                code: "60621009:370130000=415068004",
                display:
                    "Body mass index (observable entity) : Property (attribute) = Percentile value (qualifier value)"
            }
        ]
    }
];

export default CMRPercentileBodyMeasureSnomed;
