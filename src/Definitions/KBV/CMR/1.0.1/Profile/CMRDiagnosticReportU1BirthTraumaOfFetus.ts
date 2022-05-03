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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Trauma_Of_Fetus"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Traumata:";
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Traumata:")
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplay: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "56110009";
    id?: string;
    _display?: CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusCodeCoding: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCoding> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("56110009")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1BirthTraumaOfFetusCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1BirthTraumaOfFetusMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Trauma_Of_Fetus|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusMeta: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusMeta> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_Birth_Trauma_Of_Fetus|1.0.1"
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusCode {
    coding: Array<CMRDiagnosticReportU1BirthTraumaOfFetusCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusCode: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusCode> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1BirthTraumaOfFetusCodeCoding
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusSubject: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusSubject> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusSubject", () =>
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusEncounter: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusEncounter> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusEncounter", () =>
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusPerformer: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusPerformer> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusPerformer", () =>
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
export interface CMRDiagnosticReportU1BirthTraumaOfFetusResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1BirthTraumaOfFetusResult: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetusResult> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetusResult", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_Birth_Trauma_Of_Fetus|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1BirthTraumaOfFetus {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1BirthTraumaOfFetusMeta;
    status: "final";
    code: CMRDiagnosticReportU1BirthTraumaOfFetusCode;
    subject: CMRDiagnosticReportU1BirthTraumaOfFetusSubject;
    encounter: CMRDiagnosticReportU1BirthTraumaOfFetusEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1BirthTraumaOfFetusPerformer>;
    result?: CMRDiagnosticReportU1BirthTraumaOfFetusResult[];
}

const CMRDiagnosticReportU1BirthTraumaOfFetus: t.Type<CMRDiagnosticReportU1BirthTraumaOfFetus> =
    t.recursion("CMRDiagnosticReportU1BirthTraumaOfFetus", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1BirthTraumaOfFetusMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1BirthTraumaOfFetusCode,
                    subject: CMRDiagnosticReportU1BirthTraumaOfFetusSubject,
                    encounter: CMRDiagnosticReportU1BirthTraumaOfFetusEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1BirthTraumaOfFetusPerformer
                    ),
                    result: t.array(CMRDiagnosticReportU1BirthTraumaOfFetusResult)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1BirthTraumaOfFetus;
