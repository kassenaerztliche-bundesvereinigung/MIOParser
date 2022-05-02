import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU8PhysicalExamEarsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8PhysicalExamEarsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_Physical_Exam_Ears

type CMRU8PhysicalExamEars = "134376008" | "134375007";

const CMRU8PhysicalExamEars: t.Type<CMRU8PhysicalExamEars> = t.union(
    [t.literal("134376008"), t.literal("134375007")],
    "CMRU8PhysicalExamEars"
);

export const CMRU8PhysicalExamEarsArray: string[] = ["134376008", "134375007"];

export const CMRU8PhysicalExamEarsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "134376008",
                display: "Hearing test right abnormality (finding)"
            },
            {
                code: "134375007",
                display: "Hearing test left abnormality (finding)"
            }
        ]
    }
];

export { CMRU8PhysicalExamEarsGerman as ConceptMap };

export default CMRU8PhysicalExamEars;
