import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/marital-status

type Maritalstatus = "A" | "D" | "I" | "L" | "M" | "P" | "S" | "T" | "U" | "W" | "UNK";

const Maritalstatus: t.Type<Maritalstatus> = t.union(
    [
        t.literal("A"),
        t.literal("D"),
        t.literal("I"),
        t.literal("L"),
        t.literal("M"),
        t.literal("P"),
        t.literal("S"),
        t.literal("T"),
        t.literal("U"),
        t.literal("W"),
        t.literal("UNK")
    ],
    "Maritalstatus"
);

export const MaritalstatusArray: string[] = [
    "A",
    "D",
    "I",
    "L",
    "M",
    "P",
    "S",
    "T",
    "U",
    "W",
    "UNK"
];

export const MaritalstatusValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        concept: [
            {
                code: "A",
                display: "Annulled"
            },
            {
                code: "D",
                display: "Divorced"
            },
            {
                code: "I",
                display: "Interlocutory"
            },
            {
                code: "L",
                display: "Legally Separated"
            },
            {
                code: "M",
                display: "Married"
            },
            {
                code: "P",
                display: "Polygamous"
            },
            {
                code: "S",
                display: "Never Married"
            },
            {
                code: "T",
                display: "Domestic partner"
            },
            {
                code: "U",
                display: "unmarried"
            },
            {
                code: "W",
                display: "Widowed"
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
        concept: [
            {
                code: "UNK",
                display: ""
            }
        ]
    }
];

export default Maritalstatus;
