/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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
    | "_InformationSensitivityPolicy"
    | "COMPT"
    | "_SECINTOBV"
    | "SecurityPolicy"
    | "ObligationPolicy"
    | "RefrainPolicy"
    | "PurposeOfUse"
    | "COVERAGE"
    | "ETREAT"
    | "HMARKT"
    | "HOPERAT"
    | "HPAYMT"
    | "HRESCH"
    | "PATRQT"
    | "PUBHLTH"
    | "TREAT"
    | "42CFRPart2"
    | "CommonRule"
    | "HIPAANOPP"
    | "HIPAAPsyNotes"
    | "HIPAASelfPay"
    | "Title38Section7332"
    | "_ActUSPrivacyLaw";

const Securitylabels: t.Type<Securitylabels> = t.union(
    [
        t.literal("U"),
        t.literal("L"),
        t.literal("M"),
        t.literal("N"),
        t.literal("R"),
        t.literal("V"),
        t.literal("_InformationSensitivityPolicy"),
        t.literal("COMPT"),
        t.literal("_SECINTOBV"),
        t.literal("SecurityPolicy"),
        t.literal("ObligationPolicy"),
        t.literal("RefrainPolicy"),
        t.literal("PurposeOfUse"),
        t.literal("COVERAGE"),
        t.literal("ETREAT"),
        t.literal("HMARKT"),
        t.literal("HOPERAT"),
        t.literal("HPAYMT"),
        t.literal("HRESCH"),
        t.literal("PATRQT"),
        t.literal("PUBHLTH"),
        t.literal("TREAT"),
        t.literal("42CFRPart2"),
        t.literal("CommonRule"),
        t.literal("HIPAANOPP"),
        t.literal("HIPAAPsyNotes"),
        t.literal("HIPAASelfPay"),
        t.literal("Title38Section7332"),
        t.literal("_ActUSPrivacyLaw")
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
    "_InformationSensitivityPolicy",
    "COMPT",
    "_SECINTOBV",
    "SecurityPolicy",
    "ObligationPolicy",
    "RefrainPolicy",
    "PurposeOfUse",
    "COVERAGE",
    "ETREAT",
    "HMARKT",
    "HOPERAT",
    "HPAYMT",
    "HRESCH",
    "PATRQT",
    "PUBHLTH",
    "TREAT",
    "42CFRPart2",
    "CommonRule",
    "HIPAANOPP",
    "HIPAAPsyNotes",
    "HIPAASelfPay",
    "Title38Section7332",
    "_ActUSPrivacyLaw"
];

export const SecuritylabelsValueSet: ValueSet = [
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    },
    {
        system: "undefined",
        concept: []
    }
];

export default Securitylabels;
