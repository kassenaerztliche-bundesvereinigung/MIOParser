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
import CMRU4U5PhysicalExamEyesVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU4U5PhysicalExamEyes";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U5_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU4U5PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU4U5PhysicalExamEyesCodeCodingDisplay: t.Type<CMRObservationU4U5PhysicalExamEyesCodeCodingDisplay> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU4U5PhysicalExamEyesCodeCoding {
    system: string;
    version: string;
    code: CMRU4U5PhysicalExamEyesVS;
    id?: string;
    _display?: CMRObservationU4U5PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU4U5PhysicalExamEyesCodeCoding: t.Type<CMRObservationU4U5PhysicalExamEyesCodeCoding> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU4U5PhysicalExamEyesVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU4U5PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU4U5PhysicalExamEyesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U5_Physical_Exam_Eyes|1.0.1">;
    id?: string;
}

export const CMRObservationU4U5PhysicalExamEyesMeta: t.Type<CMRObservationU4U5PhysicalExamEyesMeta> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U5_Physical_Exam_Eyes|1.0.1"
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
export interface CMRObservationU4U5PhysicalExamEyesCode {
    coding: Array<CMRObservationU4U5PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRObservationU4U5PhysicalExamEyesCode: t.Type<CMRObservationU4U5PhysicalExamEyesCode> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU4U5PhysicalExamEyesCodeCoding
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
export interface CMRObservationU4U5PhysicalExamEyesSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU4U5PhysicalExamEyesSubjectReference: t.Type<CMRObservationU4U5PhysicalExamEyesSubjectReference> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesSubjectReference", () =>
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
export interface CMRObservationU4U5PhysicalExamEyesEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU4U5PhysicalExamEyesEncounterReference: t.Type<CMRObservationU4U5PhysicalExamEyesEncounterReference> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesEncounterReference", () =>
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
export interface CMRObservationU4U5PhysicalExamEyesPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU4U5PhysicalExamEyesPerformerReference: t.Type<CMRObservationU4U5PhysicalExamEyesPerformerReference> =
    t.recursion("CMRObservationU4U5PhysicalExamEyesPerformerReference", () =>
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

interface CMRObservationU4U5PhysicalExamEyes {
    resourceType: "Observation";
    meta: CMRObservationU4U5PhysicalExamEyesMeta;
    status: "final";
    code: CMRObservationU4U5PhysicalExamEyesCode;
    subject: CMRObservationU4U5PhysicalExamEyesSubjectReference;
    encounter: CMRObservationU4U5PhysicalExamEyesEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU4U5PhysicalExamEyesPerformerReference>;
}

const CMRObservationU4U5PhysicalExamEyes: t.Type<CMRObservationU4U5PhysicalExamEyes> =
    t.recursion("CMRObservationU4U5PhysicalExamEyes", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU4U5PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRObservationU4U5PhysicalExamEyesCode,
                    subject: CMRObservationU4U5PhysicalExamEyesSubjectReference,
                    encounter: CMRObservationU4U5PhysicalExamEyesEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU4U5PhysicalExamEyesPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU4U5PhysicalExamEyes;
