import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Loinc

type BodyWeightLoinc = "29463-7" | "8339-4";

const BodyWeightLoinc: t.Type<BodyWeightLoinc> = t.union(
    [t.literal("29463-7"), t.literal("8339-4")],
    "BodyWeightLoinc"
);

export const BodyWeightLoincArray: string[] = ["29463-7", "8339-4"];

export const BodyWeightLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "29463-7",
                display: "Body weight"
            },
            {
                code: "8339-4",
                display: "Birth weight Measured"
            }
        ]
    }
];

export default BodyWeightLoinc;
