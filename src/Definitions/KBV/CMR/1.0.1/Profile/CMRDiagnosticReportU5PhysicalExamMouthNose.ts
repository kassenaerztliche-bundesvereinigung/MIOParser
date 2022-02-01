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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Mundhöhle, Kiefer, Nase";
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Mundhöhle, Kiefer, Nase")
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "271914002+364111005";
    id?: string;
    _display?: CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCoding: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCoding> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("271914002+364111005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Mouth_Nose|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseMeta: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseMeta> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U5_Physical_Exam_Mouth_Nose|1.0.1"
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseCode {
    coding: Array<CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseCode: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseCode> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU5PhysicalExamMouthNoseCodeCoding
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseSubject: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseSubject> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseSubject", () =>
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseEncounter: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseEncounter> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseEncounter", () =>
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNosePerformer: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNosePerformer> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNosePerformer", () =>
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
export interface CMRDiagnosticReportU5PhysicalExamMouthNoseResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU5PhysicalExamMouthNoseResult: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNoseResult> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNoseResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U5_Physical_Exam_Mouth_Nose|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU5PhysicalExamMouthNose {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU5PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRDiagnosticReportU5PhysicalExamMouthNoseCode;
    subject: CMRDiagnosticReportU5PhysicalExamMouthNoseSubject;
    encounter: CMRDiagnosticReportU5PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU5PhysicalExamMouthNosePerformer>;
    result?: CMRDiagnosticReportU5PhysicalExamMouthNoseResult[];
}

const CMRDiagnosticReportU5PhysicalExamMouthNose: t.Type<CMRDiagnosticReportU5PhysicalExamMouthNose> =
    t.recursion("CMRDiagnosticReportU5PhysicalExamMouthNose", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU5PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU5PhysicalExamMouthNoseCode,
                    subject: CMRDiagnosticReportU5PhysicalExamMouthNoseSubject,
                    encounter: CMRDiagnosticReportU5PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU5PhysicalExamMouthNosePerformer
                    ),
                    result: t.array(CMRDiagnosticReportU5PhysicalExamMouthNoseResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU5PhysicalExamMouthNose;
