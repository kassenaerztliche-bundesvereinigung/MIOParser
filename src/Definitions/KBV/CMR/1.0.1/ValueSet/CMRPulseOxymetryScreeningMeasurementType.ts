import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import CMRPulseOxymetryScreeningMeasurementTypeGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/CMRPulseOxymetryScreeningMeasurementTypeGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_Pulse_Oxymetry_Screening_Measurement_Type

type CMRPulseOxymetryScreeningMeasurementType =
    | "250554003:363703001=399455000"
    | "250554003:363703001=262134003";

const CMRPulseOxymetryScreeningMeasurementType: t.Type<CMRPulseOxymetryScreeningMeasurementType> =
    t.union(
        [
            t.literal("250554003:363703001=399455000"),
            t.literal("250554003:363703001=262134003")
        ],
        "CMRPulseOxymetryScreeningMeasurementType"
    );

export const CMRPulseOxymetryScreeningMeasurementTypeArray: string[] = [
    "250554003:363703001=399455000",
    "250554003:363703001=262134003"
];

export const CMRPulseOxymetryScreeningMeasurementTypeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "250554003:363703001=399455000",
                display:
                    "Measurement of oxygen saturation at periphery (procedure) : Has intent (attribute) = Primary procedure (qualifier value)"
            },
            {
                code: "250554003:363703001=262134003",
                display:
                    "Measurement of oxygen saturation at periphery (procedure) : Has intent (attribute) = Secondary procedure (qualifier value)"
            }
        ]
    }
];

export { CMRPulseOxymetryScreeningMeasurementTypeGerman as ConceptMap };

export default CMRPulseOxymetryScreeningMeasurementType;
