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
import { Excess, Literal, MaxArray, MinMaxArray, ReqArray } from "../../../../util";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRAB0SystemVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRAB0System";
import MRRhesusSystemVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRRhesusSystem";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology"

/**
 * Content in other Language.
 */
export interface MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "AB0-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("AB0-System")
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
export interface MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "AB0-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("AB0-System")
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
export interface MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Rhesus-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Rhesus-System")
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
export interface MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Rhesus-System";
    id?: string;
}

export const MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Rhesus-System")
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
export interface MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent
    )[];
}

export const MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc",
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
                                    MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoincContent,
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
export interface MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
 * Content in other Language.
 */
export interface MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blutgruppenzugehörigkeit";
    id?: string;
}

export const MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Blutgruppenzugehörigkeit")
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
export interface MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplay: t.Type<MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodGroupSerologyAB0CodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyAB0CodeLoincDisplay: t.Type<MRObservationBloodGroupSerologyAB0CodeLoincDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyAB0CodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplay: t.Type<MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplay: t.Type<MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodGroupSerologyRhesusCodeLoincDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyRhesusCodeLoincDisplay: t.Type<MRObservationBloodGroupSerologyRhesusCodeLoincDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeLoincDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyRhesusCodeLoincDisplayAnzeigenameCodeLoinc,
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
export interface MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplay: t.Type<MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyAB0CodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,704318007=410656007,246093002=106202009";
    id?: string;
    _display?: MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyAB0CodeSnomedCT: t.Type<MRObservationBloodGroupSerologyAB0CodeSnomedCT> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal(
                        "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,704318007=410656007,246093002=106202009"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyAB0CodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyAB0CodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "883-9";
    id?: string;
    _display?: MRObservationBloodGroupSerologyAB0CodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyAB0CodeLoinc: t.Type<MRObservationBloodGroupSerologyAB0CodeLoinc> = t.recursion(
    "MRObservationBloodGroupSerologyAB0CodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("883-9")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyAB0CodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyAB0ValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRAB0SystemVS;
    id?: string;
    _display?: MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyAB0ValueCodeableConceptCoding: t.Type<MRObservationBloodGroupSerologyAB0ValueCodeableConceptCoding> = t.recursion(
    "MRObservationBloodGroupSerologyAB0ValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRAB0SystemVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyAB0ValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyRhesusCodeSnomedCT {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,704318007=410656007,246093002=16951006";
    id?: string;
    _display?: MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyRhesusCodeSnomedCT: t.Type<MRObservationBloodGroupSerologyRhesusCodeSnomedCT> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeSnomedCT",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal(
                        "363787002:704319004=87612001,704327008=119297000,370134009=123029007,370132008=117362005,704318007=410656007,246093002=16951006"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyRhesusCodeSnomedCTDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyRhesusCodeLoinc {
    system: "http://loinc.org";
    version: "2.68";
    code: "10331-7";
    id?: string;
    _display?: MRObservationBloodGroupSerologyRhesusCodeLoincDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyRhesusCodeLoinc: t.Type<MRObservationBloodGroupSerologyRhesusCodeLoinc> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCodeLoinc",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.68"),
                    code: Literal("10331-7")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyRhesusCodeLoincDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRObservationBloodGroupSerologyRhesusValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRRhesusSystemVS;
    id?: string;
    _display?: MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyRhesusValueCodeableConceptCoding: t.Type<MRObservationBloodGroupSerologyRhesusValueCodeableConceptCoding> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRRhesusSystemVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyRhesusValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodGroupSerologyAB0ValueCodeableConcept {
    coding: Array<MRObservationBloodGroupSerologyAB0ValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const MRObservationBloodGroupSerologyAB0ValueCodeableConcept: t.Type<MRObservationBloodGroupSerologyAB0ValueCodeableConcept> = t.recursion(
    "MRObservationBloodGroupSerologyAB0ValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyAB0ValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface MRObservationBloodGroupSerologyRhesusValueCodeableConcept {
    coding: Array<MRObservationBloodGroupSerologyRhesusValueCodeableConceptCoding>;
    id?: string;
    text?: string;
}

export const MRObservationBloodGroupSerologyRhesusValueCodeableConcept: t.Type<MRObservationBloodGroupSerologyRhesusValueCodeableConcept> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationBloodGroupSerologyRhesusValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRObservationBloodGroupSerologyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationBloodGroupSerologyCodeCodingDisplay: t.Type<MRObservationBloodGroupSerologyCodeCodingDisplay> = t.recursion(
    "MRObservationBloodGroupSerologyCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationBloodGroupSerologyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationBloodGroupSerologyAB0Code {
    coding: Array<
        | MRObservationBloodGroupSerologyAB0CodeSnomedCT
        | MRObservationBloodGroupSerologyAB0CodeLoinc
    >;
    text: "AB0";
    id?: string;
}

export const MRObservationBloodGroupSerologyAB0Code: t.Type<MRObservationBloodGroupSerologyAB0Code> = t.recursion(
    "MRObservationBloodGroupSerologyAB0Code",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyAB0CodeSnomedCT>,
                                t.Type<MRObservationBloodGroupSerologyAB0CodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyAB0CodeSnomedCT,
                            MRObservationBloodGroupSerologyAB0CodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyAB0CodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyAB0CodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("AB0")
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
export interface MRObservationBloodGroupSerologyRhesusCode {
    coding: Array<
        | MRObservationBloodGroupSerologyRhesusCodeSnomedCT
        | MRObservationBloodGroupSerologyRhesusCodeLoinc
    >;
    text: "Rhesus";
    id?: string;
}

export const MRObservationBloodGroupSerologyRhesusCode: t.Type<MRObservationBloodGroupSerologyRhesusCode> = t.recursion(
    "MRObservationBloodGroupSerologyRhesusCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyRhesusCodeSnomedCT>,
                                t.Type<MRObservationBloodGroupSerologyRhesusCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyRhesusCodeSnomedCT,
                            MRObservationBloodGroupSerologyRhesusCodeLoinc
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyRhesusCodeSnomedCT,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://snomed.info/sct"
                                }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyRhesusCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "http://loinc.org" }
                            }
                        ],
                        ["2", "2"]
                    ),
                    text: Literal("Rhesus")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRObservationBloodGroupSerologyHinweisBehandelndePerson {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: "Diese Eintragungen entbinden den behandelnden Arzt nicht von seiner Sorgfaltspflicht (z.B. Kreuzprobe).";
    id?: string;
}

export const MRObservationBloodGroupSerologyHinweisBehandelndePerson: t.Type<MRObservationBloodGroupSerologyHinweisBehandelndePerson> = t.recursion(
    "MRObservationBloodGroupSerologyHinweisBehandelndePerson",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: Literal(
                        "Diese Eintragungen entbinden den behandelnden Arzt nicht von seiner Sorgfaltspflicht (z.B. Kreuzprobe)."
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
export interface MRObservationBloodGroupSerologyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "365636006";
    id?: string;
    _display?: MRObservationBloodGroupSerologyCodeCodingDisplay;
    display?: string;
}

export const MRObservationBloodGroupSerologyCodeCoding: t.Type<MRObservationBloodGroupSerologyCodeCoding> = t.recursion(
    "MRObservationBloodGroupSerologyCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("365636006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationBloodGroupSerologyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface MRObservationBloodGroupSerologyAB0 {
    code: MRObservationBloodGroupSerologyAB0Code;
    valueCodeableConcept: MRObservationBloodGroupSerologyAB0ValueCodeableConcept;
    id?: string;
}

export const MRObservationBloodGroupSerologyAB0: t.Type<MRObservationBloodGroupSerologyAB0> = t.recursion(
    "MRObservationBloodGroupSerologyAB0",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodGroupSerologyAB0Code,
                    valueCodeableConcept: MRObservationBloodGroupSerologyAB0ValueCodeableConcept
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
export interface MRObservationBloodGroupSerologyRhesus {
    code: MRObservationBloodGroupSerologyRhesusCode;
    valueCodeableConcept: MRObservationBloodGroupSerologyRhesusValueCodeableConcept;
    id?: string;
}

export const MRObservationBloodGroupSerologyRhesus: t.Type<MRObservationBloodGroupSerologyRhesus> = t.recursion(
    "MRObservationBloodGroupSerologyRhesus",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRObservationBloodGroupSerologyRhesusCode,
                    valueCodeableConcept: MRObservationBloodGroupSerologyRhesusValueCodeableConcept
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
export interface MRObservationBloodGroupSerologyMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology|1.0.0"
    >;
    id?: string;
}

export const MRObservationBloodGroupSerologyMeta: t.Type<MRObservationBloodGroupSerologyMeta> = t.recursion(
    "MRObservationBloodGroupSerologyMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology|1.0.0"
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
 * A unique identifier assigned to this observation.
 */
export interface MRObservationBloodGroupSerologyIdentifier {
    system: string;
    value: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyIdentifier: t.Type<MRObservationBloodGroupSerologyIdentifier> = t.recursion(
    "MRObservationBloodGroupSerologyIdentifier",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    value: SCALARString
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
export interface MRObservationBloodGroupSerologyCode {
    coding: Array<MRObservationBloodGroupSerologyCodeCoding>;
    id?: string;
}

export const MRObservationBloodGroupSerologyCode: t.Type<MRObservationBloodGroupSerologyCode> = t.recursion(
    "MRObservationBloodGroupSerologyCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationBloodGroupSerologyCodeCoding)
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
export interface MRObservationBloodGroupSerologySubject {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologySubject: t.Type<MRObservationBloodGroupSerologySubject> = t.recursion(
    "MRObservationBloodGroupSerologySubject",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationBloodGroupSerologyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyEncounter: t.Type<MRObservationBloodGroupSerologyEncounter> = t.recursion(
    "MRObservationBloodGroupSerologyEncounter",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
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
export interface MRObservationBloodGroupSerologyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationBloodGroupSerologyPerformer: t.Type<MRObservationBloodGroupSerologyPerformer> = t.recursion(
    "MRObservationBloodGroupSerologyPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRObservationBloodGroupSerology {
    meta: MRObservationBloodGroupSerologyMeta;
    status: "final";
    code: MRObservationBloodGroupSerologyCode;
    subject: MRObservationBloodGroupSerologySubject;
    encounter: MRObservationBloodGroupSerologyEncounter;
    effectiveDateTime: string;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRObservationBloodGroupSerologyHinweisBehandelndePerson)[];
    identifier?: Array<MRObservationBloodGroupSerologyIdentifier>;
    performer?: Array<MRObservationBloodGroupSerologyPerformer>;
    note?: Array<Annotation>;
    component?: Array<
        MRObservationBloodGroupSerologyAB0 | MRObservationBloodGroupSerologyRhesus
    >;
}

const MRObservationBloodGroupSerology: t.Type<MRObservationBloodGroupSerology> = t.recursion(
    "MRObservationBloodGroupSerology",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationBloodGroupSerologyMeta,
                    status: Literal("final"),
                    code: MRObservationBloodGroupSerologyCode,
                    subject: MRObservationBloodGroupSerologySubject,
                    encounter: MRObservationBloodGroupSerologyEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRObservationBloodGroupSerologyHinweisBehandelndePerson
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationBloodGroupSerologyHinweisBehandelndePerson
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyHinweisBehandelndePerson,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    identifier: MaxArray(1, MRObservationBloodGroupSerologyIdentifier),
                    performer: MaxArray(1, MRObservationBloodGroupSerologyPerformer),
                    note: MaxArray(1, Annotation),
                    component: ReqArray<
                        t.UnionC<
                            [
                                t.Type<MRObservationBloodGroupSerologyAB0>,
                                t.Type<MRObservationBloodGroupSerologyRhesus>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRObservationBloodGroupSerologyAB0,
                            MRObservationBloodGroupSerologyRhesus
                        ]),
                        [
                            {
                                codec: MRObservationBloodGroupSerologyAB0,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "AB0" }
                            },
                            {
                                codec: MRObservationBloodGroupSerologyRhesus,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "code.text", value: "Rhesus" }
                            }
                        ],
                        ["0", "2"]
                    )
                })
            ])
        )
);

export default MRObservationBloodGroupSerology;
