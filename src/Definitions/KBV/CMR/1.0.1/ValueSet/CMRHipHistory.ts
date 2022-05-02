import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRHipHistoryGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRHipHistoryGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Hip_History

type CMRHipHistory = "407613009" | "700191004" | "73573004";

const CMRHipHistory: t.Type<CMRHipHistory> = t.union(
    [t.literal("407613009"), t.literal("700191004"), t.literal("73573004")],
    "CMRHipHistory"
);

export const CMRHipHistoryArray: string[] = ["407613009", "700191004", "73573004"];

export const CMRHipHistoryValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "407613009",
                display: "Born by breech delivery (situation)"
            },
            {
                code: "700191004",
                display: "Family history of congenital hip dysplasia (situation)"
            },
            {
                code: "73573004",
                display: "Congenital anomaly of musculoskeletal system (disorder)"
            }
        ]
    }
];

export { CMRHipHistoryGerman as ConceptMap };

export default CMRHipHistory;
