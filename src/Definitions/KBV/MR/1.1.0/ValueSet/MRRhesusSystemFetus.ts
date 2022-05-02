import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRRhesusSystemFetusGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRRhesusSystemFetusGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Rhesus_System_Fetus

type MRRhesusSystemFetus = "365645007+165747007" | "365645007+165746003";

const MRRhesusSystemFetus: t.Type<MRRhesusSystemFetus> = t.union(
    [t.literal("365645007+165747007"), t.literal("365645007+165746003")],
    "MRRhesusSystemFetus"
);

export const MRRhesusSystemFetusArray: string[] = [
    "365645007+165747007",
    "365645007+165746003"
];

export const MRRhesusSystemFetusValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "365645007+165747007",
                display: "Finding of Rh genotype (finding) + RhD positive (finding)"
            },
            {
                code: "365645007+165746003",
                display: "Finding of Rh genotype (finding) + RhD negative (finding)"
            }
        ]
    }
];

export { MRRhesusSystemFetusGerman as ConceptMap };

export default MRRhesusSystemFetus;
