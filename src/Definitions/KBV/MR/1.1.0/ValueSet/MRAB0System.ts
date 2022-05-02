import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRAB0SystemGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRAB0SystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_AB0_System

type MRAB0System = "112144000" | "112149005" | "165743006" | "58460004" | "115731008";

const MRAB0System: t.Type<MRAB0System> = t.union(
    [
        t.literal("112144000"),
        t.literal("112149005"),
        t.literal("165743006"),
        t.literal("58460004"),
        t.literal("115731008")
    ],
    "MRAB0System"
);

export const MRAB0SystemArray: string[] = [
    "112144000",
    "112149005",
    "165743006",
    "58460004",
    "115731008"
];

export const MRAB0SystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "112144000",
                display: "Blood group A (finding)"
            },
            {
                code: "112149005",
                display: "Blood group B (finding)"
            },
            {
                code: "165743006",
                display: "Blood group AB (finding)"
            },
            {
                code: "58460004",
                display: "Blood group O (finding)"
            },
            {
                code: "115731008",
                display: "Blood group O>h< Bombay (finding)"
            }
        ]
    }
];

export { MRAB0SystemGerman as ConceptMap };

export default MRAB0System;
