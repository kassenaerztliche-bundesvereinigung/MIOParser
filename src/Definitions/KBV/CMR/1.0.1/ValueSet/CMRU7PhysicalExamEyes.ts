import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_Physical_Exam_Eyes

type CMRU7PhysicalExamEyes =
    | "737269000"
    | "307699005"
    | "400964006"
    | "34241000119104"
    | "301937002";

const CMRU7PhysicalExamEyes: t.Type<CMRU7PhysicalExamEyes> = t.union(
    [
        t.literal("737269000"),
        t.literal("307699005"),
        t.literal("400964006"),
        t.literal("34241000119104"),
        t.literal("301937002")
    ],
    "CMRU7PhysicalExamEyes"
);

export const CMRU7PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006",
    "34241000119104",
    "301937002"
];

export const CMRU7PhysicalExamEyesValueSet: ValueSet = [
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
                code: "400964006",
                display: "Iris transillumination (finding)"
            },
            {
                code: "34241000119104",
                display: "Ocular torticollis (disorder)"
            },
            {
                code: "301937002",
                display: "Finding of appearance of pupil (finding)"
            }
        ]
    }
];

export { CMRU7PhysicalExamEyesGerman as ConceptMap };

export default CMRU7PhysicalExamEyes;
