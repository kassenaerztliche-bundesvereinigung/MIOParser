import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU4PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4PhysicalExamMusculoskeletalSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Physical_Exam_Musculoskeletal_System

type CMRU4PhysicalExamMusculoskeletalSystem =
    | "422949007"
    | "43029002"
    | "225606002"
    | "366725004"
    | "8652009"
    | "298180004"
    | "366420008"
    | "299745004+299746003"
    | "246592003+246589002"
    | "366121000"
    | "404684003:116676008=72704001";

const CMRU4PhysicalExamMusculoskeletalSystem: t.Type<CMRU4PhysicalExamMusculoskeletalSystem> =
    t.union(
        [
            t.literal("422949007"),
            t.literal("43029002"),
            t.literal("225606002"),
            t.literal("366725004"),
            t.literal("8652009"),
            t.literal("298180004"),
            t.literal("366420008"),
            t.literal("299745004+299746003"),
            t.literal("246592003+246589002"),
            t.literal("366121000"),
            t.literal("404684003:116676008=72704001")
        ],
        "CMRU4PhysicalExamMusculoskeletalSystem"
    );

export const CMRU4PhysicalExamMusculoskeletalSystemArray: string[] = [
    "422949007",
    "43029002",
    "225606002",
    "366725004",
    "8652009",
    "298180004",
    "366420008",
    "299745004+299746003",
    "246592003+246589002",
    "366121000",
    "404684003:116676008=72704001"
];

export const CMRU4PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
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
                code: "8652009",
                display: "Opisthotonus (finding)"
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
                code: "299745004+299746003",
                display:
                    "Palmar reflex absent (finding) + Palmar reflex equivocal (finding)"
            },
            {
                code: "246592003+246589002",
                display:
                    "Absent plantar response (finding) + Equivocal plantar response (finding)"
            },
            {
                code: "366121000",
                display: "Primitive reflex finding (finding)"
            },
            {
                code: "404684003:116676008=72704001",
                display:
                    "Clinical finding (finding) : Associated morphology (attribute) = Fracture (morphologic abnormality)"
            }
        ]
    }
];

export { CMRU4PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU4PhysicalExamMusculoskeletalSystem;
