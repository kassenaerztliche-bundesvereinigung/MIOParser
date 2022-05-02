import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3U4PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3U4PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_U4_Physical_Exam_Mouth_Nose

type CMRU3U4PhysicalExamMouthNose =
    | "300255008"
    | "449790007"
    | "125593007"
    | "65476007:363698007=21974007"
    | "232209000"
    | "367381002";

const CMRU3U4PhysicalExamMouthNose: t.Type<CMRU3U4PhysicalExamMouthNose> = t.union(
    [
        t.literal("300255008"),
        t.literal("449790007"),
        t.literal("125593007"),
        t.literal("65476007:363698007=21974007"),
        t.literal("232209000"),
        t.literal("367381002")
    ],
    "CMRU3U4PhysicalExamMouthNose"
);

export const CMRU3U4PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "449790007",
    "125593007",
    "65476007:363698007=21974007",
    "232209000",
    "367381002"
];

export const CMRU3U4PhysicalExamMouthNoseValueSet: ValueSet = [
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
            },
            {
                code: "65476007:363698007=21974007",
                display:
                    "Abnormal size (finding) : Finding site (attribute) = Tongue structure (body structure)"
            },
            {
                code: "232209000",
                display: "Nasal obstruction (disorder)"
            },
            {
                code: "367381002",
                display: "Weak mouth closure (finding)"
            }
        ]
    }
];

export { CMRU3U4PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU3U4PhysicalExamMouthNose;
