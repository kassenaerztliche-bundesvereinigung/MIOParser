import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2PhysicalExamMouthNoseGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2PhysicalExamMouthNoseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Physical_Exam_Mouth_Nose

type CMRU2PhysicalExamMouthNose =
    | "300255008"
    | "449790007"
    | "125593007"
    | "65476007:363698007=21974007"
    | "232209000";

const CMRU2PhysicalExamMouthNose: t.Type<CMRU2PhysicalExamMouthNose> = t.union(
    [
        t.literal("300255008"),
        t.literal("449790007"),
        t.literal("125593007"),
        t.literal("65476007:363698007=21974007"),
        t.literal("232209000")
    ],
    "CMRU2PhysicalExamMouthNose"
);

export const CMRU2PhysicalExamMouthNoseArray: string[] = [
    "300255008",
    "449790007",
    "125593007",
    "65476007:363698007=21974007",
    "232209000"
];

export const CMRU2PhysicalExamMouthNoseValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU2PhysicalExamMouthNoseGerman as ConceptMap };

export default CMRU2PhysicalExamMouthNose;
