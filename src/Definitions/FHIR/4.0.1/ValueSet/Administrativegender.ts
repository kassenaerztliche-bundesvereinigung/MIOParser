import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/administrative-gender

type Administrativegender = "male" | "female" | "other" | "unknown";

const Administrativegender: t.Type<Administrativegender> = t.union(
    [t.literal("male"), t.literal("female"), t.literal("other"), t.literal("unknown")],
    "Administrativegender"
);

export const AdministrativegenderArray: string[] = ["male", "female", "other", "unknown"];

export const AdministrativegenderValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/administrative-gender",
        concept: [
            {
                code: "male",
                display: "Male"
            },
            {
                code: "female",
                display: "Female"
            },
            {
                code: "other",
                display: "Other"
            },
            {
                code: "unknown",
                display: "Unknown"
            }
        ]
    }
];

export default Administrativegender;
