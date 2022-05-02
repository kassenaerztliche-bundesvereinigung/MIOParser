import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7aDevelopmentAssessmentGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aDevelopmentAssessmentGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_Development_Assessment

type CMRU7aDevelopmentAssessment =
    | "364832000"
    | "364944003"
    | "304866004"
    | "284490008"
    | "268672004"
    | "365997002";

const CMRU7aDevelopmentAssessment: t.Type<CMRU7aDevelopmentAssessment> = t.union(
    [
        t.literal("364832000"),
        t.literal("364944003"),
        t.literal("304866004"),
        t.literal("284490008"),
        t.literal("268672004"),
        t.literal("365997002")
    ],
    "CMRU7aDevelopmentAssessment"
);

export const CMRU7aDevelopmentAssessmentArray: string[] = [
    "364832000",
    "364944003",
    "304866004",
    "284490008",
    "268672004",
    "365997002"
];

export const CMRU7aDevelopmentAssessmentValueSet: ValueSet = [
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
                code: "304866004",
                display: "Psychodynamic attachment finding (finding)"
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

export { CMRU7aDevelopmentAssessmentGerman as ConceptMap };

export default CMRU7aDevelopmentAssessment;
