import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2U3PhysicalExamEyesGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U3PhysicalExamEyesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U3_Physical_Exam_Eyes

type CMRU2U3PhysicalExamEyes = "737269000" | "307699005" | "400964006";

const CMRU2U3PhysicalExamEyes: t.Type<CMRU2U3PhysicalExamEyes> = t.union(
    [t.literal("737269000"), t.literal("307699005"), t.literal("400964006")],
    "CMRU2U3PhysicalExamEyes"
);

export const CMRU2U3PhysicalExamEyesArray: string[] = [
    "737269000",
    "307699005",
    "400964006"
];

export const CMRU2U3PhysicalExamEyesValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU2U3PhysicalExamEyesGerman as ConceptMap };

export default CMRU2U3PhysicalExamEyes;
