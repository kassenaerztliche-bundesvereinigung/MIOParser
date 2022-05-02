import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2PhysicalExamHeadGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2PhysicalExamHeadGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Physical_Exam_Head

type CMRU2PhysicalExamHead =
    | "111235007"
    | "253978002"
    | "248387005"
    | "206200000"
    | "366372002"
    | "23149001:363698007=783207002";

const CMRU2PhysicalExamHead: t.Type<CMRU2PhysicalExamHead> = t.union(
    [
        t.literal("111235007"),
        t.literal("253978002"),
        t.literal("248387005"),
        t.literal("206200000"),
        t.literal("366372002"),
        t.literal("23149001:363698007=783207002")
    ],
    "CMRU2PhysicalExamHead"
);

export const CMRU2PhysicalExamHeadArray: string[] = [
    "111235007",
    "253978002",
    "248387005",
    "206200000",
    "366372002",
    "23149001:363698007=783207002"
];

export const CMRU2PhysicalExamHeadValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU2PhysicalExamHeadGerman as ConceptMap };

export default CMRU2PhysicalExamHead;
