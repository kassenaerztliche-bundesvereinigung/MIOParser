import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://fhir.de/ValueSet/alpha-id

type Alphaid = string;

const Alphaid: t.Type<Alphaid> = t.string;

export const AlphaidArray: string[] = [];

export const AlphaidValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/alpha-id",
        concept: []
    }
];

export default Alphaid;
