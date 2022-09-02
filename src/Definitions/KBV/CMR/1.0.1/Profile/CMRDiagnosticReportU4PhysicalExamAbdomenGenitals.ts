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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Abdomen, Genitale (inkl. Analregion)";
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Abdomen, Genitale (inkl. Analregion)")
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364446009";
    id?: string;
    _display?: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCoding> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364446009")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Abdomen_Genitals|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsMeta: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsMeta> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U4_Physical_Exam_Abdomen_Genitals|1.0.1"
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCode: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCode> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsSubjectReference: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsSubjectReference> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsSubjectReference", () =>
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsEncounterReference: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsEncounterReference> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsEncounterReference",
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsPerformerReference: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsPerformerReference> =
    t.recursion(
        "CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsPerformerReference",
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
export interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsResultReference: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsResultReference> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U4_Physical_Exam_Abdomen_Genitals|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU4PhysicalExamAbdomenGenitals {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCode;
    subject: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsSubjectReference;
    encounter: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsPerformerReference>;
    result?: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsResultReference[];
}

const CMRDiagnosticReportU4PhysicalExamAbdomenGenitals: t.Type<CMRDiagnosticReportU4PhysicalExamAbdomenGenitals> =
    t.recursion("CMRDiagnosticReportU4PhysicalExamAbdomenGenitals", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsCode,
                    subject:
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsSubjectReference,
                    encounter:
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU4PhysicalExamAbdomenGenitalsResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU4PhysicalExamAbdomenGenitals;
