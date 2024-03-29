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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ohren";
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "47078008";
    id?: string;
    _display?: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCodeCoding: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCodeCoding> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("47078008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU8PhysicalExamEarsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU8PhysicalExamEarsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsMeta: t.Type<CMRDiagnosticReportU8PhysicalExamEarsMeta> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Ears|1.0.1"
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
export interface CMRDiagnosticReportU8PhysicalExamEarsCode {
    coding: Array<CMRDiagnosticReportU8PhysicalExamEarsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsCode: t.Type<CMRDiagnosticReportU8PhysicalExamEarsCode> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU8PhysicalExamEarsCodeCoding
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
export interface CMRDiagnosticReportU8PhysicalExamEarsSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsSubjectReference: t.Type<CMRDiagnosticReportU8PhysicalExamEarsSubjectReference> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsSubjectReference", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamEarsEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsEncounterReference: t.Type<CMRDiagnosticReportU8PhysicalExamEarsEncounterReference> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsEncounterReference", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamEarsPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsPerformerReference: t.Type<CMRDiagnosticReportU8PhysicalExamEarsPerformerReference> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsPerformerReference", () =>
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
export interface CMRDiagnosticReportU8PhysicalExamEarsResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamEarsResultReference: t.Type<CMRDiagnosticReportU8PhysicalExamEarsResultReference> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEarsResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Ears|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU8PhysicalExamEars {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU8PhysicalExamEarsMeta;
    status: "final";
    code: CMRDiagnosticReportU8PhysicalExamEarsCode;
    subject: CMRDiagnosticReportU8PhysicalExamEarsSubjectReference;
    encounter: CMRDiagnosticReportU8PhysicalExamEarsEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU8PhysicalExamEarsPerformerReference>;
    result?: CMRDiagnosticReportU8PhysicalExamEarsResultReference[];
}

const CMRDiagnosticReportU8PhysicalExamEars: t.Type<CMRDiagnosticReportU8PhysicalExamEars> =
    t.recursion("CMRDiagnosticReportU8PhysicalExamEars", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU8PhysicalExamEarsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU8PhysicalExamEarsCode,
                    subject: CMRDiagnosticReportU8PhysicalExamEarsSubjectReference,
                    encounter: CMRDiagnosticReportU8PhysicalExamEarsEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU8PhysicalExamEarsPerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU8PhysicalExamEarsResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU8PhysicalExamEars;
