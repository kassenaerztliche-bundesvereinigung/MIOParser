import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRHearscreeningResultGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHearscreeningResultGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hearscreening_Result

type CMRHearscreeningResult = "275727004" | "134376008" | "134375007";

const CMRHearscreeningResult: t.Type<CMRHearscreeningResult> = t.union(
    [t.literal("275727004"), t.literal("134376008"), t.literal("134375007")],
    "CMRHearscreeningResult"
);

export const CMRHearscreeningResultArray: string[] = [
    "275727004",
    "134376008",
    "134375007"
];

export const CMRHearscreeningResultValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "275727004",
                display: "Hearing test normal (finding)"
            },
            {
                code: "134376008",
                display: "Hearing test right abnormality (finding)"
            },
            {
                code: "134375007",
                display: "Hearing test left abnormality (finding)"
            }
        ]
    }
];

export { CMRHearscreeningResultGerman as ConceptMap };

export default CMRHearscreeningResult;
