import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/related-artifact-type

type Relatedartifacttype =
    | "documentation"
    | "justification"
    | "citation"
    | "predecessor"
    | "successor"
    | "derived-from"
    | "depends-on"
    | "composed-of";

const Relatedartifacttype: t.Type<Relatedartifacttype> = t.union(
    [
        t.literal("documentation"),
        t.literal("justification"),
        t.literal("citation"),
        t.literal("predecessor"),
        t.literal("successor"),
        t.literal("derived-from"),
        t.literal("depends-on"),
        t.literal("composed-of")
    ],
    "Relatedartifacttype"
);

export const RelatedartifacttypeArray: string[] = [
    "documentation",
    "justification",
    "citation",
    "predecessor",
    "successor",
    "derived-from",
    "depends-on",
    "composed-of"
];

export const RelatedartifacttypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/related-artifact-type",
        concept: [
            {
                code: "documentation",
                display: "Documentation"
            },
            {
                code: "justification",
                display: "Justification"
            },
            {
                code: "citation",
                display: "Citation"
            },
            {
                code: "predecessor",
                display: "Predecessor"
            },
            {
                code: "successor",
                display: "Successor"
            },
            {
                code: "derived-from",
                display: "Derived From"
            },
            {
                code: "depends-on",
                display: "Depends On"
            },
            {
                code: "composed-of",
                display: "Composed Of"
            }
        ]
    }
];

export default Relatedartifacttype;
