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
    MinArray,
    MinMaxArray,
    ValueSetCheck,
    ExtensibleCheck,
    ReqArray
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Age from "../../../../Definitions/FHIR/4.0.1/Profile/Age";
import AlphaidVS from "../../../../Definitions/HL7DE/0.9.6/ValueSet/Alphaid";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ConditioncategoryVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Conditioncategory";
import ConditionclinicalVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Conditionclinical";
import ConditionverstatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Conditionverstatus";
import DiagnoseSnomedCTVS from "../../../../Definitions/KBVBase/1.0.2/ValueSet/DiagnoseSnomedCT";
import Dimdiicd10gmVS from "../../../../Definitions/HL7DE/0.9.6/ValueSet/Dimdiicd10gm";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Icd10gmausrufezeichen from "../../../../Definitions/HL7DE/0.9.7/Extension/Icd10gmausrufezeichen";
import Icd10gmdiagnosesicherheit from "../../../../Definitions/HL7DE/0.9.7/Extension/Icd10gmdiagnosesicherheit";
import Icd10gmmanifestationscode from "../../../../Definitions/HL7DE/0.9.7/Extension/Icd10gmmanifestationscode";
import Icd10gmprimaercode from "../../../../Definitions/HL7DE/0.9.7/Extension/Icd10gmprimaercode";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import LebensphaseVS from "../../../../Definitions/KBVBase/1.0.2/ValueSet/Lebensphase";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import Seitenlokalisation from "../../../../Definitions/HL7DE/0.9.7/Extension/Seitenlokalisation";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Diagnose"

/**
 * Content in other Language.
 */
export interface DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent: t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent> =
    t.recursion(
        "DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Content in other Language.
 */
export interface DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent: t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent> =
    t.recursion(
        "DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent",
        () =>
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German";
    id?: string;
    extension?: (
        | Extension
        | DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
    )[];
}

export const DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay: t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay> =
    t.recursion(
        "DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay",
        () =>
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German";
    id?: string;
    extension?: (
        | Extension
        | DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
    )[];
}

export const DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay: t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay> =
    t.recursion(
        "DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay",
        () =>
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplayContent,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "content" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
    )[];
    value?: string;
}

export const DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplay: t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplay> =
    t.recursion(
        "DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplay",
        () =>
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplaySnomedCTGermanDisplay,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
    )[];
    value?: string;
}

export const DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplay: t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplay> =
    t.recursion(
        "DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplay",
        () =>
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplaySnomedCTGermanDisplay,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARString
            })
    );

/**
 * Content in other Language.
 */
