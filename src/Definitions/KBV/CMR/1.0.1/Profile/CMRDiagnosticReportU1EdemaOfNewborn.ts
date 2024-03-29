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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Edema_Of_Newborn"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Ödeme";
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Ödeme")
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
export interface CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplay: t.Type<CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1EdemaOfNewbornCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "78913002";
    id?: string;
    _display?: CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornCodeCoding: t.Type<CMRDiagnosticReportU1EdemaOfNewbornCodeCoding> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("78913002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1EdemaOfNewbornCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1EdemaOfNewbornMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Edema_Of_Newborn|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornMeta: t.Type<CMRDiagnosticReportU1EdemaOfNewbornMeta> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Edema_Of_Newborn|1.0.1"
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
export interface CMRDiagnosticReportU1EdemaOfNewbornCode {
    coding: Array<CMRDiagnosticReportU1EdemaOfNewbornCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornCode: t.Type<CMRDiagnosticReportU1EdemaOfNewbornCode> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1EdemaOfNewbornCodeCoding
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
export interface CMRDiagnosticReportU1EdemaOfNewbornSubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornSubjectReference: t.Type<CMRDiagnosticReportU1EdemaOfNewbornSubjectReference> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornSubjectReference", () =>
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
export interface CMRDiagnosticReportU1EdemaOfNewbornEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornEncounterReference: t.Type<CMRDiagnosticReportU1EdemaOfNewbornEncounterReference> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornEncounterReference", () =>
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
export interface CMRDiagnosticReportU1EdemaOfNewbornPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornPerformerReference: t.Type<CMRDiagnosticReportU1EdemaOfNewbornPerformerReference> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornPerformerReference", () =>
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
export interface CMRDiagnosticReportU1EdemaOfNewbornResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1EdemaOfNewbornResultReference: t.Type<CMRDiagnosticReportU1EdemaOfNewbornResultReference> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewbornResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Edema_Of_Newborn|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1EdemaOfNewborn {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1EdemaOfNewbornMeta;
    status: "final";
    code: CMRDiagnosticReportU1EdemaOfNewbornCode;
    subject: CMRDiagnosticReportU1EdemaOfNewbornSubjectReference;
    encounter: CMRDiagnosticReportU1EdemaOfNewbornEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1EdemaOfNewbornPerformerReference>;
    result?: CMRDiagnosticReportU1EdemaOfNewbornResultReference[];
}

const CMRDiagnosticReportU1EdemaOfNewborn: t.Type<CMRDiagnosticReportU1EdemaOfNewborn> =
    t.recursion("CMRDiagnosticReportU1EdemaOfNewborn", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1EdemaOfNewbornMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1EdemaOfNewbornCode,
                    subject: CMRDiagnosticReportU1EdemaOfNewbornSubjectReference,
                    encounter: CMRDiagnosticReportU1EdemaOfNewbornEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1EdemaOfNewbornPerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU1EdemaOfNewbornResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1EdemaOfNewborn;
