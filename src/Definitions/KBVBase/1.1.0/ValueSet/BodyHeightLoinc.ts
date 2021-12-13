import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Height_Loinc

type BodyHeightLoinc = "8302-2" | "89269-5";

const BodyHeightLoinc: t.Type<BodyHeightLoinc> = t.union(
    [t.literal("8302-2"), t.literal("89269-5")],
    "BodyHeightLoinc"
);

export const BodyHeightLoincArray: string[] = ["8302-2", "89269-5"];

export const BodyHeightLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "8302-2",
                display: "Body height"
            },
            {
                code: "89269-5",
                display: "Body height Measured --at birth"
            }
        ]
    }
];

export default BodyHeightLoinc;
