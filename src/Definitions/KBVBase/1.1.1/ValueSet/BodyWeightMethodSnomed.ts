import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Method_Snomed

type BodyWeightMethodSnomed = "363808001" | "786458005";

const BodyWeightMethodSnomed: t.Type<BodyWeightMethodSnomed> = t.union(
    [t.literal("363808001"), t.literal("786458005")],
    "BodyWeightMethodSnomed"
);

export const BodyWeightMethodSnomedArray: string[] = ["363808001", "786458005"];

export const BodyWeightMethodSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "363808001",
                display: "Measured body weight (observable entity)"
            },
            {
                code: "786458005",
                display: "Self reported usual body weight (observable entity)"
            }
        ]
    }
];

export default BodyWeightMethodSnomed;
