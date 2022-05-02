import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Gender

type MRGender = "male" | "female" | "other";

const MRGender: t.Type<MRGender> = t.union(
    [t.literal("male"), t.literal("female"), t.literal("other")],
    "MRGender"
);

export const MRGenderArray: string[] = ["male", "female", "other"];

export const MRGenderValueSet: ValueSet = [
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
            }
        ]
    }
];

export default MRGender;
