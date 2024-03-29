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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Neonatal_Jaundice"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gelbsucht";
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Gelbsucht")
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
export interface CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplay: t.Type<CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1NeonatalJaundiceCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "387712008";
    id?: string;
    _display?: CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceCodeCoding: t.Type<CMRDiagnosticReportU1NeonatalJaundiceCodeCoding> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("387712008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1NeonatalJaundiceCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1NeonatalJaundiceMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Neonatal_Jaundice|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceMeta: t.Type<CMRDiagnosticReportU1NeonatalJaundiceMeta> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Neonatal_Jaundice|1.0.1"
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
export interface CMRDiagnosticReportU1NeonatalJaundiceCode {
    coding: Array<CMRDiagnosticReportU1NeonatalJaundiceCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceCode: t.Type<CMRDiagnosticReportU1NeonatalJaundiceCode> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1NeonatalJaundiceCodeCoding
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
export interface CMRDiagnosticReportU1NeonatalJaundiceSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceSubjectReference: t.Type<CMRDiagnosticReportU1NeonatalJaundiceSubjectReference> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceSubjectReference", () =>
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
export interface CMRDiagnosticReportU1NeonatalJaundiceEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceEncounterReference: t.Type<CMRDiagnosticReportU1NeonatalJaundiceEncounterReference> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceEncounterReference", () =>
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
export interface CMRDiagnosticReportU1NeonatalJaundicePerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundicePerformerReference: t.Type<CMRDiagnosticReportU1NeonatalJaundicePerformerReference> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundicePerformerReference", () =>
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
export interface CMRDiagnosticReportU1NeonatalJaundiceResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1NeonatalJaundiceResultReference: t.Type<CMRDiagnosticReportU1NeonatalJaundiceResultReference> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundiceResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Neonatal_Jaundice|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1NeonatalJaundice {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1NeonatalJaundiceMeta;
    status: "final";
    code: CMRDiagnosticReportU1NeonatalJaundiceCode;
    subject: CMRDiagnosticReportU1NeonatalJaundiceSubjectReference;
    encounter: CMRDiagnosticReportU1NeonatalJaundiceEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1NeonatalJaundicePerformerReference>;
    result?: CMRDiagnosticReportU1NeonatalJaundiceResultReference[];
}

const CMRDiagnosticReportU1NeonatalJaundice: t.Type<CMRDiagnosticReportU1NeonatalJaundice> =
    t.recursion("CMRDiagnosticReportU1NeonatalJaundice", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1NeonatalJaundiceMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1NeonatalJaundiceCode,
                    subject: CMRDiagnosticReportU1NeonatalJaundiceSubjectReference,
                    encounter: CMRDiagnosticReportU1NeonatalJaundiceEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1NeonatalJaundicePerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU1NeonatalJaundiceResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1NeonatalJaundice;
