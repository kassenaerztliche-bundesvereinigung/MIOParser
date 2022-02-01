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
import CMRU2PhysicalExamHeadVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU2PhysicalExamHead";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Head"

/**
 * Content in other Language.
 */
export interface CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2PhysicalExamHeadCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2PhysicalExamHeadCodeCodingDisplay: t.Type<CMRObservationU2PhysicalExamHeadCodeCodingDisplay> =
    t.recursion("CMRObservationU2PhysicalExamHeadCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2PhysicalExamHeadCodeCoding {
    system: string;
    version: string;
    code: CMRU2PhysicalExamHeadVS;
    id?: string;
    _display?: CMRObservationU2PhysicalExamHeadCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2PhysicalExamHeadCodeCoding: t.Type<CMRObservationU2PhysicalExamHeadCodeCoding> =
    t.recursion("CMRObservationU2PhysicalExamHeadCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2PhysicalExamHeadVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2PhysicalExamHeadCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2PhysicalExamHeadMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Head|1.0.1">;
    id?: string;
}

export const CMRObservationU2PhysicalExamHeadMeta: t.Type<CMRObservationU2PhysicalExamHeadMeta> =
    t.recursion("CMRObservationU2PhysicalExamHeadMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Head|1.0.1"
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
export interface CMRObservationU2PhysicalExamHeadCode {
    coding: Array<CMRObservationU2PhysicalExamHeadCodeCoding>;
    id?: string;
}

export const CMRObservationU2PhysicalExamHeadCode: t.Type<CMRObservationU2PhysicalExamHeadCode> =
    t.recursion("CMRObservationU2PhysicalExamHeadCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU2PhysicalExamHeadCodeCoding)
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
export interface CMRObservationU2PhysicalExamHeadSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamHeadSubject: t.Type<CMRObservationU2PhysicalExamHeadSubject> =
    t.recursion("CMRObservationU2PhysicalExamHeadSubject", () =>
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
export interface CMRObservationU2PhysicalExamHeadEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamHeadEncounter: t.Type<CMRObservationU2PhysicalExamHeadEncounter> =
    t.recursion("CMRObservationU2PhysicalExamHeadEncounter", () =>
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
export interface CMRObservationU2PhysicalExamHeadPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamHeadPerformer: t.Type<CMRObservationU2PhysicalExamHeadPerformer> =
    t.recursion("CMRObservationU2PhysicalExamHeadPerformer", () =>
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

interface CMRObservationU2PhysicalExamHead {
    resourceType: "Observation";
    meta: CMRObservationU2PhysicalExamHeadMeta;
    status: "final";
    code: CMRObservationU2PhysicalExamHeadCode;
    subject: CMRObservationU2PhysicalExamHeadSubject;
    encounter: CMRObservationU2PhysicalExamHeadEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2PhysicalExamHeadPerformer>;
}

const CMRObservationU2PhysicalExamHead: t.Type<CMRObservationU2PhysicalExamHead> =
    t.recursion("CMRObservationU2PhysicalExamHead", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2PhysicalExamHeadMeta,
                    status: Literal("final"),
                    code: CMRObservationU2PhysicalExamHeadCode,
                    subject: CMRObservationU2PhysicalExamHeadSubject,
                    encounter: CMRObservationU2PhysicalExamHeadEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU2PhysicalExamHeadPerformer)
                })
            ])
        )
    );

export default CMRObservationU2PhysicalExamHead;
