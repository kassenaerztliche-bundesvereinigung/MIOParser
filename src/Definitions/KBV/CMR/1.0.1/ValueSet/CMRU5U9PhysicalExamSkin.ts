import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5U9PhysicalExamSkinGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5U9PhysicalExamSkinGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_U9_Physical_Exam_Skin

type CMRU5U9PhysicalExamSkin =
    | "267029006"
    | "781645001"
    | "106076001:116676008=708039003";

const CMRU5U9PhysicalExamSkin: t.Type<CMRU5U9PhysicalExamSkin> = t.union(
    [
        t.literal("267029006"),
        t.literal("781645001"),
        t.literal("106076001:116676008=708039003")
    ],
    "CMRU5U9PhysicalExamSkin"
);

export const CMRU5U9PhysicalExamSkinArray: string[] = [
    "267029006",
    "781645001",
    "106076001:116676008=708039003"
];

export const CMRU5U9PhysicalExamSkinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)"
            },
            {
                code: "781645001",
                display: "Injury to skin caused by trauma (finding)"
            },
            {
                code: "106076001:116676008=708039003",
                display:
                    "Skin finding (finding) : Associated morphology (attribute) = Inflammatory lesion (morphologic abnormality)"
            }
        ]
    }
];

export { CMRU5U9PhysicalExamSkinGerman as ConceptMap };

export default CMRU5U9PhysicalExamSkin;
