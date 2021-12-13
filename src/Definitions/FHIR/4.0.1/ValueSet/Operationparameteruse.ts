import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/operation-parameter-use

type Operationparameteruse = "in" | "out";

const Operationparameteruse: t.Type<Operationparameteruse> = t.union(
    [t.literal("in"), t.literal("out")],
    "Operationparameteruse"
);

export const OperationparameteruseArray: string[] = ["in", "out"];

export const OperationparameteruseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/operation-parameter-use",
        concept: [
            {
                code: "in",
                display: "In"
            },
            {
                code: "out",
                display: "Out"
            }
        ]
    }
];

export default Operationparameteruse;
