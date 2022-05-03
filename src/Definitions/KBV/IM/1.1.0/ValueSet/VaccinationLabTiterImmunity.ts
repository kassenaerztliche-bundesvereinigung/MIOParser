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
import VaccinationLabTiterImmunityGerman from "../../../../../Definitions/KBV/IM/1.1.0/ConceptMap/VaccinationLabTiterImmunityGerman";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_Vaccination_Lab_Titer_Immunity

type VaccinationLabTiterImmunity =
    | "365861007:363713009=260385009"
    | "365861007:363713009=10828004";

const VaccinationLabTiterImmunity: t.Type<VaccinationLabTiterImmunity> = t.union(
    [
        t.literal("365861007:363713009=260385009"),
        t.literal("365861007:363713009=10828004")
    ],
    "VaccinationLabTiterImmunity"
);

export const VaccinationLabTiterImmunityArray: string[] = [
    "365861007:363713009=260385009",
    "365861007:363713009=10828004"
];

export const VaccinationLabTiterImmunityValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "365861007:363713009=260385009",
                display:
                    "Finding of immune status (finding) : Has interpretation (attribute) = Negative (qualifier value)"
            },
            {
                code: "365861007:363713009=10828004",
                display:
                    "Finding of immune status (finding) : Has interpretation (attribute) = Positive (qualifier value)"
            }
        ]
    }
];

export { VaccinationLabTiterImmunityGerman as ConceptMap };

export default VaccinationLabTiterImmunity;
