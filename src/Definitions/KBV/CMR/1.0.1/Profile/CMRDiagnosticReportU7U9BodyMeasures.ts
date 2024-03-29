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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Körpermaße:";
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpermaße:")
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
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Körpermaße:";
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Körpermaße:")
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
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplay: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplay> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplay: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplay> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "248326004";
    id?: string;
    _display?: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("248326004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomedDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.69";
    code: "29275-5";
    id?: string;
    _display?: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplay;
    display?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.69"),
                    code: Literal("29275-5")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU7U9BodyMeasuresMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresMeta: t.Type<CMRDiagnosticReportU7U9BodyMeasuresMeta> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U7_U9_Body_Measures|1.0.1"
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
export interface CMRDiagnosticReportU7U9BodyMeasuresCode {
    coding: Array<
        | CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed
        | CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc
    >;
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresCode: t.Type<CMRDiagnosticReportU7U9BodyMeasuresCode> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed>,
                                t.Type<CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed,
                            CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc
                        ]),
                        [
                            {
                                codec: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: CMRDiagnosticReportU7U9BodyMeasuresCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
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
export interface CMRDiagnosticReportU7U9BodyMeasuresSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresSubjectReference: t.Type<CMRDiagnosticReportU7U9BodyMeasuresSubjectReference> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresSubjectReference", () =>
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
export interface CMRDiagnosticReportU7U9BodyMeasuresEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresEncounterReference: t.Type<CMRDiagnosticReportU7U9BodyMeasuresEncounterReference> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresEncounterReference", () =>
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
export interface CMRDiagnosticReportU7U9BodyMeasuresPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresPerformerReference: t.Type<CMRDiagnosticReportU7U9BodyMeasuresPerformerReference> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresPerformerReference", () =>
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
export interface CMRDiagnosticReportU7U9BodyMeasuresResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU7U9BodyMeasuresResultReference: t.Type<CMRDiagnosticReportU7U9BodyMeasuresResultReference> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasuresResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U2_U9_Body_Height_Measure|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_BMI|1.0.1",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U7_U9_Body_Weight|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU7U9BodyMeasures {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU7U9BodyMeasuresMeta;
    status: "final";
    code: CMRDiagnosticReportU7U9BodyMeasuresCode;
    subject: CMRDiagnosticReportU7U9BodyMeasuresSubjectReference;
    encounter: CMRDiagnosticReportU7U9BodyMeasuresEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU7U9BodyMeasuresPerformerReference>;
    result?: CMRDiagnosticReportU7U9BodyMeasuresResultReference[];
}

const CMRDiagnosticReportU7U9BodyMeasures: t.Type<CMRDiagnosticReportU7U9BodyMeasures> =
    t.recursion("CMRDiagnosticReportU7U9BodyMeasures", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU7U9BodyMeasuresMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU7U9BodyMeasuresCode,
                    subject: CMRDiagnosticReportU7U9BodyMeasuresSubjectReference,
                    encounter: CMRDiagnosticReportU7U9BodyMeasuresEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU7U9BodyMeasuresPerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU7U9BodyMeasuresResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU7U9BodyMeasures;
