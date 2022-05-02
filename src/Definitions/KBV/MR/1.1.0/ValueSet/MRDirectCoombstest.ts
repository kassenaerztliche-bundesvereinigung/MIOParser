import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRDirectCoombstestGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRDirectCoombstestGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Direct_Coombstest

type MRDirectCoombstest = "165773002" | "165772007";

const MRDirectCoombstest: t.Type<MRDirectCoombstest> = t.union(
    [t.literal("165773002"), t.literal("165772007")],
    "MRDirectCoombstest"
);

export const MRDirectCoombstestArray: string[] = ["165773002", "165772007"];

export const MRDirectCoombstestValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "165773002",
                display: "Direct Coombs test positive (finding)"
            },
            {
                code: "165772007",
                display: "Direct Coombs test negative (finding)"
            }
        ]
    }
];

export { MRDirectCoombstestGerman as ConceptMap };

export default MRDirectCoombstest;
