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
import CMRGenderBirthVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRGenderBirth";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Geschlecht";
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Geschlecht")
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
export interface CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplay: t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplay> =
    t.recursion(
        "CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface CMRObservationU1U3GenderBirthHistoryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U3GenderBirthHistoryCodeCodingDisplay: t.Type<CMRObservationU1U3GenderBirthHistoryCodeCodingDisplay> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U3GenderBirthHistoryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCoding {
    system: string;
    version: string;
    code: CMRGenderBirthVS;
    id?: string;
    _display?: CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCoding: t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCoding> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRGenderBirthVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU1U3GenderBirthHistoryCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "263495000";
    id?: string;
    _display?: CMRObservationU1U3GenderBirthHistoryCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U3GenderBirthHistoryCodeCoding: t.Type<CMRObservationU1U3GenderBirthHistoryCodeCoding> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("263495000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU1U3GenderBirthHistoryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU1U3GenderBirthHistoryValueCodeableConcept {
    coding: Array<CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCoding>;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryValueCodeableConcept: t.Type<CMRObservationU1U3GenderBirthHistoryValueCodeableConcept> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3GenderBirthHistoryValueCodeableConceptCoding
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
export interface CMRObservationU1U3GenderBirthHistoryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History|1.0.1">;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryMeta: t.Type<CMRObservationU1U3GenderBirthHistoryMeta> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Gender_Birth_History|1.0.1"
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
export interface CMRObservationU1U3GenderBirthHistoryCode {
    coding: Array<CMRObservationU1U3GenderBirthHistoryCodeCoding>;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryCode: t.Type<CMRObservationU1U3GenderBirthHistoryCode> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U3GenderBirthHistoryCodeCoding
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
export interface CMRObservationU1U3GenderBirthHistorySubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistorySubject: t.Type<CMRObservationU1U3GenderBirthHistorySubject> =
    t.recursion("CMRObservationU1U3GenderBirthHistorySubject", () =>
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
export interface CMRObservationU1U3GenderBirthHistoryEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryEncounter: t.Type<CMRObservationU1U3GenderBirthHistoryEncounter> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryEncounter", () =>
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
export interface CMRObservationU1U3GenderBirthHistoryPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U3GenderBirthHistoryPerformer: t.Type<CMRObservationU1U3GenderBirthHistoryPerformer> =
    t.recursion("CMRObservationU1U3GenderBirthHistoryPerformer", () =>
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

interface CMRObservationU1U3GenderBirthHistory {
    resourceType: "Observation";
    meta: CMRObservationU1U3GenderBirthHistoryMeta;
    status: "final";
    code: CMRObservationU1U3GenderBirthHistoryCode;
    subject: CMRObservationU1U3GenderBirthHistorySubject;
    encounter: CMRObservationU1U3GenderBirthHistoryEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: CMRObservationU1U3GenderBirthHistoryValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U3GenderBirthHistoryPerformer>;
}

const CMRObservationU1U3GenderBirthHistory: t.Type<CMRObservationU1U3GenderBirthHistory> =
    t.recursion("CMRObservationU1U3GenderBirthHistory", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U3GenderBirthHistoryMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U3GenderBirthHistoryCode,
                    subject: CMRObservationU1U3GenderBirthHistorySubject,
                    encounter: CMRObservationU1U3GenderBirthHistoryEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        CMRObservationU1U3GenderBirthHistoryValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU1U3GenderBirthHistoryPerformer)
                })
            ])
        )
    );

export default CMRObservationU1U3GenderBirthHistory;
