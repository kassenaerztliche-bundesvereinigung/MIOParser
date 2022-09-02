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
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

import ZAEBPreventiveCheckUpTypeVS from "../../../../../Definitions/KBV/ZB/1.1.0/ValueSet/ZAEBPreventiveCheckUpType";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Dental_Check_Up"

/**
 * Content in other Language.
 */
export interface ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface ZAEBObservationDentalCheckUpCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const ZAEBObservationDentalCheckUpCodeCodingDisplay: t.Type<ZAEBObservationDentalCheckUpCodeCodingDisplay> =
    t.recursion("ZAEBObservationDentalCheckUpCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ZAEBObservationDentalCheckUpCodeCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["0", "1"],
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
 * In diesem Element wird die Art der Untersuchung angegeben.
 */
export interface ZAEBObservationDentalCheckUpCodeCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: ZAEBPreventiveCheckUpTypeVS;
    id?: string;
    _display?: ZAEBObservationDentalCheckUpCodeCodingDisplay;
    display?: string;
}

export const ZAEBObservationDentalCheckUpCodeCoding: t.Type<ZAEBObservationDentalCheckUpCodeCoding> =
    t.recursion("ZAEBObservationDentalCheckUpCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: ZAEBPreventiveCheckUpTypeVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: ZAEBObservationDentalCheckUpCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface ZAEBObservationDentalCheckUpMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Dental_Check_Up|1.1.0">;
    id?: string;
}

export const ZAEBObservationDentalCheckUpMeta: t.Type<ZAEBObservationDentalCheckUpMeta> =
    t.recursion("ZAEBObservationDentalCheckUpMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Observation_Dental_Check_Up|1.1.0"
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
export interface ZAEBObservationDentalCheckUpCode {
    coding: Array<ZAEBObservationDentalCheckUpCodeCoding>;
    id?: string;
}

export const ZAEBObservationDentalCheckUpCode: t.Type<ZAEBObservationDentalCheckUpCode> =
    t.recursion("ZAEBObservationDentalCheckUpCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, ZAEBObservationDentalCheckUpCodeCoding)
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
export interface ZAEBObservationDentalCheckUpSubjectReference {
    reference: string;
    id?: string;
}

export const ZAEBObservationDentalCheckUpSubjectReference: t.Type<ZAEBObservationDentalCheckUpSubjectReference> =
    t.recursion("ZAEBObservationDentalCheckUpSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.1.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface ZAEBObservationDentalCheckUp {
    resourceType: "Observation";
    meta: ZAEBObservationDentalCheckUpMeta;
    status: "final";
    code: ZAEBObservationDentalCheckUpCode;
    subject: ZAEBObservationDentalCheckUpSubjectReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
}

const ZAEBObservationDentalCheckUp: t.Type<ZAEBObservationDentalCheckUp> = t.recursion(
    "ZAEBObservationDentalCheckUp",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: ZAEBObservationDentalCheckUpMeta,
                    status: Literal("final"),
                    code: ZAEBObservationDentalCheckUpCode,
                    subject: ZAEBObservationDentalCheckUpSubjectReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative
                })
            ])
        )
);

export default ZAEBObservationDentalCheckUp;
