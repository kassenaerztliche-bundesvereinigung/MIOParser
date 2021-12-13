import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU4PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Physical_Exam_Abdomen_Genitals

type CMRU4PhysicalExamAbdomenGenitals =
    | "822987005:{116676008=49755003,363698007=818987002}"
    | "65476007:{363698007=10200004,363698007=78961009}"
    | "128545000";

const CMRU4PhysicalExamAbdomenGenitals: t.Type<CMRU4PhysicalExamAbdomenGenitals> =
    t.union(
        [
            t.literal("822987005:{116676008=49755003,363698007=818987002}"),
            t.literal("65476007:{363698007=10200004,363698007=78961009}"),
            t.literal("128545000")
        ],
        "CMRU4PhysicalExamAbdomenGenitals"
    );

export const CMRU4PhysicalExamAbdomenGenitalsArray: string[] = [
    "822987005:{116676008=49755003,363698007=818987002}",
    "65476007:{363698007=10200004,363698007=78961009}",
    "128545000"
];

export const CMRU4PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "822987005:{116676008=49755003,363698007=818987002}",
                display:
                    "Finding of abdominopelvic segment of trunk (finding) : {Associated morphology (attribute)  = Developmental anomaly (morphologic abnormality) , Finding site (attribute) = Structure of abdominopelvic cavity (body structure) }"
            },
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

export { CMRU4PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU4PhysicalExamAbdomenGenitals;
