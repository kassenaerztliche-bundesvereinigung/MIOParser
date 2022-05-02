import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/identifier-use

type Identifieruse = "usual" | "official" | "temp" | "secondary" | "old";

const Identifieruse: t.Type<Identifieruse> = t.union(
    [
        t.literal("usual"),
        t.literal("official"),
        t.literal("temp"),
        t.literal("secondary"),
        t.literal("old")
    ],
    "Identifieruse"
);

export const IdentifieruseArray: string[] = [
    "usual",
    "official",
    "temp",
    "secondary",
    "old"
];

export const IdentifieruseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/identifier-use",
        concept: [
            {
                code: "usual",
                display: "Usual"
            },
            {
                code: "official",
                display: "Official"
            },
            {
                code: "temp",
                display: "Temp"
            },
            {
                code: "secondary",
                display: "Secondary"
            },
            {
                code: "old",
                display: "Old"
            }
        ]
    }
];

export default Identifieruse;
