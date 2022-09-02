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
import CMRU2PhysicalExamMusculoskeletalSystemVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU2PhysicalExamMusculoskeletalSystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCoding {
    system: string;
    version: string;
    code: CMRU2PhysicalExamMusculoskeletalSystemVS;
    id?: string;
    _display?: CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2PhysicalExamMusculoskeletalSystemVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRObservationU2PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemCode: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRObservationU2PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU2PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemSubjectReference: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemSubjectReference> =
    t.recursion("CMRObservationU2PhysicalExamMusculoskeletalSystemSubjectReference", () =>
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemEncounterReference: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemEncounterReference> =
    t.recursion(
        "CMRObservationU2PhysicalExamMusculoskeletalSystemEncounterReference",
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
export interface CMRObservationU2PhysicalExamMusculoskeletalSystemPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamMusculoskeletalSystemPerformerReference: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystemPerformerReference> =
    t.recursion(
        "CMRObservationU2PhysicalExamMusculoskeletalSystemPerformerReference",
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

interface CMRObservationU2PhysicalExamMusculoskeletalSystem {
    resourceType: "Observation";
    meta: CMRObservationU2PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRObservationU2PhysicalExamMusculoskeletalSystemCode;
    subject: CMRObservationU2PhysicalExamMusculoskeletalSystemSubjectReference;
    encounter: CMRObservationU2PhysicalExamMusculoskeletalSystemEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2PhysicalExamMusculoskeletalSystemPerformerReference>;
}

const CMRObservationU2PhysicalExamMusculoskeletalSystem: t.Type<CMRObservationU2PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRObservationU2PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRObservationU2PhysicalExamMusculoskeletalSystemCode,
                    subject:
                        CMRObservationU2PhysicalExamMusculoskeletalSystemSubjectReference,
                    encounter:
                        CMRObservationU2PhysicalExamMusculoskeletalSystemEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU2PhysicalExamMusculoskeletalSystemPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU2PhysicalExamMusculoskeletalSystem;
