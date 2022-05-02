import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3U4PhysicalExamSkinGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3U4PhysicalExamSkinGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_U4_Physical_Exam_Skin

type CMRU3U4PhysicalExamSkin =
    | "267029006"
    | "3415004"
    | "18165001"
    | "400210000"
    | "370172004"
    | "267038008"
    | "781645001"
    | "106076001:116676008=708039003";

const CMRU3U4PhysicalExamSkin: t.Type<CMRU3U4PhysicalExamSkin> = t.union(
    [
        t.literal("267029006"),
        t.literal("3415004"),
        t.literal("18165001"),
        t.literal("400210000"),
        t.literal("370172004"),
        t.literal("267038008"),
        t.literal("781645001"),
        t.literal("106076001:116676008=708039003")
    ],
    "CMRU3U4PhysicalExamSkin"
);

export const CMRU3U4PhysicalExamSkinArray: string[] = [
    "267029006",
    "3415004",
    "18165001",
    "400210000",
    "370172004",
    "267038008",
    "781645001",
    "106076001:116676008=708039003"
];

export const CMRU3U4PhysicalExamSkinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)"
            },
            {
                code: "3415004",
                display: "Cyanosis (finding)"
            },
            {
                code: "18165001",
                display: "Jaundice (finding)"
            },
            {
                code: "400210000",
                display: "Hemangioma (disorder)"
            },
            {
                code: "370172004",
                display: "Skin pigmentation (finding)"
            },
            {
                code: "267038008",
                display: "Edema (finding)"
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

export { CMRU3U4PhysicalExamSkinGerman as ConceptMap };

export default CMRU3U4PhysicalExamSkin;
