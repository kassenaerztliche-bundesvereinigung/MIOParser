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
import { Literal, Excess, MinMaxArray } from "../../../../CustomTypes";

import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import VaccinationEntryTypeVS from "../../../../../Definitions/KBV/IM/1.1.0/ValueSet/VaccinationEntryType";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationEntryTypeValueCodeableConceptCoding {
    system: string;
    code: VaccinationEntryTypeVS;
    display: string;
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const VaccinationEntryTypeValueCodeableConceptCoding: t.Type<VaccinationEntryTypeValueCodeableConceptCoding> =
    t.recursion("VaccinationEntryTypeValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    code: VaccinationEntryTypeVS,
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationEntryTypeValueCodeableConcept {
    coding: Array<VaccinationEntryTypeValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationEntryTypeValueCodeableConcept: t.Type<VaccinationEntryTypeValueCodeableConcept> =
    t.recursion("VaccinationEntryTypeValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationEntryTypeValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface VaccinationEntryType {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type";
    valueCodeableConcept: VaccinationEntryTypeValueCodeableConcept;
    id?: string;
}

const VaccinationEntryType: t.Type<VaccinationEntryType> = t.recursion(
    "VaccinationEntryType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Entry_Type"
                    ),
                    valueCodeableConcept: VaccinationEntryTypeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default VaccinationEntryType;
