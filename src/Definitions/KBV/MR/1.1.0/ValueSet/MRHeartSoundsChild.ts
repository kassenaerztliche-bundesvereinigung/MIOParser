import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRHeartSoundsChildGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRHeartSoundsChildGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Heart_Sounds_Child

type MRHeartSoundsChild = "249045009" | "289446001";

const MRHeartSoundsChild: t.Type<MRHeartSoundsChild> = t.union(
    [t.literal("249045009"), t.literal("289446001")],
    "MRHeartSoundsChild"
);

export const MRHeartSoundsChildArray: string[] = ["249045009", "289446001"];

export const MRHeartSoundsChildValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "249045009",
                display: "Fetal heart sounds present (finding)"
            },
            {
                code: "289446001",
                display: "Fetal heart sounds absent (situation)"
            }
        ]
    }
];

export { MRHeartSoundsChildGerman as ConceptMap };

export default MRHeartSoundsChild;
