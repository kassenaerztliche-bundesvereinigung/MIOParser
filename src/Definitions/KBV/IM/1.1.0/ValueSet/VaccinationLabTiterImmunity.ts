import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import VaccinationLabTiterImmunityGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationLabTiterImmunityGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_Titer_Immunity

type VaccinationLabTiterImmunity =
    | "365861007:363713009=260385009"
    | "365861007:363713009=10828004";

const VaccinationLabTiterImmunity: t.Type<VaccinationLabTiterImmunity> = t.union(
    [
        t.literal("365861007:363713009=260385009"),
        t.literal("365861007:363713009=10828004")
    ],
    "VaccinationLabTiterImmunity"
);

export const VaccinationLabTiterImmunityArray: string[] = [
    "365861007:363713009=260385009",
    "365861007:363713009=10828004"
];

export const VaccinationLabTiterImmunityValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "365861007:363713009=260385009",
                display:
                    "Finding of immune status (finding) : Has interpretation (attribute) = Negative (qualifier value)"
            },
            {
                code: "365861007:363713009=10828004",
                display:
                    "Finding of immune status (finding) : Has interpretation (attribute) = Positive (qualifier value)"
            }
        ]
    }
];

export { VaccinationLabTiterImmunityGerman as ConceptMap };

export default VaccinationLabTiterImmunity;
