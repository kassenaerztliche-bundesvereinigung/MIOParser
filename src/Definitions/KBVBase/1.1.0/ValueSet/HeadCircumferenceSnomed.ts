import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Head_Circumference_Snomed

type HeadCircumferenceSnomed = "363812007" | "169876006";

const HeadCircumferenceSnomed: t.Type<HeadCircumferenceSnomed> = t.union(
    [t.literal("363812007"), t.literal("169876006")],
    "HeadCircumferenceSnomed"
);

export const HeadCircumferenceSnomedArray: string[] = ["363812007", "169876006"];

export const HeadCircumferenceSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "363812007",
                display: "Head circumference (observable entity)"
            },
            {
                code: "169876006",
                display: "Birth head circumference (observable entity)"
            }
        ]
    }
];

export default HeadCircumferenceSnomed;
