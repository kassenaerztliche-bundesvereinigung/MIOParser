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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kopf";
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364404000";
    id?: string;
    _display?: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCodeCoding: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCodeCoding> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadCodeCoding", () =>
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
                    _display: CMRDiagnosticReportU4PhysicalExamHeadCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU4PhysicalExamHeadMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadMeta: t.Type<CMRDiagnosticReportU4PhysicalExamHeadMeta> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Head|1.0.1"
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
export interface CMRDiagnosticReportU4PhysicalExamHeadCode {
    coding: Array<CMRDiagnosticReportU4PhysicalExamHeadCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadCode: t.Type<CMRDiagnosticReportU4PhysicalExamHeadCode> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU4PhysicalExamHeadCodeCoding
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
export interface CMRDiagnosticReportU4PhysicalExamHeadSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadSubjectReference: t.Type<CMRDiagnosticReportU4PhysicalExamHeadSubjectReference> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadSubjectReference", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamHeadEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadEncounterReference: t.Type<CMRDiagnosticReportU4PhysicalExamHeadEncounterReference> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadEncounterReference", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamHeadPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadPerformerReference: t.Type<CMRDiagnosticReportU4PhysicalExamHeadPerformerReference> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadPerformerReference", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamHeadResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamHeadResultReference: t.Type<CMRDiagnosticReportU4PhysicalExamHeadResultReference> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHeadResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Head|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU4PhysicalExamHead {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU4PhysicalExamHeadMeta;
    status: "final";
    code: CMRDiagnosticReportU4PhysicalExamHeadCode;
    subject: CMRDiagnosticReportU4PhysicalExamHeadSubjectReference;
    encounter: CMRDiagnosticReportU4PhysicalExamHeadEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU4PhysicalExamHeadPerformerReference>;
    result?: CMRDiagnosticReportU4PhysicalExamHeadResultReference[];
}

const CMRDiagnosticReportU4PhysicalExamHead: t.Type<CMRDiagnosticReportU4PhysicalExamHead> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamHead", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU4PhysicalExamHeadMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU4PhysicalExamHeadCode,
                    subject: CMRDiagnosticReportU4PhysicalExamHeadSubjectReference,
                    encounter: CMRDiagnosticReportU4PhysicalExamHeadEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU4PhysicalExamHeadPerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU4PhysicalExamHeadResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU4PhysicalExamHead;
