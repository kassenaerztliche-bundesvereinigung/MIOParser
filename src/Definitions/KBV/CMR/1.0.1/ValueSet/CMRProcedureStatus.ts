import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Procedure_Status

type CMRProcedureStatus = "completed" | "not-done";

const CMRProcedureStatus: t.Type<CMRProcedureStatus> = t.union(
    [t.literal("completed"), t.literal("not-done")],
    "CMRProcedureStatus"
);

export const CMRProcedureStatusArray: string[] = ["completed", "not-done"];

export const CMRProcedureStatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/event-status",
        concept: [
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "not-done",
                display: "Not Done"
            }
        ]
    }
];

export default CMRProcedureStatus;
