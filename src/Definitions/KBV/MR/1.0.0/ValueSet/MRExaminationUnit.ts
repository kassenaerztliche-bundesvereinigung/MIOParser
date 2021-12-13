import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRExaminationUnitGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRExaminationUnitGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Examination_Unit

type MRExaminationUnit = "{titer}" | "10*6/uL" | "g/dL" | "mmol/L" | "[iU]/mL";

const MRExaminationUnit: t.Type<MRExaminationUnit> = t.union(
    [
        t.literal("{titer}"),
        t.literal("10*6/uL"),
        t.literal("g/dL"),
        t.literal("mmol/L"),
        t.literal("[iU]/mL")
    ],
    "MRExaminationUnit"
);

export const MRExaminationUnitArray: string[] = [
    "{titer}",
    "10*6/uL",
    "g/dL",
    "mmol/L",
    "[iU]/mL"
];

export const MRExaminationUnitValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "{titer}",
                display: "titer"
            },
            {
                code: "10*6/uL",
                display: "MillionsPerMicroLiter [Number Concentration Units]"
            },
            {
                code: "g/dL",
                display: "GramsPerDeciLiter [Mass Concentration Units]"
            },
            {
                code: "mmol/L",
                display: "MilliMolesPerLiter [Most Common Healthcare Units]"
            },
            {
                code: "[iU]/mL",
                display: "InternationalUnitsPerMilliLiter [Arbitrary Concentration Units]"
            }
        ]
    }
];

export { MRExaminationUnitGerman as ConceptMap };

export default MRExaminationUnit;
