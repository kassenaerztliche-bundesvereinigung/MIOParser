import * as t from "io-ts";
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/security-labels

type Securitylabels =
    | "U"
    | "L"
    | "M"
    | "N"
    | "R"
    | "V"
    | "COVERAGE"
    | "ETREAT"
    | "HMARKT"
    | "HOPERAT"
    | "HPAYMT"
    | "HRESCH"
    | "PATRQT"
    | "PUBHLTH"
    | "TREAT"
    | "_ActUSPrivacyLaw"
    | "42CFRPart2"
    | "CommonRule"
    | "HIPAANOPP"
    | "HIPAAPsyNotes"
    | "HIPAASelfPay"
    | "Title38Section7332";

const Securitylabels: t.Type<Securitylabels> = t.union(
    [
        t.literal("U"),
        t.literal("L"),
        t.literal("M"),
        t.literal("N"),
        t.literal("R"),
        t.literal("V"),
        t.literal("COVERAGE"),
        t.literal("ETREAT"),
        t.literal("HMARKT"),
        t.literal("HOPERAT"),
        t.literal("HPAYMT"),
        t.literal("HRESCH"),
        t.literal("PATRQT"),
        t.literal("PUBHLTH"),
        t.literal("TREAT"),
        t.literal("_ActUSPrivacyLaw"),
        t.literal("42CFRPart2"),
        t.literal("CommonRule"),
        t.literal("HIPAANOPP"),
        t.literal("HIPAAPsyNotes"),
        t.literal("HIPAASelfPay"),
        t.literal("Title38Section7332")
    ],
    "Securitylabels"
);

export const SecuritylabelsArray: string[] = [
    "U",
    "L",
    "M",
    "N",
    "R",
    "V",
    "COVERAGE",
    "ETREAT",
    "HMARKT",
    "HOPERAT",
    "HPAYMT",
    "HRESCH",
    "PATRQT",
    "PUBHLTH",
    "TREAT",
    "_ActUSPrivacyLaw",
    "42CFRPart2",
    "CommonRule",
    "HIPAANOPP",
    "HIPAAPsyNotes",
    "HIPAASelfPay",
    "Title38Section7332"
];

export const SecuritylabelsValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
        concept: [
            {
                code: "U",
                display: ""
            },
            {
                code: "L",
                display: ""
            },
            {
                code: "M",
                display: ""
            },
            {
                code: "N",
                display: ""
            },
            {
                code: "R",
                display: ""
            },
            {
                code: "V",
                display: ""
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        concept: [
            {
                code: "COVERAGE",
                display: ""
            },
            {
                code: "ETREAT",
                display: ""
            },
            {
                code: "HMARKT",
                display: ""
            },
            {
                code: "HOPERAT",
                display: ""
            },
            {
                code: "HPAYMT",
                display: ""
            },
            {
                code: "HRESCH",
                display: ""
            },
            {
                code: "PATRQT",
                display: ""
            },
            {
                code: "PUBHLTH",
                display: ""
            },
            {
                code: "TREAT",
                display: ""
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActUSPrivacyLaw",
        concept: [
            {
                code: "_ActUSPrivacyLaw",
                display: "ActUSPrivacyLaw"
            },
            {
                code: "42CFRPart2",
                display: "42 CFR Part2"
            },
            {
                code: "CommonRule",
                display: "Common Rule"
            },
            {
                code: "HIPAANOPP",
                display: "HIPAA notice of privacy practices"
            },
            {
                code: "HIPAAPsyNotes",
                display: "HIPAA psychotherapy notes"
            },
            {
                code: "HIPAASelfPay",
                display: "HIPAA self-pay"
            },
            {
                code: "Title38Section7332",
                display: "Title 38 Section 7332"
            }
        ]
    }
];

export default Securitylabels;
