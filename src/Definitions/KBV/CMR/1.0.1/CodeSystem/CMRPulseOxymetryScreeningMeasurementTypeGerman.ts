import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_Pulse_Oxymetry_Screening_Measurement_Type_German
type CMRPulseOxymetryScreeningMeasurementTypeGerman = "Erstmessung" | "Kontrollmessung";

const CMRPulseOxymetryScreeningMeasurementTypeGerman: t.Type<CMRPulseOxymetryScreeningMeasurementTypeGerman> =
    t.union([t.literal("Erstmessung"), t.literal("Kontrollmessung")]);

export const CMRPulseOxymetryScreeningMeasurementTypeGermanArray: string[] = [
    "Erstmessung",
    "Kontrollmessung"
];

export default CMRPulseOxymetryScreeningMeasurementTypeGerman;
