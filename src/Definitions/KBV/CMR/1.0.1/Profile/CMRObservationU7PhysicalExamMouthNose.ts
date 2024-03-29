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
import CMRU7PhysicalExamMouthNoseVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU7PhysicalExamMouthNose";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU7PhysicalExamMouthNoseCodeCoding {
    system: string;
    version: string;
    code: CMRU7PhysicalExamMouthNoseVS;
    id?: string;
    _display?: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCodeCoding: t.Type<CMRObservationU7PhysicalExamMouthNoseCodeCoding> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU7PhysicalExamMouthNoseVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU7PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU7PhysicalExamMouthNoseMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Mouth_Nose|1.0.1">;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseMeta: t.Type<CMRObservationU7PhysicalExamMouthNoseMeta> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Mouth_Nose|1.0.1"
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
export interface CMRObservationU7PhysicalExamMouthNoseCode {
    coding: Array<CMRObservationU7PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseCode: t.Type<CMRObservationU7PhysicalExamMouthNoseCode> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU7PhysicalExamMouthNoseCodeCoding
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
export interface CMRObservationU7PhysicalExamMouthNoseSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseSubjectReference: t.Type<CMRObservationU7PhysicalExamMouthNoseSubjectReference> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseSubjectReference", () =>
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
export interface CMRObservationU7PhysicalExamMouthNoseEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNoseEncounterReference: t.Type<CMRObservationU7PhysicalExamMouthNoseEncounterReference> =
    t.recursion("CMRObservationU7PhysicalExamMouthNoseEncounterReference", () =>
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
export interface CMRObservationU7PhysicalExamMouthNosePerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU7PhysicalExamMouthNosePerformerReference: t.Type<CMRObservationU7PhysicalExamMouthNosePerformerReference> =
    t.recursion("CMRObservationU7PhysicalExamMouthNosePerformerReference", () =>
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

interface CMRObservationU7PhysicalExamMouthNose {
    resourceType: "Observation";
    meta: CMRObservationU7PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRObservationU7PhysicalExamMouthNoseCode;
    subject: CMRObservationU7PhysicalExamMouthNoseSubjectReference;
    encounter: CMRObservationU7PhysicalExamMouthNoseEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU7PhysicalExamMouthNosePerformerReference>;
}

const CMRObservationU7PhysicalExamMouthNose: t.Type<CMRObservationU7PhysicalExamMouthNose> =
    t.recursion("CMRObservationU7PhysicalExamMouthNose", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU7PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRObservationU7PhysicalExamMouthNoseCode,
                    subject: CMRObservationU7PhysicalExamMouthNoseSubjectReference,
                    encounter: CMRObservationU7PhysicalExamMouthNoseEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU7PhysicalExamMouthNosePerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU7PhysicalExamMouthNose;
