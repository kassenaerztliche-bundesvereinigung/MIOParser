import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import MRChildPositionGerman from "../../../../../Definitions/KBV/MR/1.1.0/ConceptMap/MRChildPositionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Child_Position

type MRChildPosition = "70028003" | "6096002" | "73161006";

const MRChildPosition: t.Type<MRChildPosition> = t.union(
    [t.literal("70028003"), t.literal("6096002"), t.literal("73161006")],
    "MRChildPosition"
);

export const MRChildPositionArray: string[] = ["70028003", "6096002", "73161006"];

export const MRChildPositionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "70028003",
                display: "Vertex presentation (finding)"
            },
            {
                code: "6096002",
                display: "Breech presentation (finding)"
            },
            {
                code: "73161006",
                display: "Transverse lie (disorder)"
            }
        ]
    }
];

export { MRChildPositionGerman as ConceptMap };

export default MRChildPosition;
