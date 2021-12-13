import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/link-type

type Linktype = "replaced-by" | "replaces" | "refer" | "seealso";

const Linktype: t.Type<Linktype> = t.union(
    [
        t.literal("replaced-by"),
        t.literal("replaces"),
        t.literal("refer"),
        t.literal("seealso")
    ],
    "Linktype"
);

export const LinktypeArray: string[] = ["replaced-by", "replaces", "refer", "seealso"];

export const LinktypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/link-type",
        concept: [
            {
                code: "replaced-by",
                display: "Replaced-by"
            },
            {
                code: "replaces",
                display: "Replaces"
            },
            {
                code: "refer",
                display: "Refer"
            },
            {
                code: "seealso",
                display: "See also"
            }
        ]
    }
];

export default Linktype;
