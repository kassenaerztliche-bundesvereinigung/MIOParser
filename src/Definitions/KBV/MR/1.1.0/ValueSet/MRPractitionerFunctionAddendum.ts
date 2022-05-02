import * as t from "io-ts";
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_Practitioner_Function_Addendum

type MRPractitionerFunctionAddendum =
    | "309343006"
    | "140"
    | "143"
    | "160"
    | "161"
    | "171"
    | "192";

const MRPractitionerFunctionAddendum: t.Type<MRPractitionerFunctionAddendum> = t.union(
    [
        t.literal("309343006"),
        t.literal("140"),
        t.literal("143"),
        t.literal("160"),
        t.literal("161"),
        t.literal("171"),
        t.literal("192")
    ],
    "MRPractitionerFunctionAddendum"
);

export const MRPractitionerFunctionAddendumArray: string[] = [
    "309343006",
    "140",
    "143",
    "160",
    "161",
    "171",
    "192"
];

export const MRPractitionerFunctionAddendumValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "309343006",
                display: "Physician (occupation)"
            }
        ]
    },
    {
        system: "https://fhir.kbv.de/CodeSystem/KBV_CS_SFHIR_BAR2_WBO",
        concept: [
            {
                code: "140",
                display: "FA Nervenheilkunde"
            },
            {
                code: "143",
                display: "Psychotherapeutisch tätiger Arzt"
            },
            {
                code: "160",
                display: "FA Orthopädie"
            },
            {
                code: "161",
                display: "SP Rheumatologie"
            },
            {
                code: "171",
                display: "TG Neuropathologie"
            },
            {
                code: "192",
                display: "TG Neuroradiologie"
            }
        ]
    }
];

export default MRPractitionerFunctionAddendum;