export interface DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent: t.Type<DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent> =
    t.recursion("DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent", () =>
        t.intersection([
            t.type({
                url: Literal("content"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200309";
    code: LebensphaseVS;
    id?: string;
    _display?: DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCoding: t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCoding> =
    t.recursion("DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20200309"
                ),
                code: LebensphaseVS
            }),
            t.partial({
                id: SCALARString,
                _display:
                    DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200309";
    code: LebensphaseVS;
    id?: string;
    _display?: DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCoding: t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCoding> =
    t.recursion("DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: Literal(
                    "http://snomed.info/sct/900000000000207008/version/20200309"
                ),
                code: LebensphaseVS
            }),
            t.partial({
                id: SCALARString,
                _display:
                    DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConcept {
    coding: Array<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCoding>;
    id?: string;
}

export const DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConcept: t.Type<DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConcept> =
    t.recursion("DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConcept", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(
                    1,
                    1,
                    DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConceptCoding
                )
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConcept {
    coding: Array<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCoding>;
    id?: string;
}

export const DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConcept: t.Type<DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConcept> =
    t.recursion("DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConcept", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(
                    1,
                    1,
                    DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConceptCoding
                )
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Annotation des Snomed CT Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German";
    id?: string;
    extension?: (Extension | DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent)[];
}

export const DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay: t.Type<DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay> =
    t.recursion("DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                )
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplayContent,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "content" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    );

/**
 * Optional Extension Element - found in all resources.
 */
export interface DiagnoseOnsetPeriodStartLebensphasevon {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase";
    valueCodeableConcept: DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConcept;
    id?: string;
}

export const DiagnoseOnsetPeriodStartLebensphasevon: t.Type<DiagnoseOnsetPeriodStartLebensphasevon> =
    t.recursion("DiagnoseOnsetPeriodStartLebensphasevon", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase"
                ),
                valueCodeableConcept:
                    DiagnoseOnsetPeriodStartLebensphasevonValueCodeableConcept
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Optional Extension Element - found in all resources.
 */
export interface DiagnoseOnsetPeriodEndLebensphasebis {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase";
    valueCodeableConcept: DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConcept;
    id?: string;
}

export const DiagnoseOnsetPeriodEndLebensphasebis: t.Type<DiagnoseOnsetPeriodEndLebensphasebis> =
    t.recursion("DiagnoseOnsetPeriodEndLebensphasebis", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase"
                ),
                valueCodeableConcept:
                    DiagnoseOnsetPeriodEndLebensphasebisValueCodeableConcept
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface DiagnoseCodeSnomedctDisplay {
    id?: string;
    extension?: (Extension | DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay)[];
    value?: string;
}

export const DiagnoseCodeSnomedctDisplay: t.Type<DiagnoseCodeSnomedctDisplay> =
    t.recursion("DiagnoseCodeSnomedctDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay>
                    ]
                >,
                t.Any
            >(
                t.union([Extension, DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DiagnoseCodeSnomedctDisplaySnomedCTGermanDisplay,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Snomed_CT_German"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARString
        })
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseCodeICD10GM {
    system: "http://fhir.de/CodeSystem/dimdi/icd-10-gm";
    version: string;
    code: Dimdiicd10gmVS;
    id?: string;
    extension?: (
        | Extension
        | Icd10gmprimaercode
        | Icd10gmmanifestationscode
        | Icd10gmausrufezeichen
        | Icd10gmdiagnosesicherheit
        | Seitenlokalisation
    )[];
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseCodeICD10GM: t.Type<DiagnoseCodeICD10GM> = t.recursion(
    "DiagnoseCodeICD10GM",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/dimdi/icd-10-gm"),
                version: SCALARString,
                code: Dimdiicd10gmVS
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<Icd10gmprimaercode>,
                            t.Type<Icd10gmmanifestationscode>,
                            t.Type<Icd10gmausrufezeichen>,
                            t.Type<Icd10gmdiagnosesicherheit>,
                            t.Type<Seitenlokalisation>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        Icd10gmprimaercode,
                        Icd10gmmanifestationscode,
                        Icd10gmausrufezeichen,
                        Icd10gmdiagnosesicherheit,
                        Seitenlokalisation
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: Icd10gmprimaercode,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/icd-10-gm-primaercode"
                            }
                        },
                        {
                            codec: Icd10gmmanifestationscode,
                            occurrence: ["0", "*"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/icd-10-gm-manifestationscode"
                            }
                        },
                        {
                            codec: Icd10gmausrufezeichen,
                            occurrence: ["0", "*"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/icd-10-gm-ausrufezeichen"
                            }
                        },
                        {
                            codec: Icd10gmdiagnosesicherheit,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/icd-10-gm-diagnosesicherheit"
                            }
                        },
                        {
                            codec: Seitenlokalisation,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/seitenlokalisation"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseCodeAlphaid {
    system: "http://fhir.de/CodeSystem/dimdi/alpha-id";
    version: string;
    code: AlphaidVS;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseCodeAlphaid: t.Type<DiagnoseCodeAlphaid> = t.recursion(
    "DiagnoseCodeAlphaid",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/dimdi/alpha-id"),
                version: SCALARString,
                code: AlphaidVS
            }),
            t.partial({
                id: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseCodeSnomedct {
    system: "http://snomed.info/sct";
    version: string;
    code: DiagnoseSnomedCTVS;
    id?: string;
    _display?: DiagnoseCodeSnomedctDisplay;
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseCodeSnomedct: t.Type<DiagnoseCodeSnomedct> = t.recursion(
    "DiagnoseCodeSnomedct",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: DiagnoseSnomedCTVS
            }),
            t.partial({
                id: SCALARString,
                _display: DiagnoseCodeSnomedctDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseCodeOrphanet {
    system: "http://www.orpha.net";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseCodeOrphanet: t.Type<DiagnoseCodeOrphanet> = t.recursion(
    "DiagnoseCodeOrphanet",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://www.orpha.net"),
                version: SCALARString,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface DiagnoseBodySiteSnomedct {
    system: "http://snomed.info/sct";
    version: string;
    code: string;
    id?: string;
    display?: string;
    userSelected?: boolean;
}

export const DiagnoseBodySiteSnomedct: t.Type<DiagnoseBodySiteSnomedct> = t.recursion(
    "DiagnoseBodySiteSnomedct",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                version: SCALARString,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * The start of the period. The boundary is inclusive.
 */
export interface DiagnoseOnsetPeriodStart {
    id?: string;
    extension?: (Extension | DiagnoseOnsetPeriodStartLebensphasevon)[];
    value?: string;
}

export const DiagnoseOnsetPeriodStart: t.Type<DiagnoseOnsetPeriodStart> = t.recursion(
    "DiagnoseOnsetPeriodStart",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [t.Type<Extension>, t.Type<DiagnoseOnsetPeriodStartLebensphasevon>]
                >,
                t.Any
            >(
                t.union([Extension, DiagnoseOnsetPeriodStartLebensphasevon]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DiagnoseOnsetPeriodStartLebensphasevon,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARDateTime
        })
);

/**
 * The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
 */
export interface DiagnoseOnsetPeriodEnd {
    id?: string;
    extension?: (Extension | DiagnoseOnsetPeriodEndLebensphasebis)[];
    value?: string;
}

export const DiagnoseOnsetPeriodEnd: t.Type<DiagnoseOnsetPeriodEnd> = t.recursion(
    "DiagnoseOnsetPeriodEnd",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [t.Type<Extension>, t.Type<DiagnoseOnsetPeriodEndLebensphasebis>]
                >,
                t.Any
            >(
                t.union([Extension, DiagnoseOnsetPeriodEndLebensphasebis]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DiagnoseOnsetPeriodEndLebensphasebis,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Lebensphase"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARDateTime
        })
);

/**
 * Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
 */
export interface DiagnoseOnsetPeriod {
    id?: string;
    _start?: DiagnoseOnsetPeriodStart;
    start?: string;
    _end?: DiagnoseOnsetPeriodEnd;
    end?: string;
}

export const DiagnoseOnsetPeriod: t.Type<DiagnoseOnsetPeriod> = t.recursion(
    "DiagnoseOnsetPeriod",
    () =>
        t.partial({
            id: SCALARString,
            _start: DiagnoseOnsetPeriodStart,
            start: SCALARDateTime,
            _end: DiagnoseOnsetPeriodEnd,
            end: SCALARDateTime
        })
);

/**
 * In diesem Element wird der Diagnosecode aufgeführt. Dieser kann aus verschiedenen Codiersystem stammen. Jede Diagnose muss mindestens einen Diagnosecode besitzen. Hierbei können die vorgeschlagenen Codiersysteme (ICD, Alpha-ID, SNOMED, ORPHANET) verwendet werden.
 */
export interface DiagnoseCode {
    coding: Array<
        | DiagnoseCodeICD10GM
        | DiagnoseCodeAlphaid
        | DiagnoseCodeSnomedct
        | DiagnoseCodeOrphanet
    >;
    id?: string;
    text?: string;
}

export const DiagnoseCode: t.Type<DiagnoseCode> = t.recursion("DiagnoseCode", () =>
    t.intersection([
        t.type({
            coding: ReqArray<
                t.UnionC<
                    [
                        t.Type<DiagnoseCodeICD10GM>,
                        t.Type<DiagnoseCodeAlphaid>,
                        t.Type<DiagnoseCodeSnomedct>,
                        t.Type<DiagnoseCodeOrphanet>
                    ]
                >,
                t.Any
            >(
                t.union([
                    DiagnoseCodeICD10GM,
                    DiagnoseCodeAlphaid,
                    DiagnoseCodeSnomedct,
                    DiagnoseCodeOrphanet
                ]),
                [
                    {
                        codec: DiagnoseCodeICD10GM,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            pattern: "system",
                            value: "http://fhir.de/CodeSystem/dimdi/icd-10-gm"
                        }
                    },
                    {
                        codec: DiagnoseCodeAlphaid,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            pattern: "system",
                            value: "http://fhir.de/CodeSystem/dimdi/alpha-id"
                        }
                    },
                    {
                        codec: DiagnoseCodeSnomedct,
                        occurrence: ["0", "1"],
                        sliceBy: { pattern: "system", value: "http://snomed.info/sct" }
                    },
                    {
                        codec: DiagnoseCodeOrphanet,
                        occurrence: ["0", "1"],
                        sliceBy: { pattern: "system", value: "http://www.orpha.net" }
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
 * Über die Körperstelle kann angegeben werden, in welchem Bereich des Körpers eine Krankheit diagnostiziert wurde (topographische Information).
 */
export interface DiagnoseBodySite {
    coding: Array<DiagnoseBodySiteSnomedct>;
    id?: string;
    text?: string;
}

export const DiagnoseBodySite: t.Type<DiagnoseBodySite> = t.recursion(
    "DiagnoseBodySite",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, DiagnoseBodySiteSnomedct)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
);

/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export interface DiagnoseStage {
    id?: string;
    summary?: CodeableConcept;
    assessment?: Reference[];
    type?: CodeableConcept;
}

export const DiagnoseStage: t.Type<DiagnoseStage> = t.recursion("DiagnoseStage", () =>
    t.partial({
        id: SCALARString,
        summary: CodeableConcept,
        assessment: t.array(Reference),
        type: CodeableConcept
    })
);

/**
 * Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition.
 */
export interface DiagnoseEvidence {
    id?: string;
    code?: CodeableConcept[];
    detail?: Reference[];
}

export const DiagnoseEvidence: t.Type<DiagnoseEvidence> = t.recursion(
    "DiagnoseEvidence",
    () =>
        t.partial({
            id: SCALARString,
            code: t.array(CodeableConcept),
            detail: t.array(Reference)
        })
);

interface Diagnose {
    code: DiagnoseCode;
    subject: Reference;
    recordedDate: string;
    resourceType?: "Condition";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    identifier?: Identifier[];
    clinicalStatus?: {
        coding: {
            system?: string;
            version?: string;
            code?: ConditionclinicalVS;
            display?: string;
            userSelected?: boolean;
        }[];
    };
    verificationStatus?: {
        coding: {
            system?: string;
            version?: string;
            code?: ConditionverstatusVS;
            display?: string;
            userSelected?: boolean;
        }[];
    };
    category?: ConditioncategoryVS[];
    severity?: CodeableConcept;
    bodySite?: DiagnoseBodySite[];
    encounter?: Reference;
    onsetDateTime?: string;
    onsetPeriod?: DiagnoseOnsetPeriod;
    abatementDateTime?: string;
    abatementAge?: Age;
    abatementPeriod?: Period;
    abatementRange?: Range;
    abatementString?: string;
    recorder?: Reference;
    asserter?: Reference;
    stage?: DiagnoseStage[];
    evidence?: DiagnoseEvidence[];
    note?: Annotation[];
}

const Diagnose: t.Type<Diagnose> = t.recursion("Diagnose", () =>
    t.intersection([
        t.type({
            code: DiagnoseCode,
            subject: Reference,
            recordedDate: SCALARDateTime
        }),
        t.partial({
            resourceType: Literal("Condition"),
            id: SCALARString,
            meta: Meta,
            implicitRules: SCALARUri,
            language: SCALARCode,
            text: Narrative,
            contained: t.array(Resource),
            identifier: t.array(Identifier),
            clinicalStatus: t.type({
                coding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: ValueSetCheck<t.Type<ConditionclinicalVS>>(
                            ConditionclinicalVS
                        ),
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            verificationStatus: t.type({
                coding: t.array(
                    t.partial({
                        system: t.string,
                        version: t.string,
                        code: ValueSetCheck<t.Type<ConditionverstatusVS>>(
                            ConditionverstatusVS
                        ),
                        display: t.string,
                        userSelected: t.boolean
                    })
                )
            }),
            category: t.array(
                ExtensibleCheck<t.Type<ConditioncategoryVS>>(ConditioncategoryVS)
            ),
            severity: CodeableConcept,
            bodySite: t.array(DiagnoseBodySite),
            encounter: Reference,
            onsetDateTime: SCALARDateTime,
            onsetPeriod: DiagnoseOnsetPeriod,
            abatementDateTime: SCALARDateTime,
            abatementAge: Age,
            abatementPeriod: Period,
            abatementRange: Range,
            abatementString: SCALARString,
            recorder: Reference,
            asserter: Reference,
            stage: t.array(DiagnoseStage),
            evidence: t.array(DiagnoseEvidence),
            note: t.array(Annotation)
        })
    ])
);

export default Diagnose;
