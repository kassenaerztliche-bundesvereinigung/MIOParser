import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import VaccinationSourceofInformationGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationSourceofInformationGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Source_of_Information

type VaccinationSourceofInformation =
    | "261665006"
    | "394863008"
    | "125677006"
    | "158965000"
    | "116154003";

const VaccinationSourceofInformation: t.Type<VaccinationSourceofInformation> = t.union(
    [
        t.literal("261665006"),
        t.literal("394863008"),
        t.literal("125677006"),
        t.literal("158965000"),
        t.literal("116154003")
    ],
    "VaccinationSourceofInformation"
);

export const VaccinationSourceofInformationArray: string[] = [
    "261665006",
    "394863008",
    "125677006",
    "158965000",
    "116154003"
];

export const VaccinationSourceofInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "261665006",
                display: "Unknown (qualifier value)"
            },
            {
                code: "394863008",
                display: "Non-family member (person)"
            },
            {
                code: "125677006",
                display: "Relative (person)"
            },
            {
                code: "158965000",
                display: "Medical practitioner (occupation)"
            },
            {
                code: "116154003",
                display: "Patient (person)"
            }
        ]
    }
];

export { VaccinationSourceofInformationGerman as ConceptMap };

export default VaccinationSourceofInformation;
