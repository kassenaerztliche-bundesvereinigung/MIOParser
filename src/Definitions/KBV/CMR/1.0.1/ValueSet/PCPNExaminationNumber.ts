import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";
import PCPNExaminationNumberGerman from "../../../../../Definitions/KBV/CMR/1.0.1/ConceptMap/PCPNExaminationNumberGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_PC_PN_Examination_Number

type PCPNExaminationNumber =
    | "170107008"
    | "243788004:370131001=133931009"
    | "170250008"
    | "170263002"
    | "170254004"
    | "401140000"
    | "170281004"
    | "410635005"
    | "243788004:370131001=410602000";

const PCPNExaminationNumber: t.Type<PCPNExaminationNumber> = t.union(
    [
        t.literal("170107008"),
        t.literal("243788004:370131001=133931009"),
        t.literal("170250008"),
        t.literal("170263002"),
        t.literal("170254004"),
        t.literal("401140000"),
        t.literal("170281004"),
        t.literal("410635005"),
        t.literal("243788004:370131001=410602000")
    ],
    "PCPNExaminationNumber"
);

export const PCPNExaminationNumberArray: string[] = [
    "170107008",
    "243788004:370131001=133931009",
    "170250008",
    "170263002",
    "170254004",
    "401140000",
    "170281004",
    "410635005",
    "243788004:370131001=410602000"
];

export const PCPNExaminationNumberValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "170107008",
                display: "Child examination - 10 days (procedure)"
            },
            {
                code: "243788004:370131001=133931009",
                display:
                    "Child examination (procedure) : Recipient category =  Infant (person)"
            },
            {
                code: "170250008",
                display: "Child 3 month examination (procedure)"
            },
            {
                code: "170263002",
                display: "Child 6 month examination (procedure)"
            },
            {
                code: "170254004",
                display: "Child 1 year examination (procedure)"
            },
            {
                code: "401140000",
                display: "Child 2 year examination (procedure)"
            },
            {
                code: "170281004",
                display: "Child 3 year examination (procedure)"
            },
            {
                code: "410635005",
                display: "Child 4 year examination (procedure)"
            },
            {
                code: "243788004:370131001=410602000",
                display:
                    "Child examination (procedure) : Recipient category (attribute) =  Preschool child (person)"
            }
        ]
    }
];

export { PCPNExaminationNumberGerman as ConceptMap };

export default PCPNExaminationNumber;
