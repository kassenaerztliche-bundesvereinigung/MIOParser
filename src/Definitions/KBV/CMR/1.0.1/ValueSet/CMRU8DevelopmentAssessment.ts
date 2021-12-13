import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU8DevelopmentAssessmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8DevelopmentAssessmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_Development_Assessment

type CMRU8DevelopmentAssessment =
    | "364832000"
    | "364944003"
    | "365715000"
    | "284490008"
    | "268672004"
    | "365997002";

const CMRU8DevelopmentAssessment: t.Type<CMRU8DevelopmentAssessment> = t.union(
    [
        t.literal("364832000"),
        t.literal("364944003"),
        t.literal("365715000"),
        t.literal("284490008"),
        t.literal("268672004"),
        t.literal("365997002")
    ],
    "CMRU8DevelopmentAssessment"
);

export const CMRU8DevelopmentAssessmentArray: string[] = [
    "364832000",
    "364944003",
    "365715000",
    "284490008",
    "268672004",
    "365997002"
];

export const CMRU8DevelopmentAssessmentValueSet: ValueSet = [
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
                code: "365715000",
                display: "Finding related to ability to process information (finding)"
            },
            {
                code: "284490008",
                display: "Finding relating to complex and social behaviors (finding)"
            },
            {
                code: "268672004",
                display: "Disorder of speech and language development (disorder)"
            },
            {
                code: "365997002",
                display: "Finding related to ability to interact with others (finding)"
            }
        ]
    }
];

export { CMRU8DevelopmentAssessmentGerman as ConceptMap };

export default CMRU8DevelopmentAssessment;
