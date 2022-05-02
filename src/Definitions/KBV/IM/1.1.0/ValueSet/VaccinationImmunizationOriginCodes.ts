import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import VaccinationImmunizationOriginCodesGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationImmunizationOriginCodesGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_ImmunizationOriginCodes

type VaccinationImmunizationOriginCodes = "recall" | "record" | "provider";

const VaccinationImmunizationOriginCodes: t.Type<VaccinationImmunizationOriginCodes> =
    t.union(
        [t.literal("recall"), t.literal("record"), t.literal("provider")],
        "VaccinationImmunizationOriginCodes"
    );

export const VaccinationImmunizationOriginCodesArray: string[] = [
    "recall",
    "record",
    "provider"
];

export const VaccinationImmunizationOriginCodesValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
        concept: [
            {
                code: "recall",
                display: "Parent/Guardian/Patient Recall"
            },
            {
                code: "record",
                display: "Written Record"
            },
            {
                code: "provider",
                display: "Other Provider"
            }
        ]
    }
];

export { VaccinationImmunizationOriginCodesGerman as ConceptMap };

export default VaccinationImmunizationOriginCodes;
