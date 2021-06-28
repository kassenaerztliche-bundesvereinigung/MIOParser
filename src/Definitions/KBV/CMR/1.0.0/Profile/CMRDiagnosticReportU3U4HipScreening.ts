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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Hüftsonographie:";
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Hüftsonographie:")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Hüftsonographie:";
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Hüftsonographie:")
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
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplay: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplay> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplay: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplay> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "30711-6";
    id?: string;
    _display?: CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplay;
    display?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("30711-6")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU3U4HipScreeningCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "241503003";
    id?: string;
    _display?: CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed: t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("241503003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU3U4HipScreeningMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningMeta: t.Type<CMRDiagnosticReportU3U4HipScreeningMeta> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U3_U4_Hip_Screening|1.0.0"
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
export interface CMRDiagnosticReportU3U4HipScreeningCode {
    coding: Array<
        | CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc
        | CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed
    >;
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningCode: t.Type<CMRDiagnosticReportU3U4HipScreeningCode> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc>,
                                t.Type<CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc,
                            CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed
                        ]),
                        [
                            {
                                codec: CMRDiagnosticReportU3U4HipScreeningCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            },
                            {
                                codec: CMRDiagnosticReportU3U4HipScreeningCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            }
                        ],
                        ["2", "2"]
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
export interface CMRDiagnosticReportU3U4HipScreeningSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningSubject: t.Type<CMRDiagnosticReportU3U4HipScreeningSubject> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningSubject",
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
export interface CMRDiagnosticReportU3U4HipScreeningEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningEncounter: t.Type<CMRDiagnosticReportU3U4HipScreeningEncounter> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningEncounter",
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
export interface CMRDiagnosticReportU3U4HipScreeningPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningPerformer: t.Type<CMRDiagnosticReportU3U4HipScreeningPerformer> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningPerformer",
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
export interface CMRDiagnosticReportU3U4HipScreeningResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU3U4HipScreeningResult: t.Type<CMRDiagnosticReportU3U4HipScreeningResult> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreeningResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_Result|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportU3U4HipScreening {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU3U4HipScreeningMeta;
    status: "final";
    code: CMRDiagnosticReportU3U4HipScreeningCode;
    subject: CMRDiagnosticReportU3U4HipScreeningSubject;
    encounter: CMRDiagnosticReportU3U4HipScreeningEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU3U4HipScreeningPerformer>;
    result?: CMRDiagnosticReportU3U4HipScreeningResult[];
}

const CMRDiagnosticReportU3U4HipScreening: t.Type<CMRDiagnosticReportU3U4HipScreening> = t.recursion(
    "CMRDiagnosticReportU3U4HipScreening",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU3U4HipScreeningMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU3U4HipScreeningCode,
                    subject: CMRDiagnosticReportU3U4HipScreeningSubject,
                    encounter: CMRDiagnosticReportU3U4HipScreeningEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRDiagnosticReportU3U4HipScreeningPerformer),
                    result: t.array(CMRDiagnosticReportU3U4HipScreeningResult)
                })
            ])
        )
);

export default CMRDiagnosticReportU3U4HipScreening;
