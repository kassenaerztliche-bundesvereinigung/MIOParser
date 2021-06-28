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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Neugeborenen-Hörscreening";
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Neugeborenen-Hörscreening")
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplay: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplay> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "417491009";
    id?: string;
    _display?: CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCoding: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCoding> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("417491009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningMeta: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningMeta> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Neonatal_Hearscreening|1.0.0"
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningCode {
    coding: Array<CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningCode: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningCode> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1U5NeonatalHearscreeningCodeCoding
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningSubject: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningSubject> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningSubject",
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningEncounter: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningEncounter> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningEncounter",
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningPerformer: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningPerformer> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningPerformer",
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
export interface CMRDiagnosticReportU1U5NeonatalHearscreeningResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5NeonatalHearscreeningResult: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreeningResult> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreeningResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Neonatal_Hearscreening|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Counseling_About_Hearscreening|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportU1U5NeonatalHearscreening {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1U5NeonatalHearscreeningMeta;
    status: "final";
    code: CMRDiagnosticReportU1U5NeonatalHearscreeningCode;
    subject: CMRDiagnosticReportU1U5NeonatalHearscreeningSubject;
    encounter: CMRDiagnosticReportU1U5NeonatalHearscreeningEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1U5NeonatalHearscreeningPerformer>;
    result?: CMRDiagnosticReportU1U5NeonatalHearscreeningResult[];
}

const CMRDiagnosticReportU1U5NeonatalHearscreening: t.Type<CMRDiagnosticReportU1U5NeonatalHearscreening> = t.recursion(
    "CMRDiagnosticReportU1U5NeonatalHearscreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1U5NeonatalHearscreeningMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1U5NeonatalHearscreeningCode,
                    subject: CMRDiagnosticReportU1U5NeonatalHearscreeningSubject,
                    encounter: CMRDiagnosticReportU1U5NeonatalHearscreeningEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1U5NeonatalHearscreeningPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU1U5NeonatalHearscreeningResult)
                })
            ])
        )
);

export default CMRDiagnosticReportU1U5NeonatalHearscreening;
