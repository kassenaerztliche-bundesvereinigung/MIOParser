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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Pädaudiologische Diagnostik";
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Pädaudiologische Diagnostik")
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay> =
    t.recursion(
        "CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "91005004";
    id?: string;
    _display?: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCoding: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCoding> =
    t.recursion(
        "CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210131"
                        ),
                        code: Literal("91005004")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceMeta: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceMeta> =
    t.recursion("CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.1"
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCode {
    coding: Array<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCode: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCode> =
    t.recursion("CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCodeCoding
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceSubject: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceSubject> =
    t.recursion("CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceSubject", () =>
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceEncounter: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceEncounter> =
    t.recursion(
        "CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceEncounter",
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServicePerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServicePerformer: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServicePerformer> =
    t.recursion(
        "CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServicePerformer",
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
export interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceResult: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceResult> =
    t.recursion("CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Pediatric_Diagnostic_Audiology_Service|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U5_Counseling_About_Hearscreening|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyService {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceMeta;
    status: "final";
    code: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCode;
    subject: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceSubject;
    encounter: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServicePerformer>;
    result?: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceResult[];
}

const CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyService: t.Type<CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyService> =
    t.recursion("CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyService", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceCode,
                    subject:
                        CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceSubject,
                    encounter:
                        CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServicePerformer
                    ),
                    result: t.array(
                        CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyServiceResult
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU1U5PediatricDiagnosticAudiologyService;
