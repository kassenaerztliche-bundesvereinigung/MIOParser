import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MROtherUltrasoundStudiesGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MROtherUltrasoundStudiesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Other_Ultrasound_Studies

type MROtherUltrasoundStudies = "89343007" | "373671009" | "418090003";

const MROtherUltrasoundStudies: t.Type<MROtherUltrasoundStudies> = t.union(
    [t.literal("89343007"), t.literal("373671009"), t.literal("418090003")],
    "MROtherUltrasoundStudies"
);

export const MROtherUltrasoundStudiesArray: string[] = [
    "89343007",
    "373671009",
    "418090003"
];

export const MROtherUltrasoundStudiesValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "89343007",
                display: "Ultrasound study follow-up (procedure)"
            },
            {
                code: "373671009",
                display: "Specific ultrasound studies (procedure)"
            },
            {
                code: "418090003",
                display: "Ultrasound obstetric doppler (procedure)"
            }
        ]
    }
];

export { MROtherUltrasoundStudiesGerman as ConceptMap };

export default MROtherUltrasoundStudies;
