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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationAttesterModeValueCodeableConceptCoding {
    system: "http://hl7.org/fhir/composition-attestation-mode";
    code: "legal";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationAttesterModeValueCodeableConceptCoding: t.Type<VaccinationAttesterModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationAttesterModeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://hl7.org/fhir/composition-attestation-mode"),
                    code: Literal("legal")
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
export interface VaccinationAttesterModeValueCodeableConcept {
    coding: Array<VaccinationAttesterModeValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationAttesterModeValueCodeableConcept: t.Type<VaccinationAttesterModeValueCodeableConcept> = t.recursion(
    "VaccinationAttesterModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationAttesterModeValueCodeableConceptCoding
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
export interface VaccinationAttesterPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationAttesterPartyValueReference: t.Type<VaccinationAttesterPartyValueReference> = t.recursion(
    "VaccinationAttesterPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole|1.1.0"
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
export interface VaccinationAttesterMode {
    url: "mode";
    valueCodeableConcept: VaccinationAttesterModeValueCodeableConcept;
    id?: string;
}

export const VaccinationAttesterMode: t.Type<VaccinationAttesterMode> = t.recursion(
    "VaccinationAttesterMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationAttesterModeValueCodeableConcept
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
export interface VaccinationAttesterParty {
    url: "party";
    valueReference: VaccinationAttesterPartyValueReference;
    id?: string;
}

export const VaccinationAttesterParty: t.Type<VaccinationAttesterParty> = t.recursion(
    "VaccinationAttesterParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationAttesterPartyValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationAttester {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester";
    id?: string;
    extension?: (Extension | VaccinationAttesterMode | VaccinationAttesterParty)[];
}

const VaccinationAttester: t.Type<VaccinationAttester> = t.recursion(
    "VaccinationAttester",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationAttesterMode>,
                                t.Type<VaccinationAttesterParty>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationAttesterMode,
                            VaccinationAttesterParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationAttesterMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationAttesterParty,
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

export default VaccinationAttester;
