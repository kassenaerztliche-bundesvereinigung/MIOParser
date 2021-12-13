import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/days-of-week

type Daysofweek = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

const Daysofweek: t.Type<Daysofweek> = t.union(
    [
        t.literal("mon"),
        t.literal("tue"),
        t.literal("wed"),
        t.literal("thu"),
        t.literal("fri"),
        t.literal("sat"),
        t.literal("sun")
    ],
    "Daysofweek"
);

export const DaysofweekArray: string[] = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
];

export const DaysofweekValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/days-of-week",
        concept: [
            {
                code: "mon",
                display: "Monday"
            },
            {
                code: "tue",
                display: "Tuesday"
            },
            {
                code: "wed",
                display: "Wednesday"
            },
            {
                code: "thu",
                display: "Thursday"
            },
            {
                code: "fri",
                display: "Friday"
            },
            {
                code: "sat",
                display: "Saturday"
            },
            {
                code: "sun",
                display: "Sunday"
            }
        ]
    }
];

export default Daysofweek;
