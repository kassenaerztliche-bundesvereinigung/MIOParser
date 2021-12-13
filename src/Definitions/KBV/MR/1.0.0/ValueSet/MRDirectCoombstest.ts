import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRDirectCoombstestGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRDirectCoombstestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Direct_Coombstest

type MRDirectCoombstest = "165772007" | "165773002";

const MRDirectCoombstest: t.Type<MRDirectCoombstest> = t.union(
    [t.literal("165772007"), t.literal("165773002")],
    "MRDirectCoombstest"
);

export const MRDirectCoombstestArray: string[] = ["165772007", "165773002"];

export const MRDirectCoombstestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "165772007",
                display: "Direct Coombs test negative (finding)"
            },
            {
                code: "165773002",
                display: "Direct Coombs test positive (finding)"
            }
        ]
    }
];

export { MRDirectCoombstestGerman as ConceptMap };

export default MRDirectCoombstest;
