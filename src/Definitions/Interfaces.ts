import * as t from "io-ts";

export type Concept = {
    source: string;
    target: string;
    element: {
        code: string;
        display: string;
        target: {
            code: string;
            display: string;
            equivalence: string;
        }[];
    }[];
};
export type ConceptMap = Concept[];

export type Include = {
    system: string;
    concept: {
        code: string;
        display?: string;
    }[];
};

export type ValueSet = Include[];

export type AnyType = t.Any;
