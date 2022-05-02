import * as t from "io-ts";
// Canonical URL for CodeSystem: https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_CMR_U1_U3_Pulse_Oxymetry_Measurement_German
type CMRU1U3PulseOxymetryMeasurementGerman =
    | "auffaellig"
    | "unauffaellig"
    | "kontrollbuerftig";

const CMRU1U3PulseOxymetryMeasurementGerman: t.Type<CMRU1U3PulseOxymetryMeasurementGerman> =
    t.union([
        t.literal("auffaellig"),
        t.literal("unauffaellig"),
        t.literal("kontrollbuerftig")
    ]);

export const CMRU1U3PulseOxymetryMeasurementGermanArray: string[] = [
    "auffaellig",
    "unauffaellig",
    "kontrollbuerftig"
];

export default CMRU1U3PulseOxymetryMeasurementGerman;
