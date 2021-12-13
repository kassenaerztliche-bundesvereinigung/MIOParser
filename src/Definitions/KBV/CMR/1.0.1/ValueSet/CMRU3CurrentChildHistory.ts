import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_Current_Child_History

type CMRU3CurrentChildHistory = "715949008" | "399122003" | "162214009" | "271863002";

const CMRU3CurrentChildHistory: t.Type<CMRU3CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("399122003"),
        t.literal("162214009"),
        t.literal("271863002")
    ],
    "CMRU3CurrentChildHistory"
);

export const CMRU3CurrentChildHistoryArray: string[] = [
    "715949008",
    "399122003",
    "162214009",
    "271863002"
];

export const CMRU3CurrentChildHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "715949008",
                display: "Serious physical health problem (finding)"
            },
            {
                code: "399122003",
                display: "Swallowing problem (finding)"
            },
            {
                code: "162214009",
                display: "Crying infant (finding)"
            },
            {
                code: "271863002",
                display: "Stool color abnormal (finding)"
            }
        ]
    }
];

export { CMRU3CurrentChildHistoryGerman as ConceptMap };

export default CMRU3CurrentChildHistory;
