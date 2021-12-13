import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRMedicationStatementStatusGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRMedicationStatementStatusGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Medication_Statement_Status

type CMRMedicationStatementStatus = "completed" | "not-taken";

const CMRMedicationStatementStatus: t.Type<CMRMedicationStatementStatus> = t.union(
    [t.literal("completed"), t.literal("not-taken")],
    "CMRMedicationStatementStatus"
);

export const CMRMedicationStatementStatusArray: string[] = ["completed", "not-taken"];

export const CMRMedicationStatementStatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
        concept: [
            {
                code: "completed",
                display: "Completed"
            },
            {
                code: "not-taken",
                display: "Not-Taken"
            }
        ]
    }
];

export { CMRMedicationStatementStatusGerman as ConceptMap };

export default CMRMedicationStatementStatus;
