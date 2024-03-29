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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Haut";
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplay: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364528001";
    id?: string;
    _display?: CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinCodeCoding: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCoding> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinCodeCoding", () =>
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
                    _display: CMRDiagnosticReportU5U9PhysicalExamSkinCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU5U9PhysicalExamSkinMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinMeta: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinMeta> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_U9_Physical_Exam_Skin|1.0.1"
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinCode {
    coding: Array<CMRDiagnosticReportU5U9PhysicalExamSkinCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinCode: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinCode> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU5U9PhysicalExamSkinCodeCoding
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinSubjectReference: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinSubjectReference> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinSubjectReference", () =>
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinEncounterReference: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinEncounterReference> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinEncounterReference", () =>
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinPerformerReference: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinPerformerReference> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinPerformerReference", () =>
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
export interface CMRDiagnosticReportU5U9PhysicalExamSkinResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5U9PhysicalExamSkinResultReference: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkinResultReference> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkinResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_U9_Physical_Exam_Skin|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU5U9PhysicalExamSkin {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU5U9PhysicalExamSkinMeta;
    status: "final";
    code: CMRDiagnosticReportU5U9PhysicalExamSkinCode;
    subject: CMRDiagnosticReportU5U9PhysicalExamSkinSubjectReference;
    encounter: CMRDiagnosticReportU5U9PhysicalExamSkinEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU5U9PhysicalExamSkinPerformerReference>;
    result?: CMRDiagnosticReportU5U9PhysicalExamSkinResultReference[];
}

const CMRDiagnosticReportU5U9PhysicalExamSkin: t.Type<CMRDiagnosticReportU5U9PhysicalExamSkin> =
    t.recursion("CMRDiagnosticReportU5U9PhysicalExamSkin", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU5U9PhysicalExamSkinMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU5U9PhysicalExamSkinCode,
                    subject: CMRDiagnosticReportU5U9PhysicalExamSkinSubjectReference,
                    encounter: CMRDiagnosticReportU5U9PhysicalExamSkinEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU5U9PhysicalExamSkinPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU5U9PhysicalExamSkinResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU5U9PhysicalExamSkin;
