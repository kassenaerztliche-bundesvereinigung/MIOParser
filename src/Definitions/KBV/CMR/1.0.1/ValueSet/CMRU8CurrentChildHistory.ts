import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU8CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU8CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U8_Current_Child_History

type CMRU8CurrentChildHistory =
    | "715949008"
    | "72863001"
    | "425067005"
    | "288599003"
    | "141441000119107";

const CMRU8CurrentChildHistory: t.Type<CMRU8CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("72863001"),
        t.literal("425067005"),
        t.literal("288599003"),
        t.literal("141441000119107")
    ],
    "CMRU8CurrentChildHistory"
);

export const CMRU8CurrentChildHistoryArray: string[] = [
    "715949008",
    "72863001",
    "425067005",
    "288599003",
    "141441000119107"
];

export const CMRU8CurrentChildHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)"
            },
            {
                code: "72863001",
                display: "Snoring (finding)"
            },
            {
                code: "425067005",
                display: "Speech and language development finding (finding)"
            },
            {
                code: "288599003",
                display: "Able to use verbal communication (finding)"
            },
            {
                code: "141441000119107",
                display: "Childhood onset stuttering (finding)"
            }
        ]
    }
];

export { CMRU8CurrentChildHistoryGerman as ConceptMap };

export default CMRU8CurrentChildHistory;
