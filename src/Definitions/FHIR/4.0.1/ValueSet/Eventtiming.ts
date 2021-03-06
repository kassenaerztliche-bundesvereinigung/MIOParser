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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/event-timing

type Eventtiming =
    | "MORN"
    | "MORN.early"
    | "MORN.late"
    | "NOON"
    | "AFT"
    | "AFT.early"
    | "AFT.late"
    | "EVE"
    | "EVE.early"
    | "EVE.late"
    | "NIGHT"
    | "PHS"
    | "HS"
    | "WAKE"
    | "C"
    | "CM"
    | "CD"
    | "CV"
    | "AC"
    | "ACM"
    | "ACD"
    | "ACV"
    | "PC"
    | "PCM"
    | "PCD"
    | "PCV";

const Eventtiming: t.Type<Eventtiming> = t.union(
    [
        t.literal("MORN"),
        t.literal("MORN.early"),
        t.literal("MORN.late"),
        t.literal("NOON"),
        t.literal("AFT"),
        t.literal("AFT.early"),
        t.literal("AFT.late"),
        t.literal("EVE"),
        t.literal("EVE.early"),
        t.literal("EVE.late"),
        t.literal("NIGHT"),
        t.literal("PHS"),
        t.literal("HS"),
        t.literal("WAKE"),
        t.literal("C"),
        t.literal("CM"),
        t.literal("CD"),
        t.literal("CV"),
        t.literal("AC"),
        t.literal("ACM"),
        t.literal("ACD"),
        t.literal("ACV"),
        t.literal("PC"),
        t.literal("PCM"),
        t.literal("PCD"),
        t.literal("PCV")
    ],
    "Eventtiming"
);

export const EventtimingArray: string[] = [
    "MORN",
    "MORN.early",
    "MORN.late",
    "NOON",
    "AFT",
    "AFT.early",
    "AFT.late",
    "EVE",
    "EVE.early",
    "EVE.late",
    "NIGHT",
    "PHS",
    "HS",
    "WAKE",
    "C",
    "CM",
    "CD",
    "CV",
    "AC",
    "ACM",
    "ACD",
    "ACV",
    "PC",
    "PCM",
    "PCD",
    "PCV"
];

export const EventtimingValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/event-timing",
        concept: [
            { code: "MORN", display: "Morning" },
            { code: "MORN.early", display: "Early Morning" },
            { code: "MORN.late", display: "Late Morning" },
            { code: "NOON", display: "Noon" },
            { code: "AFT", display: "Afternoon" },
            { code: "AFT.early", display: "Early Afternoon" },
            { code: "AFT.late", display: "Late Afternoon" },
            { code: "EVE", display: "Evening" },
            { code: "EVE.early", display: "Early Evening" },
            { code: "EVE.late", display: "Late Evening" },
            { code: "NIGHT", display: "Night" },
            { code: "PHS", display: "After Sleep" }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent",
        concept: [
            {
                code: "HS",
                display: "undefined"
            },
            {
                code: "WAKE",
                display: "undefined"
            },
            {
                code: "C",
                display: "undefined"
            },
            {
                code: "CM",
                display: "undefined"
            },
            {
                code: "CD",
                display: "undefined"
            },
            {
                code: "CV",
                display: "undefined"
            },
            {
                code: "AC",
                display: "undefined"
            },
            {
                code: "ACM",
                display: "undefined"
            },
            {
                code: "ACD",
                display: "undefined"
            },
            {
                code: "ACV",
                display: "undefined"
            },
            {
                code: "PC",
                display: "undefined"
            },
            {
                code: "PCM",
                display: "undefined"
            },
            {
                code: "PCD",
                display: "undefined"
            },
            {
                code: "PCV",
                display: "undefined"
            }
        ]
    },
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-TimingEvent",
        concept: [
            { code: "AC", display: "AC" },
            { code: "ACD", display: "ACD" },
            { code: "ACM", display: "ACM" },
            { code: "ACV", display: "ACV" },
            { code: "CD", display: "CD" },
            { code: "CM", display: "CM" },
            { code: "CV", display: "CV" },
            { code: "HS", display: "HS" },
            { code: "IC", display: "IC" },
            { code: "ICD", display: "ICD" },
            { code: "ICM", display: "ICM" },
            { code: "ICV", display: "ICV" },
            { code: "PC", display: "PC" },
            { code: "PCD", display: "PCD" },
            { code: "PCM", display: "PCM" },
            { code: "PCV", display: "PCV" },
            { code: "WAKE", display: "WAKE" }
        ]
    }
];

export default Eventtiming;
