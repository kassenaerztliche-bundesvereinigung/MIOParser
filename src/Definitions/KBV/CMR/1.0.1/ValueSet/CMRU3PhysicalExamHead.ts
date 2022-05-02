import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3PhysicalExamHeadGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3PhysicalExamHeadGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Physical_Exam_Head

type CMRU3PhysicalExamHead =
    | "111235007"
    | "253978002"
    | "248387005"
    | "206200000"
    | "366372002"
    | "23149001:363698007=783207002"
    | "293291000119108";

const CMRU3PhysicalExamHead: t.Type<CMRU3PhysicalExamHead> = t.union(
    [
        t.literal("111235007"),
        t.literal("253978002"),
        t.literal("248387005"),
        t.literal("206200000"),
        t.literal("366372002"),
        t.literal("23149001:363698007=783207002"),
        t.literal("293291000119108")
    ],
    "CMRU3PhysicalExamHead"
);

export const CMRU3PhysicalExamHeadArray: string[] = [
    "111235007",
    "253978002",
    "248387005",
    "206200000",
    "366372002",
    "23149001:363698007=783207002",
    "293291000119108"
];

export const CMRU3PhysicalExamHeadValueSet: ValueSet = [
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
            },
            {
                code: "23149001:363698007=783207002",
                display:
                    "Bone crepitus (finding) : Finding site (attribute) = Bone and/or joint structure of cranium (body structure)"
            },
            {
                code: "293291000119108",
                display: "Acquired postural plagiocephaly (disorder)"
            }
        ]
    }
];

export { CMRU3PhysicalExamHeadGerman as ConceptMap };

export default CMRU3PhysicalExamHead;
