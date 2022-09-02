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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Vaccine_Brucella

type VaccinationVaccineBrucella = "7230005";

type VaccinationVaccineBrucellaType = t.KeyofC<{ "7230005": null }>;

const VaccinationVaccineBrucella: VaccinationVaccineBrucellaType = t.keyof({
    "7230005": null
});
export const VaccinationVaccineBrucellaArray: string[] = ["7230005"];

export const VaccinationVaccineBrucellaValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "7230005",
                display: "Brucella vaccine (product)"
            }
        ]
    }
];

export default VaccinationVaccineBrucella;
