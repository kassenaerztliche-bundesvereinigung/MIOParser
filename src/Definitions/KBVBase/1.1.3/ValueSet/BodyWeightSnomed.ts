import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_Base_Body_Weight_Snomed

type BodyWeightSnomed =
    | "784399000"
    | "735395000"
    | "445541000"
    | "443245006"
    | "425024002"
    | "424927000"
    | "400967004"
    | "364589006"
    | "363808001"
    | "248351003"
    | "27113001";

const BodyWeightSnomed: t.Type<BodyWeightSnomed> = t.union(
    [
        t.literal("784399000"),
        t.literal("735395000"),
        t.literal("445541000"),
        t.literal("443245006"),
        t.literal("425024002"),
        t.literal("424927000"),
        t.literal("400967004"),
        t.literal("364589006"),
        t.literal("363808001"),
        t.literal("248351003"),
        t.literal("27113001")
    ],
    "BodyWeightSnomed"
);

export const BodyWeightSnomedArray: string[] = [
    "784399000",
    "735395000",
    "445541000",
    "443245006",
    "425024002",
    "424927000",
    "400967004",
    "364589006",
    "363808001",
    "248351003",
    "27113001"
];

export const BodyWeightSnomedValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "784399000",
                display: "Self reported body weight (observable entity)"
            },
            {
                code: "735395000",
                display: "Current body weight (observable entity)"
            },
            {
                code: "445541000",
                display: "Dry body weight (observable entity)"
            },
            {
                code: "443245006",
                display:
                    "Estimated weight using Broselow Luten pediatric weight estimation (observable entity)"
            },
            {
                code: "425024002",
                display: "Body weight without shoes (observable entity)"
            },
            {
                code: "424927000",
                display: "Body weight with shoes (observable entity)"
            },
            {
                code: "400967004",
                display: "Baseline weight (observable entity)"
            },
            {
                code: "364589006",
                display: "Birth weight (observable entity)"
            },
            {
                code: "363808001",
                display: "Measured body weight (observable entity)"
            },
            {
                code: "248351003",
                display: "Previous well-weight (observable entity)"
            },
            {
                code: "27113001",
                display: "Body weight (observable entity)"
            }
        ]
    }
];

export default BodyWeightSnomed;
