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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_U5_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Augen";
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplay: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "414174009";
    id?: string;
    _display?: CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesCodeCoding: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCoding> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesCodeCoding", () =>
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
                    _display: CMRDiagnosticReportU4U5PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU4U5PhysicalExamEyesMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_U5_Physical_Exam_Eyes|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesMeta: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesMeta> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_U5_Physical_Exam_Eyes|1.0.1"
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesCode {
    coding: Array<CMRDiagnosticReportU4U5PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesCode: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesCode> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU4U5PhysicalExamEyesCodeCoding
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesSubjectReference: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesSubjectReference> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesSubjectReference", () =>
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesEncounterReference: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesEncounterReference> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesEncounterReference", () =>
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesPerformerReference: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesPerformerReference> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesPerformerReference", () =>
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
export interface CMRDiagnosticReportU4U5PhysicalExamEyesResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4U5PhysicalExamEyesResultReference: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyesResultReference> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyesResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_U5_Physical_Exam_Eyes|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU4U5PhysicalExamEyes {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU4U5PhysicalExamEyesMeta;
    status: "final";
    code: CMRDiagnosticReportU4U5PhysicalExamEyesCode;
    subject: CMRDiagnosticReportU4U5PhysicalExamEyesSubjectReference;
    encounter: CMRDiagnosticReportU4U5PhysicalExamEyesEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU4U5PhysicalExamEyesPerformerReference>;
    result?: CMRDiagnosticReportU4U5PhysicalExamEyesResultReference[];
}

const CMRDiagnosticReportU4U5PhysicalExamEyes: t.Type<CMRDiagnosticReportU4U5PhysicalExamEyes> =
    t.recursion("CMRDiagnosticReportU4U5PhysicalExamEyes", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU4U5PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU4U5PhysicalExamEyesCode,
                    subject: CMRDiagnosticReportU4U5PhysicalExamEyesSubjectReference,
                    encounter: CMRDiagnosticReportU4U5PhysicalExamEyesEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU4U5PhysicalExamEyesPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU4U5PhysicalExamEyesResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU4U5PhysicalExamEyes;
