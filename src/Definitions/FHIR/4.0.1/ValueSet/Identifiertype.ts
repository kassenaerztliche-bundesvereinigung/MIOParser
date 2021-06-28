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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/identifier-type

type Identifiertype =
    | "DL"
    | "PPN"
    | "BRN"
    | "MR"
    | "MCN"
    | "EN"
    | "TAX"
    | "NIIP"
    | "PRN"
    | "MD"
    | "DR"
    | "ACSN"
    | "UDI"
    | "SNO"
    | "SB"
    | "PLAC"
    | "FILL"
    | "JHN";

const Identifiertype: t.Type<Identifiertype> = t.union(
    [
        t.literal("DL"),
        t.literal("PPN"),
        t.literal("BRN"),
        t.literal("MR"),
        t.literal("MCN"),
        t.literal("EN"),
        t.literal("TAX"),
        t.literal("NIIP"),
        t.literal("PRN"),
        t.literal("MD"),
        t.literal("DR"),
        t.literal("ACSN"),
        t.literal("UDI"),
        t.literal("SNO"),
        t.literal("SB"),
        t.literal("PLAC"),
        t.literal("FILL"),
        t.literal("JHN")
    ],
    "Identifiertype"
);

export const IdentifiertypeArray: string[] = [
    "DL",
    "PPN",
    "BRN",
    "MR",
    "MCN",
    "EN",
    "TAX",
    "NIIP",
    "PRN",
    "MD",
    "DR",
    "ACSN",
    "UDI",
    "SNO",
    "SB",
    "PLAC",
    "FILL",
    "JHN"
];

