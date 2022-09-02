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
import { Literal, MinArray, ReqArray, ExtensibleCheck } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";

import DataabsentreasonVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Dataabsentreason";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import ObservationinterpretationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationinterpretation";
import ObservationstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";
import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";
import UcumVitalsCommonDEVS from "../../../../Definitions/HL7DE/0.9.13/ValueSet/UcumVitalsCommonDE";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Observation_Blood_Pressure"

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "systolischer Blutdruck";
    id?: string;
}

export const ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("systolischer Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "systolischer Blutdruck";
    id?: string;
}

export const ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("systolischer Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "diastolischer Blutdruck";
    id?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("diastolischer Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "diastolischer Blutdruck";
    id?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("diastolischer Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "mittlerer arterieller Blutdruck";
    id?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("mittlerer arterieller Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "mittlerer arterieller Blutdruck";
    id?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("mittlerer arterieller Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent {
    url: "content";
    valueString: "Blutdruck";
    id?: string;
}

export const ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent: t.Type<ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent> =
    t.recursion(
        "ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Blutdruck";
    id?: string;
}

export const ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent: t.Type<ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Blutdruck")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoincContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoincContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoincContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc {
    extension: Array<
        Extension | ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc: t.Type<ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc> =
    t.recursion("ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoincContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["1", "*"]
                ),
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                )
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed {
    extension: Array<
        | Extension
        | ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed: t.Type<ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomedContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["1", "*"]
                    ),
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeLoincDisplay {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureComponentSystolicBPCodeLoincDisplay: t.Type<ObservationBloodPressureComponentSystolicBPCodeLoincDisplay> =
    t.recursion("ObservationBloodPressureComponentSystolicBPCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureComponentSystolicBPCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplay {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplay: t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplay> =
    t.recursion("ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeLoincDisplay {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCodeLoincDisplay: t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoincDisplay> =
    t.recursion("ObservationBloodPressureComponentDiastolicBPCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureComponentDiastolicBPCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplay {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplay: t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplay> =
    t.recursion("ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplay {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplay: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplay> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplay",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplayAnzeigenameCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                                }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    value: SCALARString
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplay {
    extension: Array<
        | Extension
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplay: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplay> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplay",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                                }
                            }
                        ],
                        ["1", "*"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    value: SCALARString
                })
            ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "8480-6";
    display: "Systolic blood pressure";
    id?: string;
    _display?: ObservationBloodPressureComponentSystolicBPCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureComponentSystolicBPCodeLoinc: t.Type<ObservationBloodPressureComponentSystolicBPCodeLoinc> =
    t.recursion("ObservationBloodPressureComponentSystolicBPCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.71"),
                code: Literal("8480-6"),
                display: Literal("Systolic blood pressure")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBloodPressureComponentSystolicBPCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureComponentSystolicBPCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "271649006";
    display: "Systolic blood pressure (observable entity)";
    id?: string;
    _display?: ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureComponentSystolicBPCodeCodeSnomed: t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomed> =
    t.recursion("ObservationBloodPressureComponentSystolicBPCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20210731"
                ),
                code: Literal("271649006"),
                display: Literal("Systolic blood pressure (observable entity)")
            }),
            t.partial({
                id: SCALARString,
                _display:
                    ObservationBloodPressureComponentSystolicBPCodeCodeSnomedDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "8462-4";
    display: "Diastolic blood pressure";
    id?: string;
    _display?: ObservationBloodPressureComponentDiastolicBPCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureComponentDiastolicBPCodeLoinc: t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoinc> =
    t.recursion("ObservationBloodPressureComponentDiastolicBPCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.71"),
                code: Literal("8462-4"),
                display: Literal("Diastolic blood pressure")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBloodPressureComponentDiastolicBPCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "271650006";
    display: "Diastolic blood pressure (observable entity)";
    id?: string;
    _display?: ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed: t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed> =
    t.recursion("ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20210731"
                ),
                code: Literal("271650006"),
                display: Literal("Diastolic blood pressure (observable entity)")
            }),
            t.partial({
                id: SCALARString,
                _display:
                    ObservationBloodPressureComponentDiastolicBPCodeCodeSnomedDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "8478-0";
    display: "Mean blood pressure";
    id?: string;
    _display?: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc",
        () =>
            t.intersection([
                t.type({
                    system: Literal("http://loinc.org"),
                    version: Literal("2.71"),
                    code: Literal("8478-0"),
                    display: Literal("Mean blood pressure")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoincDisplay,
                    userSelected: SCALARBoolean
                })
            ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "6797001";
    display: "Mean blood pressure (observable entity)";
    id?: string;
    _display?: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed",
        () =>
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20210731"
                    ),
                    code: Literal("6797001"),
                    display: Literal("Mean blood pressure (observable entity)")
                }),
                t.partial({
                    id: SCALARString,
                    _display:
                        ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomedDisplay,
                    userSelected: SCALARBoolean
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureCodeLoincDisplay {
    extension: Array<
        Extension | ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureCodeLoincDisplay: t.Type<ObservationBloodPressureCodeLoincDisplay> =
    t.recursion("ObservationBloodPressureCodeLoincDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureCodeLoincDisplayAnzeigenameCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface ObservationBloodPressureCodeCodeSnomedDisplay {
    extension: Array<
        Extension | ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
    >;
    id?: string;
    value?: string;
}

export const ObservationBloodPressureCodeCodeSnomedDisplay: t.Type<ObservationBloodPressureCodeCodeSnomedDisplay> =
    t.recursion("ObservationBloodPressureCodeCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ObservationBloodPressureCodeCodeSnomedDisplayAnzeigenameCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationBloodPressureComponentSystolicBPValueQuantity {
    value: number;
    unit: "mm Hg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBloodPressureComponentSystolicBPValueQuantity: t.Type<ObservationBloodPressureComponentSystolicBPValueQuantity> =
    t.recursion("ObservationBloodPressureComponentSystolicBPValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: Literal("mm Hg"),
                system: Literal("http://unitsofmeasure.org"),
                code: Literal("mm[Hg]")
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationBloodPressureComponentDiastolicBPValueQuantity {
    value: number;
    unit: "mm Hg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBloodPressureComponentDiastolicBPValueQuantity: t.Type<ObservationBloodPressureComponentDiastolicBPValueQuantity> =
    t.recursion("ObservationBloodPressureComponentDiastolicBPValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: Literal("mm Hg"),
                system: Literal("http://unitsofmeasure.org"),
                code: Literal("mm[Hg]")
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckValueQuantity {
    value: number;
    unit: "mm Hg";
    system: "http://unitsofmeasure.org";
    code: "mm[Hg]";
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckValueQuantity: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckValueQuantity> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckValueQuantity",
        () =>
            t.intersection([
                t.type({
                    value: SCALARDecimal,
                    unit: Literal("mm Hg"),
                    system: Literal("http://unitsofmeasure.org"),
                    code: Literal("mm[Hg]")
                }),
                t.partial({
                    id: SCALARString,
                    comparator: QuantitycomparatorVS
                })
            ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureCodeLoinc {
    system: "http://loinc.org";
    version: "2.71";
    code: "85354-9";
    display: "Blood pressure panel with all children optional";
    id?: string;
    _display?: ObservationBloodPressureCodeLoincDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureCodeLoinc: t.Type<ObservationBloodPressureCodeLoinc> =
    t.recursion("ObservationBloodPressureCodeLoinc", () =>
        t.intersection([
            t.type({
                system: Literal("http://loinc.org"),
                version: Literal("2.71"),
                code: Literal("85354-9"),
                display: Literal("Blood pressure panel with all children optional")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBloodPressureCodeLoincDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface ObservationBloodPressureCodeCodeSnomed {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "75367002";
    display: "Blood pressure (observable entity)";
    id?: string;
    _display?: ObservationBloodPressureCodeCodeSnomedDisplay;
    userSelected?: boolean;
}

export const ObservationBloodPressureCodeCodeSnomed: t.Type<ObservationBloodPressureCodeCodeSnomed> =
    t.recursion("ObservationBloodPressureCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20210731"
                ),
                code: Literal("75367002"),
                display: Literal("Blood pressure (observable entity)")
            }),
            t.partial({
                id: SCALARString,
                _display: ObservationBloodPressureCodeCodeSnomedDisplay,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * The information determined as a result of making the observation, if the information has a simple value.
 */
export interface ObservationBloodPressureComponentValueQuantity {
    value: number;
    unit: string;
    system: "http://unitsofmeasure.org";
    code: UcumVitalsCommonDEVS;
    id?: string;
    comparator?: QuantitycomparatorVS;
}

export const ObservationBloodPressureComponentValueQuantity: t.Type<ObservationBloodPressureComponentValueQuantity> =
    t.recursion("ObservationBloodPressureComponentValueQuantity", () =>
        t.intersection([
            t.type({
                value: SCALARDecimal,
                unit: SCALARString,
                system: Literal("http://unitsofmeasure.org"),
                code: UcumVitalsCommonDEVS
            }),
            t.partial({
                id: SCALARString,
                comparator: QuantitycomparatorVS
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface ObservationBloodPressureComponentSystolicBPCode {
    coding: Array<
        | ObservationBloodPressureComponentSystolicBPCodeLoinc
        | ObservationBloodPressureComponentSystolicBPCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationBloodPressureComponentSystolicBPCode: t.Type<ObservationBloodPressureComponentSystolicBPCode> =
    t.recursion("ObservationBloodPressureComponentSystolicBPCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBloodPressureComponentSystolicBPCodeLoinc>,
                            t.Type<ObservationBloodPressureComponentSystolicBPCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBloodPressureComponentSystolicBPCodeLoinc,
                        ObservationBloodPressureComponentSystolicBPCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationBloodPressureComponentSystolicBPCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: { system: "http://loinc.org", code: "8480-6" }
                            }
                        },
                        {
                            codec: ObservationBloodPressureComponentSystolicBPCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://snomed.info/sct",
                                    version:
                                        "http://snomed.info/sct/900000000000207008/version/20210731",
                                    code: "271649006",
                                    display: "Systolic blood pressure (observable entity)"
                                }
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface ObservationBloodPressureComponentDiastolicBPCode {
    coding: Array<
        | ObservationBloodPressureComponentDiastolicBPCodeLoinc
        | ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationBloodPressureComponentDiastolicBPCode: t.Type<ObservationBloodPressureComponentDiastolicBPCode> =
    t.recursion("ObservationBloodPressureComponentDiastolicBPCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBloodPressureComponentDiastolicBPCodeLoinc>,
                            t.Type<ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBloodPressureComponentDiastolicBPCodeLoinc,
                        ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationBloodPressureComponentDiastolicBPCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: { system: "http://loinc.org", code: "8462-4" }
                            }
                        },
                        {
                            codec: ObservationBloodPressureComponentDiastolicBPCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://snomed.info/sct",
                                    version:
                                        "http://snomed.info/sct/900000000000207008/version/20210731",
                                    code: "271650006",
                                    display:
                                        "Diastolic blood pressure (observable entity)"
                                }
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "code".
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruckCode {
    coding: Array<
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruckCode: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCode> =
    t.recursion(
        "ObservationBloodPressureComponentMittlererArteriellerBlutdruckCode",
        () =>
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc>,
                                t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc,
                            ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed
                        ]),
                        [
                            {
                                codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeLoinc,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        system: "http://loinc.org",
                                        version: "2.71",
                                        code: "8478-0",
                                        display: "Mean blood pressure"
                                    }
                                }
                            },
                            {
                                codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCodeCodeSnomed,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    pattern: "$this",
                                    value: {
                                        system: "http://snomed.info/sct",
                                        version:
                                            "http://snomed.info/sct/900000000000207008/version/20210731",
                                        code: "6797001",
                                        display: "Mean blood pressure (observable entity)"
                                    }
                                }
                            }
                        ],
                        ["2", "*"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface ObservationBloodPressureComponentSystolicBP {
    code: ObservationBloodPressureComponentSystolicBPCode;
    id?: string;
    valueQuantity?: ObservationBloodPressureComponentSystolicBPValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    referenceRange?: ObservationBloodPressureReferenceRange[];
}

export const ObservationBloodPressureComponentSystolicBP: t.Type<ObservationBloodPressureComponentSystolicBP> =
    t.recursion("ObservationBloodPressureComponentSystolicBP", () =>
        t.intersection([
            t.type({
                code: ObservationBloodPressureComponentSystolicBPCode
            }),
            t.partial({
                id: SCALARString,
                valueQuantity: ObservationBloodPressureComponentSystolicBPValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                referenceRange: t.array(ObservationBloodPressureReferenceRange)
            })
        ])
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface ObservationBloodPressureComponentDiastolicBP {
    code: ObservationBloodPressureComponentDiastolicBPCode;
    id?: string;
    valueQuantity?: ObservationBloodPressureComponentDiastolicBPValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    referenceRange?: ObservationBloodPressureReferenceRange[];
}

export const ObservationBloodPressureComponentDiastolicBP: t.Type<ObservationBloodPressureComponentDiastolicBP> =
    t.recursion("ObservationBloodPressureComponentDiastolicBP", () =>
        t.intersection([
            t.type({
                code: ObservationBloodPressureComponentDiastolicBPCode
            }),
            t.partial({
                id: SCALARString,
                valueQuantity: ObservationBloodPressureComponentDiastolicBPValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                referenceRange: t.array(ObservationBloodPressureReferenceRange)
            })
        ])
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface ObservationBloodPressureComponentMittlererArteriellerBlutdruck {
    code: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCode;
    id?: string;
    valueQuantity?: ObservationBloodPressureComponentMittlererArteriellerBlutdruckValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    referenceRange?: ObservationBloodPressureReferenceRange[];
}

export const ObservationBloodPressureComponentMittlererArteriellerBlutdruck: t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruck> =
    t.recursion("ObservationBloodPressureComponentMittlererArteriellerBlutdruck", () =>
        t.intersection([
            t.type({
                code: ObservationBloodPressureComponentMittlererArteriellerBlutdruckCode
            }),
            t.partial({
                id: SCALARString,
                valueQuantity:
                    ObservationBloodPressureComponentMittlererArteriellerBlutdruckValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                referenceRange: t.array(ObservationBloodPressureReferenceRange)
            })
        ])
    );

/**
 * Describes what was observed. Sometimes this is called the observation "name".
 */
export interface ObservationBloodPressureCode {
    coding: Array<
        ObservationBloodPressureCodeLoinc | ObservationBloodPressureCodeCodeSnomed
    >;
    id?: string;
    text?: string;
}

export const ObservationBloodPressureCode: t.Type<ObservationBloodPressureCode> =
    t.recursion("ObservationBloodPressureCode", () =>
        t.intersection([
            t.type({
                coding: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBloodPressureCodeLoinc>,
                            t.Type<ObservationBloodPressureCodeCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBloodPressureCodeLoinc,
                        ObservationBloodPressureCodeCodeSnomed
                    ]),
                    [
                        {
                            codec: ObservationBloodPressureCodeLoinc,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://loinc.org",
                                    version: "2.71",
                                    code: "85354-9",
                                    display:
                                        "Blood pressure panel with all children optional"
                                }
                            }
                        },
                        {
                            codec: ObservationBloodPressureCodeCodeSnomed,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                pattern: "$this",
                                value: {
                                    system: "http://snomed.info/sct",
                                    version:
                                        "http://snomed.info/sct/900000000000207008/version/20210731",
                                    code: "75367002",
                                    display: "Blood pressure (observable entity)"
                                }
                            }
                        }
                    ],
                    ["2", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used.
 */
export interface ObservationBloodPressureReferenceRange {
    id?: string;
    low?: SimpleQuantity;
    high?: SimpleQuantity;
    type?: CodeableConcept;
    appliesTo?: CodeableConcept[];
    age?: Range;
    text?: string;
}

export const ObservationBloodPressureReferenceRange: t.Type<ObservationBloodPressureReferenceRange> =
    t.recursion("ObservationBloodPressureReferenceRange", () =>
        t.partial({
            id: SCALARString,
            low: SimpleQuantity,
            high: SimpleQuantity,
            type: CodeableConcept,
            appliesTo: t.array(CodeableConcept),
            age: Range,
            text: SCALARString
        })
    );

/**
 * Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 */
export interface ObservationBloodPressureComponent {
    code: CodeableConcept;
    id?: string;
    valueQuantity?: ObservationBloodPressureComponentValueQuantity;
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    referenceRange?: ObservationBloodPressureReferenceRange[];
}

export const ObservationBloodPressureComponent: t.Type<ObservationBloodPressureComponent> =
    t.recursion("ObservationBloodPressureComponent", () =>
        t.intersection([
            t.type({
                code: CodeableConcept
            }),
            t.partial({
                id: SCALARString,
                valueQuantity: ObservationBloodPressureComponentValueQuantity,
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                referenceRange: t.array(ObservationBloodPressureReferenceRange)
            })
        ])
    );

interface ObservationBloodPressure {
    status: ObservationstatusVS;
    category: Array<CodeableConcept>;
    code: ObservationBloodPressureCode;
    subject: Reference;
    effectiveDateTime: string;
    component: Array<
        | ObservationBloodPressureComponent
        | ObservationBloodPressureComponentSystolicBP
        | ObservationBloodPressureComponentDiastolicBP
        | ObservationBloodPressureComponentMittlererArteriellerBlutdruck
    >;
    resourceType?: "Observation";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    basedOn?: Reference[];
    partOf?: Reference[];
    encounter?: Reference;
    issued?: string;
    performer?: Reference[];
    dataAbsentReason?: DataabsentreasonVS;
    interpretation?: ObservationinterpretationVS[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    method?: CodeableConcept;
    device?: Reference;
    referenceRange?: ObservationBloodPressureReferenceRange[];
    hasMember?: Reference[];
    derivedFrom?: Reference[];
}

const ObservationBloodPressure: t.Type<ObservationBloodPressure> = t.recursion(
    "ObservationBloodPressure",
    () =>
        t.intersection([
            t.type({
                status: ObservationstatusVS,
                category: MinArray(1, CodeableConcept),
                code: ObservationBloodPressureCode,
                subject: Reference,
                effectiveDateTime: SCALARDateTime,
                component: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ObservationBloodPressureComponent>,
                            t.Type<ObservationBloodPressureComponentSystolicBP>,
                            t.Type<ObservationBloodPressureComponentDiastolicBP>,
                            t.Type<ObservationBloodPressureComponentMittlererArteriellerBlutdruck>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ObservationBloodPressureComponent,
                        ObservationBloodPressureComponentSystolicBP,
                        ObservationBloodPressureComponentDiastolicBP,
                        ObservationBloodPressureComponentMittlererArteriellerBlutdruck
                    ]),
                    [
                        {
                            codec: ObservationBloodPressureComponent,
                            occurrence: ["0", "*"],
                            sliceBy: { pattern: "code.coding" }
                        },
                        {
                            codec: ObservationBloodPressureComponentSystolicBP,
                            occurrence: ["1", "1"],
                            sliceBy: { pattern: "code.coding" }
                        },
                        {
                            codec: ObservationBloodPressureComponentDiastolicBP,
                            occurrence: ["1", "1"],
                            sliceBy: { pattern: "code.coding" }
                        },
                        {
                            codec: ObservationBloodPressureComponentMittlererArteriellerBlutdruck,
                            occurrence: ["0", "1"],
                            sliceBy: { pattern: "code.coding" }
                        }
                    ],
                    ["2", "*"]
                )
            }),
            t.partial({
                resourceType: Literal("Observation"),
                id: SCALARString,
                meta: Meta,
                implicitRules: SCALARUri,
                language: SCALARCode,
                text: Narrative,
                contained: t.array(Resource),
                identifier: t.array(Identifier),
                basedOn: t.array(Reference),
                partOf: t.array(Reference),
                encounter: Reference,
                issued: SCALARInstant,
                performer: t.array(Reference),
                dataAbsentReason:
                    ExtensibleCheck<t.Type<DataabsentreasonVS>>(DataabsentreasonVS),
                interpretation: t.array(
                    ExtensibleCheck<t.Type<ObservationinterpretationVS>>(
                        ObservationinterpretationVS
                    )
                ),
                note: t.array(Annotation),
                bodySite: CodeableConcept,
                method: CodeableConcept,
                device: Reference,
                referenceRange: t.array(ObservationBloodPressureReferenceRange),
                hasMember: t.array(Reference),
                derivedFrom: t.array(Reference)
            })
        ])
);

export default ObservationBloodPressure;
