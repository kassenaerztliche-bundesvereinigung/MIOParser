import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/mimetypes

type Mimetypes = string;

const Mimetypes: t.Type<Mimetypes> = t.string;

export const MimetypesArray: string[] = [];

export const MimetypesValueSet: ValueSet = [
    {
        system: "",
        concept: []
    }
];

export default Mimetypes;
