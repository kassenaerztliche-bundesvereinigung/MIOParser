import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2U3PhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2U3PhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U3_Physical_Exam_Abdomen_Genitals

type CMRU2U3PhysicalExamAbdomenGenitals =
    | "822987005:{116676008=49755003,363698007=818987002}"
    | "249537008"
    | "65476007:{363698007=10200004,363698007=78961009}"
    | "128545000";

const CMRU2U3PhysicalExamAbdomenGenitals: t.Type<CMRU2U3PhysicalExamAbdomenGenitals> =
    t.union(
        [
            t.literal("822987005:{116676008=49755003,363698007=818987002}"),
            t.literal("249537008"),
            t.literal("65476007:{363698007=10200004,363698007=78961009}"),
            t.literal("128545000")
        ],
        "CMRU2U3PhysicalExamAbdomenGenitals"
    );

export const CMRU2U3PhysicalExamAbdomenGenitalsArray: string[] = [
    "822987005:{116676008=49755003,363698007=818987002}",
    "249537008",
    "65476007:{363698007=10200004,363698007=78961009}",
    "128545000"
];

export const CMRU2U3PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "822987005:{116676008=49755003,363698007=818987002}",
                display:
                    "Finding of abdominopelvic segment of trunk (finding) : {Associated morphology (attribute)  = Developmental anomaly (morphologic abnormality) , Finding site (attribute) = Structure of abdominopelvic cavity (body structure) }"
            },
            {
                code: "249537008",
                display: "Umbilicus finding (finding)"
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

export { CMRU2U3PhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU2U3PhysicalExamAbdomenGenitals;
