import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/address-use

type Addressuse = "home" | "work" | "temp" | "old" | "billing";

const Addressuse: t.Type<Addressuse> = t.union(
    [
        t.literal("home"),
        t.literal("work"),
        t.literal("temp"),
        t.literal("old"),
        t.literal("billing")
    ],
    "Addressuse"
);

export const AddressuseArray: string[] = ["home", "work", "temp", "old", "billing"];

export const AddressuseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/address-use",
        concept: [
            {
                code: "home",
                display: "Home"
            },
            {
                code: "work",
                display: "Work"
            },
            {
                code: "temp",
                display: "Temporary"
            },
            {
                code: "old",
                display: "Old / Incorrect"
            },
            {
                code: "billing",
                display: "Billing"
            }
        ]
    }
];

export default Addressuse;
