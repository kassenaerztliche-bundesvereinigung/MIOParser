import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7U9PhysicalExamHeartBloodCirculationGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7U9PhysicalExamHeartBloodCirculationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_U9_Physical_Exam_Heart_Blood_Circulation

type CMRU7U9PhysicalExamHeartBloodCirculation =
    | "361135004"
    | "698247007"
    | "123824001"
    | "88610006";

const CMRU7U9PhysicalExamHeartBloodCirculation: t.Type<CMRU7U9PhysicalExamHeartBloodCirculation> =
    t.union(
        [
            t.literal("361135004"),
            t.literal("698247007"),
            t.literal("123824001"),
            t.literal("88610006")
        ],
        "CMRU7U9PhysicalExamHeartBloodCirculation"
    );

export const CMRU7U9PhysicalExamHeartBloodCirculationArray: string[] = [
    "361135004",
    "698247007",
    "123824001",
    "88610006"
];

export const CMRU7U9PhysicalExamHeartBloodCirculationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "361135004",
                display: "Abnormal cardiac rate (finding)"
            },
            {
                code: "698247007",
                display: "Cardiac arrhythmia (disorder)"
            },
            {
                code: "123824001",
                display: "Heart sounds abnormal (finding)"
            },
            {
                code: "88610006",
                display: "Heart murmur (finding)"
            }
        ]
    }
];

export { CMRU7U9PhysicalExamHeartBloodCirculationGerman as ConceptMap };

export default CMRU7U9PhysicalExamHeartBloodCirculation;
