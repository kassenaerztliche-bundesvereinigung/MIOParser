import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRU1U3PulseOxymetryMeasurementGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRU1U3PulseOxymetryMeasurementGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_U3_Pulse_Oxymetry_Measurement

type CMRU1U3PulseOxymetryMeasurement =
    | "449171008"
    | "448225001"
    | "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}";

const CMRU1U3PulseOxymetryMeasurement: t.Type<CMRU1U3PulseOxymetryMeasurement> = t.union(
    [
        t.literal("449171008"),
        t.literal("448225001"),
        t.literal(
            "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}"
        )
    ],
    "CMRU1U3PulseOxymetryMeasurement"
);

export const CMRU1U3PulseOxymetryMeasurementArray: string[] = [
    "449171008",
    "448225001",
    "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}"
];

export const CMRU1U3PulseOxymetryMeasurementValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "449171008",
                display: "Oxygen saturation below reference range (finding)"
            },
            {
                code: "448225001",
                display: "Oxygen saturation within reference range (finding)"
            },
            {
                code: "129125009:{363589002=250554003,408730004=385643006,408732007=410604004}",
                display:
                    "Procedure with explicit context (situation) : { Associated procedure (attribute) = Measurement of oxygen saturation at periphery (prcedure) , Procedure context (attribute) = To be done (qualifier value) }"
            }
        ]
    }
];

export { CMRU1U3PulseOxymetryMeasurementGerman as ConceptMap };

export default CMRU1U3PulseOxymetryMeasurement;
