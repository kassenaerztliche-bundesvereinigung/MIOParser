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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Source_of_Information

type VaccinationSourceofInformation =
    | "261665006"
    | "394863008"
    | "125677006"
    | "158965000"
    | "116154003";

const VaccinationSourceofInformation: t.Type<VaccinationSourceofInformation> = t.union(
    [
        t.literal("261665006"),
        t.literal("394863008"),
        t.literal("125677006"),
        t.literal("158965000"),
        t.literal("116154003")
    ],
    "VaccinationSourceofInformation"
);

export const VaccinationSourceofInformationArray: string[] = [
    "261665006",
    "394863008",
    "125677006",
    "158965000",
    "116154003"
];

export const VaccinationSourceofInformationValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "261665006",
                display: "Unknown (qualifier value)"
            },
            {
                code: "394863008",
                display: "Non-family member (person)"
            },
            {
                code: "125677006",
                display: "Relative (person)"
            },
            {
                code: "158965000",
                display: "Medical practitioner (occupation)"
            },
            {
                code: "116154003",
                display: "Patient (person)"
            }
        ]
    }
];

export default VaccinationSourceofInformation;
