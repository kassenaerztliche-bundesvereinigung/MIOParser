import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5PhysicalExamMusculoskeletalSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Physical_Exam_Musculoskeletal_System

type CMRU5PhysicalExamMusculoskeletalSystem =
    | "422949007"
    | "43029002"
    | "225606002"
    | "366725004"
    | "298180004"
    | "366420008"
    | "404684003:116676008=72704001";

const CMRU5PhysicalExamMusculoskeletalSystem: t.Type<CMRU5PhysicalExamMusculoskeletalSystem> =
    t.union(
        [
            t.literal("422949007"),
            t.literal("43029002"),
            t.literal("225606002"),
            t.literal("366725004"),
            t.literal("298180004"),
            t.literal("366420008"),
            t.literal("404684003:116676008=72704001")
        ],
        "CMRU5PhysicalExamMusculoskeletalSystem"
    );

export const CMRU5PhysicalExamMusculoskeletalSystemArray: string[] = [
    "422949007",
    "43029002",
    "225606002",
    "366725004",
    "298180004",
    "366420008",
    "404684003:116676008=72704001"
];

export const CMRU5PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
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
            },
            {
                code: "404684003:116676008=72704001",
                display:
                    "Clinical finding (finding) : Associated morphology (attribute) = Fracture (morphologic abnormality)"
            }
        ]
    }
];

export { CMRU5PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU5PhysicalExamMusculoskeletalSystem;
