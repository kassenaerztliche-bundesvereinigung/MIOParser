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
import { Literal, ReqArray, MinMaxArray } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import LebensphaseVS from "../../../../Definitions/KBVBase/1.0.2/ValueSet/Lebensphase";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase"

/**
 * Content in other Language.
 */
export interface LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent: t.Type<LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent> = t.recursion(
    "LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent",
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
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German";
    id?: string;
    extension?: (
        | Extension
        | LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
    )[];
}

export const LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay: t.Type<LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay> = t.recursion(
    "LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay",
    () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                )
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface LebensphaseValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
    )[];
    value?: string;
}

export const LebensphaseValueCodeableConceptCodingDisplay: t.Type<LebensphaseValueCodeableConceptCodingDisplay> = t.recursion(
    "LebensphaseValueCodeableConceptCodingDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
                        >
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: LebensphaseValueCodeableConceptCodingDisplaySnomedCTGermanDisplay,
                        occurrence: ["1", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARString
        })
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface LebensphaseValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200309";
    code: LebensphaseVS;
    id?: string;
    _display?: LebensphaseValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const LebensphaseValueCodeableConceptCoding: t.Type<LebensphaseValueCodeableConceptCoding> = t.recursion(
    "LebensphaseValueCodeableConceptCoding",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20200309"
                ),
                code: LebensphaseVS
            }),
            t.partial({
                id: SCALARString,
                _display: LebensphaseValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface LebensphaseValueCodeableConcept {
    coding: Array<LebensphaseValueCodeableConceptCoding>;
    id?: string;
}

export const LebensphaseValueCodeableConcept: t.Type<LebensphaseValueCodeableConcept> = t.recursion(
    "LebensphaseValueCodeableConcept",
    () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, LebensphaseValueCodeableConceptCoding)
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

interface Lebensphase {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase";
    valueCodeableConcept: LebensphaseValueCodeableConcept;
    id?: string;
}

const Lebensphase: t.Type<Lebensphase> = t.recursion("Lebensphase", () =>
    t.intersection([
        t.type({
            url: Literal(
                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase"
            ),
            valueCodeableConcept: LebensphaseValueCodeableConcept
        }),
        t.partial({
            id: SCALARString
        })
    ])
);

export default Lebensphase;
