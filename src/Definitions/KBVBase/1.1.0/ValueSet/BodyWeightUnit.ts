import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_BodyWeight_Unit

type BodyWeightUnit = "g" | "kg";

const BodyWeightUnit: t.Type<BodyWeightUnit> = t.union(
    [t.literal("g"), t.literal("kg")],
    "BodyWeightUnit"
);

export const BodyWeightUnitArray: string[] = ["g", "kg"];

export const BodyWeightUnitValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "g",
                display: ""
            },
            {
                code: "kg",
                display: ""
            }
        ]
    }
];

export default BodyWeightUnit;
