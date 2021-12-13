import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Diagnose_Snomed_CT

type DiagnoseSnomedCT = string;

const DiagnoseSnomedCT: t.Type<DiagnoseSnomedCT> = t.string;

export const DiagnoseSnomedCTArray: string[] = [];

export const DiagnoseSnomedCTValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: []
    },
    {
        system: "http://snomed.info/sct",
        concept: []
    },
    {
        system: "http://snomed.info/sct",
        concept: []
    }
];

export default DiagnoseSnomedCT;
