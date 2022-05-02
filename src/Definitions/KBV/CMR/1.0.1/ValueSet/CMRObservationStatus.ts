import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Observation_Status

type CMRObservationStatus = "final" | "cancelled";

const CMRObservationStatus: t.Type<CMRObservationStatus> = t.union(
    [t.literal("final"), t.literal("cancelled")],
    "CMRObservationStatus"
);

export const CMRObservationStatusArray: string[] = ["final", "cancelled"];

export const CMRObservationStatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/observation-status",
        concept: [
            {
                code: "final",
                display: "Final"
            },
            {
                code: "cancelled",
                display: "Cancelled"
            }
        ]
    }
];

export default CMRObservationStatus;
