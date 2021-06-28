/*
 *  Licensed to the Kassenärztliche Bundesvereinigung (KBV) (c) 2020 - 2021 under one
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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Eyes"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Augen";
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Augen")
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
export interface CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                t.Type<
                                    CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplay: t.Type<CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplay> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
export interface CMRDiagnosticReportU7PhysicalExamEyesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "414174009";
    id?: string;
    _display?: CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesCodeCoding: t.Type<CMRDiagnosticReportU7PhysicalExamEyesCodeCoding> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("414174009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU7PhysicalExamEyesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7PhysicalExamEyesMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Eyes|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesMeta: t.Type<CMRDiagnosticReportU7PhysicalExamEyesMeta> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_Physical_Exam_Eyes|1.0.0"
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
export interface CMRDiagnosticReportU7PhysicalExamEyesCode {
    coding: Array<CMRDiagnosticReportU7PhysicalExamEyesCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesCode: t.Type<CMRDiagnosticReportU7PhysicalExamEyesCode> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU7PhysicalExamEyesCodeCoding
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
export interface CMRDiagnosticReportU7PhysicalExamEyesSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesSubject: t.Type<CMRDiagnosticReportU7PhysicalExamEyesSubject> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient|1.0.0"
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
export interface CMRDiagnosticReportU7PhysicalExamEyesEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesEncounter: t.Type<CMRDiagnosticReportU7PhysicalExamEyesEncounter> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Encounter|1.0.0"
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
export interface CMRDiagnosticReportU7PhysicalExamEyesPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesPerformer: t.Type<CMRDiagnosticReportU7PhysicalExamEyesPerformer> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Practitioner|1.0.0"
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
export interface CMRDiagnosticReportU7PhysicalExamEyesResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7PhysicalExamEyesResult: t.Type<CMRDiagnosticReportU7PhysicalExamEyesResult> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyesResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_Physical_Exam_Eyes|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportU7PhysicalExamEyes {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7PhysicalExamEyesMeta;
    status: "final";
    code: CMRDiagnosticReportU7PhysicalExamEyesCode;
    subject: CMRDiagnosticReportU7PhysicalExamEyesSubject;
    encounter: CMRDiagnosticReportU7PhysicalExamEyesEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7PhysicalExamEyesPerformer>;
    result?: CMRDiagnosticReportU7PhysicalExamEyesResult[];
}

const CMRDiagnosticReportU7PhysicalExamEyes: t.Type<CMRDiagnosticReportU7PhysicalExamEyes> = t.recursion(
    "CMRDiagnosticReportU7PhysicalExamEyes",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7PhysicalExamEyesMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7PhysicalExamEyesCode,
                    subject: CMRDiagnosticReportU7PhysicalExamEyesSubject,
                    encounter: CMRDiagnosticReportU7PhysicalExamEyesEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7PhysicalExamEyesPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU7PhysicalExamEyesResult)
                })
            ])
        )
);

export default CMRDiagnosticReportU7PhysicalExamEyes;
