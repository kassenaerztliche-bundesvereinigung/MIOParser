import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_Brucella

type VaccinationVaccineBrucella = "7230005";

const VaccinationVaccineBrucella: t.Type<VaccinationVaccineBrucella> =
    t.literal("7230005");

export const VaccinationVaccineBrucellaArray: string[] = ["7230005"];

export const VaccinationVaccineBrucellaValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "7230005",
                display: "Brucella vaccine (product)"
            }
        ]
    }
];

export default VaccinationVaccineBrucella;
