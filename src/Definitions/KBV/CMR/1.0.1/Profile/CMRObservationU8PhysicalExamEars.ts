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
import CMRU8PhysicalExamEarsVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU8PhysicalExamEars";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Ears"

/**
 * Content in other Language.
 */
export interface CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU8PhysicalExamEarsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU8PhysicalExamEarsCodeCodingDisplay: t.Type<CMRObservationU8PhysicalExamEarsCodeCodingDisplay> =
    t.recursion("CMRObservationU8PhysicalExamEarsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU8PhysicalExamEarsCodeCoding {
    system: string;
    version: string;
    code: CMRU8PhysicalExamEarsVS;
    id?: string;
    _display?: CMRObservationU8PhysicalExamEarsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU8PhysicalExamEarsCodeCoding: t.Type<CMRObservationU8PhysicalExamEarsCodeCoding> =
    t.recursion("CMRObservationU8PhysicalExamEarsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU8PhysicalExamEarsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU8PhysicalExamEarsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU8PhysicalExamEarsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Ears|1.0.1">;
    id?: string;
}

export const CMRObservationU8PhysicalExamEarsMeta: t.Type<CMRObservationU8PhysicalExamEarsMeta> =
    t.recursion("CMRObservationU8PhysicalExamEarsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Ears|1.0.1"
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
export interface CMRObservationU8PhysicalExamEarsCode {
    coding: Array<CMRObservationU8PhysicalExamEarsCodeCoding>;
    id?: string;
}

export const CMRObservationU8PhysicalExamEarsCode: t.Type<CMRObservationU8PhysicalExamEarsCode> =
    t.recursion("CMRObservationU8PhysicalExamEarsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU8PhysicalExamEarsCodeCoding)
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
export interface CMRObservationU8PhysicalExamEarsSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamEarsSubject: t.Type<CMRObservationU8PhysicalExamEarsSubject> =
    t.recursion("CMRObservationU8PhysicalExamEarsSubject", () =>
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
export interface CMRObservationU8PhysicalExamEarsEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamEarsEncounter: t.Type<CMRObservationU8PhysicalExamEarsEncounter> =
    t.recursion("CMRObservationU8PhysicalExamEarsEncounter", () =>
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
export interface CMRObservationU8PhysicalExamEarsPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamEarsPerformer: t.Type<CMRObservationU8PhysicalExamEarsPerformer> =
    t.recursion("CMRObservationU8PhysicalExamEarsPerformer", () =>
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

interface CMRObservationU8PhysicalExamEars {
    resourceType: "Observation";
    meta: CMRObservationU8PhysicalExamEarsMeta;
    status: "final";
    code: CMRObservationU8PhysicalExamEarsCode;
    subject: CMRObservationU8PhysicalExamEarsSubject;
    encounter: CMRObservationU8PhysicalExamEarsEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU8PhysicalExamEarsPerformer>;
}

const CMRObservationU8PhysicalExamEars: t.Type<CMRObservationU8PhysicalExamEars> =
    t.recursion("CMRObservationU8PhysicalExamEars", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU8PhysicalExamEarsMeta,
                    status: Literal("final"),
                    code: CMRObservationU8PhysicalExamEarsCode,
                    subject: CMRObservationU8PhysicalExamEarsSubject,
                    encounter: CMRObservationU8PhysicalExamEarsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU8PhysicalExamEarsPerformer)
                })
            ])
        )
    );

export default CMRObservationU8PhysicalExamEars;
