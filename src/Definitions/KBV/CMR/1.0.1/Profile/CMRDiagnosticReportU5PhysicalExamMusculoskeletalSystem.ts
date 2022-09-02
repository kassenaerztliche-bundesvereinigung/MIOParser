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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Musculoskeletal_System"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Bewegungsapparat (Knochen, Muskeln, Nerven)";
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal(
                            "Bewegungsapparat (Knochen, Muskeln, Nerven)"
                        )
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "106029005";
    id?: string;
    _display?: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCoding: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCoding> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("106029005")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Musculoskeletal_System|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemMeta: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemMeta> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Musculoskeletal_System|1.0.1"
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCode {
    coding: Array<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCode: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCode> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCodeCoding
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemSubjectReference: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemSubjectReference> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemSubjectReference",
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemEncounterReference: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemEncounterReference> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemEncounterReference",
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemPerformerReference: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemPerformerReference> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemPerformerReference",
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
export interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemResultReference: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemResultReference> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemResultReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Musculoskeletal_System|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystem {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemMeta;
    status: "final";
    code: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCode;
    subject: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemSubjectReference;
    encounter: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemPerformerReference>;
    result?: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemResultReference[];
}

const CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystem: t.Type<CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystem> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystem", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemCode,
                    subject:
                        CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemSubjectReference,
                    encounter:
                        CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystemResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU5PhysicalExamMusculoskeletalSystem;
