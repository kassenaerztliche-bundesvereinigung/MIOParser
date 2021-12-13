import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU6PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Physical_Exam_Mouth_Nose

type CMRU6PhysicalExamMouthNose =
    | "125593007"
    | "367381002"
    | "300255008"
    | "232209000"
    | "38160000";

const CMRU6PhysicalExamMouthNose: t.Type<CMRU6PhysicalExamMouthNose> = t.union(
    [
        t.literal("125593007"),
        t.literal("367381002"),
        t.literal("300255008"),
        t.literal("232209000"),
        t.literal("38160000")
    ],
    "CMRU6PhysicalExamMouthNose"
);

export const CMRU6PhysicalExamMouthNoseArray: string[] = [
    "125593007",
    "367381002",
    "300255008",
    "232209000",
    "38160000"
];

export const CMRU6PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            },
            {
                code: "367381002",
                display: "Weak mouth closure (finding)"
            },
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)"
            },
            {
                code: "38160000",
                display: "Abnormal voice (finding)"
            }
        ]
    }
];

export { CMRU6PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU6PhysicalExamMouthNose;
