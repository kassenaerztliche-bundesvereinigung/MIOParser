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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ohren";
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Ohren")
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplay: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "363991003";
    id?: string;
    _display?: CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsCodeCoding: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCoding> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("363991003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU2U3PhysicalExamEarsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2U3PhysicalExamEarsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsMeta: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsMeta> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U3_Physical_Exam_Ears|1.0.1"
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsCode {
    coding: Array<CMRDiagnosticReportU2U3PhysicalExamEarsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsCode: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsCode> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2U3PhysicalExamEarsCodeCoding
                    )
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsSubject: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsSubject> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsSubject", () =>
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsEncounter: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsEncounter> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsEncounter", () =>
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsPerformer: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsPerformer> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsPerformer", () =>
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
export interface CMRDiagnosticReportU2U3PhysicalExamEarsResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U3PhysicalExamEarsResult: t.Type<CMRDiagnosticReportU2U3PhysicalExamEarsResult> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEarsResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U3_Physical_Exam_Ears|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2U3PhysicalExamEars {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2U3PhysicalExamEarsMeta;
    status: "final";
    code: CMRDiagnosticReportU2U3PhysicalExamEarsCode;
    subject: CMRDiagnosticReportU2U3PhysicalExamEarsSubject;
    encounter: CMRDiagnosticReportU2U3PhysicalExamEarsEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2U3PhysicalExamEarsPerformer>;
    result?: CMRDiagnosticReportU2U3PhysicalExamEarsResult[];
}

const CMRDiagnosticReportU2U3PhysicalExamEars: t.Type<CMRDiagnosticReportU2U3PhysicalExamEars> =
    t.recursion("CMRDiagnosticReportU2U3PhysicalExamEars", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2U3PhysicalExamEarsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2U3PhysicalExamEarsCode,
                    subject: CMRDiagnosticReportU2U3PhysicalExamEarsSubject,
                    encounter: CMRDiagnosticReportU2U3PhysicalExamEarsEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2U3PhysicalExamEarsPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU2U3PhysicalExamEarsResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU2U3PhysicalExamEars;
