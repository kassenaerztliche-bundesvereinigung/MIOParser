import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5U6PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5U6PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_U6_Physical_Exam_Abdomen_Genitals

type CMRU5U6PhysicalExamAbdomenGenitals =
    | "822987005:{116676008=49755003,363698007=818987002}"
    | "204878001"
    | "128545000"
    | "65476007:{363698007=10200004,363698007=78961009}";

const CMRU5U6PhysicalExamAbdomenGenitals: t.Type<CMRU5U6PhysicalExamAbdomenGenitals> =
    t.union(
        [
            t.literal("822987005:{116676008=49755003,363698007=818987002}"),
            t.literal("204878001"),
            t.literal("128545000"),
            t.literal("65476007:{363698007=10200004,363698007=78961009}")
        ],
        "CMRU5U6PhysicalExamAbdomenGenitals"
    );

export const CMRU5U6PhysicalExamAbdomenGenitalsArray: string[] = [
    "822987005:{116676008=49755003,363698007=818987002}",
    "204878001",
    "128545000",
    "65476007:{363698007=10200004,363698007=78961009}"
];

export const CMRU5U6PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "822987005:{116676008=49755003,363698007=818987002}",
                display:
                    "Finding of abdominopelvic segment of trunk (finding) : {Associated morphology (attribute)  = Developmental anomaly (morphologic abnormality) , Finding site (attribute) = Structure of abdominopelvic cavity (body structure) }"
            },
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
            }
        ]
    }
];

export { CMRU5U6PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU5U6PhysicalExamAbdomenGenitals;
