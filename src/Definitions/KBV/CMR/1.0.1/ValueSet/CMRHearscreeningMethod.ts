import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRHearscreeningMethodGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHearscreeningMethodGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hearscreening_Method

type CMRHearscreeningMethod =
    | "446077009"
    | "252616000:246513007=261422002"
    | "252616000:246513007=261426004";

const CMRHearscreeningMethod: t.Type<CMRHearscreeningMethod> = t.union(
    [
        t.literal("446077009"),
        t.literal("252616000:246513007=261422002"),
        t.literal("252616000:246513007=261426004")
    ],
    "CMRHearscreeningMethod"
);

export const CMRHearscreeningMethodArray: string[] = [
    "446077009",
    "252616000:246513007=261422002",
    "252616000:246513007=261426004"
];

export const CMRHearscreeningMethodValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "446077009",
                display: "Automated otoacoustic emission test (procedure)"
            },
            {
                code: "252616000:246513007=261422002",
                display:
                    "Auditory brainstem electric response audiometry (procedure) : Revision status (attribute) = First stage of multistage procedure (qualifier value)"
            },
            {
                code: "252616000:246513007=261426004",
                display:
                    "Auditory brainstem electric response audiometry (procedure) : Revision status (attribute) = Second stage of multistaged procedure (qualifier value)"
            }
        ]
    }
];

export { CMRHearscreeningMethodGerman as ConceptMap };

export default CMRHearscreeningMethod;
