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
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import NFDPregnancyStatusVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDPregnancyStatus";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Status"

/**
 * Content in other Language.
 */
export interface NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent: t.Type<NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent> =
    t.recursion(
        "NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent",
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
 * Content in other Language.
 */
export interface NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent {
    url: "content";
    valueString: "Aktueller Schwangerschaftsstatus";
    id?: string;
}

export const NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent: t.Type<NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent> =
    t.recursion(
        "NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Aktueller Schwangerschaftsstatus")
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
export interface NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent
    )[];
}

export const NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue: t.Type<NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue> =
    t.recursion(
        "NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue",
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
                                    t.Type<NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValueContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent
    )[];
}

export const NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode: t.Type<NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode> =
    t.recursion("NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode", () =>
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
                                t.Type<NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCodeContent,
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
export interface NFDObservationPregnancyStatusValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue
    )[];
    value?: string;
}

export const NFDObservationPregnancyStatusValueCodeableConceptCodingDisplay: t.Type<NFDObservationPregnancyStatusValueCodeableConceptCodingDisplay> =
    t.recursion("NFDObservationPregnancyStatusValueCodeableConceptCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDObservationPregnancyStatusValueCodeableConceptCodingDisplayAnzeigenameValue,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDObservationPregnancyStatusCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode
    )[];
    value?: string;
}

export const NFDObservationPregnancyStatusCodeCodingDisplay: t.Type<NFDObservationPregnancyStatusCodeCodingDisplay> =
    t.recursion("NFDObservationPregnancyStatusCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDObservationPregnancyStatusCodeCodingDisplayAnzeigenameCode,
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
export interface NFDObservationPregnancyStatusValueCodeableConceptCoding {
    system: string;
    version: string;
    code: NFDPregnancyStatusVS;
    id?: string;
    _display?: NFDObservationPregnancyStatusValueCodeableConceptCodingDisplay;
    display?: string;
}

export const NFDObservationPregnancyStatusValueCodeableConceptCoding: t.Type<NFDObservationPregnancyStatusValueCodeableConceptCoding> =
    t.recursion("NFDObservationPregnancyStatusValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: NFDPregnancyStatusVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        NFDObservationPregnancyStatusValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDObservationPregnancyStatusCodeCoding {
    system: "http://loinc.org";
    version: "2.71";
    code: "82810-3";
    display: "Pregnancy status";
    id?: string;
    _display?: NFDObservationPregnancyStatusCodeCodingDisplay;
}

export const NFDObservationPregnancyStatusCodeCoding: t.Type<NFDObservationPregnancyStatusCodeCoding> =
    t.recursion("NFDObservationPregnancyStatusCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("82810-3"),
                    display: Literal("Pregnancy status")
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDObservationPregnancyStatusCodeCodingDisplay
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface NFDObservationPregnancyStatusValueCodeableConcept {
    coding: Array<NFDObservationPregnancyStatusValueCodeableConceptCoding>;
    id?: string;
}

export const NFDObservationPregnancyStatusValueCodeableConcept: t.Type<NFDObservationPregnancyStatusValueCodeableConcept> =
    t.recursion("NFDObservationPregnancyStatusValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDObservationPregnancyStatusValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDObservationPregnancyStatusMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Status|1.0.0">;
    id?: string;
}

export const NFDObservationPregnancyStatusMeta: t.Type<NFDObservationPregnancyStatusMeta> =
    t.recursion("NFDObservationPregnancyStatusMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Observation_Pregnancy_Status|1.0.0"
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
export interface NFDObservationPregnancyStatusCode {
    coding: Array<NFDObservationPregnancyStatusCodeCoding>;
    id?: string;
}

export const NFDObservationPregnancyStatusCode: t.Type<NFDObservationPregnancyStatusCode> =
    t.recursion("NFDObservationPregnancyStatusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDObservationPregnancyStatusCodeCoding)
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
export interface NFDObservationPregnancyStatusSubjectReference {
    reference: string;
    id?: string;
}

export const NFDObservationPregnancyStatusSubjectReference: t.Type<NFDObservationPregnancyStatusSubjectReference> =
    t.recursion("NFDObservationPregnancyStatusSubjectReference", () =>
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

/**
 * Who was responsible for asserting the observed value as "true".
 */
export interface NFDObservationPregnancyStatusPerformerReference {
    reference: string;
    id?: string;
}

export const NFDObservationPregnancyStatusPerformerReference: t.Type<NFDObservationPregnancyStatusPerformerReference> =
    t.recursion("NFDObservationPregnancyStatusPerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Role_With_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDObservationPregnancyStatus {
    resourceType: "Observation";
    meta: NFDObservationPregnancyStatusMeta;
    status: "final";
    code: NFDObservationPregnancyStatusCode;
    subject: NFDObservationPregnancyStatusSubjectReference;
    effectiveDateTime: string;
    valueCodeableConcept: NFDObservationPregnancyStatusValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<NFDObservationPregnancyStatusPerformerReference>;
}

const NFDObservationPregnancyStatus: t.Type<NFDObservationPregnancyStatus> = t.recursion(
    "NFDObservationPregnancyStatus",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: NFDObservationPregnancyStatusMeta,
                    status: Literal("final"),
                    code: NFDObservationPregnancyStatusCode,
                    subject: NFDObservationPregnancyStatusSubjectReference,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        NFDObservationPregnancyStatusValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        NFDObservationPregnancyStatusPerformerReference
                    )
                })
            ])
        )
);

export default NFDObservationPregnancyStatus;
