import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contact-point-system

type Contactpointsystem = "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other";

const Contactpointsystem: t.Type<Contactpointsystem> = t.union(
    [
        t.literal("phone"),
        t.literal("fax"),
        t.literal("email"),
        t.literal("pager"),
        t.literal("url"),
        t.literal("sms"),
        t.literal("other")
    ],
    "Contactpointsystem"
);

export const ContactpointsystemArray: string[] = [
    "phone",
    "fax",
    "email",
    "pager",
    "url",
    "sms",
    "other"
];

export const ContactpointsystemValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/contact-point-system",
        concept: [
            {
                code: "phone",
                display: "Phone"
            },
            {
                code: "fax",
                display: "Fax"
            },
            {
                code: "email",
                display: "Email"
            },
            {
                code: "pager",
                display: "Pager"
            },
            {
                code: "url",
                display: "URL"
            },
            {
                code: "sms",
                display: "SMS"
            },
            {
                code: "other",
                display: "Other"
            }
        ]
    }
];

export default Contactpointsystem;
