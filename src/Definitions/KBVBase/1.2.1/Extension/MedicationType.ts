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
import { Literal, ReqArray, MaxArray } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MedicationTypeVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/MedicationType";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Medication_Type"

/**
 * Content in other Language.
 */
export interface MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent: t.Type<MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent> =
    t.recursion(
        "MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman {
    extension: Array<
        | Extension
        | MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman: t.Type<MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman> =
    t.recursion(
        "MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGermanContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MedicationTypeValueCodeableConceptCodingDisplay {
    extension: Array<
        | Extension
        | MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman
    >;
    id?: string;
    value?: string;
}

export const MedicationTypeValueCodeableConceptCodingDisplay: t.Type<MedicationTypeValueCodeableConceptCodingDisplay> =
    t.recursion("MedicationTypeValueCodeableConceptCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MedicationTypeValueCodeableConceptCodingDisplayAnzeigenameFachterminusGerman,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MedicationTypeValueCodeableConceptCoding {
    system: string;
    version: string;
    code: MedicationTypeVS;
    id?: string;
    _display?: MedicationTypeValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const MedicationTypeValueCodeableConceptCoding: t.Type<MedicationTypeValueCodeableConceptCoding> =
    t.recursion("MedicationTypeValueCodeableConceptCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: MedicationTypeVS
            }),
            t.partial({
                id: SCALARString,
                _display: MedicationTypeValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MedicationTypeValueCodeableConcept {
    id?: string;
    coding?: Array<MedicationTypeValueCodeableConceptCoding>;
    text?: string;
}

export const MedicationTypeValueCodeableConcept: t.Type<MedicationTypeValueCodeableConcept> =
    t.recursion("MedicationTypeValueCodeableConcept", () =>
        t.partial({
            id: SCALARString,
            coding: MaxArray(1, MedicationTypeValueCodeableConceptCoding),
            text: SCALARString
        })
    );

interface MedicationType {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Medication_Type";
    id?: string;
    valueCodeableConcept?: MedicationTypeValueCodeableConcept;
}

const MedicationType: t.Type<MedicationType> = t.recursion("MedicationType", () =>
    t.intersection([
        t.type({
            url: Literal(
                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Medication_Type"
            )
        }),
        t.partial({
            id: SCALARString,
            valueCodeableConcept: MedicationTypeValueCodeableConcept
        })
    ])
);

export default MedicationType;
