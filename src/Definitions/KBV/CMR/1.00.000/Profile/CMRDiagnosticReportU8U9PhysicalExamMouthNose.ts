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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_U9_Physical_Exam_Mouth_Nose"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Mundhöhle, Kiefer, Nase";
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplay: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplay> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "271914002+364111005";
    id?: string;
    _display?: CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCoding: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCoding> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCoding",
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
                    _display: CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_U9_Physical_Exam_Mouth_Nose|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseMeta: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseMeta> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U8_U9_Physical_Exam_Mouth_Nose|1.0.0"
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseCode {
    coding: Array<CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseCode: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseCode> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU8U9PhysicalExamMouthNoseCodeCoding
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseSubject: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseSubject> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseSubject",
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseEncounter: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseEncounter> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseEncounter",
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNosePerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNosePerformer: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNosePerformer> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNosePerformer",
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
export interface CMRDiagnosticReportU8U9PhysicalExamMouthNoseResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU8U9PhysicalExamMouthNoseResult: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNoseResult> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNoseResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U8_U9_Physical_Exam_Mouth_Nose|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportU8U9PhysicalExamMouthNose {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU8U9PhysicalExamMouthNoseMeta;
    status: "final";
    code: CMRDiagnosticReportU8U9PhysicalExamMouthNoseCode;
    subject: CMRDiagnosticReportU8U9PhysicalExamMouthNoseSubject;
    encounter: CMRDiagnosticReportU8U9PhysicalExamMouthNoseEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU8U9PhysicalExamMouthNosePerformer>;
    result?: CMRDiagnosticReportU8U9PhysicalExamMouthNoseResult[];
}

const CMRDiagnosticReportU8U9PhysicalExamMouthNose: t.Type<CMRDiagnosticReportU8U9PhysicalExamMouthNose> = t.recursion(
    "CMRDiagnosticReportU8U9PhysicalExamMouthNose",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU8U9PhysicalExamMouthNoseMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU8U9PhysicalExamMouthNoseCode,
                    subject: CMRDiagnosticReportU8U9PhysicalExamMouthNoseSubject,
                    encounter: CMRDiagnosticReportU8U9PhysicalExamMouthNoseEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU8U9PhysicalExamMouthNosePerformer
                    ),
                    result: t.array(CMRDiagnosticReportU8U9PhysicalExamMouthNoseResult)
                })
            ])
        )
);

export default CMRDiagnosticReportU8U9PhysicalExamMouthNose;
