import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/quantity-comparator

type Quantitycomparator = "<" | "<=" | ">=" | ">";

const Quantitycomparator: t.Type<Quantitycomparator> = t.union(
    [t.literal("<"), t.literal("<="), t.literal(">="), t.literal(">")],
    "Quantitycomparator"
);

export const QuantitycomparatorArray: string[] = ["<", "<=", ">=", ">"];

export const QuantitycomparatorValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/quantity-comparator",
        concept: [
            {
                code: "<",
                display: "Less than"
            },
            {
                code: "<=",
                display: "Less or Equal to"
            },
            {
                code: ">=",
                display: "Greater or Equal to"
            },
            {
                code: ">",
                display: "Greater than"
            }
        ]
    }
];

export default Quantitycomparator;
