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
import { Literal, Excess, MinMaxArray } from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import VaccinationAgeGroupsVS from "../../../../../Definitions/KBV/IM/1.00.000/ValueSet/VaccinationAgeGroups";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationAgeGroupsValueCodeableConceptCoding {
    system: string;
    version: string;
    code: VaccinationAgeGroupsVS;
    display: string;
    id?: string;
}

export const VaccinationAgeGroupsValueCodeableConceptCoding: t.Type<VaccinationAgeGroupsValueCodeableConceptCoding> = t.recursion(
    "VaccinationAgeGroupsValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: VaccinationAgeGroupsVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationAgeGroupsValueCodeableConcept {
    coding: Array<VaccinationAgeGroupsValueCodeableConceptCoding>;
    text: string;
    id?: string;
}

export const VaccinationAgeGroupsValueCodeableConcept: t.Type<VaccinationAgeGroupsValueCodeableConcept> = t.recursion(
    "VaccinationAgeGroupsValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationAgeGroupsValueCodeableConceptCoding
                    ),
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationAgeGroups {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups";
    valueCodeableConcept: VaccinationAgeGroupsValueCodeableConcept;
    id?: string;
}

const VaccinationAgeGroups: t.Type<VaccinationAgeGroups> = t.recursion(
    "VaccinationAgeGroups",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups"
                    ),
                    valueCodeableConcept: VaccinationAgeGroupsValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default VaccinationAgeGroups;
