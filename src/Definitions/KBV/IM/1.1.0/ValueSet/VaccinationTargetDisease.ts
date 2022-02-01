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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_TargetDisease

type VaccinationTargetDisease =
    | "840539006"
    | "67924001"
    | "240532009"
    | "16541001"
    | "4740000"
    | "38907003"
    | "36653000"
    | "18624000"
    | "14168008"
    | "398102009"
    | "36989005"
    | "14189004"
    | "40468003"
    | "66071002"
    | "6142004"
    | "52947006"
    | "16901001"
    | "4834000"
    | "56717001"
    | "76902006"
    | "16814004"
    | "58750007"
    | "27836007"
    | "23511006"
    | "709410003"
    | "397430003"
    | "63650001"
    | "75702008"
    | "409498004"
    | "39111003"
    | "28944009"
    | "55735004"
    | "186431008"
    | "307333004"
    | "64572001"
    | "40733004";

const VaccinationTargetDisease: t.Type<VaccinationTargetDisease> = t.union(
    [
        t.literal("840539006"),
        t.literal("67924001"),
        t.literal("240532009"),
        t.literal("16541001"),
        t.literal("4740000"),
        t.literal("38907003"),
        t.literal("36653000"),
        t.literal("18624000"),
        t.literal("14168008"),
        t.literal("398102009"),
        t.literal("36989005"),
        t.literal("14189004"),
        t.literal("40468003"),
        t.literal("66071002"),
        t.literal("6142004"),
        t.literal("52947006"),
        t.literal("16901001"),
        t.literal("4834000"),
        t.literal("56717001"),
        t.literal("76902006"),
        t.literal("16814004"),
        t.literal("58750007"),
        t.literal("27836007"),
        t.literal("23511006"),
        t.literal("709410003"),
        t.literal("397430003"),
        t.literal("63650001"),
        t.literal("75702008"),
        t.literal("409498004"),
        t.literal("39111003"),
        t.literal("28944009"),
        t.literal("55735004"),
        t.literal("186431008"),
        t.literal("307333004"),
        t.literal("64572001"),
        t.literal("40733004")
    ],
    "VaccinationTargetDisease"
);

export const VaccinationTargetDiseaseArray: string[] = [
    "840539006",
    "67924001",
    "240532009",
    "16541001",
    "4740000",
    "38907003",
    "36653000",
    "18624000",
    "14168008",
    "398102009",
    "36989005",
    "14189004",
    "40468003",
    "66071002",
    "6142004",
    "52947006",
    "16901001",
    "4834000",
    "56717001",
    "76902006",
    "16814004",
    "58750007",
    "27836007",
    "23511006",
    "709410003",
    "397430003",
    "63650001",
    "75702008",
    "409498004",
    "39111003",
    "28944009",
    "55735004",
    "186431008",
    "307333004",
    "64572001",
    "40733004"
];

export const VaccinationTargetDiseaseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "840539006",
                display:
                    "Disease caused by Severe acute respiratory syndrome coronavirus 2 (disorder)"
            },
            {
                code: "67924001",
                display: "Smallpox (disorder)"
            },
            {
                code: "240532009",
                display: "Human papillomavirus infection (disorder)"
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)"
            },
            {
                code: "4740000",
                display: "Herpes zoster (disorder)"
            },
            {
                code: "38907003",
                display: "Varicella (disorder)"
            },
            {
                code: "36653000",
                display: "Rubella (disorder)"
            },
            {
                code: "18624000",
                display: "Disease caused by Rotavirus (disorder)"
            },
            {
                code: "14168008",
                display: "Rabies (disorder)"
            },
            {
                code: "398102009",
                display: "Acute poliomyelitis (disorder)"
            },
            {
                code: "36989005",
                display: "Mumps (disorder)"
            },
            {
                code: "14189004",
                display: "Measles (disorder)"
            },
            {
                code: "40468003",
                display: "Viral hepatitis, type A (disorder)"
            },
            {
                code: "66071002",
                display: "Viral hepatitis type B (disorder)"
            },
            {
                code: "6142004",
                display: "Influenza (disorder)"
            },
            {
                code: "52947006",
                display: "Japanese encephalitis virus disease (disorder)"
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)"
            },
            {
                code: "4834000",
                display: "Typhoid fever (disorder)"
            },
            {
                code: "56717001",
                display: "Tuberculosis (disorder)"
            },
            {
                code: "76902006",
                display: "Tetanus (disorder)"
            },
            {
                code: "16814004",
                display: "Pneumococcal infectious disease (disorder)"
            },
            {
                code: "58750007",
                display: "Plague (disorder)"
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)"
            },
            {
                code: "23511006",
                display: "Meningococcal infectious disease (disorder)"
            },
            {
                code: "709410003",
                display: "Haemophilus influenzae type b infection (disorder)"
            },
            {
                code: "397430003",
                display: "Diphtheria caused by Corynebacterium diphtheriae (disorder)"
            },
            {
                code: "63650001",
                display: "Cholera (disorder)"
            },
            {
                code: "75702008",
                display: "Brucellosis (disorder)"
            },
            {
                code: "409498004",
                display: "Anthrax (disorder)"
            },
            {
                code: "39111003",
                display: "Louse-borne typhus (disorder)"
            },
            {
                code: "28944009",
                display: "Cytomegalovirus infection (disorder)"
            },
            {
                code: "55735004",
                display: "Respiratory syncytial virus infection (disorder)"
            },
            {
                code: "186431008",
                display: "Clostridioides difficile infection (disorder)"
            },
            {
                code: "307333004",
                display: "Rhesus isoimmunization due to anti-D (disorder)"
            },
            {
                code: "64572001",
                display: "Disease (disorder)"
            },
            {
                code: "40733004",
                display: "Infectious disease (disorder)"
            }
        ]
    }
];

export default VaccinationTargetDisease;
