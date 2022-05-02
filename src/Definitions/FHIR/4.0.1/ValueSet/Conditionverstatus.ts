import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/condition-ver-status

type Conditionverstatus =
    | "unconfirmed"
    | "provisional"
    | "differential"
    | "confirmed"
    | "refuted"
    | "entered-in-error";

const Conditionverstatus: t.Type<Conditionverstatus> = t.union(
    [
        t.literal("unconfirmed"),
        t.literal("provisional"),
        t.literal("differential"),
        t.literal("confirmed"),
        t.literal("refuted"),
        t.literal("entered-in-error")
    ],
    "Conditionverstatus"
);

export const ConditionverstatusArray: string[] = [
    "unconfirmed",
    "provisional",
    "differential",
    "confirmed",
    "refuted",
    "entered-in-error"
];

export const ConditionverstatusValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        concept: [
            {
                code: "unconfirmed",
                display: "Unconfirmed"
            },
            {
                code: "provisional",
                display: "Provisional"
            },
            {
                code: "differential",
                display: "Differential"
            },
            {
                code: "confirmed",
                display: "Confirmed"
            },
            {
                code: "refuted",
                display: "Refuted"
            },
            {
                code: "entered-in-error",
                display: "Entered in Error"
            }
        ]
    }
];

export default Conditionverstatus;
