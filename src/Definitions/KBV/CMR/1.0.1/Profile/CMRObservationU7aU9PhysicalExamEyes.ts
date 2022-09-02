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
import CMRU7aU9PhysicalExamEyesVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7aU9PhysicalExamEyes";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_U9_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplay: t.Type<CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplay> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7aU9PhysicalExamEyesCodeCoding {
    system: string;
    version: string;
    code: CMRU7aU9PhysicalExamEyesVS;
    id?: string;
    _display?: CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesCodeCoding: t.Type<CMRObservationU7aU9PhysicalExamEyesCodeCoding> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7aU9PhysicalExamEyesVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7aU9PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7aU9PhysicalExamEyesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_U9_Physical_Exam_Eyes|1.0.1">;
    id?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesMeta: t.Type<CMRObservationU7aU9PhysicalExamEyesMeta> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_U9_Physical_Exam_Eyes|1.0.1"
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
export interface CMRObservationU7aU9PhysicalExamEyesCode {
    coding: Array<CMRObservationU7aU9PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesCode: t.Type<CMRObservationU7aU9PhysicalExamEyesCode> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7aU9PhysicalExamEyesCodeCoding
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
export interface CMRObservationU7aU9PhysicalExamEyesSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesSubjectReference: t.Type<CMRObservationU7aU9PhysicalExamEyesSubjectReference> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesSubjectReference", () =>
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
export interface CMRObservationU7aU9PhysicalExamEyesEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesEncounterReference: t.Type<CMRObservationU7aU9PhysicalExamEyesEncounterReference> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesEncounterReference", () =>
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
export interface CMRObservationU7aU9PhysicalExamEyesPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7aU9PhysicalExamEyesPerformerReference: t.Type<CMRObservationU7aU9PhysicalExamEyesPerformerReference> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyesPerformerReference", () =>
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

interface CMRObservationU7aU9PhysicalExamEyes {
    resourceType: "Observation";
    meta: CMRObservationU7aU9PhysicalExamEyesMeta;
    status: "final";
    code: CMRObservationU7aU9PhysicalExamEyesCode;
    subject: CMRObservationU7aU9PhysicalExamEyesSubjectReference;
    encounter: CMRObservationU7aU9PhysicalExamEyesEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7aU9PhysicalExamEyesPerformerReference>;
}

const CMRObservationU7aU9PhysicalExamEyes: t.Type<CMRObservationU7aU9PhysicalExamEyes> =
    t.recursion("CMRObservationU7aU9PhysicalExamEyes", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7aU9PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRObservationU7aU9PhysicalExamEyesCode,
                    subject: CMRObservationU7aU9PhysicalExamEyesSubjectReference,
                    encounter: CMRObservationU7aU9PhysicalExamEyesEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU7aU9PhysicalExamEyesPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU7aU9PhysicalExamEyes;
