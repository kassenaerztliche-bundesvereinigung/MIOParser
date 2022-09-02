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
import CMRHipHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRHipHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U4HipScreeningHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4HipScreeningHistoryCodeCodingDisplay: t.Type<CMRObservationU3U4HipScreeningHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU3U4HipScreeningHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4HipScreeningHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U4HipScreeningHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRHipHistoryVS;
    id?: string;
    _display?: CMRObservationU3U4HipScreeningHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4HipScreeningHistoryCodeCoding: t.Type<CMRObservationU3U4HipScreeningHistoryCodeCoding> =
    t.recursion("CMRObservationU3U4HipScreeningHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRHipHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4HipScreeningHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U4HipScreeningHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.1">;
    id?: string;
}

export const CMRObservationU3U4HipScreeningHistoryMeta: t.Type<CMRObservationU3U4HipScreeningHistoryMeta> =
    t.recursion("CMRObservationU3U4HipScreeningHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_History|1.0.1"
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
export interface CMRObservationU3U4HipScreeningHistoryCode {
    coding: Array<CMRObservationU3U4HipScreeningHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4HipScreeningHistoryCode: t.Type<CMRObservationU3U4HipScreeningHistoryCode> =
    t.recursion("CMRObservationU3U4HipScreeningHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4HipScreeningHistoryCodeCoding
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
export interface CMRObservationU3U4HipScreeningHistorySubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningHistorySubjectReference: t.Type<CMRObservationU3U4HipScreeningHistorySubjectReference> =
    t.recursion("CMRObservationU3U4HipScreeningHistorySubjectReference", () =>
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
export interface CMRObservationU3U4HipScreeningHistoryEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningHistoryEncounterReference: t.Type<CMRObservationU3U4HipScreeningHistoryEncounterReference> =
    t.recursion("CMRObservationU3U4HipScreeningHistoryEncounterReference", () =>
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
export interface CMRObservationU3U4HipScreeningHistoryPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningHistoryPerformerReference: t.Type<CMRObservationU3U4HipScreeningHistoryPerformerReference> =
    t.recursion("CMRObservationU3U4HipScreeningHistoryPerformerReference", () =>
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

interface CMRObservationU3U4HipScreeningHistory {
    resourceType: "Observation";
    meta: CMRObservationU3U4HipScreeningHistoryMeta;
    status: "final";
    code: CMRObservationU3U4HipScreeningHistoryCode;
    subject: CMRObservationU3U4HipScreeningHistorySubjectReference;
    encounter: CMRObservationU3U4HipScreeningHistoryEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U4HipScreeningHistoryPerformerReference>;
}

const CMRObservationU3U4HipScreeningHistory: t.Type<CMRObservationU3U4HipScreeningHistory> =
    t.recursion("CMRObservationU3U4HipScreeningHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U4HipScreeningHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U4HipScreeningHistoryCode,
                    subject: CMRObservationU3U4HipScreeningHistorySubjectReference,
                    encounter: CMRObservationU3U4HipScreeningHistoryEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU3U4HipScreeningHistoryPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU3U4HipScreeningHistory;
