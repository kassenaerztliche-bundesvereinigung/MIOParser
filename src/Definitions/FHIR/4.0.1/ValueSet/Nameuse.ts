import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/name-use

type Nameuse =
    | "usual"
    | "official"
    | "temp"
    | "nickname"
    | "anonymous"
    | "old"
    | "maiden";

const Nameuse: t.Type<Nameuse> = t.union(
    [
        t.literal("usual"),
        t.literal("official"),
        t.literal("temp"),
        t.literal("nickname"),
        t.literal("anonymous"),
        t.literal("old"),
        t.literal("maiden")
    ],
    "Nameuse"
);

export const NameuseArray: string[] = [
    "usual",
    "official",
    "temp",
    "nickname",
    "anonymous",
    "old",
    "maiden"
];

export const NameuseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/name-use",
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
                code: "nickname",
                display: "Nickname"
            },
            {
                code: "anonymous",
                display: "Anonymous"
            },
            {
                code: "old",
                display: "Old"
            },
            {
                code: "maiden",
                display: "Name changed for Marriage"
            }
        ]
    }
];

export default Nameuse;
