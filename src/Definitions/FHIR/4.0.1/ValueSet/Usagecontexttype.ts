import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/usage-context-type

type Usagecontexttype =
    | "gender"
    | "age"
    | "focus"
    | "user"
    | "workflow"
    | "task"
    | "venue"
    | "species"
    | "program";

const Usagecontexttype: t.Type<Usagecontexttype> = t.union(
    [
        t.literal("gender"),
        t.literal("age"),
        t.literal("focus"),
        t.literal("user"),
        t.literal("workflow"),
        t.literal("task"),
        t.literal("venue"),
        t.literal("species"),
        t.literal("program")
    ],
    "Usagecontexttype"
);

export const UsagecontexttypeArray: string[] = [
    "gender",
    "age",
    "focus",
    "user",
    "workflow",
    "task",
    "venue",
    "species",
    "program"
];

export const UsagecontexttypeValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        concept: [
            {
                code: "gender",
                display: "Gender"
            },
            {
                code: "age",
                display: "Age Range"
            },
            {
                code: "focus",
                display: "Clinical Focus"
            },
            {
                code: "user",
                display: "User Type"
            },
            {
                code: "workflow",
                display: "Workflow Setting"
            },
            {
                code: "task",
                display: "Workflow Task"
            },
            {
                code: "venue",
                display: "Clinical Venue"
            },
            {
                code: "species",
                display: "Species"
            },
            {
                code: "program",
                display: "Program"
            }
        ]
    }
];

export default Usagecontexttype;
