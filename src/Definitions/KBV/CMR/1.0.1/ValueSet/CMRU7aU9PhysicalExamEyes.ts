import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7aU9PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aU9PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_U9_Physical_Exam_Eyes

type CMRU7aU9PhysicalExamEyes =
    | "737269000"
    | "307699005"
    | "22066006"
    | "34241000119104"
    | "301937002"
    | "252853008:363713009=263654008"
    | "342061000119102"
    | "336451000119108"
    | "3289004";

const CMRU7aU9PhysicalExamEyes: t.Type<CMRU7aU9PhysicalExamEyes> = t.union(
    [
        t.literal("737269000"),
        t.literal("307699005"),
        t.literal("22066006"),
        t.literal("34241000119104"),
        t.literal("301937002"),
        t.literal("252853008:363713009=263654008"),
        t.literal("342061000119102"),
        t.literal("336451000119108"),
        t.literal("3289004")
    ],
    "CMRU7aU9PhysicalExamEyes"
);

export const CMRU7aU9PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "22066006",
    "34241000119104",
    "301937002",
    "252853008:363713009=263654008",
    "342061000119102",
    "336451000119108",
    "3289004"
];

export const CMRU7aU9PhysicalExamEyesValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "737269000",
                display: "Eye appearance abnormal (finding)"
            },
            {
                code: "307699005",
                display: "Nystagmus present (finding)"
            },
            {
                code: "22066006",
                display: "Strabismus (disorder)"
            },
            {
                code: "34241000119104",
                display: "Ocular torticollis (disorder)"
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)"
            },
            {
                code: "252853008:363713009=263654008",
                display:
                    "Stereotests (procedure) : Has interpretation (attribute) = Abnormal (qualifier value)"
            },
            {
                code: "342061000119102",
                display: "Amblyopia of left eye (disorder)"
            },
            {
                code: "336451000119108",
                display: "Amblyopia of right eye (disorder)"
            },
            {
                code: "3289004",
                display: "Anisometropia (disorder)"
            }
        ]
    }
];

export { CMRU7aU9PhysicalExamEyesGerman as ConceptMap };

export default CMRU7aU9PhysicalExamEyes;
