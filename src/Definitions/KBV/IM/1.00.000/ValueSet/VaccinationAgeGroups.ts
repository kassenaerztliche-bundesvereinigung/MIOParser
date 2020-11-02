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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Age_Groups

type VaccinationAgeGroups =
    | "271872005"
    | "41847000"
    | "263659003"
    | "255398004"
    | "713153009"
    | "3658006";

const VaccinationAgeGroups: t.Type<VaccinationAgeGroups> = t.union(
    [
        t.literal("271872005"),
        t.literal("41847000"),
        t.literal("263659003"),
        t.literal("255398004"),
        t.literal("713153009"),
        t.literal("3658006")
    ],
    "VaccinationAgeGroups"
);

export const VaccinationAgeGroupsArray: string[] = [
    "271872005",
    "41847000",
    "263659003",
    "255398004",
    "713153009",
    "3658006"
];

export const VaccinationAgeGroupsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "271872005",
                display: "Old age (qualifier value)"
            },
            {
                code: "41847000",
                display: "Adulthood (qualifier value)"
            },
            {
                code: "263659003",
                display: "Adolescence (qualifier value)"
            },
            {
                code: "255398004",
                display: "Childhood (qualifier value)"
            },
            {
                code: "713153009",
                display: "Toddler (qualifier value)"
            },
            {
                code: "3658006",
                display: "Infancy (qualifier value)"
            }
        ]
    }
];

export default VaccinationAgeGroups;
