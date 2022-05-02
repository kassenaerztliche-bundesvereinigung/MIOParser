import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7U7aPhysicalExamAbdomenGenitalsGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7U7aPhysicalExamAbdomenGenitalsGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7_U7a_Physical_Exam_Abdomen_Genitals

type CMRU7U7aPhysicalExamAbdomenGenitals =
    | "204878001"
    | "128545000"
    | "65476007:{363698007=10200004,363698007=78961009}";

const CMRU7U7aPhysicalExamAbdomenGenitals: t.Type<CMRU7U7aPhysicalExamAbdomenGenitals> =
    t.union(
        [
            t.literal("204878001"),
            t.literal("128545000"),
            t.literal("65476007:{363698007=10200004,363698007=78961009}")
        ],
        "CMRU7U7aPhysicalExamAbdomenGenitals"
    );

export const CMRU7U7aPhysicalExamAbdomenGenitalsArray: string[] = [
    "204878001",
    "128545000",
    "65476007:{363698007=10200004,363698007=78961009}"
];

export const CMRU7U7aPhysicalExamAbdomenGenitalsValueSet: ValueSet = [
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
            }
        ]
    }
];

export { CMRU7U7aPhysicalExamAbdomenGenitalsGerman as ConceptMap };

export default CMRU7U7aPhysicalExamAbdomenGenitals;
