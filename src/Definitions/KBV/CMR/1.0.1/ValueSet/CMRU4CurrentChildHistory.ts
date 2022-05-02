import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU4CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU4CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U4_Current_Child_History

type CMRU4CurrentChildHistory =
    | "715949008"
    | "399122003"
    | "271840007+111360009"
    | "162214009";

const CMRU4CurrentChildHistory: t.Type<CMRU4CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("399122003"),
        t.literal("271840007+111360009"),
        t.literal("162214009")
    ],
    "CMRU4CurrentChildHistory"
);

export const CMRU4CurrentChildHistoryArray: string[] = [
    "715949008",
    "399122003",
    "271840007+111360009",
    "162214009"
];

export const CMRU4CurrentChildHistoryValueSet: ValueSet = [
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
                code: "271840007+111360009",
                display: "Abnormal feces (finding)+Obstipation (disorder)"
            },
            {
                code: "162214009",
                display: "Crying infant (finding)"
            }
        ]
    }
];

export { CMRU4CurrentChildHistoryGerman as ConceptMap };

export default CMRU4CurrentChildHistory;
