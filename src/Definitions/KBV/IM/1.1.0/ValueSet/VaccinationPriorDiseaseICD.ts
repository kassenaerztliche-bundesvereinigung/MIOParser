import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Prior_Disease_ICD

type VaccinationPriorDiseaseICD =
    | "B26.-"
    | "B05.-"
    | "B01.-"
    | "B06.-"
    | "B15.-"
    | "B16.-"
    | "B18.0"
    | "B18.1-"
    | "A84.1"
    | "A95.-"
    | "A37.-";

const VaccinationPriorDiseaseICD: t.Type<VaccinationPriorDiseaseICD> = t.union(
    [
        t.literal("B26.-"),
        t.literal("B05.-"),
        t.literal("B01.-"),
        t.literal("B06.-"),
        t.literal("B15.-"),
        t.literal("B16.-"),
        t.literal("B18.0"),
        t.literal("B18.1-"),
        t.literal("A84.1"),
        t.literal("A95.-"),
        t.literal("A37.-")
    ],
    "VaccinationPriorDiseaseICD"
);

export const VaccinationPriorDiseaseICDArray: string[] = [
    "B26.-",
    "B05.-",
    "B01.-",
    "B06.-",
    "B15.-",
    "B16.-",
    "B18.0",
    "B18.1-",
    "A84.1",
    "A95.-",
    "A37.-"
];

export const VaccinationPriorDiseaseICDValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm",
        concept: [
            {
                code: "B26.-",
                display: "Mumps"
            },
            {
                code: "B05.-",
                display: "Masern"
            },
            {
                code: "B01.-",
                display: "Varizellen [Windpocken]"
            },
            {
                code: "B06.-",
                display: "Röteln [Rubeola] [Rubella]"
            },
            {
                code: "B15.-",
                display: "Akute Virushepatitis A"
            },
            {
                code: "B16.-",
                display: "Akute Virushepatitis B"
            },
            {
                code: "B18.0",
                display: "Chronische Virushepatitis B mit Delta-Virus"
            },
            {
                code: "B18.1-",
                display: "Chronische Virushepatitis B ohne Delta-Virus"
            },
            {
                code: "A84.1",
                display: "Mitteleuropäische Enzephalitis, durch Zecken übertragen"
            },
            {
                code: "A95.-",
                display: "Gelbfieber"
            },
            {
                code: "A37.-",
                display: "Keuchhusten"
            }
        ]
    }
];

export default VaccinationPriorDiseaseICD;
