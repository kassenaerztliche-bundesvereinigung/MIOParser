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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_Immunoglobulin_List_ATC

type VaccinationVaccineImmunoglobulinListATC =
    | "J06BA"
    | "J06BA01"
    | "J06BA02"
    | "J06BB"
    | "J06BB01"
    | "J06BB02"
    | "J06BB03"
    | "J06BB04"
    | "J06BB05"
    | "J06BB09"
    | "J06BB16"
    | "J06BB21";

type VaccinationVaccineImmunoglobulinListATCType = t.KeyofC<{
    J06BA: null;
    J06BA01: null;
    J06BA02: null;
    J06BB: null;
    J06BB01: null;
    J06BB02: null;
    J06BB03: null;
    J06BB04: null;
    J06BB05: null;
    J06BB09: null;
    J06BB16: null;
    J06BB21: null;
}>;

const VaccinationVaccineImmunoglobulinListATC: VaccinationVaccineImmunoglobulinListATCType =
    t.keyof({
        J06BA: null,
        J06BA01: null,
        J06BA02: null,
        J06BB: null,
        J06BB01: null,
        J06BB02: null,
        J06BB03: null,
        J06BB04: null,
        J06BB05: null,
        J06BB09: null,
        J06BB16: null,
        J06BB21: null
    });
export const VaccinationVaccineImmunoglobulinListATCArray: string[] = [
    "J06BA",
    "J06BA01",
    "J06BA02",
    "J06BB",
    "J06BB01",
    "J06BB02",
    "J06BB03",
    "J06BB04",
    "J06BB05",
    "J06BB09",
    "J06BB16",
    "J06BB21"
];

export const VaccinationVaccineImmunoglobulinListATCValueSet: ValueSet = [
    {
        system: "http://fhir.de/CodeSystem/dimdi/atc",
        concept: [
            {
                code: "J06BA",
                display: "Immunglobuline, normal human"
            },
            {
                code: "J06BA01",
                display: "Immunglobuline, normal human, zur extravasalen Anwendung"
            },
            {
                code: "J06BA02",
                display: "Immunglobuline, normal human, zur intravasalen Anwendung"
            },
            {
                code: "J06BB",
                display: "Spezifische Immunglobuline"
            },
            {
                code: "J06BB01",
                display: "Anti-D(rh)-Immunglobulin"
            },
            {
                code: "J06BB02",
                display: "Tetanus-Immunglobulin"
            },
            {
                code: "J06BB03",
                display: "Varicella/Zoster-Immunglobulin"
            },
            {
                code: "J06BB04",
                display: "Hepatitis-B-Immunglobulin"
            },
            {
                code: "J06BB05",
                display: "Tollwut-Immunglobulin"
            },
            {
                code: "J06BB09",
                display: "Cytomegalievirus-Immunglobulin"
            },
            {
                code: "J06BB16",
                display: "Palivizumab"
            },
            {
                code: "J06BB21",
                display: "Bezlotoxumab"
            }
        ]
    }
];

export default VaccinationVaccineImmunoglobulinListATC;
