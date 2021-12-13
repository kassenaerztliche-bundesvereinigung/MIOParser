import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/event-status

type Eventstatus =
    | "preparation"
    | "in-progress"
    | "not-done"
    | "on-hold"
    | "stopped"
    | "completed"
    | "entered-in-error"
    | "unknown";

const Eventstatus: t.Type<Eventstatus> = t.union(
    [
        t.literal("preparation"),
        t.literal("in-progress"),
        t.literal("not-done"),
        t.literal("on-hold"),
        t.literal("stopped"),
        t.literal("completed"),
        t.literal("entered-in-error"),
        t.literal("unknown")
    ],
    "Eventstatus"
);

export const EventstatusArray: string[] = [
    "preparation",
    "in-progress",
    "not-done",
    "on-hold",
    "stopped",
    "completed",
    "entered-in-error",
    "unknown"
];

export const EventstatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/event-status",
        concept: [
            {
                code: "preparation",
                display: "Preparation"
            },
            {
                code: "in-progress",
                display: "In Progress"
            },
            {
                code: "not-done",
                display: "Not Done"
            },
            {
                code: "on-hold",
                display: "On Hold"
            },
            {
                code: "stopped",
                display: "Stopped"
            },
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "entered-in-error",
                display: "Entered in Error"
            },
            {
                code: "unknown",
                display: "Unknown"
            }
        ]
    }
];

export default Eventstatus;
