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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Pulsoxymetrie-Screening (Messung am Fuß)";
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Pulsoxymetrie-Screening (Messung am Fuß)")
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
export interface CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplay: t.Type<CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplay> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportU1U3PulseOxymetryCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210131";
    code: "252465000";
    id?: string;
    _display?: CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryCodeCoding: t.Type<CMRDiagnosticReportU1U3PulseOxymetryCodeCoding> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryCodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210131"
                    ),
                    code: Literal("252465000")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportU1U3PulseOxymetryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportU1U3PulseOxymetryMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.1">;
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryMeta: t.Type<CMRDiagnosticReportU1U3PulseOxymetryMeta> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_U1_U3_Pulse_Oxymetry|1.0.1"
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
export interface CMRDiagnosticReportU1U3PulseOxymetryCode {
    coding: Array<CMRDiagnosticReportU1U3PulseOxymetryCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryCode: t.Type<CMRDiagnosticReportU1U3PulseOxymetryCode> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportU1U3PulseOxymetryCodeCoding
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
export interface CMRDiagnosticReportU1U3PulseOxymetrySubjectReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetrySubjectReference: t.Type<CMRDiagnosticReportU1U3PulseOxymetrySubjectReference> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetrySubjectReference", () =>
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
export interface CMRDiagnosticReportU1U3PulseOxymetryEncounterReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryEncounterReference: t.Type<CMRDiagnosticReportU1U3PulseOxymetryEncounterReference> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryEncounterReference", () =>
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
export interface CMRDiagnosticReportU1U3PulseOxymetryPerformerReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryPerformerReference: t.Type<CMRDiagnosticReportU1U3PulseOxymetryPerformerReference> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryPerformerReference", () =>
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
export interface CMRDiagnosticReportU1U3PulseOxymetryResultReference {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportU1U3PulseOxymetryResultReference: t.Type<CMRDiagnosticReportU1U3PulseOxymetryResultReference> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetryResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U1_U3_Pulse_Oxymetry_Measurement|1.0.1"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface CMRDiagnosticReportU1U3PulseOxymetry {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportU1U3PulseOxymetryMeta;
    status: "final";
    code: CMRDiagnosticReportU1U3PulseOxymetryCode;
    subject: CMRDiagnosticReportU1U3PulseOxymetrySubjectReference;
    encounter: CMRDiagnosticReportU1U3PulseOxymetryEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportU1U3PulseOxymetryPerformerReference>;
    result?: CMRDiagnosticReportU1U3PulseOxymetryResultReference[];
}

const CMRDiagnosticReportU1U3PulseOxymetry: t.Type<CMRDiagnosticReportU1U3PulseOxymetry> =
    t.recursion("CMRDiagnosticReportU1U3PulseOxymetry", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportU1U3PulseOxymetryMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportU1U3PulseOxymetryCode,
                    subject: CMRDiagnosticReportU1U3PulseOxymetrySubjectReference,
                    encounter: CMRDiagnosticReportU1U3PulseOxymetryEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(
                        1,
                        CMRDiagnosticReportU1U3PulseOxymetryPerformerReference
                    ),
                    result: t.array(CMRDiagnosticReportU1U3PulseOxymetryResultReference)
                })
            ])
        )
    );

export default CMRDiagnosticReportU1U3PulseOxymetry;
