import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5U6PhysicalExamHeadGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5U6PhysicalExamHeadGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_U6_Physical_Exam_Head

type CMRU5U6PhysicalExamHead = "111235007" | "253978002" | "248387005" | "366372002";

const CMRU5U6PhysicalExamHead: t.Type<CMRU5U6PhysicalExamHead> = t.union(
    [
        t.literal("111235007"),
        t.literal("253978002"),
        t.literal("248387005"),
        t.literal("366372002")
    ],
    "CMRU5U6PhysicalExamHead"
);

export const CMRU5U6PhysicalExamHeadArray: string[] = [
    "111235007",
    "253978002",
    "248387005",
    "366372002"
];

export const CMRU5U6PhysicalExamHeadValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "111235007",
                display: "Musculoskeletal disorder of the neck (disorder)"
            },
            {
                code: "253978002",
                display: "Dysmorphic features (finding)"
            },
            {
                code: "248387005",
                display: "Cranial suture finding (finding)"
            },
            {
                code: "366372002",
                display: "Finding of level of fontanelle (finding)"
            }
        ]
    }
];

export { CMRU5U6PhysicalExamHeadGerman as ConceptMap };

export default CMRU5U6PhysicalExamHead;
