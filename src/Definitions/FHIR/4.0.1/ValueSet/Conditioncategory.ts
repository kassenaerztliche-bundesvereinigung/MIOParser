import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/condition-category

type Conditioncategory = "problem-list-item" | "encounter-diagnosis";

const Conditioncategory: t.Type<Conditioncategory> = t.union(
    [t.literal("problem-list-item"), t.literal("encounter-diagnosis")],
    "Conditioncategory"
);

export const ConditioncategoryArray: string[] = [
    "problem-list-item",
    "encounter-diagnosis"
];

export const ConditioncategoryValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
        concept: [
            {
                code: "problem-list-item",
                display: "Problem List Item"
            },
            {
                code: "encounter-diagnosis",
                display: "Encounter Diagnosis"
            }
        ]
    }
];

export default Conditioncategory;
