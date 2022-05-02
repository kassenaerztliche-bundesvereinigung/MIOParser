import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3DevelopmentAssessmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3DevelopmentAssessmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Development_Assessment

type CMRU3DevelopmentAssessment =
    | "364832000"
    | "364944003"
    | "285770005"
    | "284490008"
    | "106126000"
    | "365997002"
    | "106131003";

const CMRU3DevelopmentAssessment: t.Type<CMRU3DevelopmentAssessment> = t.union(
    [
        t.literal("364832000"),
        t.literal("364944003"),
        t.literal("285770005"),
        t.literal("284490008"),
        t.literal("106126000"),
        t.literal("365997002"),
        t.literal("106131003")
    ],
    "CMRU3DevelopmentAssessment"
);

export const CMRU3DevelopmentAssessmentArray: string[] = [
    "364832000",
    "364944003",
    "285770005",
    "284490008",
    "106126000",
    "365997002",
    "106131003"
];

export const CMRU3DevelopmentAssessmentValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "364832000",
                display:
                    "Finding related to ability to perform gross motor function (finding)"
            },
            {
                code: "364944003",
                display:
                    "Finding related to ability to perform fine motor function (finding)"
            },
            {
                code: "285770005",
                display: "Finding of perceptual performance (finding)"
            },
            {
                code: "284490008",
                display: "Finding relating to complex and social behaviors (finding)"
            },
            {
                code: "106126000",
                display: "Emotional state finding (finding)"
            },
            {
                code: "365997002",
                display: "Finding related to ability to interact with others (finding)"
            },
            {
                code: "106131003",
                display: "Mood finding (finding)"
            }
        ]
    }
];

export { CMRU3DevelopmentAssessmentGerman as ConceptMap };

export default CMRU3DevelopmentAssessment;
