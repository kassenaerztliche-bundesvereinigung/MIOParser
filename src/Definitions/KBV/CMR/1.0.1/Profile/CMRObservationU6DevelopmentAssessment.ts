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
import CMRU6DevelopmentAssessmentVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU6DevelopmentAssessment";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Development_Assessment"

/**
 * Content in other Language.
 */
export interface CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU6DevelopmentAssessmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU6DevelopmentAssessmentCodeCodingDisplay: t.Type<CMRObservationU6DevelopmentAssessmentCodeCodingDisplay> =
    t.recursion("CMRObservationU6DevelopmentAssessmentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU6DevelopmentAssessmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU6DevelopmentAssessmentCodeCoding {
    system: string;
    version: string;
    code: CMRU6DevelopmentAssessmentVS;
    id?: string;
    _display?: CMRObservationU6DevelopmentAssessmentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU6DevelopmentAssessmentCodeCoding: t.Type<CMRObservationU6DevelopmentAssessmentCodeCoding> =
    t.recursion("CMRObservationU6DevelopmentAssessmentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU6DevelopmentAssessmentVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU6DevelopmentAssessmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU6DevelopmentAssessmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Development_Assessment|1.0.1">;
    id?: string;
}

export const CMRObservationU6DevelopmentAssessmentMeta: t.Type<CMRObservationU6DevelopmentAssessmentMeta> =
    t.recursion("CMRObservationU6DevelopmentAssessmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Development_Assessment|1.0.1"
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
export interface CMRObservationU6DevelopmentAssessmentCode {
    coding: Array<CMRObservationU6DevelopmentAssessmentCodeCoding>;
    id?: string;
}

export const CMRObservationU6DevelopmentAssessmentCode: t.Type<CMRObservationU6DevelopmentAssessmentCode> =
    t.recursion("CMRObservationU6DevelopmentAssessmentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU6DevelopmentAssessmentCodeCoding
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
export interface CMRObservationU6DevelopmentAssessmentSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU6DevelopmentAssessmentSubjectReference: t.Type<CMRObservationU6DevelopmentAssessmentSubjectReference> =
    t.recursion("CMRObservationU6DevelopmentAssessmentSubjectReference", () =>
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
export interface CMRObservationU6DevelopmentAssessmentEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU6DevelopmentAssessmentEncounterReference: t.Type<CMRObservationU6DevelopmentAssessmentEncounterReference> =
    t.recursion("CMRObservationU6DevelopmentAssessmentEncounterReference", () =>
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
export interface CMRObservationU6DevelopmentAssessmentPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU6DevelopmentAssessmentPerformerReference: t.Type<CMRObservationU6DevelopmentAssessmentPerformerReference> =
    t.recursion("CMRObservationU6DevelopmentAssessmentPerformerReference", () =>
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

interface CMRObservationU6DevelopmentAssessment {
    resourceType: "Observation";
    meta: CMRObservationU6DevelopmentAssessmentMeta;
    status: "final";
    code: CMRObservationU6DevelopmentAssessmentCode;
    subject: CMRObservationU6DevelopmentAssessmentSubjectReference;
    encounter: CMRObservationU6DevelopmentAssessmentEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU6DevelopmentAssessmentPerformerReference>;
}

const CMRObservationU6DevelopmentAssessment: t.Type<CMRObservationU6DevelopmentAssessment> =
    t.recursion("CMRObservationU6DevelopmentAssessment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU6DevelopmentAssessmentMeta,
                    status: Literal("final"),
                    code: CMRObservationU6DevelopmentAssessmentCode,
                    subject: CMRObservationU6DevelopmentAssessmentSubjectReference,
                    encounter: CMRObservationU6DevelopmentAssessmentEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU6DevelopmentAssessmentPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU6DevelopmentAssessment;
