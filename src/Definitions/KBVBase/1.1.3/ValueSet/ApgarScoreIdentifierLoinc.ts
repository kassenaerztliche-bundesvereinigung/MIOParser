import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";
import ApgarScoreIdentifierLoincGerman from "../../../../Definitions/KBVBase/1.1.3/ConceptMap/ApgarScoreIdentifierGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Apgar_Score_Identifier_Loinc

type ApgarScoreIdentifierLoinc = "9274-2" | "9271-8";

const ApgarScoreIdentifierLoinc: t.Type<ApgarScoreIdentifierLoinc> = t.union(
    [t.literal("9274-2"), t.literal("9271-8")],
    "ApgarScoreIdentifierLoinc"
);

export const ApgarScoreIdentifierLoincArray: string[] = ["9274-2", "9271-8"];

export const ApgarScoreIdentifierLoincValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "9274-2",
                display: "5 minute Apgar Score"
            },
            {
                code: "9271-8",
                display: "10 minute Apgar Score"
            }
        ]
    }
];

export { ApgarScoreIdentifierLoincGerman as ConceptMap };

export default ApgarScoreIdentifierLoinc;
