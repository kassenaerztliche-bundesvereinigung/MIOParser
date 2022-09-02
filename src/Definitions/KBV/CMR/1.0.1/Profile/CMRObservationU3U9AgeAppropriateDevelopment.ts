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
import CMRU3U9AgeAppropriateDevelopmentVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU3U9AgeAppropriateDevelopment";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> =
    t.recursion(
        "CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Orientierende Beurteilung der Entwicklung altersgemäß:";
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Orientierende Beurteilung der Entwicklung altersgemäß:"
                        )
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> =
    t.recursion(
        "CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplay: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplay> =
    t.recursion(
        "CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplay: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplay> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCoding {
    system: string;
    version: string;
    code: CMRU3U9AgeAppropriateDevelopmentVS;
    id?: string;
    _display?: CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCoding: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCoding> =
    t.recursion(
        "CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: SCALARUri,
                        version: SCALARString,
                        code: CMRU3U9AgeAppropriateDevelopmentVS
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU3U9AgeAppropriateDevelopmentCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "406207000";
    id?: string;
    _display?: CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentCodeCoding: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCodeCoding> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("406207000")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU3U9AgeAppropriateDevelopmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConcept {
    coding: Array<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCoding>;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConcept: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConcept> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConcept", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConceptCoding
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.1">;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentMeta: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentMeta> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U9_Age_Appropriate_Development|1.0.1"
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentCode {
    coding: Array<CMRObservationU3U9AgeAppropriateDevelopmentCodeCoding>;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentCode: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentCode> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U9AgeAppropriateDevelopmentCodeCoding
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentSubjectReference: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentSubjectReference> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentSubjectReference", () =>
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentEncounterReference: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentEncounterReference> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentEncounterReference", () =>
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
export interface CMRObservationU3U9AgeAppropriateDevelopmentPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU3U9AgeAppropriateDevelopmentPerformerReference: t.Type<CMRObservationU3U9AgeAppropriateDevelopmentPerformerReference> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopmentPerformerReference", () =>
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

interface CMRObservationU3U9AgeAppropriateDevelopment {
    resourceType: "Observation";
    meta: CMRObservationU3U9AgeAppropriateDevelopmentMeta;
    status: "final";
    code: CMRObservationU3U9AgeAppropriateDevelopmentCode;
    subject: CMRObservationU3U9AgeAppropriateDevelopmentSubjectReference;
    encounter: CMRObservationU3U9AgeAppropriateDevelopmentEncounterReference;
    effectiveDateTime: string;
    valueCodeableConcept: CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConcept;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U9AgeAppropriateDevelopmentPerformerReference>;
}

const CMRObservationU3U9AgeAppropriateDevelopment: t.Type<CMRObservationU3U9AgeAppropriateDevelopment> =
    t.recursion("CMRObservationU3U9AgeAppropriateDevelopment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U9AgeAppropriateDevelopmentMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U9AgeAppropriateDevelopmentCode,
                    subject: CMRObservationU3U9AgeAppropriateDevelopmentSubjectReference,
                    encounter:
                        CMRObservationU3U9AgeAppropriateDevelopmentEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept:
                        CMRObservationU3U9AgeAppropriateDevelopmentValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU3U9AgeAppropriateDevelopmentPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU3U9AgeAppropriateDevelopment;
