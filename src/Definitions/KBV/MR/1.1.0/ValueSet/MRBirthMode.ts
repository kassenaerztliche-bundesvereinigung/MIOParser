import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRBirthModeGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRBirthModeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Birth_Mode

type MRBirthMode = "236974004" | "11466000" | "177184002";

const MRBirthMode: t.Type<MRBirthMode> = t.union(
    [t.literal("236974004"), t.literal("11466000"), t.literal("177184002")],
    "MRBirthMode"
);

export const MRBirthModeArray: string[] = ["236974004", "11466000", "177184002"];

export const MRBirthModeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "236974004",
                display: "Instrumental delivery (procedure)"
            },
            {
                code: "11466000",
                display: "Cesarean section (procedure)"
            },
            {
                code: "177184002",
                display: "Normal delivery procedure (procedure)"
            }
        ]
    }
];

export { MRBirthModeGerman as ConceptMap };

export default MRBirthMode;
