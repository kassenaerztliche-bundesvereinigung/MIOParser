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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Abdomen, Genitale (inkl. Analregion)";
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364446009";
    id?: string;
    _display?: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCoding: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCoding> =
    t.recursion("CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCoding", () =>
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
                        CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsMeta: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsMeta> =
    t.recursion("CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.1"
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCode {
    coding: Array<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCode: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCode> =
    t.recursion("CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCodeCoding
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsSubjectReference: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsSubjectReference> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsSubjectReference",
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsEncounterReference: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsEncounterReference> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsEncounterReference",
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsPerformerReference: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsPerformerReference> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsPerformerReference",
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
export interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsResultReference: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsResultReference> =
    t.recursion(
        "CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsResultReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U7a_Physical_Exam_Abdomen_Genitals|1.0.1"
                        ])
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitals {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsMeta;
    status: "final";
    code: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCode;
    subject: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsSubjectReference;
    encounter: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsPerformerReference>;
    result?: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsResultReference[];
}

const CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitals: t.Type<CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitals> =
    t.recursion("CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitals", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsCode,
                    subject:
                        CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsSubjectReference,
                    encounter:
                        CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitalsResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU7U7aPhysicalExamAbdomenGenitals;
