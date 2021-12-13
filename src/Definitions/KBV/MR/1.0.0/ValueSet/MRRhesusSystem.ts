import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRRhesusSystemGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRRhesusSystemGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Rhesus_System

type MRRhesusSystem = "165747007" | "165746003";

const MRRhesusSystem: t.Type<MRRhesusSystem> = t.union(
    [t.literal("165747007"), t.literal("165746003")],
    "MRRhesusSystem"
);

export const MRRhesusSystemArray: string[] = ["165747007", "165746003"];

export const MRRhesusSystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "165747007",
                display: "RhD positive (finding)"
            },
            {
                code: "165746003",
                display: "RhD negative (finding)"
            }
        ]
    }
];

export { MRRhesusSystemGerman as ConceptMap };

export default MRRhesusSystem;
