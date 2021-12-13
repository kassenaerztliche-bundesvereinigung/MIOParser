import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/units-of-time

type Unitsoftime = "s" | "min" | "h" | "d" | "wk" | "mo" | "a";

const Unitsoftime: t.Type<Unitsoftime> = t.union(
    [
        t.literal("s"),
        t.literal("min"),
        t.literal("h"),
        t.literal("d"),
        t.literal("wk"),
        t.literal("mo"),
        t.literal("a")
    ],
    "Unitsoftime"
);

export const UnitsoftimeArray: string[] = ["s", "min", "h", "d", "wk", "mo", "a"];

export const UnitsoftimeValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "s",
                display: "second"
            },
            {
                code: "min",
                display: "minute"
            },
            {
                code: "h",
                display: "hour"
            },
            {
                code: "d",
                display: "day"
            },
            {
                code: "wk",
                display: "week"
            },
            {
                code: "mo",
                display: "month"
            },
            {
                code: "a",
                display: "year"
            }
        ]
    }
];

export default Unitsoftime;
