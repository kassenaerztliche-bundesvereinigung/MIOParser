import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU9PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU9PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U9_Physical_Exam_Abdomen_Genitals

type CMRU9PhysicalExamAbdomenGenitals =
    | "65476007:{363698007=10200004,363698007=78961009}"
    | "128545000";

const CMRU9PhysicalExamAbdomenGenitals: t.Type<CMRU9PhysicalExamAbdomenGenitals> =
    t.union(
        [
            t.literal("65476007:{363698007=10200004,363698007=78961009}"),
            t.literal("128545000")
        ],
        "CMRU9PhysicalExamAbdomenGenitals"
    );

export const CMRU9PhysicalExamAbdomenGenitalsArray: string[] = [
    "65476007:{363698007=10200004,363698007=78961009}",
    "128545000"
];

export const CMRU9PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "65476007:{363698007=10200004,363698007=78961009}",
                display:
                    "Abnormal size (finding) : {Finding site (attribute) = Liver structure (body structure) , Finding site (attribute) = Splenic structure (body structure)}"
            },
            {
                code: "128545000",
                display: "Hernia of abdominal wall (disorder)"
            }
        ]
    }
];

export { CMRU9PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU9PhysicalExamAbdomenGenitals;
