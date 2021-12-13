import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU7aCurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU7aCurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U7a_Current_Child_History

type CMRU7aCurrentChildHistory =
    | "715949008"
    | "248124006"
    | "271840007"
    | "416940007:363589002=234723000"
    | "162339002"
    | "72863001"
    | "288599003"
    | "425067005"
    | "141441000119107";

const CMRU7aCurrentChildHistory: t.Type<CMRU7aCurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("248124006"),
        t.literal("271840007"),
        t.literal("416940007:363589002=234723000"),
        t.literal("162339002"),
        t.literal("72863001"),
        t.literal("288599003"),
        t.literal("425067005"),
        t.literal("141441000119107")
    ],
    "CMRU7aCurrentChildHistory"
);

export const CMRU7aCurrentChildHistoryArray: string[] = [
    "715949008",
    "248124006",
    "271840007",
    "416940007:363589002=234723000",
    "162339002",
    "72863001",
    "288599003",
    "425067005",
    "141441000119107"
];

export const CMRU7aCurrentChildHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)"
            },
            {
                code: "248124006",
                display: "Eating problem (finding)"
            },
            {
                code: "271840007",
                display: "Abnormal feces (finding)"
            },
            {
                code: "416940007:363589002=234723000",
                display:
                    "Past history of procedure (situation) : Associated procedure (attribute = Topical application of fluoride - tooth (procedure)"
            },
            {
                code: "162339002",
                display: "Hearing normal (finding)"
            },
            {
                code: "72863001",
                display: "Snoring (finding)"
            },
            {
                code: "288599003",
                display: "Able to use verbal communication (finding)"
            },
            {
                code: "425067005",
                display: "Speech and language development finding (finding)"
            },
            {
                code: "141441000119107",
                display: "Childhood onset stuttering (finding)"
            }
        ]
    }
];

export { CMRU7aCurrentChildHistoryGerman as ConceptMap };

export default CMRU7aCurrentChildHistory;
