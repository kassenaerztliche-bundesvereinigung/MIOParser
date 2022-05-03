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
import { Literal, Excess, ReqArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import StageLifeVS from "../../../../../Definitions/KBVBase/1.1.1/ValueSet/StageLife";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Age_Groups"

/**
 * Content in other Language.
 */
export interface VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "content" }
                                }
                            ],
                            ["0", "*"]
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface VaccinationAgeGroupsValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const VaccinationAgeGroupsValueCodeableConceptCodingDisplay: t.Type<VaccinationAgeGroupsValueCodeableConceptCodingDisplay> =
    t.recursion("VaccinationAgeGroupsValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationAgeGroupsValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["0", "*"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationAgeGroupsValueCodeableConceptCoding {
    system: string;
    version: string;
    code: StageLifeVS;
    id?: string;
    _display?: VaccinationAgeGroupsValueCodeableConceptCodingDisplay;
    display?: string;
}

export const VaccinationAgeGroupsValueCodeableConceptCoding: t.Type<VaccinationAgeGroupsValueCodeableConceptCoding> =
    t.recursion("VaccinationAgeGroupsValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: StageLifeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: VaccinationAgeGroupsValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface VaccinationAgeGroupsValueCodeableConcept {
    coding: Array<VaccinationAgeGroupsValueCodeableConceptCoding>;
    id?: string;
}

export const VaccinationAgeGroupsValueCodeableConcept: t.Type<VaccinationAgeGroupsValueCodeableConcept> =
    t.recursion("VaccinationAgeGroupsValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        VaccinationAgeGroupsValueCodeableConceptCoding
                    )
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
