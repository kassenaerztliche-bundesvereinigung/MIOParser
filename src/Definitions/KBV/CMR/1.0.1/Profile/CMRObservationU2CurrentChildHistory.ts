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
import CMRU2CurrentChildHistoryVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU2CurrentChildHistory";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Current_Child_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2CurrentChildHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2CurrentChildHistoryCodeCodingDisplay: t.Type<CMRObservationU2CurrentChildHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU2CurrentChildHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2CurrentChildHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2CurrentChildHistoryCodeCoding {
    system: string;
    version: string;
    code: CMRU2CurrentChildHistoryVS;
    id?: string;
    _display?: CMRObservationU2CurrentChildHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2CurrentChildHistoryCodeCoding: t.Type<CMRObservationU2CurrentChildHistoryCodeCoding> =
    t.recursion("CMRObservationU2CurrentChildHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2CurrentChildHistoryVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2CurrentChildHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2CurrentChildHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Current_Child_History|1.0.1">;
    id?: string;
}

export const CMRObservationU2CurrentChildHistoryMeta: t.Type<CMRObservationU2CurrentChildHistoryMeta> =
    t.recursion("CMRObservationU2CurrentChildHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Current_Child_History|1.0.1"
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
export interface CMRObservationU2CurrentChildHistoryCode {
    coding: Array<CMRObservationU2CurrentChildHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU2CurrentChildHistoryCode: t.Type<CMRObservationU2CurrentChildHistoryCode> =
    t.recursion("CMRObservationU2CurrentChildHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU2CurrentChildHistoryCodeCoding
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
export interface CMRObservationU2CurrentChildHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2CurrentChildHistorySubject: t.Type<CMRObservationU2CurrentChildHistorySubject> =
    t.recursion("CMRObservationU2CurrentChildHistorySubject", () =>
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
export interface CMRObservationU2CurrentChildHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2CurrentChildHistoryEncounter: t.Type<CMRObservationU2CurrentChildHistoryEncounter> =
    t.recursion("CMRObservationU2CurrentChildHistoryEncounter", () =>
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
export interface CMRObservationU2CurrentChildHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2CurrentChildHistoryPerformer: t.Type<CMRObservationU2CurrentChildHistoryPerformer> =
    t.recursion("CMRObservationU2CurrentChildHistoryPerformer", () =>
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

interface CMRObservationU2CurrentChildHistory {
    resourceType: "Observation";
    meta: CMRObservationU2CurrentChildHistoryMeta;
    status: "final";
    code: CMRObservationU2CurrentChildHistoryCode;
    subject: CMRObservationU2CurrentChildHistorySubject;
    encounter: CMRObservationU2CurrentChildHistoryEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2CurrentChildHistoryPerformer>;
}

const CMRObservationU2CurrentChildHistory: t.Type<CMRObservationU2CurrentChildHistory> =
    t.recursion("CMRObservationU2CurrentChildHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2CurrentChildHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU2CurrentChildHistoryCode,
                    subject: CMRObservationU2CurrentChildHistorySubject,
                    encounter: CMRObservationU2CurrentChildHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU2CurrentChildHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU2CurrentChildHistory;
