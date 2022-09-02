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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment"

/**
 * Content in other Language.
 */
export interface CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Eltern sind unzufrieden mit der Entwicklung und dem Verhalten des Kindes, weil:";
    id?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Eltern sind unzufrieden mit der Entwicklung und dem Verhalten des Kindes, weil:"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplay: t.Type<CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplay> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationPhysicalExamParentalAssessmentCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "401141001";
    id?: string;
    _display?: CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplay;
    display?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentCodeCoding: t.Type<CMRObservationPhysicalExamParentalAssessmentCodeCoding> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("401141001")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationPhysicalExamParentalAssessmentCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationPhysicalExamParentalAssessmentMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.1">;
    id?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentMeta: t.Type<CMRObservationPhysicalExamParentalAssessmentMeta> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Physical_Exam_Parental_Assessment|1.0.1"
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
export interface CMRObservationPhysicalExamParentalAssessmentCode {
    coding: Array<CMRObservationPhysicalExamParentalAssessmentCodeCoding>;
    id?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentCode: t.Type<CMRObservationPhysicalExamParentalAssessmentCode> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationPhysicalExamParentalAssessmentCodeCoding
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
export interface CMRObservationPhysicalExamParentalAssessmentSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentSubjectReference: t.Type<CMRObservationPhysicalExamParentalAssessmentSubjectReference> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentSubjectReference", () =>
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
export interface CMRObservationPhysicalExamParentalAssessmentEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentEncounterReference: t.Type<CMRObservationPhysicalExamParentalAssessmentEncounterReference> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentEncounterReference", () =>
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
export interface CMRObservationPhysicalExamParentalAssessmentPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationPhysicalExamParentalAssessmentPerformerReference: t.Type<CMRObservationPhysicalExamParentalAssessmentPerformerReference> =
    t.recursion("CMRObservationPhysicalExamParentalAssessmentPerformerReference", () =>
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

interface CMRObservationPhysicalExamParentalAssessment {
    resourceType: "Observation";
    meta: CMRObservationPhysicalExamParentalAssessmentMeta;
    status: "final";
    code: CMRObservationPhysicalExamParentalAssessmentCode;
    subject: CMRObservationPhysicalExamParentalAssessmentSubjectReference;
    encounter: CMRObservationPhysicalExamParentalAssessmentEncounterReference;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationPhysicalExamParentalAssessmentPerformerReference>;
}

const CMRObservationPhysicalExamParentalAssessment: t.Type<CMRObservationPhysicalExamParentalAssessment> =
    t.recursion("CMRObservationPhysicalExamParentalAssessment", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationPhysicalExamParentalAssessmentMeta,
                    status: Literal("final"),
                    code: CMRObservationPhysicalExamParentalAssessmentCode,
                    subject: CMRObservationPhysicalExamParentalAssessmentSubjectReference,
                    encounter:
                        CMRObservationPhysicalExamParentalAssessmentEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationPhysicalExamParentalAssessmentPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationPhysicalExamParentalAssessment;
