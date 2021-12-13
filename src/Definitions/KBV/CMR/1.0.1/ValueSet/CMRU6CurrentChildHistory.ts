import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU6CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU6CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_Current_Child_History

type CMRU6CurrentChildHistory =
    | "715949008"
    | "248124006"
    | "271840007"
    | "162339002"
    | "72863001";

const CMRU6CurrentChildHistory: t.Type<CMRU6CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("248124006"),
        t.literal("271840007"),
        t.literal("162339002"),
        t.literal("72863001")
    ],
    "CMRU6CurrentChildHistory"
);

export const CMRU6CurrentChildHistoryArray: string[] = [
    "715949008",
    "248124006",
    "271840007",
    "162339002",
    "72863001"
];

export const CMRU6CurrentChildHistoryValueSet: ValueSet = [
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
                code: "162339002",
                display: "Hearing normal (finding)"
            },
            {
                code: "72863001",
                display: "Snoring (finding)"
            }
        ]
    }
];

export { CMRU6CurrentChildHistoryGerman as ConceptMap };

export default CMRU6CurrentChildHistory;
