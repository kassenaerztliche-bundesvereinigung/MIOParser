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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Congenital_Malformation"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Fehlbildungen:";
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Fehlbildungen:")
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
export interface CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplay: t.Type<CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1CongenitalMalformationCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "276654001";
    id?: string;
    _display?: CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationCodeCoding: t.Type<CMRDiagnosticReportU1CongenitalMalformationCodeCoding> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("276654001")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        CMRDiagnosticReportU1CongenitalMalformationCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1CongenitalMalformationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Congenital_Malformation|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationMeta: t.Type<CMRDiagnosticReportU1CongenitalMalformationMeta> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Congenital_Malformation|1.0.1"
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
export interface CMRDiagnosticReportU1CongenitalMalformationCode {
    coding: Array<CMRDiagnosticReportU1CongenitalMalformationCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationCode: t.Type<CMRDiagnosticReportU1CongenitalMalformationCode> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1CongenitalMalformationCodeCoding
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
export interface CMRDiagnosticReportU1CongenitalMalformationSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationSubjectReference: t.Type<CMRDiagnosticReportU1CongenitalMalformationSubjectReference> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationSubjectReference", () =>
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
export interface CMRDiagnosticReportU1CongenitalMalformationEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationEncounterReference: t.Type<CMRDiagnosticReportU1CongenitalMalformationEncounterReference> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationEncounterReference", () =>
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
export interface CMRDiagnosticReportU1CongenitalMalformationPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationPerformerReference: t.Type<CMRDiagnosticReportU1CongenitalMalformationPerformerReference> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationPerformerReference", () =>
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
export interface CMRDiagnosticReportU1CongenitalMalformationResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1CongenitalMalformationResultReference: t.Type<CMRDiagnosticReportU1CongenitalMalformationResultReference> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformationResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Congenital_Malformation|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1CongenitalMalformation {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1CongenitalMalformationMeta;
    status: "final";
    code: CMRDiagnosticReportU1CongenitalMalformationCode;
    subject: CMRDiagnosticReportU1CongenitalMalformationSubjectReference;
    encounter: CMRDiagnosticReportU1CongenitalMalformationEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1CongenitalMalformationPerformerReference>;
    result?: CMRDiagnosticReportU1CongenitalMalformationResultReference[];
}

const CMRDiagnosticReportU1CongenitalMalformation: t.Type<CMRDiagnosticReportU1CongenitalMalformation> =
    t.recursion("CMRDiagnosticReportU1CongenitalMalformation", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1CongenitalMalformationMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1CongenitalMalformationCode,
                    subject: CMRDiagnosticReportU1CongenitalMalformationSubjectReference,
                    encounter:
                        CMRDiagnosticReportU1CongenitalMalformationEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1CongenitalMalformationPerformerReference
                    ),
                    result: t.array(
                        CMRDiagnosticReportU1CongenitalMalformationResultReference
                    )
                })
            ])
        )
    );

export default CMRDiagnosticReportU1CongenitalMalformation;
