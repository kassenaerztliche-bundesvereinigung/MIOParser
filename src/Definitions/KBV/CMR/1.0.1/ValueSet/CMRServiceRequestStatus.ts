import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Service_Request_Status

type CMRServiceRequestStatus = "completed" | "active";

const CMRServiceRequestStatus: t.Type<CMRServiceRequestStatus> = t.union(
    [t.literal("completed"), t.literal("active")],
    "CMRServiceRequestStatus"
);

export const CMRServiceRequestStatusArray: string[] = ["completed", "active"];

export const CMRServiceRequestStatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/request-status",
        concept: [
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "active",
                display: "Active"
            }
        ]
    }
];

export default CMRServiceRequestStatus;
