import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://fhir.de/ValueSet/dimdi/icd-10-gm

type Dimdiicd10gm = string;

const Dimdiicd10gm: t.Type<Dimdiicd10gm> = t.string;

export const Dimdiicd10gmArray: string[] = [];

export const Dimdiicd10gmValueSet: ValueSet = [
    {
        system: "",
        concept: []
    }
];

export default Dimdiicd10gm;
