import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRNewbornBloodSpotScreeningTypeGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRNewbornBloodSpotScreeningTypeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Newborn_Blood_Spot_Screening_Type

type CMRNewbornBloodSpotScreeningType =
    | "425758004:246513007=261422002"
    | "425758004:246513007=261426004"
    | "425758004:246513007=261429006";

const CMRNewbornBloodSpotScreeningType: t.Type<CMRNewbornBloodSpotScreeningType> =
    t.union(
        [
            t.literal("425758004:246513007=261422002"),
            t.literal("425758004:246513007=261426004"),
            t.literal("425758004:246513007=261429006")
        ],
        "CMRNewbornBloodSpotScreeningType"
    );

export const CMRNewbornBloodSpotScreeningTypeArray: string[] = [
    "425758004:246513007=261422002",
    "425758004:246513007=261426004",
    "425758004:246513007=261429006"
];

export const CMRNewbornBloodSpotScreeningTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "425758004:246513007=261422002",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)"
            },
            {
                code: "425758004:246513007=261426004",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)"
            },
            {
                code: "425758004:246513007=261429006",
                display:
                    "Diagnostic blood test (procedure) : Revision status (attribute) = Third stage of multistaged procedure (qualifier value)"
            }
        ]
    }
];

export { CMRNewbornBloodSpotScreeningTypeGerman as ConceptMap };

export default CMRNewbornBloodSpotScreeningType;
