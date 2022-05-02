import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRChildPositionGerman from "../../../../../Definitions/KBV/MR/1.0.0/ConceptMap/MRChildPositionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Child_Position

type MRChildPosition = "73161006" | "6096002" | "70028003";

const MRChildPosition: t.Type<MRChildPosition> = t.union(
    [t.literal("73161006"), t.literal("6096002"), t.literal("70028003")],
    "MRChildPosition"
);

export const MRChildPositionArray: string[] = ["73161006", "6096002", "70028003"];

export const MRChildPositionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "73161006",
                display: "Transverse lie (disorder)"
            },
            {
                code: "6096002",
                display: "Breech presentation (finding)"
            },
            {
                code: "70028003",
                display: "Vertex presentation (finding)"
            }
        ]
    }
];

export { MRChildPositionGerman as ConceptMap };

export default MRChildPosition;
