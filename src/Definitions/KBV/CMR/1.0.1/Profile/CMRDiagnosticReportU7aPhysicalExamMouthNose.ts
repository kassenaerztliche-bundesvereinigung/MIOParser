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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Mundhöhle, Kiefer, Nase";
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "271914002+364111005";
    id?: string;
    _display?: CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCoding: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCoding> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCoding", () =>
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
                    _display:
                        CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_Physical_Exam_Mouth_Nose|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseMeta: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseMeta> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7a_Physical_Exam_Mouth_Nose|1.0.1"
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseCode {
    coding: Array<CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseCode: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseCode> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU7aPhysicalExamMouthNoseCodeCoding
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseSubjectReference: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseSubjectReference> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseSubjectReference", () =>
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseEncounterReference: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseEncounterReference> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseEncounterReference", () =>
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNosePerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNosePerformerReference: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNosePerformerReference> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNosePerformerReference", () =>
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
export interface CMRDiagnosticReportU7aPhysicalExamMouthNoseResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7aPhysicalExamMouthNoseResultReference: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNoseResultReference> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNoseResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7a_Physical_Exam_Mouth_Nose|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU7aPhysicalExamMouthNose {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7aPhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRDiagnosticReportU7aPhysicalExamMouthNoseCode;
    subject: CMRDiagnosticReportU7aPhysicalExamMouthNoseSubjectReference;
    encounter: CMRDiagnosticReportU7aPhysicalExamMouthNoseEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7aPhysicalExamMouthNosePerformerReference>;
    result?: CMRDiagnosticReportU7aPhysicalExamMouthNoseResultReference[];
}

const CMRDiagnosticReportU7aPhysicalExamMouthNose: t.Type<CMRDiagnosticReportU7aPhysicalExamMouthNose> =
    t.recursion("CMRDiagnosticReportU7aPhysicalExamMouthNose", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7aPhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7aPhysicalExamMouthNoseCode,
                    subject: CMRDiagnosticReportU7aPhysicalExamMouthNoseSubjectReference,
                    encounter:
                        CMRDiagnosticReportU7aPhysicalExamMouthNoseEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7aPhysicalExamMouthNosePerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU7aPhysicalExamMouthNoseResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU7aPhysicalExamMouthNose;
