import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU9CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU9CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U9_Current_Child_History

type CMRU9CurrentChildHistory =
    | "715949008"
    | "300228004"
    | "425067005"
    | "288599003"
    | "141441000119107";

const CMRU9CurrentChildHistory: t.Type<CMRU9CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("300228004"),
        t.literal("425067005"),
        t.literal("288599003"),
        t.literal("141441000119107")
    ],
    "CMRU9CurrentChildHistory"
);

export const CMRU9CurrentChildHistoryArray: string[] = [
    "715949008",
    "300228004",
    "425067005",
    "288599003",
    "141441000119107"
];

export const CMRU9CurrentChildHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)"
            },
            {
                code: "300228004",
                display: "Hearing problem (finding)"
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

export { CMRU9CurrentChildHistoryGerman as ConceptMap };

export default CMRU9CurrentChildHistory;
