import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import VaccinationPriorDiseaseGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationPriorDiseaseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Prior_Disease

type VaccinationPriorDisease =
    | "40733004"
    | "16541001"
    | "16901001"
    | "76795007"
    | "235869004"
    | "186639003"
    | "25102003"
    | "36653000"
    | "36989005"
    | "14189004"
    | "38907003"
    | "27836007";

const VaccinationPriorDisease: t.Type<VaccinationPriorDisease> = t.union(
    [
        t.literal("40733004"),
        t.literal("16541001"),
        t.literal("16901001"),
        t.literal("76795007"),
        t.literal("235869004"),
        t.literal("186639003"),
        t.literal("25102003"),
        t.literal("36653000"),
        t.literal("36989005"),
        t.literal("14189004"),
        t.literal("38907003"),
        t.literal("27836007")
    ],
    "VaccinationPriorDisease"
);

export const VaccinationPriorDiseaseArray: string[] = [
    "40733004",
    "16541001",
    "16901001",
    "76795007",
    "235869004",
    "186639003",
    "25102003",
    "36653000",
    "36989005",
    "14189004",
    "38907003",
    "27836007"
];

export const VaccinationPriorDiseaseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "40733004",
                display: "Infectious disease (disorder)"
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)"
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)"
            },
            {
                code: "76795007",
                display: "Acute type B viral hepatitis (disorder)"
            },
            {
                code: "235869004",
                display: "Chronic viral hepatitis B with hepatitis D (disorder)"
            },
            {
                code: "186639003",
                display: "Chronic viral hepatitis B without delta-agent (disorder)"
            },
            {
                code: "25102003",
                display: "Acute type A viral hepatitis (disorder)"
            },
            {
                code: "36653000",
                display: "Rubella (disorder)"
            },
            {
                code: "36989005",
                display: "Mumps (disorder)"
            },
            {
                code: "14189004",
                display: "Measles (disorder)"
            },
            {
                code: "38907003",
                display: "Varicella (disorder)"
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)"
            }
        ]
    }
];

export { VaccinationPriorDiseaseGerman as ConceptMap };

export default VaccinationPriorDisease;
