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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Herz, Kreislauf";
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Herz, Kreislauf")
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364066008";
    id?: string;
    _display?: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCoding: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCoding> =
    t.recursion(
        "CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("364066008")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationMeta: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationMeta> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1"
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCode {
    coding: Array<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCode: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCode> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCodeCoding
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationSubject: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationSubject> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationSubject", () =>
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationEncounter: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationEncounter> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationEncounter", () =>
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationPerformer: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationPerformer> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationPerformer", () =>
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
export interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationResult: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationResult> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U6_Physical_Exam_Heart_Blood_Circulation|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculation {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationMeta;
    status: "final";
    code: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCode;
    subject: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationSubject;
    encounter: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationPerformer>;
    result?: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationResult[];
}

const CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculation: t.Type<CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculation> =
    t.recursion("CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationCode,
                    subject:
                        CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationSubject,
                    encounter:
                        CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculationResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU2U6PhysicalExamHeartBloodCirculation;
