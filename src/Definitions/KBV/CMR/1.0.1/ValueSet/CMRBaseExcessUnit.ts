import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Base_Excess_Unit

type CMRBaseExcessUnit = "meq/L" | "mmol/L";

const CMRBaseExcessUnit: t.Type<CMRBaseExcessUnit> = t.union(
    [t.literal("meq/L"), t.literal("mmol/L")],
    "CMRBaseExcessUnit"
);

export const CMRBaseExcessUnitArray: string[] = ["meq/L", "mmol/L"];

export const CMRBaseExcessUnitValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "meq/L",
                display: "MilliEquivalentsPerLiter"
            },
            {
                code: "mmol/L",
                display: "MilliMolesPerLiter"
            }
        ]
    }
];

export default CMRBaseExcessUnit;
