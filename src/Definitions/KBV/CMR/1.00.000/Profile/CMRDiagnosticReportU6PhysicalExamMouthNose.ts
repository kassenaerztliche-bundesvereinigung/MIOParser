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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Mundhöhle, Kiefer, Nase";
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplay> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "271914002+364111005";
    id?: string;
    _display?: CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCoding: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCoding> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("271914002+364111005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Mouth_Nose|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseMeta: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseMeta> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U6_Physical_Exam_Mouth_Nose|1.0.0"
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseCode {
    coding: Array<CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseCode: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseCode> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU6PhysicalExamMouthNoseCodeCoding
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseSubject: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseSubject> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseSubject",
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseEncounter: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseEncounter> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseEncounter",
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNosePerformer: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNosePerformer> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNosePerformer",
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
export interface CMRDiagnosticReportU6PhysicalExamMouthNoseResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU6PhysicalExamMouthNoseResult: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNoseResult> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNoseResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U6_Physical_Exam_Mouth_Nose|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportU6PhysicalExamMouthNose {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU6PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRDiagnosticReportU6PhysicalExamMouthNoseCode;
    subject: CMRDiagnosticReportU6PhysicalExamMouthNoseSubject;
    encounter: CMRDiagnosticReportU6PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU6PhysicalExamMouthNosePerformer>;
    result?: CMRDiagnosticReportU6PhysicalExamMouthNoseResult[];
}

const CMRDiagnosticReportU6PhysicalExamMouthNose: t.Type<CMRDiagnosticReportU6PhysicalExamMouthNose> = t.recursion(
    "CMRDiagnosticReportU6PhysicalExamMouthNose",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU6PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU6PhysicalExamMouthNoseCode,
                    subject: CMRDiagnosticReportU6PhysicalExamMouthNoseSubject,
                    encounter: CMRDiagnosticReportU6PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU6PhysicalExamMouthNosePerformer
                    ),
                    result: t.array(CMRDiagnosticReportU6PhysicalExamMouthNoseResult)
                })
            ])
        )
);

export default CMRDiagnosticReportU6PhysicalExamMouthNose;
