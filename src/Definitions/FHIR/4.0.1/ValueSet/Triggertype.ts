import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/trigger-type

type Triggertype =
    | "named-event"
    | "periodic"
    | "data-changed"
    | "data-added"
    | "data-modified"
    | "data-removed"
    | "data-accessed"
    | "data-access-ended";

const Triggertype: t.Type<Triggertype> = t.union(
    [
        t.literal("named-event"),
        t.literal("periodic"),
        t.literal("data-changed"),
        t.literal("data-added"),
        t.literal("data-modified"),
        t.literal("data-removed"),
        t.literal("data-accessed"),
        t.literal("data-access-ended")
    ],
    "Triggertype"
);

export const TriggertypeArray: string[] = [
    "named-event",
    "periodic",
    "data-changed",
    "data-added",
    "data-modified",
    "data-removed",
    "data-accessed",
    "data-access-ended"
];

export const TriggertypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/trigger-type",
        concept: [
            {
                code: "named-event",
                display: "Named Event"
            },
            {
                code: "periodic",
                display: "Periodic"
            },
            {
                code: "data-changed",
                display: "Data Changed"
            },
            {
                code: "data-added",
                display: "Data Added"
            },
            {
                code: "data-modified",
                display: "Data Updated"
            },
            {
                code: "data-removed",
                display: "Data Removed"
            },
            {
                code: "data-accessed",
                display: "Data Accessed"
            },
            {
                code: "data-access-ended",
                display: "Data Access Ended"
            }
        ]
    }
];

export default Triggertype;
