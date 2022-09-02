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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected"

/**
 * Content in other Language.
 */
export interface CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "keine Auffälligkeiten";
    id?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("keine Auffälligkeiten")
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
export interface CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplay: t.Type<CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplay> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2U9NoAbnormalityDetectedCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "281900007";
    id?: string;
    _display?: CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedCodeCoding: t.Type<CMRObservationU2U9NoAbnormalityDetectedCodeCoding> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("281900007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U9NoAbnormalityDetectedCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2U9NoAbnormalityDetectedMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.1">;
    id?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedMeta: t.Type<CMRObservationU2U9NoAbnormalityDetectedMeta> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_No_Abnormality_Detected|1.0.1"
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
export interface CMRObservationU2U9NoAbnormalityDetectedCode {
    coding: Array<CMRObservationU2U9NoAbnormalityDetectedCodeCoding>;
    id?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedCode: t.Type<CMRObservationU2U9NoAbnormalityDetectedCode> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU2U9NoAbnormalityDetectedCodeCoding
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
export interface CMRObservationU2U9NoAbnormalityDetectedSubjectReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedSubjectReference: t.Type<CMRObservationU2U9NoAbnormalityDetectedSubjectReference> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedSubjectReference", () =>
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
export interface CMRObservationU2U9NoAbnormalityDetectedEncounterReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedEncounterReference: t.Type<CMRObservationU2U9NoAbnormalityDetectedEncounterReference> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedEncounterReference", () =>
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
export interface CMRObservationU2U9NoAbnormalityDetectedPerformerReference {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9NoAbnormalityDetectedPerformerReference: t.Type<CMRObservationU2U9NoAbnormalityDetectedPerformerReference> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetectedPerformerReference", () =>
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

interface CMRObservationU2U9NoAbnormalityDetected {
    resourceType: "Observation";
    meta: CMRObservationU2U9NoAbnormalityDetectedMeta;
    status: "final";
    code: CMRObservationU2U9NoAbnormalityDetectedCode;
    subject: CMRObservationU2U9NoAbnormalityDetectedSubjectReference;
    encounter: CMRObservationU2U9NoAbnormalityDetectedEncounterReference;
    effectiveDateTime: string;
    valueBoolean: true;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2U9NoAbnormalityDetectedPerformerReference>;
}

const CMRObservationU2U9NoAbnormalityDetected: t.Type<CMRObservationU2U9NoAbnormalityDetected> =
    t.recursion("CMRObservationU2U9NoAbnormalityDetected", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2U9NoAbnormalityDetectedMeta,
                    status: Literal("final"),
                    code: CMRObservationU2U9NoAbnormalityDetectedCode,
                    subject: CMRObservationU2U9NoAbnormalityDetectedSubjectReference,
                    encounter: CMRObservationU2U9NoAbnormalityDetectedEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU2U9NoAbnormalityDetectedPerformerReference
                    )
                })
            ])
        )
    );

export default CMRObservationU2U9NoAbnormalityDetected;
