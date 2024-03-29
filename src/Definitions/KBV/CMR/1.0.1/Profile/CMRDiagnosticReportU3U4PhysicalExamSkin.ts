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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Haut";
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Haut")
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplay: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364528001";
    id?: string;
    _display?: CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinCodeCoding: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCoding> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364528001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU3U4PhysicalExamSkinCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU3U4PhysicalExamSkinMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinMeta: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinMeta> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Physical_Exam_Skin|1.0.1"
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinCode {
    coding: Array<CMRDiagnosticReportU3U4PhysicalExamSkinCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinCode: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinCode> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU3U4PhysicalExamSkinCodeCoding
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinSubjectReference: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinSubjectReference> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinSubjectReference", () =>
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinEncounterReference: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinEncounterReference> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinEncounterReference", () =>
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinPerformerReference: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinPerformerReference> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinPerformerReference", () =>
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
export interface CMRDiagnosticReportU3U4PhysicalExamSkinResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4PhysicalExamSkinResultReference: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkinResultReference> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkinResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Physical_Exam_Skin|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU3U4PhysicalExamSkin {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU3U4PhysicalExamSkinMeta;
    status: "final";
    code: CMRDiagnosticReportU3U4PhysicalExamSkinCode;
    subject: CMRDiagnosticReportU3U4PhysicalExamSkinSubjectReference;
    encounter: CMRDiagnosticReportU3U4PhysicalExamSkinEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU3U4PhysicalExamSkinPerformerReference>;
    result?: CMRDiagnosticReportU3U4PhysicalExamSkinResultReference[];
}

const CMRDiagnosticReportU3U4PhysicalExamSkin: t.Type<CMRDiagnosticReportU3U4PhysicalExamSkin> =
    t.recursion("CMRDiagnosticReportU3U4PhysicalExamSkin", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU3U4PhysicalExamSkinMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU3U4PhysicalExamSkinCode,
                    subject: CMRDiagnosticReportU3U4PhysicalExamSkinSubjectReference,
                    encounter: CMRDiagnosticReportU3U4PhysicalExamSkinEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU3U4PhysicalExamSkinPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU3U4PhysicalExamSkinResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU3U4PhysicalExamSkin;