export const IdentifiertypeValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v2-0203",
        concept: [
            {
                code: "DL",
                display: "undefined"
            },
            {
                code: "PPN",
                display: "undefined"
            },
            {
                code: "BRN",
                display: "undefined"
            },
            {
                code: "MR",
                display: "undefined"
            },
            {
                code: "MCN",
                display: "undefined"
            },
            {
                code: "EN",
                display: "undefined"
            },
            {
                code: "TAX",
                display: "undefined"
            },
            {
                code: "NIIP",
                display: "undefined"
            },
            {
                code: "PRN",
                display: "undefined"
            },
            {
                code: "MD",
                display: "undefined"
            },
            {
                code: "DR",
                display: "undefined"
            },
            {
                code: "ACSN",
                display: "undefined"
            },
            {
                code: "UDI",
                display: "undefined"
            },
            {
                code: "SNO",
                display: "undefined"
            },
            {
                code: "SB",
                display: "undefined"
            },
            {
                code: "PLAC",
                display: "undefined"
            },
            {
                code: "FILL",
                display: "undefined"
            },
            {
                code: "JHN",
                display: "undefined"
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v2-0203",
        concept: [
            { code: "AC", display: "Accreditation/Certification Identifier" },
            { code: "ACSN", display: "Accession ID" },
            { code: "AM", display: "American Express" },
            { code: "AMA", display: "American Medical Association Number" },
            { code: "AN", display: "Account number" },
            { code: "ANC", display: "Account number Creditor" },
            { code: "AND", display: "Account number debitor" },
            { code: "ANON", display: "Anonymous identifier" },
            { code: "ANT", display: "Temporary Account Number" },
            { code: "APRN", display: "Advanced Practice Registered Nurse number" },
            { code: "ASID", display: "Ancestor Specimen ID" },
            { code: "BA", display: "Bank Account Number" },
            { code: "BC", display: "Bank Card Number" },
            { code: "BCFN", display: "Birth Certificate File Number" },
            { code: "BCT", display: "Birth Certificate" },
            { code: "BR", display: "Birth registry number" },
            { code: "BRN", display: "Breed Registry Number" },
            { code: "BSNR", display: "Primary physician office number" },
            { code: "CC", display: "Cost Center number" },
            { code: "CONM", display: "Change of Name Document" },
            { code: "CY", display: "County number" },
            { code: "CZ", display: "Citizenship Card" },
            { code: "DC", display: "Death Certificate ID" },
            { code: "DCFN", display: "Death Certificate File Number" },
            { code: "DDS", display: "Dentist license number" },
            {
                code: "DEA",
                display: "Drug Enforcement Administration registration number"
            },
            { code: "DFN", display: "Drug Furnishing or prescriptive authority Number" },
            { code: "DI", display: "Diner's Club card" },
            { code: "DL", display: "Driver's license number" },
            { code: "DN", display: "Doctor number" },
            { code: "DO", display: "Osteopathic License number" },
            { code: "DP", display: "Diplomatic Passport" },
            { code: "DPM", display: "Podiatrist license number" },
            { code: "DR", display: "Donor Registration Number" },
            { code: "DS", display: "Discover Card" },
            { code: "EI", display: "Employee number" },
            { code: "EN", display: "Employer number" },
            { code: "ESN", display: "Staff Enterprise Number" },
            { code: "FDR", display: "Fetal Death Report ID" },
            { code: "FDRFN", display: "Fetal Death Report File Number" },
            { code: "FI", display: "Facility ID" },
            { code: "FILL", display: "Filler Identifier" },
            { code: "GI", display: "Guarantor internal identifier" },
            { code: "GL", display: "General ledger number" },
            { code: "GN", display: "Guarantor external  identifier" },
            { code: "HC", display: "Health Card Number" },
            { code: "IND", display: "Indigenous/Aboriginal" },
            { code: "JHN", display: "Jurisdictional health number (Canada)" },
            { code: "LACSN", display: "Laboratory Accession ID" },
            { code: "LANR", display: "Lifelong physician number" },
            { code: "LI", display: "Labor and industries number" },
            { code: "LN", display: "License number" },
            { code: "LR", display: "Local Registry ID" },
            { code: "MA", display: "Patient Medicaid number" },
            { code: "MB", display: "Member Number" },
            { code: "MC", display: "Patient's Medicare number" },
            { code: "MCD", display: "Practitioner Medicaid number" },
            { code: "MCN", display: "Microchip Number" },
            { code: "MCR", display: "Practitioner Medicare number" },
            { code: "MCT", display: "Marriage Certificate" },
            { code: "MD", display: "Medical License number" },
            { code: "MI", display: "Military ID number" },
            { code: "MR", display: "Medical record number" },
            { code: "MRT", display: "Temporary Medical Record Number" },
            { code: "MS", display: "MasterCard" },
            { code: "NBSNR", display: "Secondary physician office number" },
            { code: "NCT", display: "Naturalization Certificate" },
            { code: "NE", display: "National employer identifier" },
            { code: "NH", display: "National Health Plan Identifier" },
            { code: "NI", display: "National unique individual identifier" },
            { code: "NII", display: "National Insurance Organization Identifier" },
            { code: "NIIP", display: "National Insurance Payor Identifier (Payor)" },
            {
                code: "NNxxx",
                display:
                    "National Person Identifier where the xxx is the ISO table 3166 3-character (alphabetic) country code"
            },
            { code: "NP", display: "Nurse practitioner number" },
            { code: "NPI", display: "National provider identifier" },
            { code: "OBI", display: "Observation Instance Identifier" },
            { code: "OD", display: "Optometrist license number" },
            { code: "PA", display: "Physician Assistant number" },
            { code: "PC", display: "Parole Card" },
            { code: "PCN", display: "Penitentiary/correctional institution Number" },
            { code: "PE", display: "Living Subject Enterprise Number" },
            { code: "PEN", display: "Pension Number" },
            { code: "PHC", display: "Public Health Case Identifier" },
            { code: "PHE", display: "Public Health Event Identifier" },
            { code: "PHO", display: "Public Health Official ID" },
            { code: "PI", display: "Patient internal identifier" },
            { code: "PLAC", display: "Placer Identifier" },
            { code: "PN", display: "Person number" },
            { code: "PNT", display: "Temporary Living Subject Number" },
            {
                code: "PPIN",
                display: "Medicare/CMS Performing Provider Identification Number"
            },
            { code: "PPN", display: "Passport number" },
            { code: "PRC", display: "Permanent Resident Card Number" },
            { code: "PRN", display: "Provider number" },
            { code: "PT", display: "Patient external identifier" },
            { code: "QA", display: "QA number" },
            { code: "RI", display: "Resource identifier" },
            { code: "RN", display: "Registered Nurse Number" },
            { code: "RPH", display: "Pharmacist license number" },
            { code: "RR", display: "Railroad Retirement number" },
            { code: "RRI", display: "Regional registry ID" },
            { code: "RRP", display: "Railroad Retirement Provider" },
            { code: "SB", display: "Social Beneficiary Identifier" },
            { code: "SID", display: "Specimen ID" },
            { code: "SL", display: "State license" },
            { code: "SN", display: "Subscriber Number" },
            { code: "SNBSN", display: "State assigned NDBS card Identifier" },
            { code: "SNO", display: "Serial Number" },
            { code: "SP", display: "Study Permit" },
            { code: "SR", display: "State registry ID" },
            { code: "SS", display: "Social Security number" },
            { code: "STN", display: "Shipment Tracking Number" },
            { code: "TAX", display: "Tax ID number" },
            { code: "TN", display: "Treaty Number/ (Canada)" },
            { code: "TPR", display: "Temporary Permanent Resident (Canada)" },
            { code: "TRL", display: "Training License Number" },
            { code: "U", display: "Unspecified identifier" },
            { code: "UDI", display: "Universal Device Identifier" },
            {
                code: "UPIN",
                display:
                    "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers"
            },
            { code: "USID", display: "Unique Specimen ID" },
            { code: "VN", display: "Visit number" },
            { code: "VP", display: "Visitor Permit" },
            { code: "VS", display: "VISA" },
            { code: "WC", display: "WIC identifier" },
            { code: "WCN", display: "Workers' Comp Number" },
            { code: "WP", display: "Work Permit" },
            { code: "XV", display: "Health Plan Identifier" },
            { code: "XX", display: "Organization identifier" }
        ]
    }
];

export default Identifiertype;
