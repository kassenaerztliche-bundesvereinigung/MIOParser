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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Apgar_Score"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Apgar-Wert";
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Apgar-Wert")
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
export interface CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1ApgarScoreCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1ApgarScoreCodeCodingDisplay: t.Type<CMRDiagnosticReportU1ApgarScoreCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1ApgarScoreCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1ApgarScoreCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "249228009";
    id?: string;
    _display?: CMRDiagnosticReportU1ApgarScoreCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1ApgarScoreCodeCoding: t.Type<CMRDiagnosticReportU1ApgarScoreCodeCoding> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("249228009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1ApgarScoreCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1ApgarScoreMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Apgar_Score|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScoreMeta: t.Type<CMRDiagnosticReportU1ApgarScoreMeta> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Apgar_Score|1.0.1"
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
 * A code or name that describes this diagnostic report.
 */
export interface CMRDiagnosticReportU1ApgarScoreCode {
    coding: Array<CMRDiagnosticReportU1ApgarScoreCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScoreCode: t.Type<CMRDiagnosticReportU1ApgarScoreCode> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRDiagnosticReportU1ApgarScoreCodeCoding)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
 */
export interface CMRDiagnosticReportU1ApgarScoreSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScoreSubject: t.Type<CMRDiagnosticReportU1ApgarScoreSubject> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreSubject", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
 */
export interface CMRDiagnosticReportU1ApgarScoreEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScoreEncounter: t.Type<CMRDiagnosticReportU1ApgarScoreEncounter> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreEncounter", () =>
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
 * The diagnostic service that is responsible for issuing the report.
 */
export interface CMRDiagnosticReportU1ApgarScorePerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScorePerformer: t.Type<CMRDiagnosticReportU1ApgarScorePerformer> =
    t.recursion("CMRDiagnosticReportU1ApgarScorePerformer", () =>
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

/**
 * [Observations](observation.html)  that are part of this diagnostic report.
 */
export interface CMRDiagnosticReportU1ApgarScoreResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1ApgarScoreResult: t.Type<CMRDiagnosticReportU1ApgarScoreResult> =
    t.recursion("CMRDiagnosticReportU1ApgarScoreResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Apgar_Score|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1ApgarScore {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1ApgarScoreMeta;
    status: "final";
    code: CMRDiagnosticReportU1ApgarScoreCode;
    subject: CMRDiagnosticReportU1ApgarScoreSubject;
    encounter: CMRDiagnosticReportU1ApgarScoreEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1ApgarScorePerformer>;
    result?: Array<CMRDiagnosticReportU1ApgarScoreResult>;
}

const CMRDiagnosticReportU1ApgarScore: t.Type<CMRDiagnosticReportU1ApgarScore> =
    t.recursion("CMRDiagnosticReportU1ApgarScore", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1ApgarScoreMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1ApgarScoreCode,
                    subject: CMRDiagnosticReportU1ApgarScoreSubject,
                    encounter: CMRDiagnosticReportU1ApgarScoreEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRDiagnosticReportU1ApgarScorePerformer),
                    result: MaxArray(2, CMRDiagnosticReportU1ApgarScoreResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1ApgarScore;
