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
import CMRU8PhysicalExamAbdomenGenitalsVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU8PhysicalExamAbdomenGenitals";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplay> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsCodeCoding {
    system: string;
    version: string;
    code: CMRU8PhysicalExamAbdomenGenitalsVS;
    id?: string;
    _display?: CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCoding> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU8PhysicalExamAbdomenGenitalsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU8PhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU8PhysicalExamAbdomenGenitalsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Abdomen_Genitals|1.0.1">;
    id?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsMeta: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsMeta> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Abdomen_Genitals|1.0.1"
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRObservationU8PhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsCode: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsCode> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU8PhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsSubjectReference: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsSubjectReference> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsSubjectReference", () =>
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsEncounterReference: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsEncounterReference> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsEncounterReference", () =>
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
export interface CMRObservationU8PhysicalExamAbdomenGenitalsPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU8PhysicalExamAbdomenGenitalsPerformerReference: t.Type<CMRObservationU8PhysicalExamAbdomenGenitalsPerformerReference> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitalsPerformerReference", () =>
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

interface CMRObservationU8PhysicalExamAbdomenGenitals {
    resourceType: "Observation";
    meta: CMRObservationU8PhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRObservationU8PhysicalExamAbdomenGenitalsCode;
    subject: CMRObservationU8PhysicalExamAbdomenGenitalsSubjectReference;
    encounter: CMRObservationU8PhysicalExamAbdomenGenitalsEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU8PhysicalExamAbdomenGenitalsPerformerReference>;
}

const CMRObservationU8PhysicalExamAbdomenGenitals: t.Type<CMRObservationU8PhysicalExamAbdomenGenitals> =
    t.recursion("CMRObservationU8PhysicalExamAbdomenGenitals", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU8PhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRObservationU8PhysicalExamAbdomenGenitalsCode,
                    subject: CMRObservationU8PhysicalExamAbdomenGenitalsSubjectReference,
                    encounter:
                        CMRObservationU8PhysicalExamAbdomenGenitalsEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU8PhysicalExamAbdomenGenitalsPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU8PhysicalExamAbdomenGenitals;
