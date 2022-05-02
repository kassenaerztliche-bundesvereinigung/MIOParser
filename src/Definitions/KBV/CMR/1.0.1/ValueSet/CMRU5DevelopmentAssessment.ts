import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5DevelopmentAssessmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5DevelopmentAssessmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Development_Assessment

type CMRU5DevelopmentAssessment =
    | "364832000"
    | "364944003"
    | "365374008"
    | "284490008"
    | "268672004"
    | "106126000"
    | "365997002"
    | "106131003";

const CMRU5DevelopmentAssessment: t.Type<CMRU5DevelopmentAssessment> = t.union(
    [
        t.literal("364832000"),
        t.literal("364944003"),
        t.literal("365374008"),
        t.literal("284490008"),
        t.literal("268672004"),
        t.literal("106126000"),
        t.literal("365997002"),
        t.literal("106131003")
    ],
    "CMRU5DevelopmentAssessment"
);

export const CMRU5DevelopmentAssessmentArray: string[] = [
    "364832000",
    "364944003",
    "365374008",
    "284490008",
    "268672004",
    "106126000",
    "365997002",
    "106131003"
];

export const CMRU5DevelopmentAssessmentValueSet: ValueSet = [
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
                code: "365374008",
                display: "Finding related to ability to play (finding)"
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

export { CMRU5DevelopmentAssessmentGerman as ConceptMap };

export default CMRU5DevelopmentAssessment;
