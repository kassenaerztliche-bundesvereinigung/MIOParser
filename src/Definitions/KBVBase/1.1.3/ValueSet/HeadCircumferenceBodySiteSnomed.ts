import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Head_Circumference_BodySite_Snomed

type HeadCircumferenceBodySiteSnomed = "302548004" | "362865009";

const HeadCircumferenceBodySiteSnomed: t.Type<HeadCircumferenceBodySiteSnomed> = t.union(
    [t.literal("302548004"), t.literal("362865009")],
    "HeadCircumferenceBodySiteSnomed"
);

export const HeadCircumferenceBodySiteSnomedArray: string[] = ["302548004", "362865009"];

export const HeadCircumferenceBodySiteSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "302548004",
                display: "Entire head (body structure)"
            },
            {
                code: "362865009",
                display: "Entire fetal head (body structure)"
            }
        ]
    }
];

export default HeadCircumferenceBodySiteSnomed;
