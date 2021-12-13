import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/observation-status

type Observationstatus =
    | "registered"
    | "preliminary"
    | "final"
    | "amended"
    | "corrected"
    | "cancelled"
    | "entered-in-error"
    | "unknown";

const Observationstatus: t.Type<Observationstatus> = t.union(
    [
        t.literal("registered"),
        t.literal("preliminary"),
        t.literal("final"),
        t.literal("amended"),
        t.literal("corrected"),
        t.literal("cancelled"),
        t.literal("entered-in-error"),
        t.literal("unknown")
    ],
    "Observationstatus"
);

export const ObservationstatusArray: string[] = [
    "registered",
    "preliminary",
    "final",
    "amended",
    "corrected",
    "cancelled",
    "entered-in-error",
    "unknown"
];

export const ObservationstatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/observation-status",
        concept: [
            {
                code: "registered",
                display: "Registered"
            },
            {
                code: "preliminary",
                display: "Preliminary"
            },
            {
                code: "final",
                display: "Final"
            },
            {
                code: "amended",
                display: "Amended"
            },
            {
                code: "corrected",
                display: "Corrected"
            },
            {
                code: "cancelled",
                display: "Cancelled"
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

export default Observationstatus;
