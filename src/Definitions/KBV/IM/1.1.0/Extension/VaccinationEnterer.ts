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
import {
    Literal,
    Excess,
    ReqArray,
    MinMaxArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationEntererModeValueCodeableConceptCoding {
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType";
    code: "ENT";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationEntererModeValueCodeableConceptCoding: t.Type<VaccinationEntererModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationEntererModeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal(
                        "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
                    ),
                    code: Literal("ENT")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationEntererModeValueCodeableConcept {
    coding: Array<VaccinationEntererModeValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationEntererModeValueCodeableConcept: t.Type<VaccinationEntererModeValueCodeableConcept> = t.recursion(
    "VaccinationEntererModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationEntererModeValueCodeableConceptCoding
                    )
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
export interface VaccinationEntererPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationEntererPartyValueReference: t.Type<VaccinationEntererPartyValueReference> = t.recursion(
    "VaccinationEntererPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationEntererMode {
    url: "mode";
    valueCodeableConcept: VaccinationEntererModeValueCodeableConcept;
    id?: string;
}

export const VaccinationEntererMode: t.Type<VaccinationEntererMode> = t.recursion(
    "VaccinationEntererMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationEntererModeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface VaccinationEntererParty {
    url: "party";
    valueReference: VaccinationEntererPartyValueReference;
    id?: string;
}

export const VaccinationEntererParty: t.Type<VaccinationEntererParty> = t.recursion(
    "VaccinationEntererParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationEntererPartyValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationEnterer {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer";
    id?: string;
    extension?: (Extension | VaccinationEntererMode | VaccinationEntererParty)[];
}

const VaccinationEnterer: t.Type<VaccinationEnterer> = t.recursion(
    "VaccinationEnterer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Enterer"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationEntererMode>,
                                t.Type<VaccinationEntererParty>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationEntererMode,
                            VaccinationEntererParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationEntererMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationEntererParty,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "party" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

export default VaccinationEnterer;
