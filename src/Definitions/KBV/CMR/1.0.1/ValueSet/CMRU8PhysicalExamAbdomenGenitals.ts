import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU8PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_Physical_Exam_Abdomen_Genitals

type CMRU8PhysicalExamAbdomenGenitals =
    | "204878001"
    | "128545000"
    | "65476007:{363698007=10200004,363698007=78961009}"
    | "167222005";

const CMRU8PhysicalExamAbdomenGenitals: t.Type<CMRU8PhysicalExamAbdomenGenitals> =
    t.union(
        [
            t.literal("204878001"),
            t.literal("128545000"),
            t.literal("65476007:{363698007=10200004,363698007=78961009}"),
            t.literal("167222005")
        ],
        "CMRU8PhysicalExamAbdomenGenitals"
    );

export const CMRU8PhysicalExamAbdomenGenitalsArray: string[] = [
    "204878001",
    "128545000",
    "65476007:{363698007=10200004,363698007=78961009}",
    "167222005"
];

export const CMRU8PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "204878001",
                display: "Undescended testicle (disorder)"
            },
            {
                code: "128545000",
                display: "Hernia of abdominal wall (disorder)"
            },
            {
                code: "65476007:{363698007=10200004,363698007=78961009}",
                display:
                    "Abnormal size (finding) : {Finding site (attribute) = Liver structure (body structure) , Finding site (attribute) = Splenic structure (body structure)}"
            },
            {
                code: "167222005",
                display: "Abnormal urinalysis (finding)"
            }
        ]
    }
];

export { CMRU8PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU8PhysicalExamAbdomenGenitals;
