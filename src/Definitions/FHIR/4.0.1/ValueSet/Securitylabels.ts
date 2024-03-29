/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2022 under one
 *  or more contributor license agreements. See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership. The KBV licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License. You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

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

type SecuritylabelsType = t.KeyofC<{
    U: null;
    L: null;
    M: null;
    N: null;
    R: null;
    V: null;
    COVERAGE: null;
    ETREAT: null;
    HMARKT: null;
    HOPERAT: null;
    HPAYMT: null;
    HRESCH: null;
    PATRQT: null;
    PUBHLTH: null;
    TREAT: null;
    _ActUSPrivacyLaw: null;
    "42CFRPart2": null;
    CommonRule: null;
    HIPAANOPP: null;
    HIPAAPsyNotes: null;
    HIPAASelfPay: null;
    Title38Section7332: null;
}>;

const Securitylabels: SecuritylabelsType = t.keyof({
    U: null,
    L: null,
    M: null,
    N: null,
    R: null,
    V: null,
    COVERAGE: null,
    ETREAT: null,
    HMARKT: null,
    HOPERAT: null,
    HPAYMT: null,
    HRESCH: null,
    PATRQT: null,
    PUBHLTH: null,
    TREAT: null,
    _ActUSPrivacyLaw: null,
    "42CFRPart2": null,
    CommonRule: null,
    HIPAANOPP: null,
    HIPAAPsyNotes: null,
    HIPAASelfPay: null,
    Title38Section7332: null
});
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
