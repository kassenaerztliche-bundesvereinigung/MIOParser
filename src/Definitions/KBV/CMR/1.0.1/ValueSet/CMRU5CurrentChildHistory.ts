import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU5CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU5CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U5_Current_Child_History

type CMRU5CurrentChildHistory =
    | "715949008"
    | "248124006"
    | "271840007"
    | "162214009"
    | "162339002";

const CMRU5CurrentChildHistory: t.Type<CMRU5CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("248124006"),
        t.literal("271840007"),
        t.literal("162214009"),
        t.literal("162339002")
    ],
    "CMRU5CurrentChildHistory"
);

export const CMRU5CurrentChildHistoryArray: string[] = [
    "715949008",
    "248124006",
    "271840007",
    "162214009",
    "162339002"
];

export const CMRU5CurrentChildHistoryValueSet: ValueSet = [
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
                code: "162214009",
                display: "Crying infant (finding)"
            },
            {
                code: "162339002",
                display: "Hearing normal (finding)"
            }
        ]
    }
];

export { CMRU5CurrentChildHistoryGerman as ConceptMap };

export default CMRU5CurrentChildHistory;
