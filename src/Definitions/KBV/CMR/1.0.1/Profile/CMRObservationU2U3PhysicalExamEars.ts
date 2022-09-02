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
import CMRU2U3PhysicalExamEarsVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU2U3PhysicalExamEars";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U3_Physical_Exam_Ears"

/**
 * Content in other Language.
 */
export interface CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2U3PhysicalExamEarsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2U3PhysicalExamEarsCodeCodingDisplay: t.Type<CMRObservationU2U3PhysicalExamEarsCodeCodingDisplay> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2U3PhysicalExamEarsCodeCoding {
    system: string;
    version: string;
    code: CMRU2U3PhysicalExamEarsVS;
    id?: string;
    _display?: CMRObservationU2U3PhysicalExamEarsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2U3PhysicalExamEarsCodeCoding: t.Type<CMRObservationU2U3PhysicalExamEarsCodeCoding> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2U3PhysicalExamEarsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U3PhysicalExamEarsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2U3PhysicalExamEarsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U3_Physical_Exam_Ears|1.0.1">;
    id?: string;
}

export const CMRObservationU2U3PhysicalExamEarsMeta: t.Type<CMRObservationU2U3PhysicalExamEarsMeta> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U3_Physical_Exam_Ears|1.0.1"
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
export interface CMRObservationU2U3PhysicalExamEarsCode {
    coding: Array<CMRObservationU2U3PhysicalExamEarsCodeCoding>;
    id?: string;
}

export const CMRObservationU2U3PhysicalExamEarsCode: t.Type<CMRObservationU2U3PhysicalExamEarsCode> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU2U3PhysicalExamEarsCodeCoding
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
export interface CMRObservationU2U3PhysicalExamEarsSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2U3PhysicalExamEarsSubjectReference: t.Type<CMRObservationU2U3PhysicalExamEarsSubjectReference> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsSubjectReference", () =>
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
export interface CMRObservationU2U3PhysicalExamEarsEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2U3PhysicalExamEarsEncounterReference: t.Type<CMRObservationU2U3PhysicalExamEarsEncounterReference> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsEncounterReference", () =>
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
export interface CMRObservationU2U3PhysicalExamEarsPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2U3PhysicalExamEarsPerformerReference: t.Type<CMRObservationU2U3PhysicalExamEarsPerformerReference> =
    t.recursion("CMRObservationU2U3PhysicalExamEarsPerformerReference", () =>
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

interface CMRObservationU2U3PhysicalExamEars {
    resourceType: "Observation";
    meta: CMRObservationU2U3PhysicalExamEarsMeta;
    status: "final";
    code: CMRObservationU2U3PhysicalExamEarsCode;
    subject: CMRObservationU2U3PhysicalExamEarsSubjectReference;
    encounter: CMRObservationU2U3PhysicalExamEarsEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2U3PhysicalExamEarsPerformerReference>;
}

const CMRObservationU2U3PhysicalExamEars: t.Type<CMRObservationU2U3PhysicalExamEars> =
    t.recursion("CMRObservationU2U3PhysicalExamEars", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2U3PhysicalExamEarsMeta,
                    status: Literal("final"),
                    code: CMRObservationU2U3PhysicalExamEarsCode,
                    subject: CMRObservationU2U3PhysicalExamEarsSubjectReference,
                    encounter: CMRObservationU2U3PhysicalExamEarsEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU2U3PhysicalExamEarsPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU2U3PhysicalExamEars;
