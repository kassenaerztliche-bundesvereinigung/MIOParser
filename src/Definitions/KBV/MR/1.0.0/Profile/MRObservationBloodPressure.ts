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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure"

/**
 * Content in other Language.
 */
export interface MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Systolischer Blutdruckwert";
    id?: string;
}

export const MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Systolischer Blutdruckwert")
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
export interface MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Systolischer Blutdruckwert";
    id?: string;
}

export const MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Systolischer Blutdruckwert")
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
export interface MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Diastolischer Blutdruckwert";
    id?: string;
}

export const MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Diastolischer Blutdruckwert")
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
export interface MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Diastolischer Blutdruckwert";
    id?: string;
}

export const MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Diastolischer Blutdruckwert")
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
export interface MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blutdruck")
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
export interface MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Blutdruck";
    id?: string;
}

export const MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Blutdruck")
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
export interface MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    t.Type<MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc", () =>
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
                                t.Type<MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationBloodPressureSystolicCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodPressureSystolicCodeSnomedCTDisplay: t.Type<MRObservationBloodPressureSystolicCodeSnomedCTDisplay> =
    t.recursion("MRObservationBloodPressureSystolicCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodPressureSystolicCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodPressureSystolicCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationBloodPressureSystolicCodeLoincDisplay: t.Type<MRObservationBloodPressureSystolicCodeLoincDisplay> =
    t.recursion("MRObservationBloodPressureSystolicCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodPressureSystolicCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationBloodPressureDiastolicCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodPressureDiastolicCodeSnomedCTDisplay: t.Type<MRObservationBloodPressureDiastolicCodeSnomedCTDisplay> =
    t.recursion("MRObservationBloodPressureDiastolicCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodPressureDiastolicCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodPressureDiastolicCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationBloodPressureDiastolicCodeLoincDisplay: t.Type<MRObservationBloodPressureDiastolicCodeLoincDisplay> =
    t.recursion("MRObservationBloodPressureDiastolicCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodPressureDiastolicCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationBloodPressureSystolicCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "271649006";
    id?: string;
    _display?: MRObservationBloodPressureSystolicCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodPressureSystolicCodeSnomedCT: t.Type<MRObservationBloodPressureSystolicCodeSnomedCT> =
    t.recursion("MRObservationBloodPressureSystolicCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("271649006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureSystolicCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureSystolicCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "8480-6";
    id?: string;
    _display?: MRObservationBloodPressureSystolicCodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodPressureSystolicCodeLoinc: t.Type<MRObservationBloodPressureSystolicCodeLoinc> =
    t.recursion("MRObservationBloodPressureSystolicCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("8480-6")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureSystolicCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureDiastolicCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "271650006";
    id?: string;
    _display?: MRObservationBloodPressureDiastolicCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodPressureDiastolicCodeSnomedCT: t.Type<MRObservationBloodPressureDiastolicCodeSnomedCT> =
    t.recursion("MRObservationBloodPressureDiastolicCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("271650006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureDiastolicCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureDiastolicCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "8462-4";
    id?: string;
    _display?: MRObservationBloodPressureDiastolicCodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodPressureDiastolicCodeLoinc: t.Type<MRObservationBloodPressureDiastolicCodeLoinc> =
    t.recursion("MRObservationBloodPressureDiastolicCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("8462-4")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureDiastolicCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodPressureCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodPressureCodeSnomedCTDisplay: t.Type<MRObservationBloodPressureCodeSnomedCTDisplay> =
    t.recursion("MRObservationBloodPressureCodeSnomedCTDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodPressureCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodPressureCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationBloodPressureCodeLoincDisplay: t.Type<MRObservationBloodPressureCodeLoincDisplay> =
    t.recursion("MRObservationBloodPressureCodeLoincDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc,
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
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodPressureSystolicValueQuantity {
    value: number;
    unit: "mmHg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
}

export const MRObservationBloodPressureSystolicValueQuantity: t.Type<MRObservationBloodPressureSystolicValueQuantity> =
    t.recursion("MRObservationBloodPressureSystolicValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mmHg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm[Hg]")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodPressureDiastolicValueQuantity {
    value: number;
    unit: "mmHg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
}

export const MRObservationBloodPressureDiastolicValueQuantity: t.Type<MRObservationBloodPressureDiastolicValueQuantity> =
    t.recursion("MRObservationBloodPressureDiastolicValueQuantity", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mmHg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm[Hg]")
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
export interface MRObservationBloodPressureCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "75367002";
    id?: string;
    _display?: MRObservationBloodPressureCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodPressureCodeSnomedCT: t.Type<MRObservationBloodPressureCodeSnomedCT> =
    t.recursion("MRObservationBloodPressureCodeSnomedCT", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("75367002")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodPressureCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "85354-9";
    id?: string;
    _display?: MRObservationBloodPressureCodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodPressureCodeLoinc: t.Type<MRObservationBloodPressureCodeLoinc> =
    t.recursion("MRObservationBloodPressureCodeLoinc", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("85354-9")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodPressureCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface MRObservationBloodPressureSystolicCode {
    coding: Array<
        | MRObservationBloodPressureSystolicCodeSnomedCT
        | MRObservationBloodPressureSystolicCodeLoinc
    >;
    text: "Systolischer Blutdruckwert";
    id?: string;
}

export const MRObservationBloodPressureSystolicCode: t.Type<MRObservationBloodPressureSystolicCode> =
    t.recursion("MRObservationBloodPressureSystolicCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureSystolicCodeSnomedCT>,
                                t.Type<MRObservationBloodPressureSystolicCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureSystolicCodeSnomedCT,
                            MRObservationBloodPressureSystolicCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureSystolicCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodPressureSystolicCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("Systolischer Blutdruckwert")
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
export interface MRObservationBloodPressureDiastolicCode {
    coding: Array<
        | MRObservationBloodPressureDiastolicCodeSnomedCT
        | MRObservationBloodPressureDiastolicCodeLoinc
    >;
    text: "Diastolischer Blutdruckwert";
    id?: string;
}

export const MRObservationBloodPressureDiastolicCode: t.Type<MRObservationBloodPressureDiastolicCode> =
    t.recursion("MRObservationBloodPressureDiastolicCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureDiastolicCodeSnomedCT>,
                                t.Type<MRObservationBloodPressureDiastolicCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureDiastolicCodeSnomedCT,
                            MRObservationBloodPressureDiastolicCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureDiastolicCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodPressureDiastolicCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("Diastolischer Blutdruckwert")
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
export interface MRObservationBloodPressureSystolic {
    code: MRObservationBloodPressureSystolicCode;
    valueQuantity: MRObservationBloodPressureSystolicValueQuantity;
    id?: string;
}

export const MRObservationBloodPressureSystolic: t.Type<MRObservationBloodPressureSystolic> =
    t.recursion("MRObservationBloodPressureSystolic", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodPressureSystolicCode,
                    valueQuantity: MRObservationBloodPressureSystolicValueQuantity
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
export interface MRObservationBloodPressureDiastolic {
    code: MRObservationBloodPressureDiastolicCode;
    valueQuantity: MRObservationBloodPressureDiastolicValueQuantity;
    id?: string;
}

export const MRObservationBloodPressureDiastolic: t.Type<MRObservationBloodPressureDiastolic> =
    t.recursion("MRObservationBloodPressureDiastolic", () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodPressureDiastolicCode,
                    valueQuantity: MRObservationBloodPressureDiastolicValueQuantity
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
export interface MRObservationBloodPressureMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0">;
    id?: string;
}

export const MRObservationBloodPressureMeta: t.Type<MRObservationBloodPressureMeta> =
    t.recursion("MRObservationBloodPressureMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0"
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
export interface MRObservationBloodPressureCode {
    coding: Array<
        MRObservationBloodPressureCodeSnomedCT | MRObservationBloodPressureCodeLoinc
    >;
    id?: string;
}

export const MRObservationBloodPressureCode: t.Type<MRObservationBloodPressureCode> =
    t.recursion("MRObservationBloodPressureCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureCodeSnomedCT>,
                                t.Type<MRObservationBloodPressureCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureCodeSnomedCT,
                            MRObservationBloodPressureCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodPressureCodeLoinc,
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
 * The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation.
 */
export interface MRObservationBloodPressureSubjectReference {
    reference: string;
    id?: string;
}

export const MRObservationBloodPressureSubjectReference: t.Type<MRObservationBloodPressureSubjectReference> =
    t.recursion("MRObservationBloodPressureSubjectReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Mother|1.0.0"
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
export interface MRObservationBloodPressureEncounterReference {
    reference: string;
    id?: string;
}

export const MRObservationBloodPressureEncounterReference: t.Type<MRObservationBloodPressureEncounterReference> =
    t.recursion("MRObservationBloodPressureEncounterReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.0.0"
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
export interface MRObservationBloodPressurePerformerReference {
    reference: string;
    id?: string;
}

export const MRObservationBloodPressurePerformerReference: t.Type<MRObservationBloodPressurePerformerReference> =
    t.recursion("MRObservationBloodPressurePerformerReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRObservationBloodPressure {
    resourceType: "Observation";
    meta: MRObservationBloodPressureMeta;
    status: "final";
    code: MRObservationBloodPressureCode;
    subject: MRObservationBloodPressureSubjectReference;
    encounter: MRObservationBloodPressureEncounterReference;
    effectiveDateTime: string;
    component: Array<
        MRObservationBloodPressureSystolic | MRObservationBloodPressureDiastolic
    >;
    id?: string;
    text?: Narrative;
    performer?: Array<MRObservationBloodPressurePerformerReference>;
}

const MRObservationBloodPressure: t.Type<MRObservationBloodPressure> = t.recursion(
    "MRObservationBloodPressure",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationBloodPressureMeta,
                    status: Literal("final"),
                    code: MRObservationBloodPressureCode,
                    subject: MRObservationBloodPressureSubjectReference,
                    encounter: MRObservationBloodPressureEncounterReference,
                    effectiveDateTime: SCALARDateTime,
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodPressureSystolic>,
                                t.Type<MRObservationBloodPressureDiastolic>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodPressureSystolic,
                            MRObservationBloodPressureDiastolic
                        ]),
                        [
                            {
                                codec: MRObservationBloodPressureSystolic,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "code.text",
                                    value: "Systolischer Blutdruckwert"
                                }
                            },
                            {
                                codec: MRObservationBloodPressureDiastolic,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "code.text",
                                    value: "Diastolischer Blutdruckwert"
                                }
                            }
                        ],
                        ["2", "2"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    performer: MaxArray(1, MRObservationBloodPressurePerformerReference)
                })
            ])
        )
);

export default MRObservationBloodPressure;
