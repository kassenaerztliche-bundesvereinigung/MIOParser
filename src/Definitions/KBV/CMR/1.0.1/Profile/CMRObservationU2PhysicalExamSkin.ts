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
import CMRU2PhysicalExamSkinVS from "../../../../../Definitions/KBV/CMR/1.0.1/ValueSet/CMRU2PhysicalExamSkin";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Skin"

/**
 * Content in other Language.
 */
export interface CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2PhysicalExamSkinCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2PhysicalExamSkinCodeCodingDisplay: t.Type<CMRObservationU2PhysicalExamSkinCodeCodingDisplay> =
    t.recursion("CMRObservationU2PhysicalExamSkinCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2PhysicalExamSkinCodeCoding {
    system: string;
    version: string;
    code: CMRU2PhysicalExamSkinVS;
    id?: string;
    _display?: CMRObservationU2PhysicalExamSkinCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2PhysicalExamSkinCodeCoding: t.Type<CMRObservationU2PhysicalExamSkinCodeCoding> =
    t.recursion("CMRObservationU2PhysicalExamSkinCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRU2PhysicalExamSkinVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2PhysicalExamSkinCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2PhysicalExamSkinMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Skin|1.0.1">;
    id?: string;
}

export const CMRObservationU2PhysicalExamSkinMeta: t.Type<CMRObservationU2PhysicalExamSkinMeta> =
    t.recursion("CMRObservationU2PhysicalExamSkinMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_Physical_Exam_Skin|1.0.1"
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
export interface CMRObservationU2PhysicalExamSkinCode {
    coding: Array<CMRObservationU2PhysicalExamSkinCodeCoding>;
    id?: string;
}

export const CMRObservationU2PhysicalExamSkinCode: t.Type<CMRObservationU2PhysicalExamSkinCode> =
    t.recursion("CMRObservationU2PhysicalExamSkinCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRObservationU2PhysicalExamSkinCodeCoding)
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
export interface CMRObservationU2PhysicalExamSkinSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamSkinSubject: t.Type<CMRObservationU2PhysicalExamSkinSubject> =
    t.recursion("CMRObservationU2PhysicalExamSkinSubject", () =>
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
export interface CMRObservationU2PhysicalExamSkinEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamSkinEncounter: t.Type<CMRObservationU2PhysicalExamSkinEncounter> =
    t.recursion("CMRObservationU2PhysicalExamSkinEncounter", () =>
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
export interface CMRObservationU2PhysicalExamSkinPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2PhysicalExamSkinPerformer: t.Type<CMRObservationU2PhysicalExamSkinPerformer> =
    t.recursion("CMRObservationU2PhysicalExamSkinPerformer", () =>
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

interface CMRObservationU2PhysicalExamSkin {
    resourceType: "Observation";
    meta: CMRObservationU2PhysicalExamSkinMeta;
    status: "final";
    code: CMRObservationU2PhysicalExamSkinCode;
    subject: CMRObservationU2PhysicalExamSkinSubject;
    encounter: CMRObservationU2PhysicalExamSkinEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2PhysicalExamSkinPerformer>;
}

const CMRObservationU2PhysicalExamSkin: t.Type<CMRObservationU2PhysicalExamSkin> =
    t.recursion("CMRObservationU2PhysicalExamSkin", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2PhysicalExamSkinMeta,
                    status: Literal("final"),
                    code: CMRObservationU2PhysicalExamSkinCode,
                    subject: CMRObservationU2PhysicalExamSkinSubject,
                    encounter: CMRObservationU2PhysicalExamSkinEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU2PhysicalExamSkinPerformer)
                })
            ])
        )
    );

export default CMRObservationU2PhysicalExamSkin;
