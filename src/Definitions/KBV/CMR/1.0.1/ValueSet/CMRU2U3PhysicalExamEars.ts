import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2U3PhysicalExamEarsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U3PhysicalExamEarsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U3_Physical_Exam_Ears

type CMRU2U3PhysicalExamEars = "282038006";

const CMRU2U3PhysicalExamEars: t.Type<CMRU2U3PhysicalExamEars> = t.literal("282038006");

export const CMRU2U3PhysicalExamEarsArray: string[] = ["282038006"];

export const CMRU2U3PhysicalExamEarsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "282038006",
                display: "Congenital abnormality of external ear (disorder)"
            }
        ]
    }
];

export { CMRU2U3PhysicalExamEarsGerman as ConceptMap };

export default CMRU2U3PhysicalExamEars;
