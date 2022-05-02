import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU6PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6PhysicalExamMusculoskeletalSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Physical_Exam_Musculoskeletal_System

type CMRU6PhysicalExamMusculoskeletalSystem =
    | "422949007"
    | "43029002"
    | "225606002"
    | "366725004"
    | "298180004"
    | "366420008";

const CMRU6PhysicalExamMusculoskeletalSystem: t.Type<CMRU6PhysicalExamMusculoskeletalSystem> =
    t.union(
        [
            t.literal("422949007"),
            t.literal("43029002"),
            t.literal("225606002"),
            t.literal("366725004"),
            t.literal("298180004"),
            t.literal("366420008")
        ],
        "CMRU6PhysicalExamMusculoskeletalSystem"
    );

export const CMRU6PhysicalExamMusculoskeletalSystemArray: string[] = [
    "422949007",
    "43029002",
    "225606002",
    "366725004",
    "298180004",
    "366420008"
];

export const CMRU6PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "422949007",
                display: "Musculoskeletal asymmetry (finding)"
            },
            {
                code: "43029002",
                display: "Abnormal posture (finding)"
            },
            {
                code: "225606002",
                display: "Abnormal movement (finding)"
            },
            {
                code: "366725004",
                display: "Finding of muscle tone (finding)"
            },
            {
                code: "298180004",
                display: "Finding of range of joint movement (finding)"
            },
            {
                code: "366420008",
                display: "Peripheral reflex finding (finding)"
            }
        ]
    }
];

export { CMRU6PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU6PhysicalExamMusculoskeletalSystem;
