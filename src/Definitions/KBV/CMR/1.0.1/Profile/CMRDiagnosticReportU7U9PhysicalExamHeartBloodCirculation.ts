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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Herz, Kreislauf";
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364066008";
    id?: string;
    _display?: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCoding: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCoding> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCoding",
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
                            CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationMeta: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationMeta> =
    t.recursion("CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1"
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCode {
    coding: Array<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCode: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCode> =
    t.recursion("CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCodeCoding
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationSubjectReference: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationSubjectReference> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationSubjectReference",
        () =>
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationEncounterReference: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationEncounterReference> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationEncounterReference",
        () =>
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationPerformerReference: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationPerformerReference> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationPerformerReference",
        () =>
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
export interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationResultReference: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationResultReference> =
    t.recursion(
        "CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationResultReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Physical_Exam_Heart_Blood_Circulation|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculation {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationMeta;
    status: "final";
    code: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCode;
    subject: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationSubjectReference;
    encounter: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationPerformerReference>;
    result?: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationResultReference[];
}

const CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculation: t.Type<CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculation> =
    t.recursion("CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationCode,
                    subject:
                        CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationSubjectReference,
                    encounter:
                        CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculationResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU7U9PhysicalExamHeartBloodCirculation;
