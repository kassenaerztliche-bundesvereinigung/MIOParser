import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRFoetalPositionGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRFoetalPositionGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Foetal_Position

type CMRFoetalPosition =
    | "394698008:246090004=70028003"
    | "407613009"
    | "394698008:246090004=199362007";

const CMRFoetalPosition: t.Type<CMRFoetalPosition> = t.union(
    [
        t.literal("394698008:246090004=70028003"),
        t.literal("407613009"),
        t.literal("394698008:246090004=199362007")
    ],
    "CMRFoetalPosition"
);

export const CMRFoetalPositionArray: string[] = [
    "394698008:246090004=70028003",
    "407613009",
    "394698008:246090004=199362007"
];

export const CMRFoetalPositionValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "394698008:246090004=70028003",
                display:
                    "Birth history (situation) : Associated finding (attribute) = Vertex presentation (finding)"
            },
            {
                code: "407613009",
                display: "Born by breech delivery (situation)"
            },
            {
                code: "394698008:246090004=199362007",
                display:
                    "Birth history (situation) : Associated finding (attribute) = Transverse lie - delivered (disorder)"
            }
        ]
    }
];

export { CMRFoetalPositionGerman as ConceptMap };

export default CMRFoetalPosition;
