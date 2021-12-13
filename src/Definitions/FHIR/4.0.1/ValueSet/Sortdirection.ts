import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/sort-direction

type Sortdirection = "ascending" | "descending";

const Sortdirection: t.Type<Sortdirection> = t.union(
    [t.literal("ascending"), t.literal("descending")],
    "Sortdirection"
);

export const SortdirectionArray: string[] = ["ascending", "descending"];

export const SortdirectionValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/sort-direction",
        concept: [
            {
                code: "ascending",
                display: "Ascending"
            },
            {
                code: "descending",
                display: "Descending"
            }
        ]
    }
];

export default Sortdirection;
