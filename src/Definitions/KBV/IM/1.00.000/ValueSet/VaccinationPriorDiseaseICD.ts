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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Prior_Disease_ICD

type VaccinationPriorDiseaseICD =
    | "A37.-"
    | "B26.-"
    | "B05.-"
    | "B01.-"
    | "B06.-"
    | "B15.-"
    | "B16.-"
    | "B18.0"
    | "B18.1-"
    | "A84.1"
    | "A95.-";

const VaccinationPriorDiseaseICD: t.Type<VaccinationPriorDiseaseICD> = t.union(
    [
        t.literal("A37.-"),
        t.literal("B26.-"),
        t.literal("B05.-"),
        t.literal("B01.-"),
        t.literal("B06.-"),
        t.literal("B15.-"),
        t.literal("B16.-"),
        t.literal("B18.0"),
        t.literal("B18.1-"),
        t.literal("A84.1"),
        t.literal("A95.-")
    ],
    "VaccinationPriorDiseaseICD"
);

export const VaccinationPriorDiseaseICDArray: string[] = [
    "A37.-",
    "B26.-",
    "B05.-",
    "B01.-",
    "B06.-",
    "B15.-",
    "B16.-",
    "B18.0",
    "B18.1-",
    "A84.1",
    "A95.-"
];

export const VaccinationPriorDiseaseICDValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm",
        concept: [
            {
                code: "A37.-",
                display: "Keuchhusten"
            },
            {
                code: "B26.-",
                display: "Mumps"
            },
            {
                code: "B05.-",
                display: "Masern"
            },
            {
                code: "B01.-",
                display: "Varizellen [Windpocken]"
            },
            {
                code: "B06.-",
                display: "Röteln [Rubeola] [Rubella]"
            },
            {
                code: "B15.-",
                display: "Akute Virushepatitis A"
            },
            {
                code: "B16.-",
                display: "Akute Virushepatitis B"
            },
            {
                code: "B18.0",
                display: "Chronische Virushepatitis B mit Delta-Virus"
            },
            {
                code: "B18.1-",
                display: "Chronische Virushepatitis B ohne Delta-Virus"
            },
            {
                code: "A84.1",
                display: "Mitteleuropäische Enzephalitis, durch Zecken übertragen"
            },
            {
                code: "A95.-",
                display: "Gelbfieber"
            }
        ]
    }
];

export default VaccinationPriorDiseaseICD;
