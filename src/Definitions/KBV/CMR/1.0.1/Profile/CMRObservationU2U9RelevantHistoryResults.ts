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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results"

/**
 * Content in other Language.
 */
export interface CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Relevante anamnestische Ergebnisse:";
    id?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Relevante anamnestische Ergebnisse:")
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
export interface CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplay: t.Type<CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplay> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU2U9RelevantHistoryResultsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "365854008";
    id?: string;
    _display?: CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsCodeCoding: t.Type<CMRObservationU2U9RelevantHistoryResultsCodeCoding> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("365854008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU2U9RelevantHistoryResultsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU2U9RelevantHistoryResultsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.1">;
    id?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsMeta: t.Type<CMRObservationU2U9RelevantHistoryResultsMeta> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Relevant_History_Results|1.0.1"
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
export interface CMRObservationU2U9RelevantHistoryResultsCode {
    coding: Array<CMRObservationU2U9RelevantHistoryResultsCodeCoding>;
    id?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsCode: t.Type<CMRObservationU2U9RelevantHistoryResultsCode> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU2U9RelevantHistoryResultsCodeCoding
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
export interface CMRObservationU2U9RelevantHistoryResultsSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsSubject: t.Type<CMRObservationU2U9RelevantHistoryResultsSubject> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsSubject", () =>
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
export interface CMRObservationU2U9RelevantHistoryResultsEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsEncounter: t.Type<CMRObservationU2U9RelevantHistoryResultsEncounter> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsEncounter", () =>
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
export interface CMRObservationU2U9RelevantHistoryResultsPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU2U9RelevantHistoryResultsPerformer: t.Type<CMRObservationU2U9RelevantHistoryResultsPerformer> =
    t.recursion("CMRObservationU2U9RelevantHistoryResultsPerformer", () =>
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

interface CMRObservationU2U9RelevantHistoryResults {
    resourceType: "Observation";
    meta: CMRObservationU2U9RelevantHistoryResultsMeta;
    status: "final";
    code: CMRObservationU2U9RelevantHistoryResultsCode;
    subject: CMRObservationU2U9RelevantHistoryResultsSubject;
    encounter: CMRObservationU2U9RelevantHistoryResultsEncounter;
    effectiveDateTime: string;
    valueString: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU2U9RelevantHistoryResultsPerformer>;
}

const CMRObservationU2U9RelevantHistoryResults: t.Type<CMRObservationU2U9RelevantHistoryResults> =
    t.recursion("CMRObservationU2U9RelevantHistoryResults", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU2U9RelevantHistoryResultsMeta,
                    status: Literal("final"),
                    code: CMRObservationU2U9RelevantHistoryResultsCode,
                    subject: CMRObservationU2U9RelevantHistoryResultsSubject,
                    encounter: CMRObservationU2U9RelevantHistoryResultsEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRObservationU2U9RelevantHistoryResultsPerformer
                    )
                })
            ])
        )
    );

export default CMRObservationU2U9RelevantHistoryResults;
