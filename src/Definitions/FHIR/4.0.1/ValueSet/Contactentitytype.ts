import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contactentity-type

type Contactentitytype = "BILL" | "ADMIN" | "HR" | "PAYOR" | "PATINF" | "PRESS";

const Contactentitytype: t.Type<Contactentitytype> = t.union(
    [
        t.literal("BILL"),
        t.literal("ADMIN"),
        t.literal("HR"),
        t.literal("PAYOR"),
        t.literal("PATINF"),
        t.literal("PRESS")
    ],
    "Contactentitytype"
);

export const ContactentitytypeArray: string[] = [
    "BILL",
    "ADMIN",
    "HR",
    "PAYOR",
    "PATINF",
    "PRESS"
];

export const ContactentitytypeValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/contactentity-type",
        concept: [
            {
                code: "BILL",
                display: "Billing"
            },
            {
                code: "ADMIN",
                display: "Administrative"
            },
            {
                code: "HR",
                display: "Human Resource"
            },
            {
                code: "PAYOR",
                display: "Payor"
            },
            {
                code: "PATINF",
                display: "Patient"
            },
            {
                code: "PRESS",
                display: "Press"
            }
        ]
    }
];

export default Contactentitytype;
