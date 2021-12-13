import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU8U9PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8U9PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_U9_Physical_Exam_Mouth_Nose

type CMRU8U9PhysicalExamMouthNose = "300255008" | "449790007" | "125593007";

const CMRU8U9PhysicalExamMouthNose: t.Type<CMRU8U9PhysicalExamMouthNose> = t.union(
    [t.literal("300255008"), t.literal("449790007"), t.literal("125593007")],
    "CMRU8U9PhysicalExamMouthNose"
);

export const CMRU8U9PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "449790007",
    "125593007"
];

export const CMRU8U9PhysicalExamMouthNoseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "300255008",
                display: "Oral cavity problem (finding)"
            },
            {
                code: "449790007",
                display: "Orofacial cleft (disorder)"
            },
            {
                code: "125593007",
                display: "Injury of face (disorder)"
            }
        ]
    }
];

export { CMRU8U9PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU8U9PhysicalExamMouthNose;
