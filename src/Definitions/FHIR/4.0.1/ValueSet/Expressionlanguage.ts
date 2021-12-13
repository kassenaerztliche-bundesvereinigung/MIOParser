import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/expression-language

type Expressionlanguage = "text/cql" | "text/fhirpath" | "application/x-fhir-query";

const Expressionlanguage: t.Type<Expressionlanguage> = t.union(
    [
        t.literal("text/cql"),
        t.literal("text/fhirpath"),
        t.literal("application/x-fhir-query")
    ],
    "Expressionlanguage"
);

export const ExpressionlanguageArray: string[] = [
    "text/cql",
    "text/fhirpath",
    "application/x-fhir-query"
];

export const ExpressionlanguageValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/expression-language",
        concept: [
            {
                code: "text/cql",
                display: "CQL"
            },
            {
                code: "text/fhirpath",
                display: "FHIRPath"
            },
            {
                code: "application/x-fhir-query",
                display: "FHIR Query"
            }
        ]
    }
];

export default Expressionlanguage;
