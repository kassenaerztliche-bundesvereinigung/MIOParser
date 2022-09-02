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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization"

/**
 * Content in other Language.
 */
export interface CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent {
    url: "content";
    valueString: "fehlende Impfungen";
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent: t.Type<CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent> =
    t.recursion(
        "CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("fehlende Impfungen")
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
export interface CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Impfstatus beim Verlassen der Praxis vollständig:";
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Impfstatus beim Verlassen der Praxis vollständig:"
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
export interface CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent
    )[];
}

export const CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed: t.Type<CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed> =
    t.recursion(
        "CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed",
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
                                    t.Type<CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomedContent,
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
export interface CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed
    )[];
    value?: string;
}

export const CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplay: t.Type<CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplay> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplayAnzeigenameComponentSnomed,
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
export interface CMRObservationU4U9StatusOfImmunizationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU4U9StatusOfImmunizationCodeCodingDisplay: t.Type<CMRObservationU4U9StatusOfImmunizationCodeCodingDisplay> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU4U9StatusOfImmunizationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU4U9StatusOfImmunizationComponentCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "171279008";
    id?: string;
    _display?: CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU4U9StatusOfImmunizationComponentCodeCoding: t.Type<CMRObservationU4U9StatusOfImmunizationComponentCodeCoding> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationComponentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("171279008")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU4U9StatusOfImmunizationComponentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU4U9StatusOfImmunizationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "171258008";
    id?: string;
    _display?: CMRObservationU4U9StatusOfImmunizationCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU4U9StatusOfImmunizationCodeCoding: t.Type<CMRObservationU4U9StatusOfImmunizationCodeCoding> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("171258008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU4U9StatusOfImmunizationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface CMRObservationU4U9StatusOfImmunizationComponentCode {
    coding: Array<CMRObservationU4U9StatusOfImmunizationComponentCodeCoding>;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationComponentCode: t.Type<CMRObservationU4U9StatusOfImmunizationComponentCode> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationComponentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU4U9StatusOfImmunizationComponentCodeCoding
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
export interface CMRObservationU4U9StatusOfImmunizationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.1">;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationMeta: t.Type<CMRObservationU4U9StatusOfImmunizationMeta> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U9_Status_Of_Immunization|1.0.1"
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
export interface CMRObservationU4U9StatusOfImmunizationCode {
    coding: Array<CMRObservationU4U9StatusOfImmunizationCodeCoding>;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationCode: t.Type<CMRObservationU4U9StatusOfImmunizationCode> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU4U9StatusOfImmunizationCodeCoding
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
export interface CMRObservationU4U9StatusOfImmunizationSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationSubjectReference: t.Type<CMRObservationU4U9StatusOfImmunizationSubjectReference> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationSubjectReference", () =>
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
export interface CMRObservationU4U9StatusOfImmunizationEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationEncounterReference: t.Type<CMRObservationU4U9StatusOfImmunizationEncounterReference> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationEncounterReference", () =>
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
export interface CMRObservationU4U9StatusOfImmunizationPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationPerformerReference: t.Type<CMRObservationU4U9StatusOfImmunizationPerformerReference> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationPerformerReference", () =>
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

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface CMRObservationU4U9StatusOfImmunizationComponent {
    code: CMRObservationU4U9StatusOfImmunizationComponentCode;
    valueString: string;
    id?: string;
}

export const CMRObservationU4U9StatusOfImmunizationComponent: t.Type<CMRObservationU4U9StatusOfImmunizationComponent> =
    t.recursion("CMRObservationU4U9StatusOfImmunizationComponent", () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRObservationU4U9StatusOfImmunizationComponentCode,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRObservationU4U9StatusOfImmunization {
    resourceType: "Observation";
    meta: CMRObservationU4U9StatusOfImmunizationMeta;
    status: "final";
    code: CMRObservationU4U9StatusOfImmunizationCode;
    subject: CMRObservationU4U9StatusOfImmunizationSubjectReference;
    encounter: CMRObservationU4U9StatusOfImmunizationEncounterReference;
    effectiveDateTime: string;
    valueBoolean: boolean;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU4U9StatusOfImmunizationPerformerReference>;
    component?: Array<CMRObservationU4U9StatusOfImmunizationComponent>;
}

const CMRObservationU4U9StatusOfImmunization: t.Type<CMRObservationU4U9StatusOfImmunization> =
    t.recursion("CMRObservationU4U9StatusOfImmunization", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU4U9StatusOfImmunizationMeta,
                    status: Literal("final"),
                    code: CMRObservationU4U9StatusOfImmunizationCode,
                    subject: CMRObservationU4U9StatusOfImmunizationSubjectReference,
                    encounter: CMRObservationU4U9StatusOfImmunizationEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU4U9StatusOfImmunizationPerformerReference
                    ),
                    component: MaxArray(
                        1,
                        CMRObservationU4U9StatusOfImmunizationComponent
                    )
                })
            ])
        )
    );

export default CMRObservationU4U9StatusOfImmunization;
