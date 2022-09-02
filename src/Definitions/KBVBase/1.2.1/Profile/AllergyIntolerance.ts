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
import { Literal, MaxArray, MinMaxArray, ReqArray } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARMarkdown from "../../../../Definitions/FHIR/4.0.1/Scalar/Markdown";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AllergyIntoleranceAbatement from "../../../../Definitions/KBVBase/1.2.1/Extension/AllergyIntoleranceAbatement";
import AllergyIntoleranceClinicalStatusVS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/AllergyIntoleranceClinicalStatus";

import AllergyintoleranceverificationVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Allergyintoleranceverification";
import Annotation from "../../../../Definitions/FHIR/4.0.1/Profile/Annotation";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";

import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import QuantitycomparatorVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Quantitycomparator";

import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import StageLife from "../../../../Definitions/KBVBase/1.2.1/Extension/StageLife";
import TerminologyGerman from "../../../../Definitions/KBVBase/1.2.1/Extension/TerminologyGerman";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Allergy_Intolerance"

/**
 * Content in other Language.
 */
export interface AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent: t.Type<AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent> =
    t.recursion(
        "AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent",
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
export interface AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent: t.Type<AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent> =
    t.recursion(
        "AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent",
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
export interface AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent: t.Type<AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent> =
    t.recursion(
        "AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent",
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
export interface AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent: t.Type<AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent> =
    t.recursion(
        "AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation {
    extension: Array<
        | Extension
        | AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation: t.Type<AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation> =
    t.recursion(
        "AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestationContent,
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
export interface AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed {
    extension: Array<
        | Extension
        | AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed: t.Type<AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed> =
    t.recursion(
        "AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomedContent,
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
 * Content in other Language.
 */
export interface AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent: t.Type<AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent> =
    t.recursion("AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent", () =>
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus {
    extension: Array<
        | Extension
        | AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus: t.Type<AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus> =
    t.recursion(
        "AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatusContent,
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
export interface AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus {
    extension: Array<
        | Extension
        | AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus: t.Type<AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus> =
    t.recursion(
        "AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus",
        () =>
            t.intersection([
                t.type({
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatusContent,
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
 * Content in other Language.
 */
export interface AllergyIntoleranceTypeAnzeigenameTypeContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceTypeAnzeigenameTypeContent: t.Type<AllergyIntoleranceTypeAnzeigenameTypeContent> =
    t.recursion("AllergyIntoleranceTypeAnzeigenameTypeContent", () =>
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
export interface AllergyIntoleranceCategoryAnzeigenameCategoryContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceCategoryAnzeigenameCategoryContent: t.Type<AllergyIntoleranceCategoryAnzeigenameCategoryContent> =
    t.recursion("AllergyIntoleranceCategoryAnzeigenameCategoryContent", () =>
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
export interface AllergyIntoleranceCriticalityAnzeigenameCriticalityContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const AllergyIntoleranceCriticalityAnzeigenameCriticalityContent: t.Type<AllergyIntoleranceCriticalityAnzeigenameCriticalityContent> =
    t.recursion("AllergyIntoleranceCriticalityAnzeigenameCriticalityContent", () =>
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface AllergyIntoleranceReactionManifestationCodeSnomedDisplay {
    extension: Array<
        | Extension
        | AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation
    >;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceReactionManifestationCodeSnomedDisplay: t.Type<AllergyIntoleranceReactionManifestationCodeSnomedDisplay> =
    t.recursion("AllergyIntoleranceReactionManifestationCodeSnomedDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceReactionManifestationCodeSnomedDisplayAnzeigenameManifestation,
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
export interface AllergyIntoleranceReactionExposureRouteCodeSnomedDisplay {
    id?: string;
    extension?: (
        | Extension
        | AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed
    )[];
    value?: string;
}

export const AllergyIntoleranceReactionExposureRouteCodeSnomedDisplay: t.Type<AllergyIntoleranceReactionExposureRouteCodeSnomedDisplay> =
    t.recursion("AllergyIntoleranceReactionExposureRouteCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: AllergyIntoleranceReactionExposureRouteCodeSnomedDisplayAnzeigenameSnomed,
                        occurrence: ["0", "*"],
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
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface AllergyIntoleranceCodeCodeSnomedDisplay {
    id?: string;
    extension?: (Extension | TerminologyGerman)[];
    value?: string;
}

export const AllergyIntoleranceCodeCodeSnomedDisplay: t.Type<AllergyIntoleranceCodeCodeSnomedDisplay> =
    t.recursion("AllergyIntoleranceCodeCodeSnomedDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<TerminologyGerman>]>,
                t.Any
            >(
                t.union([Extension, TerminologyGerman]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: TerminologyGerman,
                        occurrence: ["0", "1"],
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
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface AllergyIntoleranceCodeCodeASKDisplay {
    id?: string;
    extension?: (Extension | TerminologyGerman)[];
    value?: string;
}

export const AllergyIntoleranceCodeCodeASKDisplay: t.Type<AllergyIntoleranceCodeCodeASKDisplay> =
    t.recursion("AllergyIntoleranceCodeCodeASKDisplay", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<TerminologyGerman>]>,
                t.Any
            >(
                t.union([Extension, TerminologyGerman]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: TerminologyGerman,
                        occurrence: ["0", "*"],
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
    );

/**
 * Manifestation als Snomed CT Kode. Es wird ein optionales Beispielvalueset zur Verfügung gestellt.
 */
export interface AllergyIntoleranceReactionManifestationCodeSnomed {
    system: "http://snomed.info/sct";
    code: string;
    id?: string;
    version?: string;
    _display?: AllergyIntoleranceReactionManifestationCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const AllergyIntoleranceReactionManifestationCodeSnomed: t.Type<AllergyIntoleranceReactionManifestationCodeSnomed> =
    t.recursion("AllergyIntoleranceReactionManifestationCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                _display: AllergyIntoleranceReactionManifestationCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface AllergyIntoleranceReactionSeverityAnzeigenameSeverity {
    extension: Array<
        Extension | AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceReactionSeverityAnzeigenameSeverity: t.Type<AllergyIntoleranceReactionSeverityAnzeigenameSeverity> =
    t.recursion("AllergyIntoleranceReactionSeverityAnzeigenameSeverity", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceReactionSeverityAnzeigenameSeverityContent,
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
 * Snomed Code für die Bezeichnung des Verabreichungswegs.
 */
export interface AllergyIntoleranceReactionExposureRouteCodeSnomed {
    system: string;
    code: string;
    id?: string;
    version?: string;
    _display?: AllergyIntoleranceReactionExposureRouteCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const AllergyIntoleranceReactionExposureRouteCodeSnomed: t.Type<AllergyIntoleranceReactionExposureRouteCodeSnomed> =
    t.recursion("AllergyIntoleranceReactionExposureRouteCodeSnomed", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                _display: AllergyIntoleranceReactionExposureRouteCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface AllergyIntoleranceClinicalStatusCodingDisplay {
    extension: Array<
        Extension | AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus
    >;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceClinicalStatusCodingDisplay: t.Type<AllergyIntoleranceClinicalStatusCodingDisplay> =
    t.recursion("AllergyIntoleranceClinicalStatusCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceClinicalStatusCodingDisplayAnzeigenameClinicalStatus,
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
export interface AllergyIntoleranceVerificationStatusCodingDisplay {
    extension: Array<
        | Extension
        | AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus
    >;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceVerificationStatusCodingDisplay: t.Type<AllergyIntoleranceVerificationStatusCodingDisplay> =
    t.recursion("AllergyIntoleranceVerificationStatusCodingDisplay", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceVerificationStatusCodingDisplayAnzeigenameVerificationStatus,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap oder ein vorgegebener fixed Value erwähnt werden.
 */
export interface AllergyIntoleranceTypeAnzeigenameType {
    extension: Array<Extension | AllergyIntoleranceTypeAnzeigenameTypeContent>;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceTypeAnzeigenameType: t.Type<AllergyIntoleranceTypeAnzeigenameType> =
    t.recursion("AllergyIntoleranceTypeAnzeigenameType", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceTypeAnzeigenameTypeContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, AllergyIntoleranceTypeAnzeigenameTypeContent]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceTypeAnzeigenameTypeContent,
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
export interface AllergyIntoleranceCategoryAnzeigenameCategory {
    extension: Array<Extension | AllergyIntoleranceCategoryAnzeigenameCategoryContent>;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceCategoryAnzeigenameCategory: t.Type<AllergyIntoleranceCategoryAnzeigenameCategory> =
    t.recursion("AllergyIntoleranceCategoryAnzeigenameCategory", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceCategoryAnzeigenameCategoryContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceCategoryAnzeigenameCategoryContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceCategoryAnzeigenameCategoryContent,
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
export interface AllergyIntoleranceCriticalityAnzeigenameCriticality {
    extension: Array<
        Extension | AllergyIntoleranceCriticalityAnzeigenameCriticalityContent
    >;
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
}

export const AllergyIntoleranceCriticalityAnzeigenameCriticality: t.Type<AllergyIntoleranceCriticalityAnzeigenameCriticality> =
    t.recursion("AllergyIntoleranceCriticalityAnzeigenameCriticality", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceCriticalityAnzeigenameCriticalityContent>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceCriticalityAnzeigenameCriticalityContent
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceCriticalityAnzeigenameCriticalityContent,
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
 * Hier soll der Code für die Substanz als Snomed Code eingetragen werden.
 */
export interface AllergyIntoleranceCodeCodeSnomed {
    system: "http://snomed.info/sct";
    code: string;
    id?: string;
    version?: string;
    _display?: AllergyIntoleranceCodeCodeSnomedDisplay;
    display?: string;
    userSelected?: boolean;
}

export const AllergyIntoleranceCodeCodeSnomed: t.Type<AllergyIntoleranceCodeCodeSnomed> =
    t.recursion("AllergyIntoleranceCodeCodeSnomed", () =>
        t.intersection([
            t.type({
                system: Literal("http://snomed.info/sct"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                _display: AllergyIntoleranceCodeCodeSnomedDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface AllergyIntoleranceCodeCodeASK {
    system: "http://fhir.de/CodeSystem/ask";
    code: string;
    id?: string;
    version?: string;
    _display?: AllergyIntoleranceCodeCodeASKDisplay;
    display?: string;
    userSelected?: boolean;
}

export const AllergyIntoleranceCodeCodeASK: t.Type<AllergyIntoleranceCodeCodeASK> =
    t.recursion("AllergyIntoleranceCodeCodeASK", () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/ask"),
                code: SCALARCode
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                _display: AllergyIntoleranceCodeCodeASKDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface AllergyIntoleranceClinicalStatusCoding {
    system: string;
    version: string;
    code: AllergyIntoleranceClinicalStatusVS;
    id?: string;
    _display?: AllergyIntoleranceClinicalStatusCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const AllergyIntoleranceClinicalStatusCoding: t.Type<AllergyIntoleranceClinicalStatusCoding> =
    t.recursion("AllergyIntoleranceClinicalStatusCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: AllergyIntoleranceClinicalStatusVS
            }),
            t.partial({
                id: SCALARString,
                _display: AllergyIntoleranceClinicalStatusCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface AllergyIntoleranceVerificationStatusCoding {
    system: string;
    version: string;
    code: AllergyintoleranceverificationVS;
    id?: string;
    _display?: AllergyIntoleranceVerificationStatusCodingDisplay;
    display?: string;
    userSelected?: boolean;
}

export const AllergyIntoleranceVerificationStatusCoding: t.Type<AllergyIntoleranceVerificationStatusCoding> =
    t.recursion("AllergyIntoleranceVerificationStatusCoding", () =>
        t.intersection([
            t.type({
                system: SCALARUri,
                version: SCALARString,
                code: AllergyintoleranceverificationVS
            }),
            t.partial({
                id: SCALARString,
                _display: AllergyIntoleranceVerificationStatusCodingDisplay,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
    );

/**
 * Klinischer Zeitraum Lebensphase ab
 */
export interface AllergyIntoleranceOnsetAge {
    id?: string;
    extension?: (Extension | StageLife)[];
    value?: number;
    comparator?: QuantitycomparatorVS;
    unit?: string;
    system?: string;
    code?: string;
}

export const AllergyIntoleranceOnsetAge: t.Type<AllergyIntoleranceOnsetAge> = t.recursion(
    "AllergyIntoleranceOnsetAge",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<t.UnionC<[t.Type<Extension>, t.Type<StageLife>]>, t.Any>(
                t.union([Extension, StageLife]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: StageLife,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARDecimal,
            comparator: QuantitycomparatorVS,
            unit: SCALARString,
            system: SCALARUri,
            code: SCALARCode
        })
);

/**
 * Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
 */
export interface AllergyIntoleranceReactionManifestation {
    id?: string;
    coding?: AllergyIntoleranceReactionManifestationCodeSnomed[];
    text?: string;
}

export const AllergyIntoleranceReactionManifestation: t.Type<AllergyIntoleranceReactionManifestation> =
    t.recursion("AllergyIntoleranceReactionManifestation", () =>
        t.partial({
            id: SCALARString,
            coding: t.array(AllergyIntoleranceReactionManifestationCodeSnomed),
            text: SCALARString
        })
    );

/**
 * Dieses Element enthält Informationen zum Schweregrad der Reaktion.
 */
export interface AllergyIntoleranceReactionSeverity {
    extension: Array<Extension | AllergyIntoleranceReactionSeverityAnzeigenameSeverity>;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceReactionSeverity: t.Type<AllergyIntoleranceReactionSeverity> =
    t.recursion("AllergyIntoleranceReactionSeverity", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceReactionSeverityAnzeigenameSeverity>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceReactionSeverityAnzeigenameSeverity
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceReactionSeverityAnzeigenameSeverity,
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
 * Hier kann der Expositionsweg des Allergens angegeben werden.
 */
export interface AllergyIntoleranceReactionExposureRoute {
    id?: string;
    coding?: AllergyIntoleranceReactionExposureRouteCodeSnomed[];
    text?: string;
}

export const AllergyIntoleranceReactionExposureRoute: t.Type<AllergyIntoleranceReactionExposureRoute> =
    t.recursion("AllergyIntoleranceReactionExposureRoute", () =>
        t.partial({
            id: SCALARString,
            coding: t.array(AllergyIntoleranceReactionExposureRouteCodeSnomed),
            text: SCALARString
        })
    );

/**
 * Beschreibt den Status einer Diagnose bzw. einer Erkrankung aus klinischer Sicht
 */
export interface AllergyIntoleranceClinicalStatus {
    coding: Array<AllergyIntoleranceClinicalStatusCoding>;
    id?: string;
    text?: string;
}

export const AllergyIntoleranceClinicalStatus: t.Type<AllergyIntoleranceClinicalStatus> =
    t.recursion("AllergyIntoleranceClinicalStatus", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, AllergyIntoleranceClinicalStatusCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Beschreibt die Kritikalität. Die Kritikalität gibt an, wie hoch Risiko dafür ist, dass die Exposition zu der Substanz eine schwerwiegende oder lebensbedrohliche Situation hervorruft.
 */
export interface AllergyIntoleranceVerificationStatus {
    coding: Array<AllergyIntoleranceVerificationStatusCoding>;
    id?: string;
    text?: string;
}

export const AllergyIntoleranceVerificationStatus: t.Type<AllergyIntoleranceVerificationStatus> =
    t.recursion("AllergyIntoleranceVerificationStatus", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, AllergyIntoleranceVerificationStatusCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Handelt es sich um eine Allergie oder eine Unverträglichkeit?
 */
export interface AllergyIntoleranceType {
    extension: Array<Extension | AllergyIntoleranceTypeAnzeigenameType>;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceType: t.Type<AllergyIntoleranceType> = t.recursion(
    "AllergyIntoleranceType",
    () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<AllergyIntoleranceTypeAnzeigenameType>]
                    >,
                    t.Any
                >(
                    t.union([Extension, AllergyIntoleranceTypeAnzeigenameType]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceTypeAnzeigenameType,
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
 * Enthält die Kategorie der die Allergie oder Unverträglichkeit auslösenden Substanz gemäß den angegebenen Auswahlmöglichkeiten.
 */
export interface AllergyIntoleranceCategory {
    extension: Array<Extension | AllergyIntoleranceCategoryAnzeigenameCategory>;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceCategory: t.Type<AllergyIntoleranceCategory> = t.recursion(
    "AllergyIntoleranceCategory",
    () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceCategoryAnzeigenameCategory>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, AllergyIntoleranceCategoryAnzeigenameCategory]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceCategoryAnzeigenameCategory,
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
 * Beschreibt die Kritikalität. Die Kritikalität gibt an, wie hoch Risiko dafür ist, dass die Exposition zu der Substanz eine schwerwiegende oder lebensbedrohliche Situation hervorruft.
 */
export interface AllergyIntoleranceCriticality {
    extension: Array<Extension | AllergyIntoleranceCriticalityAnzeigenameCriticality>;
    id?: string;
    value?: string;
}

export const AllergyIntoleranceCriticality: t.Type<AllergyIntoleranceCriticality> =
    t.recursion("AllergyIntoleranceCriticality", () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceCriticalityAnzeigenameCriticality>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        AllergyIntoleranceCriticalityAnzeigenameCriticality
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceCriticalityAnzeigenameCriticality,
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
 * Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
 */
export interface AllergyIntoleranceCode {
    id?: string;
    coding?: (AllergyIntoleranceCodeCodeSnomed | AllergyIntoleranceCodeCodeASK)[];
    text?: string;
}

export const AllergyIntoleranceCode: t.Type<AllergyIntoleranceCode> = t.recursion(
    "AllergyIntoleranceCode",
    () =>
        t.partial({
            id: SCALARString,
            coding: ReqArray<
                t.UnionC<
                    [
                        t.Type<AllergyIntoleranceCodeCodeSnomed>,
                        t.Type<AllergyIntoleranceCodeCodeASK>
                    ]
                >,
                t.Any
            >(
                t.union([
                    AllergyIntoleranceCodeCodeSnomed,
                    AllergyIntoleranceCodeCodeASK
                ]),
                [
                    {
                        codec: AllergyIntoleranceCodeCodeSnomed,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            pattern: "$this",
                            value: { system: "http://snomed.info/sct" }
                        }
                    },
                    {
                        codec: AllergyIntoleranceCodeCodeASK,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            pattern: "$this",
                            value: { system: "http://fhir.de/CodeSystem/ask" }
                        }
                    }
                ],
                ["0", "*"]
            ),
            text: SCALARString
        })
);

/**
 * Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
 */
export interface AllergyIntoleranceNote {
    text: string;
    id?: string;
    time?: string;
}

export const AllergyIntoleranceNote: t.Type<AllergyIntoleranceNote> = t.recursion(
    "AllergyIntoleranceNote",
    () =>
        t.intersection([
            t.type({
                text: SCALARMarkdown
            }),
            t.partial({
                id: SCALARString,
                time: SCALARDateTime
            })
        ])
);

/**
 * Dieses Element enthält Informationen über die Reaktion, die bei diesem/dieser PatientIn nach Exposition hervorgerufen wird.
 */
export interface AllergyIntoleranceReaction {
    manifestation: Array<AllergyIntoleranceReactionManifestation>;
    id?: string;
    substance?: CodeableConcept;
    description?: string;
    onset?: string;
    _severity?: AllergyIntoleranceReactionSeverity;
    severity?: string;
    exposureRoute?: AllergyIntoleranceReactionExposureRoute;
    note?: Annotation[];
}

export const AllergyIntoleranceReaction: t.Type<AllergyIntoleranceReaction> = t.recursion(
    "AllergyIntoleranceReaction",
    () =>
        t.intersection([
            t.type({
                manifestation: MinMaxArray(1, 1, AllergyIntoleranceReactionManifestation)
            }),
            t.partial({
                id: SCALARString,
                substance: CodeableConcept,
                description: SCALARString,
                onset: SCALARDateTime,
                _severity: AllergyIntoleranceReactionSeverity,
                severity: SCALARCode,
                exposureRoute: AllergyIntoleranceReactionExposureRoute,
                note: t.array(Annotation)
            })
        ])
);

interface AllergyIntolerance {
    code: AllergyIntoleranceCode;
    patient: Reference;
    resourceType?: "AllergyIntolerance";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    extension?: (Extension | AllergyIntoleranceAbatement | StageLife)[];
    identifier?: Identifier[];
    clinicalStatus?: AllergyIntoleranceClinicalStatus;
    verificationStatus?: AllergyIntoleranceVerificationStatus;
    _type?: AllergyIntoleranceType;
    type?: string;
    _category?: Array<AllergyIntoleranceCategory>;
    category?: Array<string>;
    _criticality?: AllergyIntoleranceCriticality;
    criticality?: string;
    encounter?: Reference;
    onsetAge?: AllergyIntoleranceOnsetAge;
    onsetDateTime?: string;
    recordedDate?: string;
    recorder?: Reference;
    asserter?: Reference;
    lastOccurrence?: string;
    note?: Array<AllergyIntoleranceNote>;
    reaction?: AllergyIntoleranceReaction[];
}

const AllergyIntolerance: t.Type<AllergyIntolerance> = t.recursion(
    "AllergyIntolerance",
    () =>
        t.intersection([
            t.type({
                code: AllergyIntoleranceCode,
                patient: Reference
            }),
            t.partial({
                resourceType: Literal("AllergyIntolerance"),
                id: SCALARString,
                meta: Meta,
                implicitRules: SCALARUri,
                language: SCALARCode,
                text: Narrative,
                contained: t.array(Resource),
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<AllergyIntoleranceAbatement>,
                            t.Type<StageLife>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, AllergyIntoleranceAbatement, StageLife]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: AllergyIntoleranceAbatement,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_AllergyIntolerance_Abatement"
                            }
                        },
                        {
                            codec: StageLife,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Stage_Life"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                identifier: t.array(Identifier),
                clinicalStatus: AllergyIntoleranceClinicalStatus,
                verificationStatus: AllergyIntoleranceVerificationStatus,
                _type: AllergyIntoleranceType,
                type: SCALARCode,
                _category: MaxArray(1, AllergyIntoleranceCategory),
                category: MaxArray(1, SCALARCode),
                _criticality: AllergyIntoleranceCriticality,
                criticality: SCALARCode,
                encounter: Reference,
                onsetAge: AllergyIntoleranceOnsetAge,
                onsetDateTime: SCALARDateTime,
                recordedDate: SCALARDateTime,
                recorder: Reference,
                asserter: Reference,
                lastOccurrence: SCALARDateTime,
                note: MaxArray(1, AllergyIntoleranceNote),
                reaction: t.array(AllergyIntoleranceReaction)
            })
        ])
);

export default AllergyIntolerance;
