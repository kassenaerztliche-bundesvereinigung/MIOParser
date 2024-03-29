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
import VaccinationPriorDiseaseGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationPriorDiseaseGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Prior_Disease

type VaccinationPriorDisease =
    | "40733004"
    | "16541001"
    | "16901001"
    | "76795007"
    | "235869004"
    | "186639003"
    | "25102003"
    | "36653000"
    | "36989005"
    | "14189004"
    | "38907003"
    | "27836007";

type VaccinationPriorDiseaseType = t.KeyofC<{
    "40733004": null;
    "16541001": null;
    "16901001": null;
    "76795007": null;
    "235869004": null;
    "186639003": null;
    "25102003": null;
    "36653000": null;
    "36989005": null;
    "14189004": null;
    "38907003": null;
    "27836007": null;
}>;

const VaccinationPriorDisease: VaccinationPriorDiseaseType = t.keyof({
    "40733004": null,
    "16541001": null,
    "16901001": null,
    "76795007": null,
    "235869004": null,
    "186639003": null,
    "25102003": null,
    "36653000": null,
    "36989005": null,
    "14189004": null,
    "38907003": null,
    "27836007": null
});
export const VaccinationPriorDiseaseArray: string[] = [
    "40733004",
    "16541001",
    "16901001",
    "76795007",
    "235869004",
    "186639003",
    "25102003",
    "36653000",
    "36989005",
    "14189004",
    "38907003",
    "27836007"
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
                code: "16541001",
                display: "Yellow fever (disorder)"
            },
            {
                code: "16901001",
                display: "Central European encephalitis (disorder)"
            },
            {
                code: "76795007",
                display: "Acute type B viral hepatitis (disorder)"
            },
            {
                code: "235869004",
                display: "Chronic viral hepatitis B with hepatitis D (disorder)"
            },
            {
                code: "186639003",
                display: "Chronic viral hepatitis B without delta-agent (disorder)"
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
            },
            {
                code: "27836007",
                display: "Pertussis (disorder)"
            }
        ]
    }
];

export { VaccinationPriorDiseaseGerman as ConceptMap };

export default VaccinationPriorDisease;
