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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Augen";
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplay: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "414174009";
    id?: string;
    _display?: CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCoding: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCoding> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCoding", () =>
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
                    _display: CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesMeta: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesMeta> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_U9_Physical_Exam_Eyes|1.0.1"
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesCode {
    coding: Array<CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesCode: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesCode> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU7aU9PhysicalExamEyesCodeCoding
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesSubjectReference: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesSubjectReference> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesSubjectReference", () =>
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesEncounterReference: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesEncounterReference> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesEncounterReference", () =>
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesPerformerReference: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesPerformerReference> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesPerformerReference", () =>
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
export interface CMRDiagnosticReportU7aU9PhysicalExamEyesResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aU9PhysicalExamEyesResultReference: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyesResultReference> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyesResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_U9_Physical_Exam_Eyes|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU7aU9PhysicalExamEyes {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7aU9PhysicalExamEyesMeta;
    status: "final";
    code: CMRDiagnosticReportU7aU9PhysicalExamEyesCode;
    subject: CMRDiagnosticReportU7aU9PhysicalExamEyesSubjectReference;
    encounter: CMRDiagnosticReportU7aU9PhysicalExamEyesEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7aU9PhysicalExamEyesPerformerReference>;
    result?: CMRDiagnosticReportU7aU9PhysicalExamEyesResultReference[];
}

const CMRDiagnosticReportU7aU9PhysicalExamEyes: t.Type<CMRDiagnosticReportU7aU9PhysicalExamEyes> =
    t.recursion("CMRDiagnosticReportU7aU9PhysicalExamEyes", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7aU9PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7aU9PhysicalExamEyesCode,
                    subject: CMRDiagnosticReportU7aU9PhysicalExamEyesSubjectReference,
                    encounter: CMRDiagnosticReportU7aU9PhysicalExamEyesEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7aU9PhysicalExamEyesPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU7aU9PhysicalExamEyesResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU7aU9PhysicalExamEyes;
