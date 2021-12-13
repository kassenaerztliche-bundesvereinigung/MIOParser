import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason

type Dataabsentreason =
    | "unknown"
    | "asked-unknown"
    | "temp-unknown"
    | "not-asked"
    | "asked-declined"
    | "masked"
    | "not-applicable"
    | "unsupported"
    | "as-text"
    | "error"
    | "not-a-number"
    | "negative-infinity"
    | "positive-infinity"
    | "not-performed"
    | "not-permitted";

const Dataabsentreason: t.Type<Dataabsentreason> = t.union(
    [
        t.literal("unknown"),
        t.literal("asked-unknown"),
        t.literal("temp-unknown"),
        t.literal("not-asked"),
        t.literal("asked-declined"),
        t.literal("masked"),
        t.literal("not-applicable"),
        t.literal("unsupported"),
        t.literal("as-text"),
        t.literal("error"),
        t.literal("not-a-number"),
        t.literal("negative-infinity"),
        t.literal("positive-infinity"),
        t.literal("not-performed"),
        t.literal("not-permitted")
    ],
    "Dataabsentreason"
);

export const DataabsentreasonArray: string[] = [
    "unknown",
    "asked-unknown",
    "temp-unknown",
    "not-asked",
    "asked-declined",
    "masked",
    "not-applicable",
    "unsupported",
    "as-text",
    "error",
    "not-a-number",
    "negative-infinity",
    "positive-infinity",
    "not-performed",
    "not-permitted"
];

export const DataabsentreasonValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        concept: [
            {
                code: "unknown",
                display: "Unknown"
            },
            {
                code: "asked-unknown",
                display: "Asked But Unknown"
            },
            {
                code: "temp-unknown",
                display: "Temporarily Unknown"
            },
            {
                code: "not-asked",
                display: "Not Asked"
            },
            {
                code: "asked-declined",
                display: "Asked But Declined"
            },
            {
                code: "masked",
                display: "Masked"
            },
            {
                code: "not-applicable",
                display: "Not Applicable"
            },
            {
                code: "unsupported",
                display: "Unsupported"
            },
            {
                code: "as-text",
                display: "As Text"
            },
            {
                code: "error",
                display: "Error"
            },
            {
                code: "not-a-number",
                display: "Not a Number (NaN)"
            },
            {
                code: "negative-infinity",
                display: "Negative Infinity (NINF)"
            },
            {
                code: "positive-infinity",
                display: "Positive Infinity (PINF)"
            },
            {
                code: "not-performed",
                display: "Not Performed"
            },
            {
                code: "not-permitted",
                display: "Not Permitted"
            }
        ]
    }
];

export default Dataabsentreason;
