import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://fhir.de/ValueSet/UcumVitalsCommonDE

type UcumVitalsCommonDE =
    | "%"
    | "cm"
    | "m"
    | "kg"
    | "g"
    | "Cel"
    | "mm[Hg]"
    | "/min"
    | "/h"
    | "/d"
    | "kg/m2"
    | "m2"
    | "L/min";

const UcumVitalsCommonDE: t.Type<UcumVitalsCommonDE> = t.union(
    [
        t.literal("%"),
        t.literal("cm"),
        t.literal("m"),
        t.literal("kg"),
        t.literal("g"),
        t.literal("Cel"),
        t.literal("mm[Hg]"),
        t.literal("/min"),
        t.literal("/h"),
        t.literal("/d"),
        t.literal("kg/m2"),
        t.literal("m2"),
        t.literal("L/min")
    ],
    "UcumVitalsCommonDE"
);

export const UcumVitalsCommonDEArray: string[] = [
    "%",
    "cm",
    "m",
    "kg",
    "g",
    "Cel",
    "mm[Hg]",
    "/min",
    "/h",
    "/d",
    "kg/m2",
    "m2",
    "L/min"
];

export const UcumVitalsCommonDEValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "%",
                display: "percent"
            },
            {
                code: "cm",
                display: "centimeter"
            },
            {
                code: "m",
                display: "meter"
            },
            {
                code: "kg",
                display: "kilogram"
            },
            {
                code: "g",
                display: "gram"
            },
            {
                code: "Cel",
                display: "degree Celsius"
            },
            {
                code: "mm[Hg]",
                display: "millimeter of mecury"
            },
            {
                code: "/min",
                display: "per min"
            },
            {
                code: "/h",
                display: "per hour"
            },
            {
                code: "/d",
                display: "per day"
            },
            {
                code: "kg/m2",
                display: "kilogram / (meter ^ 2)"
            },
            {
                code: "m2",
                display: "square meter"
            },
            {
                code: "L/min",
                display: "liter per minute"
            }
        ]
    }
];

export default UcumVitalsCommonDE;
