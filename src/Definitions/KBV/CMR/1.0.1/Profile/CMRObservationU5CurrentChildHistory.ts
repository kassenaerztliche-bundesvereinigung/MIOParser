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
import CMRU5CurrentChildHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU5CurrentChildHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Current_Child_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU5CurrentChildHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU5CurrentChildHistoryCodeCodingDisplay: t.Type<CMRObservationU5CurrentChildHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU5CurrentChildHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU5CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU5CurrentChildHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU5CurrentChildHistoryVS;
    id?: string;
    _display?: CMRObservationU5CurrentChildHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU5CurrentChildHistoryCodeCoding: t.Type<CMRObservationU5CurrentChildHistoryCodeCoding> =
    t.recursion("CMRObservationU5CurrentChildHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU5CurrentChildHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU5CurrentChildHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU5CurrentChildHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Current_Child_History|1.0.1">;
    id?: string;
}

export const CMRObservationU5CurrentChildHistoryMeta: t.Type<CMRObservationU5CurrentChildHistoryMeta> =
    t.recursion("CMRObservationU5CurrentChildHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Current_Child_History|1.0.1"
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
export interface CMRObservationU5CurrentChildHistoryCode {
    coding: Array<CMRObservationU5CurrentChildHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU5CurrentChildHistoryCode: t.Type<CMRObservationU5CurrentChildHistoryCode> =
    t.recursion("CMRObservationU5CurrentChildHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU5CurrentChildHistoryCodeCoding
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
export interface CMRObservationU5CurrentChildHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU5CurrentChildHistorySubject: t.Type<CMRObservationU5CurrentChildHistorySubject> =
    t.recursion("CMRObservationU5CurrentChildHistorySubject", () =>
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
export interface CMRObservationU5CurrentChildHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU5CurrentChildHistoryEncounter: t.Type<CMRObservationU5CurrentChildHistoryEncounter> =
    t.recursion("CMRObservationU5CurrentChildHistoryEncounter", () =>
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
export interface CMRObservationU5CurrentChildHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU5CurrentChildHistoryPerformer: t.Type<CMRObservationU5CurrentChildHistoryPerformer> =
    t.recursion("CMRObservationU5CurrentChildHistoryPerformer", () =>
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

interface CMRObservationU5CurrentChildHistory {
    resourceType: "Observation";
    meta: CMRObservationU5CurrentChildHistoryMeta;
    status: "final";
    code: CMRObservationU5CurrentChildHistoryCode;
    subject: CMRObservationU5CurrentChildHistorySubject;
    encounter: CMRObservationU5CurrentChildHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU5CurrentChildHistoryPerformer>;
}

const CMRObservationU5CurrentChildHistory: t.Type<CMRObservationU5CurrentChildHistory> =
    t.recursion("CMRObservationU5CurrentChildHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU5CurrentChildHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU5CurrentChildHistoryCode,
                    subject: CMRObservationU5CurrentChildHistorySubject,
                    encounter: CMRObservationU5CurrentChildHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU5CurrentChildHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU5CurrentChildHistory;
