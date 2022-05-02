import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_Immunoglobulin_List

type VaccinationVaccineImmunoglobulinList =
    | "714569001"
    | "786224004"
    | "384706007"
    | "62294009"
    | "9542007"
    | "80834004"
    | "9778000"
    | "108725001"
    | "763703008";

const VaccinationVaccineImmunoglobulinList: t.Type<VaccinationVaccineImmunoglobulinList> =
    t.union(
        [
            t.literal("714569001"),
            t.literal("786224004"),
            t.literal("384706007"),
            t.literal("62294009"),
            t.literal("9542007"),
            t.literal("80834004"),
            t.literal("9778000"),
            t.literal("108725001"),
            t.literal("763703008")
        ],
        "VaccinationVaccineImmunoglobulinList"
    );

export const VaccinationVaccineImmunoglobulinListArray: string[] = [
    "714569001",
    "786224004",
    "384706007",
    "62294009",
    "9542007",
    "80834004",
    "9778000",
    "108725001",
    "763703008"
];

export const VaccinationVaccineImmunoglobulinListValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "714569001",
                display:
                    "Product containing normal immunoglobulin human (medicinal product)"
            },
            {
                code: "786224004",
                display:
                    "Product containing human anti-D immunoglobulin (medicinal product)|"
            },
            {
                code: "384706007",
                display: "Product containing tetanus antitoxin (medicinal product)"
            },
            {
                code: "62294009",
                display:
                    "Product containing Varicella-zoster virus antibody (medicinal product)"
            },
            {
                code: "9542007",
                display:
                    "Product containing Hepatitis B surface antigen immunoglobulin (medicinal product)"
            },
            {
                code: "80834004",
                display:
                    "Product containing rabies human immune globulin (medicinal product)"
            },
            {
                code: "9778000",
                display: "Product containing Cytomegalovirus antibody (medicinal product)"
            },
            {
                code: "108725001",
                display: "Product containing palivizumab (medicinal product)"
            },
            {
                code: "763703008",
                display: "Product containing bezlotoxumab (medicinal product)"
            }
        ]
    }
];

export default VaccinationVaccineImmunoglobulinList;
