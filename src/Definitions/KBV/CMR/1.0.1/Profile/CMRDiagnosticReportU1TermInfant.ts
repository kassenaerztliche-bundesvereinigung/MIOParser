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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Term_Infant"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Reifezeichen:";
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Reifezeichen:")
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
export interface CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1TermInfantCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1TermInfantCodeCodingDisplay: t.Type<CMRDiagnosticReportU1TermInfantCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1TermInfantCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1TermInfantCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1TermInfantCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "364739001";
    id?: string;
    _display?: CMRDiagnosticReportU1TermInfantCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1TermInfantCodeCoding: t.Type<CMRDiagnosticReportU1TermInfantCodeCoding> =
    t.recursion("CMRDiagnosticReportU1TermInfantCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("364739001")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1TermInfantCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1TermInfantMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Term_Infant|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantMeta: t.Type<CMRDiagnosticReportU1TermInfantMeta> =
    t.recursion("CMRDiagnosticReportU1TermInfantMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Term_Infant|1.0.1"
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
export interface CMRDiagnosticReportU1TermInfantCode {
    coding: Array<CMRDiagnosticReportU1TermInfantCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantCode: t.Type<CMRDiagnosticReportU1TermInfantCode> =
    t.recursion("CMRDiagnosticReportU1TermInfantCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, CMRDiagnosticReportU1TermInfantCodeCoding)
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
export interface CMRDiagnosticReportU1TermInfantSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantSubjectReference: t.Type<CMRDiagnosticReportU1TermInfantSubjectReference> =
    t.recursion("CMRDiagnosticReportU1TermInfantSubjectReference", () =>
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
export interface CMRDiagnosticReportU1TermInfantEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantEncounterReference: t.Type<CMRDiagnosticReportU1TermInfantEncounterReference> =
    t.recursion("CMRDiagnosticReportU1TermInfantEncounterReference", () =>
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
export interface CMRDiagnosticReportU1TermInfantPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantPerformerReference: t.Type<CMRDiagnosticReportU1TermInfantPerformerReference> =
    t.recursion("CMRDiagnosticReportU1TermInfantPerformerReference", () =>
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
export interface CMRDiagnosticReportU1TermInfantResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1TermInfantResultReference: t.Type<CMRDiagnosticReportU1TermInfantResultReference> =
    t.recursion("CMRDiagnosticReportU1TermInfantResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Term_Infant|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1TermInfant {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1TermInfantMeta;
    status: "final";
    code: CMRDiagnosticReportU1TermInfantCode;
    subject: CMRDiagnosticReportU1TermInfantSubjectReference;
    encounter: CMRDiagnosticReportU1TermInfantEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1TermInfantPerformerReference>;
    result?: CMRDiagnosticReportU1TermInfantResultReference[];
}

const CMRDiagnosticReportU1TermInfant: t.Type<CMRDiagnosticReportU1TermInfant> =
    t.recursion("CMRDiagnosticReportU1TermInfant", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1TermInfantMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1TermInfantCode,
                    subject: CMRDiagnosticReportU1TermInfantSubjectReference,
                    encounter: CMRDiagnosticReportU1TermInfantEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1TermInfantPerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU1TermInfantResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1TermInfant;
