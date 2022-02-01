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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood"

/**
 * Content in other Language.
 */
export interface CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent {
    url: "content";
    valueString: "Erstabnahme vor der vollendeten 36. Lebensstunde /  Bei Geburt vor der vollendeten 32. Schwangerschaftswoche";
    id?: string;
}

export const CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent: t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent> =
    t.recursion(
        "CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Erstabnahme vor der vollendeten 36. Lebensstunde /  Bei Geburt vor der vollendeten 32. Schwangerschaftswoche"
                        )
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
export interface CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent
    )[];
}

export const CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed: t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed> =
    t.recursion(
        "CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed",
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
                                    t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomedContent,
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
export interface CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed
    )[];
    value?: string;
}

export const CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplay: t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplay> =
    t.recursion("CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplayAnzeigenameStatusReasonSnomed,
                            occurrence: ["1", "1"],
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
export interface CMREarlyCollectionOfBloodValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "738796001:363702006=395507008";
    id?: string;
    _display?: CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplay;
    display?: "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Premature infant (finding)";
}

export const CMREarlyCollectionOfBloodValueCodeableConceptCoding: t.Type<CMREarlyCollectionOfBloodValueCodeableConceptCoding> =
    t.recursion("CMREarlyCollectionOfBloodValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("738796001:363702006=395507008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMREarlyCollectionOfBloodValueCodeableConceptCodingDisplay,
                    display: Literal(
                        "Collection of dried blood spot specimen (procedure) : Has focus (attribute) = Premature infant (finding)"
                    )
                })
            ])
        )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface CMREarlyCollectionOfBloodValueCodeableConcept {
    coding: Array<CMREarlyCollectionOfBloodValueCodeableConceptCoding>;
    id?: string;
}

export const CMREarlyCollectionOfBloodValueCodeableConcept: t.Type<CMREarlyCollectionOfBloodValueCodeableConcept> =
    t.recursion("CMREarlyCollectionOfBloodValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMREarlyCollectionOfBloodValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMREarlyCollectionOfBlood {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood";
    valueCodeableConcept: CMREarlyCollectionOfBloodValueCodeableConcept;
    id?: string;
}

const CMREarlyCollectionOfBlood: t.Type<CMREarlyCollectionOfBlood> = t.recursion(
    "CMREarlyCollectionOfBlood",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_CMR_Early_Collection_Of_Blood"
                    ),
                    valueCodeableConcept: CMREarlyCollectionOfBloodValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default CMREarlyCollectionOfBlood;
