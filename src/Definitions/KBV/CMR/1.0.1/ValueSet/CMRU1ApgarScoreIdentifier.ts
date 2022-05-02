import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU1ApgarScoreIdentifierGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU1ApgarScoreIdentifierGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_Apgar_Score_Identifier

type CMRU1ApgarScoreIdentifier = "169922007" | "169909004";

const CMRU1ApgarScoreIdentifier: t.Type<CMRU1ApgarScoreIdentifier> = t.union(
    [t.literal("169922007"), t.literal("169909004")],
    "CMRU1ApgarScoreIdentifier"
);

export const CMRU1ApgarScoreIdentifierArray: string[] = ["169922007", "169909004"];

export const CMRU1ApgarScoreIdentifierValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "169922007",
                display: "Apgar score at 10 minutes (observable entity)"
            },
            {
                code: "169909004",
                display: "Apgar score at 5 minutes (observable entity)"
            }
        ]
    }
];

export { CMRU1ApgarScoreIdentifierGerman as ConceptMap };

export default CMRU1ApgarScoreIdentifier;
