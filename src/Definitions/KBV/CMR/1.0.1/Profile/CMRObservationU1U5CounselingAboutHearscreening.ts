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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Counseling_About_Hearscreening"

/**
 * Content in other Language.
 */
export interface CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Untersuchungsergebnisse und ggf. erforderliche Therapie mit den Eltern besprochen am:";
    id?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Untersuchungsergebnisse und ggf. erforderliche Therapie mit den Eltern besprochen am:"
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner.
 */
export interface CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplay: t.Type<CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplay> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU1U5CounselingAboutHearscreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "165355002";
    id?: string;
    _display?: CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningCodeCoding: t.Type<CMRObservationU1U5CounselingAboutHearscreeningCodeCoding> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("165355002")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRObservationU1U5CounselingAboutHearscreeningCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU1U5CounselingAboutHearscreeningMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Counseling_About_Hearscreening|1.0.1">;
    id?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningMeta: t.Type<CMRObservationU1U5CounselingAboutHearscreeningMeta> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Counseling_About_Hearscreening|1.0.1"
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
export interface CMRObservationU1U5CounselingAboutHearscreeningCode {
    coding: Array<CMRObservationU1U5CounselingAboutHearscreeningCodeCoding>;
    id?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningCode: t.Type<CMRObservationU1U5CounselingAboutHearscreeningCode> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU1U5CounselingAboutHearscreeningCodeCoding
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
export interface CMRObservationU1U5CounselingAboutHearscreeningSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningSubject: t.Type<CMRObservationU1U5CounselingAboutHearscreeningSubject> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningSubject", () =>
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
export interface CMRObservationU1U5CounselingAboutHearscreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningEncounter: t.Type<CMRObservationU1U5CounselingAboutHearscreeningEncounter> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningEncounter", () =>
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
export interface CMRObservationU1U5CounselingAboutHearscreeningPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU1U5CounselingAboutHearscreeningPerformer: t.Type<CMRObservationU1U5CounselingAboutHearscreeningPerformer> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreeningPerformer", () =>
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

interface CMRObservationU1U5CounselingAboutHearscreening {
    resourceType: "Observation";
    meta: CMRObservationU1U5CounselingAboutHearscreeningMeta;
    status: "final";
    code: CMRObservationU1U5CounselingAboutHearscreeningCode;
    subject: CMRObservationU1U5CounselingAboutHearscreeningSubject;
    encounter: CMRObservationU1U5CounselingAboutHearscreeningEncounter;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU1U5CounselingAboutHearscreeningPerformer>;
}

const CMRObservationU1U5CounselingAboutHearscreening: t.Type<CMRObservationU1U5CounselingAboutHearscreening> =
    t.recursion("CMRObservationU1U5CounselingAboutHearscreening", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU1U5CounselingAboutHearscreeningMeta,
                    status: Literal("final"),
                    code: CMRObservationU1U5CounselingAboutHearscreeningCode,
                    subject: CMRObservationU1U5CounselingAboutHearscreeningSubject,
                    encounter: CMRObservationU1U5CounselingAboutHearscreeningEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU1U5CounselingAboutHearscreeningPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU1U5CounselingAboutHearscreening;
