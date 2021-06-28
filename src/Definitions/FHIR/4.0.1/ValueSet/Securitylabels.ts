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
    | "_ActInformationSensitivityPolicy"
    | "ETH"
    | "GDIS"
    | "HIV"
    | "MST"
    | "SCA"
    | "SDV"
    | "SEX"
    | "SPI"
    | "BH"
    | "COGN"
    | "DVD"
    | "EMOTDIS"
    | "MH"
    | "PSY"
    | "PSYTHPN"
    | "SUD"
    | "ETHUD"
    | "OPIOIDUD"
    | "STD"
    | "TBOO"
    | "VIO"
    | "SICKLE"
    | "_EntitySensitivityPolicyType"
    | "DEMO"
    | "DOB"
    | "GENDER"
    | "LIVARG"
    | "MARST"
    | "RACE"
    | "REL"
    | "_RoleInformationSensitivityPolicy"
    | "B"
    | "EMPL"
    | "LOCIS"
    | "SSP"
    | "ADOL"
    | "CEL"
    | "DIA"
    | "DRGIS"
    | "EMP"
    | "PDS"
    | "PHY"
    | "PRS"
    | "ACOCOMPT"
    | "CTCOMPT"
    | "FMCOMPT"
    | "HRCOMPT"
    | "LRCOMPT"
    | "PACOMPT"
    | "RESCOMPT"
    | "RMGTCOMPT"
    | "_SECALTINTOBV"
    | "ABSTRED"
    | "AGGRED"
    | "ANONYED"
    | "MAPPED"
    | "MASKED"
    | "PSEUDED"
    | "REDACTED"
    | "SUBSETTED"
    | "SYNTAC"
    | "TRSLT"
    | "VERSIONED"
    | "_SECDATINTOBV"
    | "CRYTOHASH"
    | "DIGSIG"
    | "_SECINTCONOBV"
    | "HRELIABLE"
    | "RELIABLE"
    | "UNCERTREL"
    | "UNRELIABLE"
    | "_SECINTPRVOBV"
    | "_SECINTPRVABOBV"
    | "CLINAST"
    | "DEVAST"
    | "HCPAST"
    | "PACQAST"
    | "PATAST"
    | "PAYAST"
    | "PROAST"
    | "SDMAST"
    | "_SECINTPRVRBOBV"
    | "CLINRPT"
    | "DEVRPT"
    | "HCPRPT"
    | "PACQRPT"
    | "PATRPT"
    | "PAYRPT"
    | "PRORPT"
    | "SDMRPT"
    | "AUTHPOL"
    | "ACCESSCONSCHEME"
    | "DELEPOL"
    | "ObligationPolicy"
    | "ANONY"
    | "AOD"
    | "AUDIT"
    | "AUDTR"
    | "CPLYCC"
    | "CPLYCD"
    | "CPLYJPP"
    | "CPLYOPP"
    | "CPLYOSP"
    | "CPLYPOL"
    | "DECLASSIFYLABEL"
    | "DEID"
    | "DELAU"
    | "DOWNGRDLABEL"
    | "DRIVLABEL"
    | "ENCRYPT"
    | "ENCRYPTR"
    | "ENCRYPTT"
    | "ENCRYPTU"
    | "HUAPRV"
    | "LABEL"
    | "MASK"
    | "MINEC"
    | "PERSISTLABEL"
    | "PRIVMARK"
    | "PSEUD"
    | "REDACT"
    | "UPGRDLABEL"
    | "RefrainPolicy"
    | "NOAUTH"
    | "NOCOLLECT"
    | "NODSCLCD"
    | "NODSCLCDS"
    | "NOINTEGRATE"
    | "NOLIST"
    | "NOMOU"
    | "NOORGPOL"
    | "NOPAT"
    | "NOPERSISTP"
    | "NORDSCLCD"
    | "NORDSCLCDS"
    | "NORDSCLW"
    | "NORELINK"
    | "NOREUSE"
    | "NOVIP"
    | "ORCON"
    | "HMARKT"
    | "HOPERAT"
    | "CAREMGT"
    | "DONAT"
    | "FRAUD"
    | "GOV"
    | "HACCRED"
    | "HCOMPL"
    | "HDECD"
    | "HDIRECT"
    | "HDM"
    | "HLEGAL"
    | "HOUTCOMS"
    | "HPRGRP"
    | "HQUALIMP"
    | "HSYSADMIN"
    | "LABELING"
    | "METAMGT"
    | "MEMADMIN"
    | "MILCDM"
    | "PATADMIN"
    | "PATSFTY"
    | "PERFMSR"
    | "RECORDMGT"
    | "SYSDEV"
    | "HTEST"
    | "TRAIN"
    | "HPAYMT"
    | "CLMATTCH"
    | "COVAUTH"
    | "COVERAGE"
    | "ELIGDTRM"
    | "ELIGVER"
    | "ENROLLM"
    | "MILDCRG"
    | "REMITADV"
    | "HRESCH"
    | "BIORCH"
    | "CLINTRCH"
    | "CLINTRCHNPC"
    | "CLINTRCHPC"
    | "PRECLINTRCH"
    | "DSRCH"
    | "POARCH"
    | "TRANSRCH"
    | "PATRQT"
    | "FAMRQT"
    | "PWATRNY"
    | "SUPNWK"
    | "PUBHLTH"
    | "DISASTER"
    | "THREAT"
    | "TREAT"
    | "CLINTRL"
    | "COC"
    | "ETREAT"
    | "BTG"
    | "ERTREAT"
    | "POPHLTH"
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
        t.literal("_ActInformationSensitivityPolicy"),
        t.literal("ETH"),
        t.literal("GDIS"),
        t.literal("HIV"),
        t.literal("MST"),
        t.literal("SCA"),
        t.literal("SDV"),
        t.literal("SEX"),
        t.literal("SPI"),
        t.literal("BH"),
        t.literal("COGN"),
        t.literal("DVD"),
        t.literal("EMOTDIS"),
        t.literal("MH"),
        t.literal("PSY"),
        t.literal("PSYTHPN"),
        t.literal("SUD"),
        t.literal("ETHUD"),
        t.literal("OPIOIDUD"),
        t.literal("STD"),
        t.literal("TBOO"),
        t.literal("VIO"),
        t.literal("SICKLE"),
        t.literal("_EntitySensitivityPolicyType"),
        t.literal("DEMO"),
        t.literal("DOB"),
        t.literal("GENDER"),
        t.literal("LIVARG"),
        t.literal("MARST"),
        t.literal("RACE"),
        t.literal("REL"),
        t.literal("_RoleInformationSensitivityPolicy"),
        t.literal("B"),
        t.literal("EMPL"),
        t.literal("LOCIS"),
        t.literal("SSP"),
        t.literal("ADOL"),
        t.literal("CEL"),
        t.literal("DIA"),
        t.literal("DRGIS"),
        t.literal("EMP"),
        t.literal("PDS"),
        t.literal("PHY"),
        t.literal("PRS"),
        t.literal("ACOCOMPT"),
        t.literal("CTCOMPT"),
        t.literal("FMCOMPT"),
        t.literal("HRCOMPT"),
        t.literal("LRCOMPT"),
        t.literal("PACOMPT"),
        t.literal("RESCOMPT"),
        t.literal("RMGTCOMPT"),
        t.literal("_SECALTINTOBV"),
        t.literal("ABSTRED"),
        t.literal("AGGRED"),
        t.literal("ANONYED"),
        t.literal("MAPPED"),
        t.literal("MASKED"),
        t.literal("PSEUDED"),
        t.literal("REDACTED"),
        t.literal("SUBSETTED"),
        t.literal("SYNTAC"),
        t.literal("TRSLT"),
        t.literal("VERSIONED"),
        t.literal("_SECDATINTOBV"),
        t.literal("CRYTOHASH"),
        t.literal("DIGSIG"),
        t.literal("_SECINTCONOBV"),
        t.literal("HRELIABLE"),
        t.literal("RELIABLE"),
        t.literal("UNCERTREL"),
        t.literal("UNRELIABLE"),
        t.literal("_SECINTPRVOBV"),
        t.literal("_SECINTPRVABOBV"),
        t.literal("CLINAST"),
        t.literal("DEVAST"),
        t.literal("HCPAST"),
        t.literal("PACQAST"),
        t.literal("PATAST"),
        t.literal("PAYAST"),
        t.literal("PROAST"),
        t.literal("SDMAST"),
        t.literal("_SECINTPRVRBOBV"),
        t.literal("CLINRPT"),
        t.literal("DEVRPT"),
        t.literal("HCPRPT"),
        t.literal("PACQRPT"),
        t.literal("PATRPT"),
        t.literal("PAYRPT"),
        t.literal("PRORPT"),
        t.literal("SDMRPT"),
        t.literal("AUTHPOL"),
        t.literal("ACCESSCONSCHEME"),
        t.literal("DELEPOL"),
        t.literal("ObligationPolicy"),
        t.literal("ANONY"),
        t.literal("AOD"),
        t.literal("AUDIT"),
        t.literal("AUDTR"),
        t.literal("CPLYCC"),
        t.literal("CPLYCD"),
        t.literal("CPLYJPP"),
        t.literal("CPLYOPP"),
        t.literal("CPLYOSP"),
        t.literal("CPLYPOL"),
        t.literal("DECLASSIFYLABEL"),
        t.literal("DEID"),
        t.literal("DELAU"),
        t.literal("DOWNGRDLABEL"),
        t.literal("DRIVLABEL"),
        t.literal("ENCRYPT"),
        t.literal("ENCRYPTR"),
        t.literal("ENCRYPTT"),
        t.literal("ENCRYPTU"),
        t.literal("HUAPRV"),
        t.literal("LABEL"),
        t.literal("MASK"),
        t.literal("MINEC"),
        t.literal("PERSISTLABEL"),
        t.literal("PRIVMARK"),
        t.literal("PSEUD"),
        t.literal("REDACT"),
        t.literal("UPGRDLABEL"),
        t.literal("RefrainPolicy"),
        t.literal("NOAUTH"),
        t.literal("NOCOLLECT"),
        t.literal("NODSCLCD"),
        t.literal("NODSCLCDS"),
        t.literal("NOINTEGRATE"),
        t.literal("NOLIST"),
        t.literal("NOMOU"),
        t.literal("NOORGPOL"),
        t.literal("NOPAT"),
        t.literal("NOPERSISTP"),
        t.literal("NORDSCLCD"),
        t.literal("NORDSCLCDS"),
        t.literal("NORDSCLW"),
        t.literal("NORELINK"),
        t.literal("NOREUSE"),
        t.literal("NOVIP"),
        t.literal("ORCON"),
        t.literal("HMARKT"),
        t.literal("HOPERAT"),
        t.literal("CAREMGT"),
        t.literal("DONAT"),
        t.literal("FRAUD"),
        t.literal("GOV"),
        t.literal("HACCRED"),
        t.literal("HCOMPL"),
        t.literal("HDECD"),
        t.literal("HDIRECT"),
        t.literal("HDM"),
        t.literal("HLEGAL"),
        t.literal("HOUTCOMS"),
        t.literal("HPRGRP"),
        t.literal("HQUALIMP"),
        t.literal("HSYSADMIN"),
        t.literal("LABELING"),
        t.literal("METAMGT"),
        t.literal("MEMADMIN"),
        t.literal("MILCDM"),
        t.literal("PATADMIN"),
        t.literal("PATSFTY"),
        t.literal("PERFMSR"),
        t.literal("RECORDMGT"),
        t.literal("SYSDEV"),
        t.literal("HTEST"),
        t.literal("TRAIN"),
        t.literal("HPAYMT"),
        t.literal("CLMATTCH"),
        t.literal("COVAUTH"),
        t.literal("COVERAGE"),
        t.literal("ELIGDTRM"),
        t.literal("ELIGVER"),
        t.literal("ENROLLM"),
        t.literal("MILDCRG"),
        t.literal("REMITADV"),
        t.literal("HRESCH"),
        t.literal("BIORCH"),
        t.literal("CLINTRCH"),
        t.literal("CLINTRCHNPC"),
        t.literal("CLINTRCHPC"),
        t.literal("PRECLINTRCH"),
        t.literal("DSRCH"),
        t.literal("POARCH"),
        t.literal("TRANSRCH"),
        t.literal("PATRQT"),
        t.literal("FAMRQT"),
        t.literal("PWATRNY"),
        t.literal("SUPNWK"),
        t.literal("PUBHLTH"),
        t.literal("DISASTER"),
        t.literal("THREAT"),
        t.literal("TREAT"),
        t.literal("CLINTRL"),
        t.literal("COC"),
        t.literal("ETREAT"),
        t.literal("BTG"),
        t.literal("ERTREAT"),
        t.literal("POPHLTH"),
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
    "_ActInformationSensitivityPolicy",
    "ETH",
    "GDIS",
    "HIV",
    "MST",
    "SCA",
    "SDV",
    "SEX",
    "SPI",
    "BH",
    "COGN",
    "DVD",
    "EMOTDIS",
    "MH",
    "PSY",
    "PSYTHPN",
    "SUD",
    "ETHUD",
    "OPIOIDUD",
    "STD",
    "TBOO",
    "VIO",
    "SICKLE",
    "_EntitySensitivityPolicyType",
    "DEMO",
    "DOB",
    "GENDER",
    "LIVARG",
    "MARST",
    "RACE",
    "REL",
    "_RoleInformationSensitivityPolicy",
    "B",
    "EMPL",
    "LOCIS",
    "SSP",
    "ADOL",
    "CEL",
    "DIA",
    "DRGIS",
    "EMP",
    "PDS",
    "PHY",
    "PRS",
    "ACOCOMPT",
    "CTCOMPT",
    "FMCOMPT",
    "HRCOMPT",
    "LRCOMPT",
    "PACOMPT",
    "RESCOMPT",
    "RMGTCOMPT",
    "_SECALTINTOBV",
    "ABSTRED",
    "AGGRED",
    "ANONYED",
    "MAPPED",
    "MASKED",
    "PSEUDED",
    "REDACTED",
    "SUBSETTED",
    "SYNTAC",
    "TRSLT",
    "VERSIONED",
    "_SECDATINTOBV",
    "CRYTOHASH",
    "DIGSIG",
    "_SECINTCONOBV",
    "HRELIABLE",
    "RELIABLE",
    "UNCERTREL",
    "UNRELIABLE",
    "_SECINTPRVOBV",
    "_SECINTPRVABOBV",
    "CLINAST",
    "DEVAST",
    "HCPAST",
    "PACQAST",
    "PATAST",
    "PAYAST",
    "PROAST",
    "SDMAST",
    "_SECINTPRVRBOBV",
    "CLINRPT",
    "DEVRPT",
    "HCPRPT",
    "PACQRPT",
    "PATRPT",
    "PAYRPT",
    "PRORPT",
    "SDMRPT",
    "AUTHPOL",
    "ACCESSCONSCHEME",
    "DELEPOL",
    "ObligationPolicy",
    "ANONY",
    "AOD",
    "AUDIT",
    "AUDTR",
    "CPLYCC",
    "CPLYCD",
    "CPLYJPP",
    "CPLYOPP",
    "CPLYOSP",
    "CPLYPOL",
    "DECLASSIFYLABEL",
    "DEID",
    "DELAU",
    "DOWNGRDLABEL",
    "DRIVLABEL",
    "ENCRYPT",
    "ENCRYPTR",
    "ENCRYPTT",
    "ENCRYPTU",
    "HUAPRV",
    "LABEL",
    "MASK",
    "MINEC",
    "PERSISTLABEL",
    "PRIVMARK",
    "PSEUD",
    "REDACT",
    "UPGRDLABEL",
    "RefrainPolicy",
    "NOAUTH",
    "NOCOLLECT",
    "NODSCLCD",
    "NODSCLCDS",
    "NOINTEGRATE",
    "NOLIST",
    "NOMOU",
    "NOORGPOL",
    "NOPAT",
    "NOPERSISTP",
    "NORDSCLCD",
    "NORDSCLCDS",
    "NORDSCLW",
    "NORELINK",
    "NOREUSE",
    "NOVIP",
    "ORCON",
    "HMARKT",
    "HOPERAT",
    "CAREMGT",
    "DONAT",
    "FRAUD",
    "GOV",
    "HACCRED",
    "HCOMPL",
    "HDECD",
    "HDIRECT",
    "HDM",
    "HLEGAL",
    "HOUTCOMS",
    "HPRGRP",
    "HQUALIMP",
    "HSYSADMIN",
    "LABELING",
    "METAMGT",
    "MEMADMIN",
    "MILCDM",
    "PATADMIN",
    "PATSFTY",
    "PERFMSR",
    "RECORDMGT",
    "SYSDEV",
    "HTEST",
    "TRAIN",
    "HPAYMT",
    "CLMATTCH",
    "COVAUTH",
    "COVERAGE",
    "ELIGDTRM",
    "ELIGVER",
    "ENROLLM",
    "MILDCRG",
    "REMITADV",
    "HRESCH",
    "BIORCH",
    "CLINTRCH",
    "CLINTRCHNPC",
    "CLINTRCHPC",
    "PRECLINTRCH",
    "DSRCH",
    "POARCH",
    "TRANSRCH",
    "PATRQT",
    "FAMRQT",
    "PWATRNY",
    "SUPNWK",
    "PUBHLTH",
    "DISASTER",
    "THREAT",
    "TREAT",
    "CLINTRL",
    "COC",
    "ETREAT",
    "BTG",
    "ERTREAT",
    "POPHLTH",
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
            { code: "U", display: "" },
            { code: "L", display: "" },
            { code: "M", display: "" },
            { code: "N", display: "" },
            { code: "R", display: "" },
            { code: "V", display: "" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        concept: [
            { code: "ETH", display: "substance abuse information sensitivity" },
            { code: "GDIS", display: "genetic disease information sensitivity" },
            { code: "HIV", display: "HIV/AIDS information sensitivity" },
            { code: "MST", display: "military sexual trauma information sensitivity" },
            { code: "SCA", display: "sickle cell anemia information sensitivity" },
            {
                code: "SDV",
                display:
                    "sexual assault, abuse, or domestic violence information sensitivity"
            },
            {
                code: "SEX",
                display: "sexuality and reproductive health information sensitivity"
            },
            { code: "COGN", display: "cognitive disability information sensitivity" },
            { code: "DVD", display: "developmental disability information sensitivity" },
            { code: "EMOTDIS", display: "emotional disturbance information sensitivity" },
            { code: "MH", display: "mental health information sensitivity" },
            { code: "PSY", display: "psychiatry disorder information sensitivity" },
            { code: "PSYTHPN", display: "psychotherapy note information sensitivity" },
            { code: "ETHUD", display: "alcohol use disorder information sensitivity" },
            { code: "OPIOIDUD", display: "opioid use disorder information sensitivity" },
            {
                code: "STD",
                display: "sexually transmitted disease information sensitivity"
            },
            { code: "TBOO", display: "taboo" },
            { code: "VIO", display: "violence information sensitivity" },
            { code: "SICKLE", display: "sickle cell" },
            { code: "DEMO", display: "all demographic information sensitivity" },
            { code: "DOB", display: "date of birth information sensitivity" },
            {
                code: "GENDER",
                display: "gender and sexual orientation information sensitivity"
            },
            { code: "LIVARG", display: "living arrangement information sensitivity" },
            { code: "MARST", display: "marital status information sensitivity" },
            { code: "RACE", display: "race information sensitivity" },
            { code: "REL", display: "religion information sensitivity" },
            { code: "B", display: "business information sensitivity" },
            { code: "EMPL", display: "employer information sensitivity" },
            { code: "LOCIS", display: "location information sensitivity" },
            {
                code: "SSP",
                display: "sensitive service provider information sensitivity"
            },
            { code: "ADOL", display: "adolescent information sensitivity" },
            { code: "CEL", display: "celebrity information sensitivity" },
            { code: "DIA", display: "diagnosis information sensitivity" },
            { code: "DRGIS", display: "drug information sensitivity" },
            { code: "EMP", display: "employee information sensitivity" },
            { code: "PDS", display: "patient default information sensitivity" },
            { code: "PHY", display: "physician requested information sensitivity" },
            { code: "PRS", display: "patient requested information sensitivity" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        concept: [
            { code: "ACOCOMPT", display: "accountable care organization compartment" },
            { code: "CTCOMPT", display: "care team compartment" },
            { code: "FMCOMPT", display: "financial management compartment" },
            { code: "HRCOMPT", display: "human resource compartment" },
            { code: "LRCOMPT", display: "legitimate relationship compartment" },
            { code: "PACOMPT", display: "patient administration compartment" },
            { code: "RESCOMPT", display: "research project compartment" },
            { code: "RMGTCOMPT", display: "records management compartment" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue",
        concept: [
            { code: "ABSTRED", display: "abstracted" },
            { code: "AGGRED", display: "aggregated" },
            { code: "ANONYED", display: "anonymized" },
            { code: "MAPPED", display: "mapped" },
            { code: "MASKED", display: "masked" },
            { code: "PSEUDED", display: "pseudonymized" },
            { code: "REDACTED", display: "redacted" },
            { code: "SUBSETTED", display: "subsetted" },
            { code: "SYNTAC", display: "syntactic transform" },
            { code: "TRSLT", display: "translated" },
            { code: "VERSIONED", display: "versioned" },
            { code: "CRYTOHASH", display: "cryptographic hash function" },
            { code: "DIGSIG", display: "digital signature" },
            { code: "HRELIABLE", display: "highly reliable" },
            { code: "RELIABLE", display: "reliable" },
            { code: "UNCERTREL", display: "uncertain reliability" },
            { code: "UNRELIABLE", display: "unreliable" },
            { code: "CLINAST", display: "clinician asserted" },
            { code: "DEVAST", display: "device asserted" },
            { code: "HCPAST", display: "healthcare professional asserted" },
            { code: "PACQAST", display: "patient acquaintance asserted" },
            { code: "PATAST", display: "patient asserted" },
            { code: "PAYAST", display: "payer asserted" },
            { code: "PROAST", display: "professional asserted" },
            { code: "SDMAST", display: "substitute decision maker asserted" },
            { code: "CLINRPT", display: "clinician reported" },
            { code: "DEVRPT", display: "device reported" },
            { code: "HCPRPT", display: "healthcare professional reported" },
            { code: "PACQRPT", display: "patient acquaintance reported" },
            { code: "PATRPT", display: "patient reported" },
            { code: "PAYRPT", display: "payer reported" },
            { code: "PRORPT", display: "professional reported" },
            { code: "SDMRPT", display: "substitute decision maker reported" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        concept: [
            { code: "ACCESSCONSCHEME", display: "access control scheme" },
            { code: "DELEPOL", display: "delegation policy" },
            { code: "ANONY", display: "anonymize" },
            { code: "AOD", display: "accounting of disclosure" },
            { code: "AUDIT", display: "audit" },
            { code: "AUDTR", display: "audit trail" },
            { code: "CPLYCC", display: "comply with confidentiality code" },
            { code: "CPLYCD", display: "comply with consent directive" },
            { code: "CPLYJPP", display: "comply with jurisdictional privacy policy" },
            { code: "CPLYOPP", display: "comply with organizational privacy policy" },
            { code: "CPLYOSP", display: "comply with organizational security policy" },
            { code: "CPLYPOL", display: "comply with policy" },
            { code: "DECLASSIFYLABEL", display: "declassify security label" },
            { code: "DEID", display: "deidentify" },
            { code: "DELAU", display: "delete after use" },
            { code: "DOWNGRDLABEL", display: "downgrade security label" },
            { code: "DRIVLABEL", display: "derive security label" },
            { code: "ENCRYPTR", display: "encrypt at rest" },
            { code: "ENCRYPTT", display: "encrypt in transit" },
            { code: "ENCRYPTU", display: "encrypt in use" },
            { code: "HUAPRV", display: "human approval" },
            { code: "LABEL", display: "assign security label" },
            { code: "MASK", display: "mask" },
            { code: "MINEC", display: "minimum necessary" },
            { code: "PERSISTLABEL", display: "persist security label" },
            { code: "PRIVMARK", display: "privacy mark" },
            { code: "PSEUD", display: "pseudonymize" },
            { code: "REDACT", display: "redact" },
            { code: "UPGRDLABEL", display: "upgrade security label" },
            { code: "NOAUTH", display: "no disclosure without subject authorization" },
            { code: "NOCOLLECT", display: "no collection" },
            { code: "NODSCLCD", display: "no disclosure without consent directive" },
            {
                code: "NODSCLCDS",
                display: "no disclosure without information subject's consent directive"
            },
            { code: "NOINTEGRATE", display: "no integration" },
            { code: "NOLIST", display: "no unlisted entity disclosure" },
            { code: "NOMOU", display: "no disclosure without MOU" },
            {
                code: "NOORGPOL",
                display: "no disclosure without organizational authorization"
            },
            {
                code: "NOPAT",
                display:
                    "no disclosure to patient, family or caregivers without attending provider's authorization"
            },
            { code: "NOPERSISTP", display: "no collection beyond purpose of use" },
            { code: "NORDSCLCD", display: "no redisclosure without consent directive" },
            {
                code: "NORDSCLCDS",
                display: "no redisclosure without information subject's consent directive"
            },
            {
                code: "NORDSCLW",
                display: "no disclosure without jurisdictional authorization"
            },
            { code: "NORELINK", display: "no relinking" },
            { code: "NOREUSE", display: "no reuse beyond purpose of use" },
            { code: "NOVIP", display: "no unauthorized VIP disclosure" },
            { code: "ORCON", display: "no disclosure without originator authorization" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        concept: [
            { code: "ANONY", display: "anonymize" },
            { code: "AOD", display: "accounting of disclosure" },
            { code: "AUDIT", display: "audit" },
            { code: "AUDTR", display: "audit trail" },
            { code: "CPLYCC", display: "comply with confidentiality code" },
            { code: "CPLYCD", display: "comply with consent directive" },
            { code: "CPLYJPP", display: "comply with jurisdictional privacy policy" },
            { code: "CPLYOPP", display: "comply with organizational privacy policy" },
            { code: "CPLYOSP", display: "comply with organizational security policy" },
            { code: "CPLYPOL", display: "comply with policy" },
            { code: "DECLASSIFYLABEL", display: "declassify security label" },
            { code: "DEID", display: "deidentify" },
            { code: "DELAU", display: "delete after use" },
            { code: "DOWNGRDLABEL", display: "downgrade security label" },
            { code: "DRIVLABEL", display: "derive security label" },
            { code: "ENCRYPTR", display: "encrypt at rest" },
            { code: "ENCRYPTT", display: "encrypt in transit" },
            { code: "ENCRYPTU", display: "encrypt in use" },
            { code: "HUAPRV", display: "human approval" },
            { code: "LABEL", display: "assign security label" },
            { code: "MASK", display: "mask" },
            { code: "MINEC", display: "minimum necessary" },
            { code: "PERSISTLABEL", display: "persist security label" },
            { code: "PRIVMARK", display: "privacy mark" },
            { code: "PSEUD", display: "pseudonymize" },
            { code: "REDACT", display: "redact" },
            { code: "UPGRDLABEL", display: "upgrade security label" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        concept: [
            { code: "NOAUTH", display: "no disclosure without subject authorization" },
            { code: "NOCOLLECT", display: "no collection" },
            { code: "NODSCLCD", display: "no disclosure without consent directive" },
            {
                code: "NODSCLCDS",
                display: "no disclosure without information subject's consent directive"
            },
            { code: "NOINTEGRATE", display: "no integration" },
            { code: "NOLIST", display: "no unlisted entity disclosure" },
            { code: "NOMOU", display: "no disclosure without MOU" },
            {
                code: "NOORGPOL",
                display: "no disclosure without organizational authorization"
            },
            {
                code: "NOPAT",
                display:
                    "no disclosure to patient, family or caregivers without attending provider's authorization"
            },
            { code: "NOPERSISTP", display: "no collection beyond purpose of use" },
            { code: "NORDSCLCD", display: "no redisclosure without consent directive" },
            {
                code: "NORDSCLCDS",
                display: "no redisclosure without information subject's consent directive"
            },
            {
                code: "NORDSCLW",
                display: "no disclosure without jurisdictional authorization"
            },
            { code: "NORELINK", display: "no relinking" },
            { code: "NOREUSE", display: "no reuse beyond purpose of use" },
            { code: "NOVIP", display: "no unauthorized VIP disclosure" },
            { code: "ORCON", display: "no disclosure without originator authorization" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        concept: [
            { code: "HMARKT", display: "healthcare marketing" },
            { code: "CAREMGT", display: "care management" },
            { code: "DONAT", display: "donation" },
            { code: "FRAUD", display: "fraud" },
            { code: "GOV", display: "government" },
            { code: "HACCRED", display: "health accreditation" },
            { code: "HCOMPL", display: "health compliance" },
            { code: "HDECD", display: "decedent" },
            { code: "HDIRECT", display: "directory" },
            { code: "HDM", display: "healthcare delivery management" },
            { code: "HLEGAL", display: "legal" },
            { code: "HOUTCOMS", display: "health outcome measure" },
            { code: "HPRGRP", display: "health program reporting" },
            { code: "HQUALIMP", display: "health quality improvement" },
            { code: "LABELING", display: "labeling" },
            { code: "METAMGT", display: "metadata management" },
            { code: "MEMADMIN", display: "member administration" },
            { code: "MILCDM", display: "military command" },
            { code: "PATADMIN", display: "patient administration" },
            { code: "PATSFTY", display: "patient safety" },
            { code: "PERFMSR", display: "performance measure" },
            { code: "RECORDMGT", display: "records management" },
            { code: "HTEST", display: "test health data" },
            { code: "TRAIN", display: "training" },
            { code: "CLMATTCH", display: "claim attachment" },
            { code: "COVAUTH", display: "coverage authorization" },
            { code: "ELIGDTRM", display: "eligibility determination" },
            { code: "ELIGVER", display: "eligibility verification" },
            { code: "ENROLLM", display: "enrollment" },
            { code: "MILDCRG", display: "military discharge" },
            { code: "REMITADV", display: "remittance advice" },
            { code: "BIORCH", display: "biomedical research" },
            {
                code: "CLINTRCHNPC",
                display: "clinical trial research without patient care"
            },
            { code: "CLINTRCHPC", display: "clinical trial research with patient care" },
            { code: "PRECLINTRCH", display: "preclinical trial research" },
            { code: "DSRCH", display: "disease specific healthcare research" },
            {
                code: "POARCH",
                display: "population origins or ancestry healthcare research"
            },
            { code: "TRANSRCH", display: "translational healthcare research" },
            { code: "FAMRQT", display: "family requested" },
            { code: "PWATRNY", display: "power of attorney" },
            { code: "SUPNWK", display: "support network" },
            { code: "DISASTER", display: "disaster" },
            { code: "THREAT", display: "threat" },
            { code: "CLINTRL", display: "clinical trial" },
            { code: "COC", display: "coordination of care" },
            { code: "BTG", display: "break the glass" },
            { code: "ERTREAT", display: "emergency room treatment" },
            { code: "POPHLTH", display: "population health" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        concept: [
            { code: "COVERAGE", display: "" },
            { code: "ETREAT", display: "" },
            { code: "HMARKT", display: "" },
            { code: "HOPERAT", display: "" },
            { code: "HPAYMT", display: "" },
            { code: "HRESCH", display: "" },
            { code: "PATRQT", display: "" },
            { code: "PUBHLTH", display: "" },
            { code: "TREAT", display: "" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActUSPrivacyLaw",
        concept: [
            { code: "42CFRPart2", display: "42 CFR Part2" },
            { code: "CommonRule", display: "Common Rule" },
            { code: "HIPAANOPP", display: "HIPAA notice of privacy practices" },
            { code: "HIPAAPsyNotes", display: "HIPAA psychotherapy notes" },
            { code: "HIPAASelfPay", display: "HIPAA self-pay" },
            { code: "Title38Section7332", display: "Title 38 Section 7332" }
        ]
    }
];

export default Securitylabels;
