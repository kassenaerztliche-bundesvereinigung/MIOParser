import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-status

type Careplanactivitystatus =
    | "not-started"
    | "scheduled"
    | "in-progress"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "stopped"
    | "unknown"
    | "entered-in-error";

const Careplanactivitystatus: t.Type<Careplanactivitystatus> = t.union(
    [
        t.literal("not-started"),
        t.literal("scheduled"),
        t.literal("in-progress"),
        t.literal("on-hold"),
        t.literal("completed"),
        t.literal("cancelled"),
        t.literal("stopped"),
        t.literal("unknown"),
        t.literal("entered-in-error")
    ],
    "Careplanactivitystatus"
);

export const CareplanactivitystatusArray: string[] = [
    "not-started",
    "scheduled",
    "in-progress",
    "on-hold",
    "completed",
    "cancelled",
    "stopped",
    "unknown",
    "entered-in-error"
];

export const CareplanactivitystatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/care-plan-activity-status",
        concept: [
            {
                code: "not-started",
                display: "Not Started"
            },
            {
                code: "scheduled",
                display: "Scheduled"
            },
            {
                code: "in-progress",
                display: "In Progress"
            },
            {
                code: "on-hold",
                display: "On Hold"
            },
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "cancelled",
                display: "Cancelled"
            },
            {
                code: "stopped",
                display: "Stopped"
            },
            {
                code: "unknown",
                display: "Unknown"
            },
            {
                code: "entered-in-error",
                display: "Entered in Error"
            }
        ]
    }
];

export default Careplanactivitystatus;
