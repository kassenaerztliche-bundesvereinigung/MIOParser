import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU4PhysicalExamHeadGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4PhysicalExamHeadGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Physical_Exam_Head

type CMRU4PhysicalExamHead =
    | "111235007"
    | "253978002"
    | "248387005"
    | "206200000"
    | "366372002";

const CMRU4PhysicalExamHead: t.Type<CMRU4PhysicalExamHead> = t.union(
    [
        t.literal("111235007"),
        t.literal("253978002"),
        t.literal("248387005"),
        t.literal("206200000"),
        t.literal("366372002")
    ],
    "CMRU4PhysicalExamHead"
);

export const CMRU4PhysicalExamHeadArray: string[] = [
    "111235007",
    "253978002",
    "248387005",
    "206200000",
    "366372002"
];

export const CMRU4PhysicalExamHeadValueSet: ValueSet = [
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
                code: "206200000",
                display: "Cephalhematoma due to birth trauma (disorder)"
            },
            {
                code: "366372002",
                display: "Finding of level of fontanelle (finding)"
            }
        ]
    }
];

export { CMRU4PhysicalExamHeadGerman as ConceptMap };

export default CMRU4PhysicalExamHead;
