import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU2CurrentChildHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU2CurrentChildHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_Current_Child_History

type CMRU2CurrentChildHistory =
    | "715949008"
    | "399122003"
    | "271863002"
    | "162214009"
    | "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}";

const CMRU2CurrentChildHistory: t.Type<CMRU2CurrentChildHistory> = t.union(
    [
        t.literal("715949008"),
        t.literal("399122003"),
        t.literal("271863002"),
        t.literal("162214009"),
        t.literal(
            "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}"
        )
    ],
    "CMRU2CurrentChildHistory"
);

export const CMRU2CurrentChildHistoryArray: string[] = [
    "715949008",
    "399122003",
    "271863002",
    "162214009",
    "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}"
];

export const CMRU2CurrentChildHistoryValueSet: ValueSet = [
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
                code: "271863002",
                display: "Stool color abnormal (finding)"
            },
            {
                code: "162214009",
                display: "Crying infant (finding)"
            },
            {
                code: "413350009:{408729009=410519009,408731000=410512000,408732007=410604004,246090004=52781008}",
                display:
                    "Finding with explicit context (situation) : { Finding context (attribute) = At risk context (qualifier value), Temporal context (attribute) = Current or specified time (qualifier value), Subject relationship context (attribute) = Subject of record (person), Associated finding (attribute) = Congenital hip dysplasia (disorder) }"
            }
        ]
    }
];

export { CMRU2CurrentChildHistoryGerman as ConceptMap };

export default CMRU2CurrentChildHistory;
