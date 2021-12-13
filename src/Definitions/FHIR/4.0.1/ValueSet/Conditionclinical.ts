import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/condition-clinical

type Conditionclinical =
    | "active"
    | "recurrence"
    | "relapse"
    | "inactive"
    | "remission"
    | "resolved";

const Conditionclinical: t.Type<Conditionclinical> = t.union(
    [
        t.literal("active"),
        t.literal("recurrence"),
        t.literal("relapse"),
        t.literal("inactive"),
        t.literal("remission"),
        t.literal("resolved")
    ],
    "Conditionclinical"
);

export const ConditionclinicalArray: string[] = [
    "active",
    "recurrence",
    "relapse",
    "inactive",
    "remission",
    "resolved"
];

export const ConditionclinicalValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        concept: [
            {
                code: "active",
                display: "Active"
            },
            {
                code: "recurrence",
                display: "Recurrence"
            },
            {
                code: "relapse",
                display: "Relapse"
            },
            {
                code: "inactive",
                display: "Inactive"
            },
            {
                code: "remission",
                display: "Remission"
            },
            {
                code: "resolved",
                display: "Resolved"
            }
        ]
    }
];

export default Conditionclinical;
