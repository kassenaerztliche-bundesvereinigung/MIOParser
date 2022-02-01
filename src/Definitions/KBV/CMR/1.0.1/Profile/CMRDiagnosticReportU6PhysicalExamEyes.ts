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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Augen";
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Augen")
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
export interface CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplay: t.Type<CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU6PhysicalExamEyesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "414174009";
    id?: string;
    _display?: CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesCodeCoding: t.Type<CMRDiagnosticReportU6PhysicalExamEyesCodeCoding> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("414174009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU6PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU6PhysicalExamEyesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Eyes|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesMeta: t.Type<CMRDiagnosticReportU6PhysicalExamEyesMeta> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Eyes|1.0.1"
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
export interface CMRDiagnosticReportU6PhysicalExamEyesCode {
    coding: Array<CMRDiagnosticReportU6PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesCode: t.Type<CMRDiagnosticReportU6PhysicalExamEyesCode> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU6PhysicalExamEyesCodeCoding
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
export interface CMRDiagnosticReportU6PhysicalExamEyesSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesSubject: t.Type<CMRDiagnosticReportU6PhysicalExamEyesSubject> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesSubject", () =>
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
export interface CMRDiagnosticReportU6PhysicalExamEyesEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesEncounter: t.Type<CMRDiagnosticReportU6PhysicalExamEyesEncounter> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesEncounter", () =>
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
export interface CMRDiagnosticReportU6PhysicalExamEyesPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesPerformer: t.Type<CMRDiagnosticReportU6PhysicalExamEyesPerformer> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesPerformer", () =>
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
export interface CMRDiagnosticReportU6PhysicalExamEyesResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamEyesResult: t.Type<CMRDiagnosticReportU6PhysicalExamEyesResult> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyesResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Physical_Exam_Eyes|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU6PhysicalExamEyes {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU6PhysicalExamEyesMeta;
    status: "final";
    code: CMRDiagnosticReportU6PhysicalExamEyesCode;
    subject: CMRDiagnosticReportU6PhysicalExamEyesSubject;
    encounter: CMRDiagnosticReportU6PhysicalExamEyesEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU6PhysicalExamEyesPerformer>;
    result?: CMRDiagnosticReportU6PhysicalExamEyesResult[];
}

const CMRDiagnosticReportU6PhysicalExamEyes: t.Type<CMRDiagnosticReportU6PhysicalExamEyes> =
    t.recursion("CMRDiagnosticReportU6PhysicalExamEyes", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU6PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU6PhysicalExamEyesCode,
                    subject: CMRDiagnosticReportU6PhysicalExamEyesSubject,
                    encounter: CMRDiagnosticReportU6PhysicalExamEyesEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU6PhysicalExamEyesPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU6PhysicalExamEyesResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU6PhysicalExamEyes;
