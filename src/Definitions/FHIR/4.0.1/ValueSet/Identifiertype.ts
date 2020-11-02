/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
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
    }
];

export default Identifiertype;
