import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";
import ApgarScoreIdentifierSnomedGerman from "../../../../Definitions/KBVBase/1.1.0/ConceptMap/ApgarScoreIdentifierGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Apgar_Score_Identifier_Snomed

type ApgarScoreIdentifierSnomed = "169922007" | "169909004";

const ApgarScoreIdentifierSnomed: t.Type<ApgarScoreIdentifierSnomed> = t.union(
    [t.literal("169922007"), t.literal("169909004")],
    "ApgarScoreIdentifierSnomed"
);

export const ApgarScoreIdentifierSnomedArray: string[] = ["169922007", "169909004"];

export const ApgarScoreIdentifierSnomedValueSet: ValueSet = [
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

export { ApgarScoreIdentifierSnomedGerman as ConceptMap };

export default ApgarScoreIdentifierSnomed;
