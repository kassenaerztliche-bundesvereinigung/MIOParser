import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU4U5PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4U5PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_U5_Physical_Exam_Eyes

type CMRU4U5PhysicalExamEyes = "737269000" | "307699005" | "400964006" | "870705000";

const CMRU4U5PhysicalExamEyes: t.Type<CMRU4U5PhysicalExamEyes> = t.union(
    [
        t.literal("737269000"),
        t.literal("307699005"),
        t.literal("400964006"),
        t.literal("870705000")
    ],
    "CMRU4U5PhysicalExamEyes"
);

export const CMRU4U5PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006",
    "870705000"
];

export const CMRU4U5PhysicalExamEyesValueSet: ValueSet = [
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
                code: "870705000",
                display: "Poor visual fixation (finding)"
            }
        ]
    }
];

export { CMRU4U5PhysicalExamEyesGerman as ConceptMap };

export default CMRU4U5PhysicalExamEyes;
