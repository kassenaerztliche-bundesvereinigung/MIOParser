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
import CMRU4PhysicalExamHeadVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU4PhysicalExamHead";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Head"

/**
 * Content in other Language.
 */
export interface CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU4PhysicalExamHeadCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU4PhysicalExamHeadCodeCodingDisplay: t.Type<CMRObservationU4PhysicalExamHeadCodeCodingDisplay> =
    t.recursion("CMRObservationU4PhysicalExamHeadCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU4PhysicalExamHeadCodeCoding {
    system: string;
    version: string;
    code: CMRU4PhysicalExamHeadVS;
    id?: string;
    _display?: CMRObservationU4PhysicalExamHeadCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU4PhysicalExamHeadCodeCoding: t.Type<CMRObservationU4PhysicalExamHeadCodeCoding> =
    t.recursion("CMRObservationU4PhysicalExamHeadCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU4PhysicalExamHeadVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU4PhysicalExamHeadCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU4PhysicalExamHeadMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Head|1.0.1">;
    id?: string;
}

export const CMRObservationU4PhysicalExamHeadMeta: t.Type<CMRObservationU4PhysicalExamHeadMeta> =
    t.recursion("CMRObservationU4PhysicalExamHeadMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Head|1.0.1"
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
export interface CMRObservationU4PhysicalExamHeadCode {
    coding: Array<CMRObservationU4PhysicalExamHeadCodeCoding>;
    id?: string;
}

export const CMRObservationU4PhysicalExamHeadCode: t.Type<CMRObservationU4PhysicalExamHeadCode> =
    t.recursion("CMRObservationU4PhysicalExamHeadCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU4PhysicalExamHeadCodeCoding)
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
export interface CMRObservationU4PhysicalExamHeadSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamHeadSubject: t.Type<CMRObservationU4PhysicalExamHeadSubject> =
    t.recursion("CMRObservationU4PhysicalExamHeadSubject", () =>
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
export interface CMRObservationU4PhysicalExamHeadEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamHeadEncounter: t.Type<CMRObservationU4PhysicalExamHeadEncounter> =
    t.recursion("CMRObservationU4PhysicalExamHeadEncounter", () =>
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
export interface CMRObservationU4PhysicalExamHeadPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU4PhysicalExamHeadPerformer: t.Type<CMRObservationU4PhysicalExamHeadPerformer> =
    t.recursion("CMRObservationU4PhysicalExamHeadPerformer", () =>
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

interface CMRObservationU4PhysicalExamHead {
    resourceType: "Observation";
    meta: CMRObservationU4PhysicalExamHeadMeta;
    status: "final";
    code: CMRObservationU4PhysicalExamHeadCode;
    subject: CMRObservationU4PhysicalExamHeadSubject;
    encounter: CMRObservationU4PhysicalExamHeadEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU4PhysicalExamHeadPerformer>;
}

const CMRObservationU4PhysicalExamHead: t.Type<CMRObservationU4PhysicalExamHead> =
    t.recursion("CMRObservationU4PhysicalExamHead", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU4PhysicalExamHeadMeta,
                    status: Literal("final"),
                    code: CMRObservationU4PhysicalExamHeadCode,
                    subject: CMRObservationU4PhysicalExamHeadSubject,
                    encounter: CMRObservationU4PhysicalExamHeadEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU4PhysicalExamHeadPerformer)
                })
            ])
        )
    );

export default CMRObservationU4PhysicalExamHead;
