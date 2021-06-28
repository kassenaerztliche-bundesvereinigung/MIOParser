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
import StageLifeVS from "../../../../Definitions/KBVBase/1.1.3/ValueSet/StageLife";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life"

/**
 * Content in other Language.
 */
export interface StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent: t.Type<StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent> = t.recursion(
    "StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent
    )[];
}

export const StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay: t.Type<StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay> = t.recursion(
    "StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay",
    () =>
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
                            t.Type<
                                StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplayContent,
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
export interface StageLifeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay
    )[];
    value?: string;
}

export const StageLifeValueCodeableConceptCodingDisplay: t.Type<StageLifeValueCodeableConceptCodingDisplay> = t.recursion(
    "StageLifeValueCodeableConceptCodingDisplay",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<
                            StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay
                        >
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: StageLifeValueCodeableConceptCodingDisplayAnzeigeNameDisplay,
                        occurrence: ["1", "1"],
                        sliceBy: {
                            path: "url",
                            value:
                                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface StageLifeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: StageLifeVS;
    id?: string;
    _display?: StageLifeValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const StageLifeValueCodeableConceptCoding: t.Type<StageLifeValueCodeableConceptCoding> = t.recursion(
    "StageLifeValueCodeableConceptCoding",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: StageLifeVS
            }),
            t.partial({
                id: SCALARString,
                _display: StageLifeValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface StageLifeValueCodeableConcept {
    coding: Array<StageLifeValueCodeableConceptCoding>;
    id?: string;
}

export const StageLifeValueCodeableConcept: t.Type<StageLifeValueCodeableConcept> = t.recursion(
    "StageLifeValueCodeableConcept",
    () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, StageLifeValueCodeableConceptCoding)
            }),
            t.partial({
                id: SCALARString
            })
        ])
);

interface StageLife {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life";
    valueCodeableConcept: StageLifeValueCodeableConcept;
    id?: string;
}

const StageLife: t.Type<StageLife> = t.recursion("StageLife", () =>
    t.intersection([
        t.type({
            url: Literal(
                "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life"
            ),
            valueCodeableConcept: StageLifeValueCodeableConcept
        }),
        t.partial({
            id: SCALARString
        })
    ])
);

export default StageLife;
