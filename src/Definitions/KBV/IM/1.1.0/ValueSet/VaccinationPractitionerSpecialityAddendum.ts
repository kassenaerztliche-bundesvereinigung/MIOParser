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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Practitioner_Speciality_Addendum

type VaccinationPractitionerSpecialityAddendum =
    | "309343006"
    | "042"
    | "096"
    | "097"
    | "140"
    | "143"
    | "171"
    | "192"
    | "160"
    | "161"
    | "536"
    | "537";

const VaccinationPractitionerSpecialityAddendum: t.Type<VaccinationPractitionerSpecialityAddendum> =
    t.union(
        [
            t.literal("309343006"),
            t.literal("042"),
            t.literal("096"),
            t.literal("097"),
            t.literal("140"),
            t.literal("143"),
            t.literal("171"),
            t.literal("192"),
            t.literal("160"),
            t.literal("161"),
            t.literal("536"),
            t.literal("537")
        ],
        "VaccinationPractitionerSpecialityAddendum"
    );

export const VaccinationPractitionerSpecialityAddendumArray: string[] = [
    "309343006",
    "042",
    "096",
    "097",
    "140",
    "143",
    "171",
    "192",
    "160",
    "161",
    "536",
    "537"
];

export const VaccinationPractitionerSpecialityAddendumValueSet: ValueSet = [
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
        system: "urn:oid:1.2.276.0.76.5.114",
        concept: [
            {
                code: "042",
                display: "SP Unfallchirurgie"
            },
            {
                code: "096",
                display: "TG Kindernephrologie"
            },
            {
                code: "097",
                display: "TG Kinder-Lungen- u. Bronchialheilkunde"
            },
            {
                code: "140",
                display: "FA Nervenheilkunde"
            },
            {
                code: "143",
                display: "Psychotherapeutisch tätiger Arzt"
            },
            {
                code: "171",
                display: "TG Neuropathologie"
            },
            {
                code: "192",
                display: "TG Neuroradiologie"
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
                code: "536",
                display: "SP Kinder-Endokrinologie und -Diabetologie"
            },
            {
                code: "537",
                display: "SP Kinder-Gastroenterologie"
            }
        ]
    }
];

export default VaccinationPractitionerSpecialityAddendum;
