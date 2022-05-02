import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3PhysicalExamMusculoskeletalSystemGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3PhysicalExamMusculoskeletalSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Physical_Exam_Musculoskeletal_System

type CMRU3PhysicalExamMusculoskeletalSystem =
    | "422949007"
    | "43029002"
    | "225606002"
    | "366725004"
    | "8652009"
    | "298180004"
    | "366420008"
    | "299745004+299746003"
    | "299742001+299743006"
    | "299757008+299758003"
    | "404684003:116676008=72704001";

const CMRU3PhysicalExamMusculoskeletalSystem: t.Type<CMRU3PhysicalExamMusculoskeletalSystem> =
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
            t.literal("299742001+299743006"),
            t.literal("299757008+299758003"),
            t.literal("404684003:116676008=72704001")
        ],
        "CMRU3PhysicalExamMusculoskeletalSystem"
    );

export const CMRU3PhysicalExamMusculoskeletalSystemArray: string[] = [
    "422949007",
    "43029002",
    "225606002",
    "366725004",
    "8652009",
    "298180004",
    "366420008",
    "299745004+299746003",
    "299742001+299743006",
    "299757008+299758003",
    "404684003:116676008=72704001"
];

export const CMRU3PhysicalExamMusculoskeletalSystemValueSet: ValueSet = [
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
                code: "299742001+299743006",
                display: "Moro reflex absent (finding) + Moro reflex equivocal (finding)"
            },
            {
                code: "299757008+299758003",
                display:
                    "Sucking reflex absent (finding) + Sucking reflex equivocal (finding)"
            },
            {
                code: "404684003:116676008=72704001",
                display:
                    "Clinical finding (finding) : Associated morphology (attribute) = Fracture (morphologic abnormality)"
            }
        ]
    }
];

export { CMRU3PhysicalExamMusculoskeletalSystemGerman as ConceptMap };

export default CMRU3PhysicalExamMusculoskeletalSystem;
