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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Chest_Lung_Respiratory_Tract"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Thorax, Lunge, Atemwege";
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Thorax, Lunge, Atemwege")
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplay: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplay> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364048003";
    id?: string;
    _display?: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCoding: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCoding> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364048003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractMeta: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractMeta> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0"
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCode {
    coding: Array<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCode: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCode> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCodeCoding
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractSubject: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractSubject> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractSubject",
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractEncounter: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractEncounter> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractEncounter",
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractPerformer: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractPerformer> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractPerformer",
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
export interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractResult: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractResult> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_Physical_Exam_Chest_Lung_Respiratory_Tract|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTract {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractMeta;
    status: "final";
    code: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCode;
    subject: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractSubject;
    encounter: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<
        CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractPerformer
    >;
    result?: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractResult[];
}

const CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTract: t.Type<CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTract> = t.recursion(
    "CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTract",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractCode,
                    subject: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractSubject,
                    encounter: CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractPerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTractResult
                    )
                })
            ])
        )
);

export default CMRDiagnosticReportU8PhysicalExamChestLungRespiratoryTract;
