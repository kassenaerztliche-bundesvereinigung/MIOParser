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
import CMRU7aandU9PhysicalExamMusculoskeletalSystemVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7aandU9PhysicalExamMusculoskeletalSystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCoding {
    system: string;
    version: string;
    code: CMRU7aandU9PhysicalExamMusculoskeletalSystemVS;
    id?: string;
    _display?: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7aandU9PhysicalExamMusculoskeletalSystemVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_and_U9_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCode: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemSubjectReference: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemSubjectReference> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemSubjectReference",
        () =>
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemEncounterReference: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemEncounterReference> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemEncounterReference",
        () =>
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
export interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemPerformerReference: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemPerformerReference> =
    t.recursion(
        "CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemPerformerReference",
        () =>
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

interface CMRObservationU7aandU9PhysicalExamMusculoskeletalSystem {
    resourceType: "Observation";
    meta: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCode;
    subject: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemSubjectReference;
    encounter: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    performer?: Array<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemPerformerReference>;
}

const CMRObservationU7aandU9PhysicalExamMusculoskeletalSystem: t.Type<CMRObservationU7aandU9PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRObservationU7aandU9PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemCode,
                    subject:
                        CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemSubjectReference,
                    encounter:
                        CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    performer: MaxArray(
                        1,
                        CMRObservationU7aandU9PhysicalExamMusculoskeletalSystemPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU7aandU9PhysicalExamMusculoskeletalSystem;
