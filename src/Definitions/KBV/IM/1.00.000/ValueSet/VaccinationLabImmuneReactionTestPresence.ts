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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_ImmuneReaction_Test_Presence

type VaccinationLabImmuneReactionTestPresence =
    | "22600-1"
    | "26643-7"
    | "30546-6"
    | "31998-8"
    | "31503-6"
    | "17322-9"
    | "46197-0"
    | "43429-0"
    | "5195-3"
    | "20575-7"
    | "26630-4"
    | "22496-4";

const VaccinationLabImmuneReactionTestPresence: t.Type<VaccinationLabImmuneReactionTestPresence> = t.union(
    [
        t.literal("22600-1"),
        t.literal("26643-7"),
        t.literal("30546-6"),
        t.literal("31998-8"),
        t.literal("31503-6"),
        t.literal("17322-9"),
        t.literal("46197-0"),
        t.literal("43429-0"),
        t.literal("5195-3"),
        t.literal("20575-7"),
        t.literal("26630-4"),
        t.literal("22496-4")
    ],
    "VaccinationLabImmuneReactionTestPresence"
);

export const VaccinationLabImmuneReactionTestPresenceArray: string[] = [
    "22600-1",
    "26643-7",
    "30546-6",
    "31998-8",
    "31503-6",
    "17322-9",
    "46197-0",
    "43429-0",
    "5195-3",
    "20575-7",
    "26630-4",
    "22496-4"
];

export const VaccinationLabImmuneReactionTestPresenceValueSet: ValueSet = [
    {
        system: "http://loinc.org",
        concept: [
            {
                code: "22600-1",
                display: "Varicella zoster virus Ab [Presence] in Serum"
            },
            {
                code: "26643-7",
                display: "Clostridium tetani toxoid Ab [Presence] in Serum"
            },
            {
                code: "30546-6",
                display: "Polio virus 1 Ab [Presence] in Serum"
            },
            {
                code: "31998-8",
                display: "Bordetella pertussis Ab [Presence] in Serum"
            },
            {
                code: "31503-6",
                display: "Mumps virus Ab [Presence] in Serum"
            },
            {
                code: "17322-9",
                display: "Neisseria meningitidis Ab [Presence] in Serum"
            },
            {
                code: "46197-0",
                display: "Measles virus Ab [Presence] in Serum"
            },
            {
                code: "43429-0",
                display: "Haemophilus influenzae B Ag [Presence] in Serum"
            },
            {
                code: "5195-3",
                display: "Hepatitis B virus surface Ag [Presence] in Serum"
            },
            {
                code: "20575-7",
                display: "Hepatitis A virus Ab [Presence] in Serum"
            },
            {
                code: "26630-4",
                display: "Corynebacterium diphtheriae toxin Ab [Presence] in Serum"
            },
            {
                code: "22496-4",
                display: "Rubella virus Ab [Presence] in Serum"
            }
        ]
    }
];

export default VaccinationLabImmuneReactionTestPresence;
