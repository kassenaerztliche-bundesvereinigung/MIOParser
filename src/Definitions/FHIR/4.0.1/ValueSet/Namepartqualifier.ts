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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/name-part-qualifier

type Namepartqualifier =
    | "LS"
    | "AC"
    | "NB"
    | "PR"
    | "HON"
    | "BR"
    | "AD"
    | "SP"
    | "MID"
    | "CL"
    | "IN"
    | "VV";

const Namepartqualifier: t.Type<Namepartqualifier> = t.union(
    [
        t.literal("LS"),
        t.literal("AC"),
        t.literal("NB"),
        t.literal("PR"),
        t.literal("HON"),
        t.literal("BR"),
        t.literal("AD"),
        t.literal("SP"),
        t.literal("MID"),
        t.literal("CL"),
        t.literal("IN"),
        t.literal("VV")
    ],
    "Namepartqualifier"
);

export const NamepartqualifierArray: string[] = [
    "LS",
    "AC",
    "NB",
    "PR",
    "HON",
    "BR",
    "AD",
    "SP",
    "MID",
    "CL",
    "IN",
    "VV"
];

export const NamepartqualifierValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifierR2",
        concept: [
            {
                code: "LS",
                display: "Legal status"
            },
            {
                code: "AC",
                display: "Academic"
            },
            {
                code: "NB",
                display: "Nobility"
            },
            {
                code: "PR",
                display: "Professional"
            },
            {
                code: "HON",
                display: "Honorific"
            },
            {
                code: "BR",
                display: "Birth"
            },
            {
                code: "AD",
                display: "Acquired"
            },
            {
                code: "SP",
                display: "Spouse"
            },
            {
                code: "MID",
                display: "Middle Name"
            },
            {
                code: "CL",
                display: "Call me"
            },
            {
                code: "IN",
                display: "Initial"
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifier",
        concept: [
            {
                code: "VV",
                display: "Voorvoegsel"
            }
        ]
    }
];

export default Namepartqualifier;
