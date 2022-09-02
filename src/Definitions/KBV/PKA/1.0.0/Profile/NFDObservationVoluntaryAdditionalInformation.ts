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
import {
    Literal,
    Excess,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Voluntary_Additional_Information"

/**
 * Content in other Language.
 */
export interface NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: "Freiwillige Zusatzinformationen";
    id?: string;
}

export const NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent: t.Type<NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent> =
    t.recursion(
        "NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Freiwillige Zusatzinformationen")
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
export interface NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent
    )[];
}

export const NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode: t.Type<NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode> =
    t.recursion(
        "NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode",
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
                                    t.Type<NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCodeContent,
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
export interface NFDObservationVoluntaryAdditionalInformationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode
    )[];
    value?: string;
}

export const NFDObservationVoluntaryAdditionalInformationCodeCodingDisplay: t.Type<NFDObservationVoluntaryAdditionalInformationCodeCodingDisplay> =
    t.recursion("NFDObservationVoluntaryAdditionalInformationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDObservationVoluntaryAdditionalInformationCodeCodingDisplayAnzeigenameCode,
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
export interface NFDObservationVoluntaryAdditionalInformationCodeCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "77599-9";
    display: "Additional documentation";
    id?: string;
    _display?: NFDObservationVoluntaryAdditionalInformationCodeCodingDisplay;
}

export const NFDObservationVoluntaryAdditionalInformationCodeCoding: t.Type<NFDObservationVoluntaryAdditionalInformationCodeCoding> =
    t.recursion("NFDObservationVoluntaryAdditionalInformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("77599-9"),
                    display: Literal("Additional documentation")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        NFDObservationVoluntaryAdditionalInformationCodeCodingDisplay
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDObservationVoluntaryAdditionalInformationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Voluntary_Additional_Information|1.0.0">;
    id?: string;
}

export const NFDObservationVoluntaryAdditionalInformationMeta: t.Type<NFDObservationVoluntaryAdditionalInformationMeta> =
    t.recursion("NFDObservationVoluntaryAdditionalInformationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Voluntary_Additional_Information|1.0.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface NFDObservationVoluntaryAdditionalInformationCode {
    coding: Array<NFDObservationVoluntaryAdditionalInformationCodeCoding>;
    id?: string;
}

export const NFDObservationVoluntaryAdditionalInformationCode: t.Type<NFDObservationVoluntaryAdditionalInformationCode> =
    t.recursion("NFDObservationVoluntaryAdditionalInformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDObservationVoluntaryAdditionalInformationCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface NFDObservationVoluntaryAdditionalInformationSubjectReference {
    reference: string;
    id?: string;
}

export const NFDObservationVoluntaryAdditionalInformationSubjectReference: t.Type<NFDObservationVoluntaryAdditionalInformationSubjectReference> =
    t.recursion("NFDObservationVoluntaryAdditionalInformationSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDObservationVoluntaryAdditionalInformation {
    resourceType: "Observation";
    meta: NFDObservationVoluntaryAdditionalInformationMeta;
    status: "final";
    code: NFDObservationVoluntaryAdditionalInformationCode;
    subject: NFDObservationVoluntaryAdditionalInformationSubjectReference;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
}

const NFDObservationVoluntaryAdditionalInformation: t.Type<NFDObservationVoluntaryAdditionalInformation> =
    t.recursion("NFDObservationVoluntaryAdditionalInformation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: NFDObservationVoluntaryAdditionalInformationMeta,
                    status: Literal("final"),
                    code: NFDObservationVoluntaryAdditionalInformationCode,
                    subject: NFDObservationVoluntaryAdditionalInformationSubjectReference,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

export default NFDObservationVoluntaryAdditionalInformation;
