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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_TargetDisease_AlphaID

type VaccinationTargetDiseaseAlphaID =
    | "I13965"
    | "I97396"
    | "I15735"
    | "I5031"
    | "I116469"
    | "I11467"
    | "I13614"
    | "I21515"
    | "I27534"
    | "I15008"
    | "I14609"
    | "I23502"
    | "I23483"
    | "I14036"
    | "I15771"
    | "I15777"
    | "I23144"
    | "I14083"
    | "I1064"
    | "I14685"
    | "I14707"
    | "I14368"
    | "I73861"
    | "I15064"
    | "I14372"
    | "I110761"
    | "I15222"
    | "I15432"
    | "I22407"
    | "I22433"
    | "I22454"
    | "I15579";

const VaccinationTargetDiseaseAlphaID: t.Type<VaccinationTargetDiseaseAlphaID> = t.union(
    [
        t.literal("I13965"),
        t.literal("I97396"),
        t.literal("I15735"),
        t.literal("I5031"),
        t.literal("I116469"),
        t.literal("I11467"),
        t.literal("I13614"),
        t.literal("I21515"),
        t.literal("I27534"),
        t.literal("I15008"),
        t.literal("I14609"),
        t.literal("I23502"),
        t.literal("I23483"),
        t.literal("I14036"),
        t.literal("I15771"),
        t.literal("I15777"),
        t.literal("I23144"),
        t.literal("I14083"),
        t.literal("I1064"),
        t.literal("I14685"),
        t.literal("I14707"),
        t.literal("I14368"),
        t.literal("I73861"),
        t.literal("I15064"),
        t.literal("I14372"),
        t.literal("I110761"),
        t.literal("I15222"),
        t.literal("I15432"),
        t.literal("I22407"),
        t.literal("I22433"),
        t.literal("I22454"),
        t.literal("I15579")
    ],
    "VaccinationTargetDiseaseAlphaID"
);

export const VaccinationTargetDiseaseAlphaIDArray: string[] = [
    "I13965",
    "I97396",
    "I15735",
    "I5031",
    "I116469",
    "I11467",
    "I13614",
    "I21515",
    "I27534",
    "I15008",
    "I14609",
    "I23502",
    "I23483",
    "I14036",
    "I15771",
    "I15777",
    "I23144",
    "I14083",
    "I1064",
    "I14685",
    "I14707",
    "I14368",
    "I73861",
    "I15064",
    "I14372",
    "I110761",
    "I15222",
    "I15432",
    "I22407",
    "I22433",
    "I22454",
    "I15579"
];

export const VaccinationTargetDiseaseAlphaIDValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/alpha-id",
        concept: [
            {
                code: "I13965",
                display: "Fleckfieber"
            },
            {
                code: "I97396",
                display: "Blutgruppenunverträglichkeit beim Neugeborenen"
            },
            {
                code: "I15735",
                display: "Infektion durch Zytomegalieviren"
            },
            {
                code: "I5031",
                display: "Pneumonie durch Respiratory-Syncytial-Viren [RS-Viren]"
            },
            {
                code: "I116469",
                display: "Infektion durch Clostridium difficile"
            },
            {
                code: "I11467",
                display: "Haemophilus-influenzae-Infektion"
            },
            {
                code: "I13614",
                display: "Cholera"
            },
            {
                code: "I21515",
                display: "Infektion durch humanes Papillomavirus [HPV]"
            },
            {
                code: "I27534",
                display: "Infektion durch Meningokokken"
            },
            {
                code: "I15008",
                display: "Pest"
            },
            {
                code: "I14609",
                display: "Masern"
            },
            {
                code: "I23502",
                display: "Diphtherie"
            },
            {
                code: "I23483",
                display: "FSME [Zentraleuropäische Frühsommer-Meningoenzephalitis]"
            },
            {
                code: "I14036",
                display: "Gelbfieber"
            },
            {
                code: "I15771",
                display: "Hepatitis A"
            },
            {
                code: "I15777",
                display: "Hepatitis B"
            },
            {
                code: "I23144",
                display: "Herpes zoster"
            },
            {
                code: "I14083",
                display: "Grippe [Influenza]"
            },
            {
                code: "I1064",
                display: "Japanische Enzephalitis"
            },
            {
                code: "I14685",
                display: "Milzbrand"
            },
            {
                code: "I14707",
                display: "Mumps"
            },
            {
                code: "I14368",
                display: "Pertussis"
            },
            {
                code: "I73861",
                display: "Infektion durch Pneumokokken a.n.k."
            },
            {
                code: "I15064",
                display: "Pocken"
            },
            {
                code: "I14372",
                display: "Poliomyelitis"
            },
            {
                code: "I110761",
                display: "Infektion durch Rotaviren"
            },
            {
                code: "I15222",
                display: "Röteln"
            },
            {
                code: "I15432",
                display: "Tetanus-Infektion"
            },
            {
                code: "I22407",
                display: "Tollwut"
            },
            {
                code: "I22433",
                display: "Tuberkulose"
            },
            {
                code: "I22454",
                display: "Typhus"
            },
            {
                code: "I15579",
                display: "Windpocken"
            }
        ]
    }
];

export default VaccinationTargetDiseaseAlphaID;
