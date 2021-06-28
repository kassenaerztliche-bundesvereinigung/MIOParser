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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CMRBodysiteHipVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRBodysiteHip";
import CMRGrafHipUltrasoundClassificationVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRGrafHipUltrasoundClassification";
import CMRHipScreeningMethodVS from "../../../../../Definitions/KBV/CMR/1.0.0/ValueSet/CMRHipScreeningMethod";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_Result"

/**
 * Content in other Language.
 */
export interface CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent {
    url: "content";
    valueString: "Beta-Winkel (Grad)";
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Beta-Winkel (Grad)")
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
export interface CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent {
    url: "content";
    valueString: "Alpha-Winkel (Grad)";
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Alpha-Winkel (Grad)")
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
export interface CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent: t.Type<CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent> = t.recursion(
    "CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
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
export interface CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
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
export interface CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent: t.Type<CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
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
export interface CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent
    )[];
}

export const CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed",
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
                                    CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent,
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
export interface CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent
    )[];
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed",
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
                                    CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomedContent,
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
export interface CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
    )[];
}

export const CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed: t.Type<CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed> = t.recursion(
    "CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed",
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
                                    CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomedContent,
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
export interface CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
    )[];
}

export const CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed: t.Type<CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed",
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
                                    CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomedContent,
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
export interface CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplay: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplay> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplayAnzeigenameComponentSnomed,
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
export interface CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplay: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplay> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplayAnzeigenameComponentSnomed,
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
export interface CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplay: t.Type<CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplay> = t.recursion(
    "CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplayAnzeigenameValueSnomed,
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
export interface CMRObservationU3U4HipScreeningResultBetaWinkelCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364501006:{704321009=241503003,246501002=278395004,246514001=259046004,718497002=91685003}";
    id?: string;
    _display?: CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4HipScreeningResultBetaWinkelCodeCoding: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkelCodeCoding> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkelCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal(
                        "364501006:{704321009=241503003,246501002=278395004,246514001=259046004,718497002=91685003}"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4HipScreeningResultBetaWinkelCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU3U4HipScreeningResultBetaWinkelValueQuantity {
    value: number;
    unit: "DegreesOfArc";
    system: "http://unitsofmeasure.org";
    code: "deg";
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultBetaWinkelValueQuantity: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkelValueQuantity> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkelValueQuantity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("DegreesOfArc"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("deg")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364501006:{704321009=241503003,246501002=278395004,246514001=259046004,718497002=58823008}";
    id?: string;
    _display?: CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCoding: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCoding> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal(
                        "364501006:{704321009=241503003,246501002=278395004,246514001=259046004,718497002=58823008}"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU3U4HipScreeningResultAlphaWinkelValueQuantity {
    value: number;
    unit: "DegreesOfArc";
    system: "http://unitsofmeasure.org";
    code: "deg";
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkelValueQuantity: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkelValueQuantity> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkelValueQuantity",
    () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("DegreesOfArc"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("deg")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU3U4HipScreeningResultCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4HipScreeningResultCodeCodingDisplay: t.Type<CMRObservationU3U4HipScreeningResultCodeCodingDisplay> = t.recursion(
    "CMRObservationU3U4HipScreeningResultCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4HipScreeningResultCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface CMRObservationU3U4HipScreeningResultValueCodeableConceptCoding {
    system: string;
    version: string;
    code: CMRGrafHipUltrasoundClassificationVS;
    id?: string;
    _display?: CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4HipScreeningResultValueCodeableConceptCoding: t.Type<CMRObservationU3U4HipScreeningResultValueCodeableConceptCoding> = t.recursion(
    "CMRObservationU3U4HipScreeningResultValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRGrafHipUltrasoundClassificationVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4HipScreeningResultValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface CMRObservationU3U4HipScreeningResultBodySiteCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed
    )[];
    value?: string;
}

export const CMRObservationU3U4HipScreeningResultBodySiteCodingDisplay: t.Type<CMRObservationU3U4HipScreeningResultBodySiteCodingDisplay> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBodySiteCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMRObservationU3U4HipScreeningResultBodySiteCodingDisplayAnzeigenameBodySiteSnomed,
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
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface CMRObservationU3U4HipScreeningResultBetaWinkelCode {
    coding: Array<CMRObservationU3U4HipScreeningResultBetaWinkelCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultBetaWinkelCode: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkelCode> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkelCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4HipScreeningResultBetaWinkelCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface CMRObservationU3U4HipScreeningResultAlphaWinkelCode {
    coding: Array<CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkelCode: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkelCode> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkelCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4HipScreeningResultAlphaWinkelCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU3U4HipScreeningResultCodeCoding {
    system: string;
    version: string;
    code: CMRHipScreeningMethodVS;
    id?: string;
    _display?: CMRObservationU3U4HipScreeningResultCodeCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4HipScreeningResultCodeCoding: t.Type<CMRObservationU3U4HipScreeningResultCodeCoding> = t.recursion(
    "CMRObservationU3U4HipScreeningResultCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRHipScreeningMethodVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4HipScreeningResultCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface CMRObservationU3U4HipScreeningResultValueCodeableConcept {
    coding: Array<CMRObservationU3U4HipScreeningResultValueCodeableConceptCoding>;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultValueCodeableConcept: t.Type<CMRObservationU3U4HipScreeningResultValueCodeableConcept> = t.recursion(
    "CMRObservationU3U4HipScreeningResultValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4HipScreeningResultValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMRObservationU3U4HipScreeningResultBodySiteCoding {
    system: string;
    version: string;
    code: CMRBodysiteHipVS;
    id?: string;
    _display?: CMRObservationU3U4HipScreeningResultBodySiteCodingDisplay;
    display?: string;
}

export const CMRObservationU3U4HipScreeningResultBodySiteCoding: t.Type<CMRObservationU3U4HipScreeningResultBodySiteCoding> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBodySiteCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: CMRBodysiteHipVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: CMRObservationU3U4HipScreeningResultBodySiteCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface CMRObservationU3U4HipScreeningResultBetaWinkel {
    code: CMRObservationU3U4HipScreeningResultBetaWinkelCode;
    valueQuantity: CMRObservationU3U4HipScreeningResultBetaWinkelValueQuantity;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultBetaWinkel: t.Type<CMRObservationU3U4HipScreeningResultBetaWinkel> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBetaWinkel",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRObservationU3U4HipScreeningResultBetaWinkelCode,
                    valueQuantity: CMRObservationU3U4HipScreeningResultBetaWinkelValueQuantity
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface CMRObservationU3U4HipScreeningResultAlphaWinkel {
    code: CMRObservationU3U4HipScreeningResultAlphaWinkelCode;
    valueQuantity: CMRObservationU3U4HipScreeningResultAlphaWinkelValueQuantity;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultAlphaWinkel: t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkel> = t.recursion(
    "CMRObservationU3U4HipScreeningResultAlphaWinkel",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: CMRObservationU3U4HipScreeningResultAlphaWinkelCode,
                    valueQuantity: CMRObservationU3U4HipScreeningResultAlphaWinkelValueQuantity
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMRObservationU3U4HipScreeningResultMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_Result|1.0.0"
    >;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultMeta: t.Type<CMRObservationU3U4HipScreeningResultMeta> = t.recursion(
    "CMRObservationU3U4HipScreeningResultMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Observation_U3_U4_Hip_Screening_Result|1.0.0"
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
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface CMRObservationU3U4HipScreeningResultCode {
    coding: Array<CMRObservationU3U4HipScreeningResultCodeCoding>;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultCode: t.Type<CMRObservationU3U4HipScreeningResultCode> = t.recursion(
    "CMRObservationU3U4HipScreeningResultCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4HipScreeningResultCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface CMRObservationU3U4HipScreeningResultSubject {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultSubject: t.Type<CMRObservationU3U4HipScreeningResultSubject> = t.recursion(
    "CMRObservationU3U4HipScreeningResultSubject",
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface CMRObservationU3U4HipScreeningResultEncounter {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultEncounter: t.Type<CMRObservationU3U4HipScreeningResultEncounter> = t.recursion(
    "CMRObservationU3U4HipScreeningResultEncounter",
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface CMRObservationU3U4HipScreeningResultPerformer {
    reference: string;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultPerformer: t.Type<CMRObservationU3U4HipScreeningResultPerformer> = t.recursion(
    "CMRObservationU3U4HipScreeningResultPerformer",
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
 * Indicates the site on the subject's body where the observation was made (i.e. the target site).
 */
export interface CMRObservationU3U4HipScreeningResultBodySite {
    coding: Array<CMRObservationU3U4HipScreeningResultBodySiteCoding>;
    id?: string;
}

export const CMRObservationU3U4HipScreeningResultBodySite: t.Type<CMRObservationU3U4HipScreeningResultBodySite> = t.recursion(
    "CMRObservationU3U4HipScreeningResultBodySite",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        CMRObservationU3U4HipScreeningResultBodySiteCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface CMRObservationU3U4HipScreeningResult {
    resourceType: "Observation";
    meta: CMRObservationU3U4HipScreeningResultMeta;
    status: "final";
    code: CMRObservationU3U4HipScreeningResultCode;
    subject: CMRObservationU3U4HipScreeningResultSubject;
    encounter: CMRObservationU3U4HipScreeningResultEncounter;
    effectiveDateTime: string;
    valueCodeableConcept: CMRObservationU3U4HipScreeningResultValueCodeableConcept;
    bodySite: CMRObservationU3U4HipScreeningResultBodySite;
    component: Array<
        | CMRObservationU3U4HipScreeningResultBetaWinkel
        | CMRObservationU3U4HipScreeningResultAlphaWinkel
    >;
    id?: string;
    text?: Narrative;
    performer?: Array<CMRObservationU3U4HipScreeningResultPerformer>;
    valueString?: string;
}

const CMRObservationU3U4HipScreeningResult: t.Type<CMRObservationU3U4HipScreeningResult> = t.recursion(
    "CMRObservationU3U4HipScreeningResult",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: CMRObservationU3U4HipScreeningResultMeta,
                    status: Literal("final"),
                    code: CMRObservationU3U4HipScreeningResultCode,
                    subject: CMRObservationU3U4HipScreeningResultSubject,
                    encounter: CMRObservationU3U4HipScreeningResultEncounter,
                    effectiveDateTime: SCALARDateTime,
                    valueCodeableConcept: CMRObservationU3U4HipScreeningResultValueCodeableConcept,
                    bodySite: CMRObservationU3U4HipScreeningResultBodySite,
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMRObservationU3U4HipScreeningResultBetaWinkel>,
                                t.Type<CMRObservationU3U4HipScreeningResultAlphaWinkel>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMRObservationU3U4HipScreeningResultBetaWinkel,
                            CMRObservationU3U4HipScreeningResultAlphaWinkel
                        ]),
                        [
                            {
                                codec: CMRObservationU3U4HipScreeningResultBetaWinkel,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "code.coding.code",
                                    value:
                                        "364501006:{704321009=241503003,246501002=278395004,246514001=259046004,718497002=91685003}"
                                }
                            },
                            {
                                codec: CMRObservationU3U4HipScreeningResultAlphaWinkel,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "code.coding.code",
                                    value:
                                        "364501006:{704321009=241503003,246501002=278395004,246514001=259046004,718497002=58823008}"
                                }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, CMRObservationU3U4HipScreeningResultPerformer),
                    valueString: SCALARString
                })
            ])
        )
);

export default CMRObservationU3U4HipScreeningResult;
