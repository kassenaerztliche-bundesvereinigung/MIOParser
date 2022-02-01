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
import CMRU5PhysicalExamMusculoskeletalSystemVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU5PhysicalExamMusculoskeletalSystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCoding {
    system: string;
    version: string;
    code: CMRU5PhysicalExamMusculoskeletalSystemVS;
    id?: string;
    _display?: CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU5PhysicalExamMusculoskeletalSystemVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemCode: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU5PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemSubject: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemSubject> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystemSubject", () =>
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemEncounter: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemEncounter> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystemEncounter", () =>
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
export interface CMRObservationU5PhysicalExamMusculoskeletalSystemPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU5PhysicalExamMusculoskeletalSystemPerformer: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystemPerformer> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystemPerformer", () =>
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

interface CMRObservationU5PhysicalExamMusculoskeletalSystem {
    resourceType: "Observation";
    meta: CMRObservationU5PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRObservationU5PhysicalExamMusculoskeletalSystemCode;
    subject: CMRObservationU5PhysicalExamMusculoskeletalSystemSubject;
    encounter: CMRObservationU5PhysicalExamMusculoskeletalSystemEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU5PhysicalExamMusculoskeletalSystemPerformer>;
}

const CMRObservationU5PhysicalExamMusculoskeletalSystem: t.Type<CMRObservationU5PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRObservationU5PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU5PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRObservationU5PhysicalExamMusculoskeletalSystemCode,
                    subject: CMRObservationU5PhysicalExamMusculoskeletalSystemSubject,
                    encounter: CMRObservationU5PhysicalExamMusculoskeletalSystemEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU5PhysicalExamMusculoskeletalSystemPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU5PhysicalExamMusculoskeletalSystem;
