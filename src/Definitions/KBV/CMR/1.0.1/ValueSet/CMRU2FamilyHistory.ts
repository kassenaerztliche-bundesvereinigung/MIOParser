import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2FamilyHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2FamilyHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Family_History

type CMRU2FamilyHistory = "160346003" | "160352002" | "737367001" | "700191004";

const CMRU2FamilyHistory: t.Type<CMRU2FamilyHistory> = t.union(
    [
        t.literal("160346003"),
        t.literal("160352002"),
        t.literal("737367001"),
        t.literal("700191004")
    ],
    "CMRU2FamilyHistory"
);

export const CMRU2FamilyHistoryArray: string[] = [
    "160346003",
    "160352002",
    "737367001",
    "700191004"
];

export const CMRU2FamilyHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "160346003",
                display: "Family history: Eye disorder (situation)"
            },
            {
                code: "160352002",
                display: "Family history: Ear disorder (situation)"
            },
            {
                code: "737367001",
                display: "Family history of disorder of immune function (situation)"
            },
            {
                code: "700191004",
                display: "Family history of congenital hip dysplasia (situation)"
            }
        ]
    }
];

export { CMRU2FamilyHistoryGerman as ConceptMap };

export default CMRU2FamilyHistory;
