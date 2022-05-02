import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Physical_Exam_Mouth_Nose

type CMRU5PhysicalExamMouthNose = "125593007" | "367381002";

const CMRU5PhysicalExamMouthNose: t.Type<CMRU5PhysicalExamMouthNose> = t.union(
    [t.literal("125593007"), t.literal("367381002")],
    "CMRU5PhysicalExamMouthNose"
);

export const CMRU5PhysicalExamMouthNoseArray: string[] = ["125593007", "367381002"];

export const CMRU5PhysicalExamMouthNoseValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU5PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU5PhysicalExamMouthNose;
