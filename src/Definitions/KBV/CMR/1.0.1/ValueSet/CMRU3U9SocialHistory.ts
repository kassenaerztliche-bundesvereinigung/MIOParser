import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU3U9SocialHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU3U9SocialHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_U9_Social_History

type CMRU3U9SocialHistory = "105485001" | "276104006";

const CMRU3U9SocialHistory: t.Type<CMRU3U9SocialHistory> = t.union(
    [t.literal("105485001"), t.literal("276104006")],
    "CMRU3U9SocialHistory"
);

export const CMRU3U9SocialHistoryArray: string[] = ["105485001", "276104006"];

export const CMRU3U9SocialHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "105485001",
                display: "Family tension (finding)"
            },
            {
                code: "276104006",
                display: "Home unsettled (finding)"
            }
        ]
    }
];

export { CMRU3U9SocialHistoryGerman as ConceptMap };

export default CMRU3U9SocialHistory;
