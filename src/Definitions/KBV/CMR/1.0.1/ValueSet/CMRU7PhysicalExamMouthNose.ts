import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_Physical_Exam_Mouth_Nose

type CMRU7PhysicalExamMouthNose = "300255008" | "125593007" | "59140005" | "38160000";

const CMRU7PhysicalExamMouthNose: t.Type<CMRU7PhysicalExamMouthNose> = t.union(
    [
        t.literal("300255008"),
        t.literal("125593007"),
        t.literal("59140005"),
        t.literal("38160000")
    ],
    "CMRU7PhysicalExamMouthNose"
);

export const CMRU7PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "125593007",
    "59140005",
    "38160000"
];

export const CMRU7PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            },
            {
                code: "59140005",
                display: "Abnormal salivary secretion (finding)"
            },
            {
                code: "38160000",
                display: "Abnormal voice (finding)"
            }
        ]
    }
];

export { CMRU7PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU7PhysicalExamMouthNose;
