import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/address-type

type Addresstype = "postal" | "physical" | "both";

const Addresstype: t.Type<Addresstype> = t.union(
    [t.literal("postal"), t.literal("physical"), t.literal("both")],
    "Addresstype"
);

export const AddresstypeArray: string[] = ["postal", "physical", "both"];

export const AddresstypeValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/address-type",
        concept: [
            {
                code: "postal",
                display: "Postal"
            },
            {
                code: "physical",
                display: "Physical"
            },
            {
                code: "both",
                display: "Postal & Physical"
            }
        ]
    }
];

export default Addresstype;
