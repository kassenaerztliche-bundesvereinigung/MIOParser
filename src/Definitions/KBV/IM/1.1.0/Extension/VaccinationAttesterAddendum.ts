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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester_Addendum"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationAttesterAddendumModeValueCodeableConceptCoding {
    system: "http://hl7.org/fhir/composition-attestation-mode";
    code: "legal";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationAttesterAddendumModeValueCodeableConceptCoding: t.Type<VaccinationAttesterAddendumModeValueCodeableConceptCoding> = t.recursion(
    "VaccinationAttesterAddendumModeValueCodeableConceptCoding",
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
export interface VaccinationAttesterAddendumModeValueCodeableConcept {
    coding: Array<VaccinationAttesterAddendumModeValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationAttesterAddendumModeValueCodeableConcept: t.Type<VaccinationAttesterAddendumModeValueCodeableConcept> = t.recursion(
    "VaccinationAttesterAddendumModeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationAttesterAddendumModeValueCodeableConceptCoding
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
export interface VaccinationAttesterAddendumPartyValueReference {
    reference: string;
    id?: string;
}

export const VaccinationAttesterAddendumPartyValueReference: t.Type<VaccinationAttesterAddendumPartyValueReference> = t.recursion(
    "VaccinationAttesterAddendumPartyValueReference",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Practitionerrole_Addendum"
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
export interface VaccinationAttesterAddendumMode {
    url: "mode";
    valueCodeableConcept: VaccinationAttesterAddendumModeValueCodeableConcept;
    id?: string;
}

export const VaccinationAttesterAddendumMode: t.Type<VaccinationAttesterAddendumMode> = t.recursion(
    "VaccinationAttesterAddendumMode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("mode"),
                    valueCodeableConcept: VaccinationAttesterAddendumModeValueCodeableConcept
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
export interface VaccinationAttesterAddendumParty {
    url: "party";
    valueReference: VaccinationAttesterAddendumPartyValueReference;
    id?: string;
}

export const VaccinationAttesterAddendumParty: t.Type<VaccinationAttesterAddendumParty> = t.recursion(
    "VaccinationAttesterAddendumParty",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("party"),
                    valueReference: VaccinationAttesterAddendumPartyValueReference
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface VaccinationAttesterAddendum {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester_Addendum";
    id?: string;
    extension?: (
        | Extension
        | VaccinationAttesterAddendumMode
        | VaccinationAttesterAddendumParty
    )[];
}

const VaccinationAttesterAddendum: t.Type<VaccinationAttesterAddendum> = t.recursion(
    "VaccinationAttesterAddendum",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Attester_Addendum"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<VaccinationAttesterAddendumMode>,
                                t.Type<VaccinationAttesterAddendumParty>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            VaccinationAttesterAddendumMode,
                            VaccinationAttesterAddendumParty
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationAttesterAddendumMode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "mode" }
                            },
                            {
                                codec: VaccinationAttesterAddendumParty,
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

export default VaccinationAttesterAddendum;
