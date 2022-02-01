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
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRU3U9SocialHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU3U9SocialHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U9SocialHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U9SocialHistoryCodeCodingDisplay: t.Type<CMRObservationU3U9SocialHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU3U9SocialHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U9SocialHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U9SocialHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU3U9SocialHistoryVS;
    id?: string;
    _display?: CMRObservationU3U9SocialHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U9SocialHistoryCodeCoding: t.Type<CMRObservationU3U9SocialHistoryCodeCoding> =
    t.recursion("CMRObservationU3U9SocialHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU3U9SocialHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U9SocialHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U9SocialHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.1">;
    id?: string;
}

export const CMRObservationU3U9SocialHistoryMeta: t.Type<CMRObservationU3U9SocialHistoryMeta> =
    t.recursion("CMRObservationU3U9SocialHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Social_History|1.0.1"
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
export interface CMRObservationU3U9SocialHistoryCode {
    coding: Array<CMRObservationU3U9SocialHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU3U9SocialHistoryCode: t.Type<CMRObservationU3U9SocialHistoryCode> =
    t.recursion("CMRObservationU3U9SocialHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU3U9SocialHistoryCodeCoding)
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
export interface CMRObservationU3U9SocialHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3U9SocialHistorySubject: t.Type<CMRObservationU3U9SocialHistorySubject> =
    t.recursion("CMRObservationU3U9SocialHistorySubject", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU3U9SocialHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3U9SocialHistoryEncounter: t.Type<CMRObservationU3U9SocialHistoryEncounter> =
    t.recursion("CMRObservationU3U9SocialHistoryEncounter", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU3U9SocialHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3U9SocialHistoryPerformer: t.Type<CMRObservationU3U9SocialHistoryPerformer> =
    t.recursion("CMRObservationU3U9SocialHistoryPerformer", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU3U9SocialHistory {
    resourceType: "Observation";
    meta: CMRObservationU3U9SocialHistoryMeta;
    status: "final";
    code: CMRObservationU3U9SocialHistoryCode;
    subject: CMRObservationU3U9SocialHistorySubject;
    encounter: CMRObservationU3U9SocialHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U9SocialHistoryPerformer>;
}

const CMRObservationU3U9SocialHistory: t.Type<CMRObservationU3U9SocialHistory> =
    t.recursion("CMRObservationU3U9SocialHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U9SocialHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U9SocialHistoryCode,
                    subject: CMRObservationU3U9SocialHistorySubject,
                    encounter: CMRObservationU3U9SocialHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU3U9SocialHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU3U9SocialHistory;
