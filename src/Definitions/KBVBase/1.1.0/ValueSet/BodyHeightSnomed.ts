import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Height_Snomed

type BodyHeightSnomed = "169886007";

const BodyHeightSnomed: t.Type<BodyHeightSnomed> = t.literal("169886007");

export const BodyHeightSnomedArray: string[] = ["169886007"];

export const BodyHeightSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: []
    },
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169886007",
                display: "Birth length (observable entity)"
            }
        ]
    }
];

export default BodyHeightSnomed;
