import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Snomed

type BodyWeightSnomed = string;

const BodyWeightSnomed: t.Type<BodyWeightSnomed> = t.string;

export const BodyWeightSnomedArray: string[] = [];

export const BodyWeightSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: []
    }
];

export default BodyWeightSnomed;
