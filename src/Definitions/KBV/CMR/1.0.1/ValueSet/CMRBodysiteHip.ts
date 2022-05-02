import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRBodysiteHipGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRBodysiteHipGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Bodysite_Hip

type CMRBodysiteHip = "362906008" | "362905007";

const CMRBodysiteHip: t.Type<CMRBodysiteHip> = t.union(
    [t.literal("362906008"), t.literal("362905007")],
    "CMRBodysiteHip"
);

export const CMRBodysiteHipArray: string[] = ["362906008", "362905007"];

export const CMRBodysiteHipValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "362906008",
                display: "Entire right hip joint (body structure)"
            },
            {
                code: "362905007",
                display: "Entire left hip joint (body structure)"
            }
        ]
    }
];

export { CMRBodysiteHipGerman as ConceptMap };

export default CMRBodysiteHip;
