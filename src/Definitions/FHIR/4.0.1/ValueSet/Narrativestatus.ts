import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/narrative-status

type Narrativestatus = "generated" | "extensions" | "additional" | "empty";

const Narrativestatus: t.Type<Narrativestatus> = t.union(
    [
        t.literal("generated"),
        t.literal("extensions"),
        t.literal("additional"),
        t.literal("empty")
    ],
    "Narrativestatus"
);

export const NarrativestatusArray: string[] = [
    "generated",
    "extensions",
    "additional",
    "empty"
];

export const NarrativestatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/narrative-status",
        concept: [
            {
                code: "generated",
                display: "Generated"
            },
            {
                code: "extensions",
                display: "Extensions"
            },
            {
                code: "additional",
                display: "Additional"
            },
            {
                code: "empty",
                display: "Empty"
            }
        ]
    }
];

export default Narrativestatus;
