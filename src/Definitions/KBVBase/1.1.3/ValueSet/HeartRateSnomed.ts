import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";
import HeartRateSnomedGerman from "../../../../Definitions/KBVBase/1.1.3/ConceptMap/HeartRateGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Heart_Rate_Snomed

type HeartRateSnomed = "364075005" | "78564009" | "249043002";

const HeartRateSnomed: t.Type<HeartRateSnomed> = t.union(
    [t.literal("364075005"), t.literal("78564009"), t.literal("249043002")],
    "HeartRateSnomed"
);

export const HeartRateSnomedArray: string[] = ["364075005", "78564009", "249043002"];

export const HeartRateSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "364075005",
                display: "Heart rate (observable entity)"
            },
            {
                code: "78564009",
                display: "Heart rate measured at systemic artery (observable entity)"
            },
            {
                code: "249043002",
                display: "Fetal heart rate (observable entity)"
            }
        ]
    }
];

export { HeartRateSnomedGerman as ConceptMap };

export default HeartRateSnomed;
