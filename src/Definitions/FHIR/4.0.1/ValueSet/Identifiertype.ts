import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/identifier-type

type Identifiertype =
    | "DL"
    | "PPN"
    | "BRN"
    | "MR"
    | "MCN"
    | "EN"
    | "TAX"
    | "NIIP"
    | "PRN"
    | "MD"
    | "DR"
    | "ACSN"
    | "UDI"
    | "SNO"
    | "SB"
    | "PLAC"
    | "FILL"
    | "JHN";

const Identifiertype: t.Type<Identifiertype> = t.union(
    [
        t.literal("DL"),
        t.literal("PPN"),
        t.literal("BRN"),
        t.literal("MR"),
        t.literal("MCN"),
        t.literal("EN"),
        t.literal("TAX"),
        t.literal("NIIP"),
        t.literal("PRN"),
        t.literal("MD"),
        t.literal("DR"),
        t.literal("ACSN"),
        t.literal("UDI"),
        t.literal("SNO"),
        t.literal("SB"),
        t.literal("PLAC"),
        t.literal("FILL"),
        t.literal("JHN")
    ],
    "Identifiertype"
);

export const IdentifiertypeArray: string[] = [
    "DL",
    "PPN",
    "BRN",
    "MR",
    "MCN",
    "EN",
    "TAX",
    "NIIP",
    "PRN",
    "MD",
    "DR",
    "ACSN",
    "UDI",
    "SNO",
    "SB",
    "PLAC",
    "FILL",
    "JHN"
];

export const IdentifiertypeValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v2-0203",
        concept: [
            {
                code: "DL",
                display: ""
            },
            {
                code: "PPN",
                display: ""
            },
            {
                code: "BRN",
                display: ""
            },
            {
                code: "MR",
                display: ""
            },
            {
                code: "MCN",
                display: ""
            },
            {
                code: "EN",
                display: ""
            },
            {
                code: "TAX",
                display: ""
            },
            {
                code: "NIIP",
                display: ""
            },
            {
                code: "PRN",
                display: ""
            },
            {
                code: "MD",
                display: ""
            },
            {
                code: "DR",
                display: ""
            },
            {
                code: "ACSN",
                display: ""
            },
            {
                code: "UDI",
                display: ""
            },
            {
                code: "SNO",
                display: ""
            },
            {
                code: "SB",
                display: ""
            },
            {
                code: "PLAC",
                display: ""
            },
            {
                code: "FILL",
                display: ""
            },
            {
                code: "JHN",
                display: ""
            }
        ]
    }
];

export default Identifiertype;
