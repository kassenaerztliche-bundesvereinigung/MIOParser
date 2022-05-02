import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contact-point-use

type Contactpointuse = "home" | "work" | "temp" | "old" | "mobile";

const Contactpointuse: t.Type<Contactpointuse> = t.union(
    [
        t.literal("home"),
        t.literal("work"),
        t.literal("temp"),
        t.literal("old"),
        t.literal("mobile")
    ],
    "Contactpointuse"
);

export const ContactpointuseArray: string[] = ["home", "work", "temp", "old", "mobile"];

export const ContactpointuseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/contact-point-use",
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
                display: "Temp"
            },
            {
                code: "old",
                display: "Old"
            },
            {
                code: "mobile",
                display: "Mobile"
            }
        ]
    }
];

export default Contactpointuse;
