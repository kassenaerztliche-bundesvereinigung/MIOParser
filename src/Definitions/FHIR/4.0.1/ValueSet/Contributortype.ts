import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/contributor-type

type Contributortype = "author" | "editor" | "reviewer" | "endorser";

const Contributortype: t.Type<Contributortype> = t.union(
    [
        t.literal("author"),
        t.literal("editor"),
        t.literal("reviewer"),
        t.literal("endorser")
    ],
    "Contributortype"
);

export const ContributortypeArray: string[] = [
    "author",
    "editor",
    "reviewer",
    "endorser"
];

export const ContributortypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/contributor-type",
        concept: [
            {
                code: "author",
                display: "Author"
            },
            {
                code: "editor",
                display: "Editor"
            },
            {
                code: "reviewer",
                display: "Reviewer"
            },
            {
                code: "endorser",
                display: "Endorser"
            }
        ]
    }
];

export default Contributortype;
