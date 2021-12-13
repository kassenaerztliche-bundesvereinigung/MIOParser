import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Medication_Statement_Status_German
type CMRMedicationStatementStatusGerman = "verabreicht" | "nichtverabreicht";

const CMRMedicationStatementStatusGerman: t.Type<CMRMedicationStatementStatusGerman> =
    t.union([t.literal("verabreicht"), t.literal("nichtverabreicht")]);

export const CMRMedicationStatementStatusGermanArray: string[] = [
    "verabreicht",
    "nichtverabreicht"
];

export default CMRMedicationStatementStatusGerman;
