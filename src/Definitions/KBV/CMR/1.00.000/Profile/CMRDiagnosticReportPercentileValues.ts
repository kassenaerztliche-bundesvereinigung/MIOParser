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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values"

/**
 * Content in other Language.
 */
export interface CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Perzentilkurven";
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Perzentilkurven")
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
export interface CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRDiagnosticReportPercentileValuesCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRDiagnosticReportPercentileValuesCodeCodingDisplay: t.Type<CMRDiagnosticReportPercentileValuesCodeCodingDisplay> = t.recursion(
    "CMRDiagnosticReportPercentileValuesCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRDiagnosticReportPercentileValuesCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRDiagnosticReportPercentileValuesCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "129822005";
    id?: string;
    _display?: CMRDiagnosticReportPercentileValuesCodeCodingDisplay;
    display?: string;
}

export const CMRDiagnosticReportPercentileValuesCodeCoding: t.Type<CMRDiagnosticReportPercentileValuesCodeCoding> = t.recursion(
    "CMRDiagnosticReportPercentileValuesCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("129822005")
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRDiagnosticReportPercentileValuesCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRDiagnosticReportPercentileValuesMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
    >;
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesMeta: t.Type<CMRDiagnosticReportPercentileValuesMeta> = t.recursion(
    "CMRDiagnosticReportPercentileValuesMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Diagnostic_Report_Percentile_Values|1.0.0"
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
export interface CMRDiagnosticReportPercentileValuesCode {
    coding: Array<CMRDiagnosticReportPercentileValuesCodeCoding>;
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesCode: t.Type<CMRDiagnosticReportPercentileValuesCode> = t.recursion(
    "CMRDiagnosticReportPercentileValuesCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRDiagnosticReportPercentileValuesCodeCoding
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
export interface CMRDiagnosticReportPercentileValuesSubject {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesSubject: t.Type<CMRDiagnosticReportPercentileValuesSubject> = t.recursion(
    "CMRDiagnosticReportPercentileValuesSubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Patient"
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
export interface CMRDiagnosticReportPercentileValuesEncounter {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesEncounter: t.Type<CMRDiagnosticReportPercentileValuesEncounter> = t.recursion(
    "CMRDiagnosticReportPercentileValuesEncounter",
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
export interface CMRDiagnosticReportPercentileValuesPerformer {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesPerformer: t.Type<CMRDiagnosticReportPercentileValuesPerformer> = t.recursion(
    "CMRDiagnosticReportPercentileValuesPerformer",
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
export interface CMRDiagnosticReportPercentileValuesResult {
    reference: string;
    id?: string;
}

export const CMRDiagnosticReportPercentileValuesResult: t.Type<CMRDiagnosticReportPercentileValuesResult> = t.recursion(
    "CMRDiagnosticReportPercentileValuesResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_Percentile_Values|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRDiagnosticReportPercentileValues {
    resourceType: "DiagnosticReport";
    meta: CMRDiagnosticReportPercentileValuesMeta;
    status: "final";
    code: CMRDiagnosticReportPercentileValuesCode;
    subject: CMRDiagnosticReportPercentileValuesSubject;
    encounter: CMRDiagnosticReportPercentileValuesEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRDiagnosticReportPercentileValuesPerformer>;
    result?: CMRDiagnosticReportPercentileValuesResult[];
}

const CMRDiagnosticReportPercentileValues: t.Type<CMRDiagnosticReportPercentileValues> = t.recursion(
    "CMRDiagnosticReportPercentileValues",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: CMRDiagnosticReportPercentileValuesMeta,
                    status: Literal("final"),
                    code: CMRDiagnosticReportPercentileValuesCode,
                    subject: CMRDiagnosticReportPercentileValuesSubject,
                    encounter: CMRDiagnosticReportPercentileValuesEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRDiagnosticReportPercentileValuesPerformer),
                    result: t.array(CMRDiagnosticReportPercentileValuesResult)
                })
            ])
        )
);

export default CMRDiagnosticReportPercentileValues;
