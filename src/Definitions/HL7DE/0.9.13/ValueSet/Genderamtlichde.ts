import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://fhir.de/ValueSet/gender-amtlich-de

type Genderamtlichde = "X" | "D";

const Genderamtlichde: t.Type<Genderamtlichde> = t.union(
    [t.literal("X"), t.literal("D")],
    "Genderamtlichde"
);

export const GenderamtlichdeArray: string[] = ["X", "D"];

export const GenderamtlichdeValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/gender-amtlich-de",
        concept: [
            {
                code: "X",
                display: "unbestimmt"
            },
            {
                code: "D",
                display: "divers"
            }
        ]
    }
];

export default Genderamtlichde;
