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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kopf";
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kopf")
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplay: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364404000";
    id?: string;
    _display?: CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadCodeCoding: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCoding> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364404000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU5U6PhysicalExamHeadCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU5U6PhysicalExamHeadMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadMeta: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadMeta> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U6_Physical_Exam_Head|1.0.1"
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadCode {
    coding: Array<CMRDiagnosticReportU5U6PhysicalExamHeadCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadCode: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadCode> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU5U6PhysicalExamHeadCodeCoding
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadSubjectReference: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadSubjectReference> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadSubjectReference", () =>
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadEncounterReference: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadEncounterReference> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadEncounterReference", () =>
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadPerformerReference: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadPerformerReference> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadPerformerReference", () =>
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
export interface CMRDiagnosticReportU5U6PhysicalExamHeadResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U6PhysicalExamHeadResultReference: t.Type<CMRDiagnosticReportU5U6PhysicalExamHeadResultReference> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHeadResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_U6_Physical_Exam_Head|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU5U6PhysicalExamHead {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU5U6PhysicalExamHeadMeta;
    status: "final";
    code: CMRDiagnosticReportU5U6PhysicalExamHeadCode;
    subject: CMRDiagnosticReportU5U6PhysicalExamHeadSubjectReference;
    encounter: CMRDiagnosticReportU5U6PhysicalExamHeadEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU5U6PhysicalExamHeadPerformerReference>;
    result?: CMRDiagnosticReportU5U6PhysicalExamHeadResultReference[];
}

const CMRDiagnosticReportU5U6PhysicalExamHead: t.Type<CMRDiagnosticReportU5U6PhysicalExamHead> =
    t.recursion("CMRDiagnosticReportU5U6PhysicalExamHead", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU5U6PhysicalExamHeadMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU5U6PhysicalExamHeadCode,
                    subject: CMRDiagnosticReportU5U6PhysicalExamHeadSubjectReference,
                    encounter: CMRDiagnosticReportU5U6PhysicalExamHeadEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU5U6PhysicalExamHeadPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU5U6PhysicalExamHeadResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU5U6PhysicalExamHead;
