import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Lebensphase

type Lebensphase =
    | "41847000"
    | "263659003"
    | "255398004"
    | "713153009"
    | "3658006"
    | "255407002"
    | "271872005";

const Lebensphase: t.Type<Lebensphase> = t.union(
    [
        t.literal("41847000"),
        t.literal("263659003"),
        t.literal("255398004"),
        t.literal("713153009"),
        t.literal("3658006"),
        t.literal("255407002"),
        t.literal("271872005")
    ],
    "Lebensphase"
);

export const LebensphaseArray: string[] = [
    "41847000",
    "263659003",
    "255398004",
    "713153009",
    "3658006",
    "255407002",
    "271872005"
];

export const LebensphaseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "41847000",
                display: "Adulthood (qualifier value)"
            },
            {
                code: "263659003",
                display: "Adolescence (qualifier value)"
            },
            {
                code: "255398004",
                display: "Childhood (qualifier value)"
            },
            {
                code: "713153009",
                display: "Toddler (qualifier value)"
            },
            {
                code: "3658006",
                display: "Infancy (qualifier value)"
            },
            {
                code: "255407002",
                display: "Neonatal (qualifier value)"
            },
            {
                code: "271872005",
                display: "Old age (qualifier value)"
            }
        ]
    }
];

export default Lebensphase;
