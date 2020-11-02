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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Prior_Disease

type VaccinationPriorDisease =
    | "40733004"
    | "27836007"
    | "16541001"
    | "16901001"
    | "61977001"
    | "76795007"
    | "25102003"
    | "36653000"
    | "36989005"
    | "14189004"
    | "38907003";

const VaccinationPriorDisease: t.Type<VaccinationPriorDisease> = t.union(
    [
        t.literal("40733004"),
        t.literal("27836007"),
        t.literal("16541001"),
        t.literal("16901001"),
        t.literal("61977001"),
        t.literal("76795007"),
        t.literal("25102003"),
        t.literal("36653000"),
        t.literal("36989005"),
        t.literal("14189004"),
        t.literal("38907003")
    ],
    "VaccinationPriorDisease"
);

export const VaccinationPriorDiseaseArray: string[] = [
    "40733004",
    "27836007",
    "16541001",
    "16901001",
    "61977001",
    "76795007",
    "25102003",
    "36653000",
    "36989005",
    "14189004",
    "38907003"
];

export const VaccinationPriorDiseaseValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "40733004",
                display: "Infectious disease (disorder)"
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)"
            },
            {
                code: "16541001",
                display: "Yellow fever (disorder)"
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)"
            },
            {
                code: "61977001",
                display: "Chronic type B viral hepatitis (disorder)"
            },
            {
                code: "76795007",
                display: "Acute type B viral hepatitis (disorder)"
            },
            {
                code: "25102003",
                display: "Acute type A viral hepatitis (disorder)"
            },
            {
                code: "36653000",
                display: "Rubella (disorder)"
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
                code: "38907003",
                display: "Varicella (disorder)"
            }
        ]
    }
];

export default VaccinationPriorDisease;
