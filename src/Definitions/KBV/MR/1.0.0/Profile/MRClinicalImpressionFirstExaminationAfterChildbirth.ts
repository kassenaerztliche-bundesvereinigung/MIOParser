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
    MinArray,
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "243796009:{363589002=37729005,408732007=67822003}";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCoding> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("243796009:{363589002=37729005,408732007=67822003}")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "243796009:{363589002=308283009,246090004=102506008}";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCoding> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("243796009:{363589002=308283009,246090004=102506008}")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConcept {
    coding: Array<
        MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConcept: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConcept> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConceptCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConcept {
    coding: Array<
        MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConcept: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConcept> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConceptCoding
                    )
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Wochenbett";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Wochenbett")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum {
    url: "datum";
    valueDateTime: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("datum"),
                    valueDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKodeValueCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum {
    url: "datum";
    id?: string;
    valueDateTime?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("datum")
                }),
                t.partial({
                    id: SCALARString,
                    valueDateTime: SCALARDateTime
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKodeValueCodeableConcept
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung {
    url: "verlegung";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("verlegung")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum
                                >,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungDatum,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "datum" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegungKode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kode" }
                            }
                        ],
                        ["0", "*"]
                    )
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung {
    url: "entlassung";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("entlassung")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum
                                >,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungDatum,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "datum" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassungKode,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "kode" }
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplay> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplayAnzeigenameCodeSnomed,
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
 * In dieser Extension kann ein ergänzendes Datum dokumentiert werden.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthTermine {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthTermine: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthTermine> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthTermine",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung
                                >,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineVerlegung,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "verlegung" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermineEntlassung,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "entlassung" }
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "133906008";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthCodeCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthCodeCoding> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("133906008")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRClinicalImpressionFirstExaminationAfterChildbirthCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationCode {
    text: "Untersuchungen zur ersten Untersuchung nach Entbindung / Wochenbett";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationCode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationCode> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal(
                        "Untersuchungen zur ersten Untersuchung nach Entbindung / Wochenbett"
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * A record of a specific investigation that was undertaken.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationItem {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationItem: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationItem> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationItem",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Puerperium_Normal|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Gynecological_Finding_Normal|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Anti_D_Prophylaxis_Post_Partum|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Advice_On_Iodine_Intake|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Pressure|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest|1.0.0"
                    ])
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth|1.0.0"
    >;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthMeta: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthMeta> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth|1.0.0"
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
 * Categorizes the type of clinical assessment performed.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthCode {
    coding: Array<MRClinicalImpressionFirstExaminationAfterChildbirthCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthCode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthCode> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthCodeCoding
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * The patient or group of individuals assessed as part of this record.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthSubject {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthSubject: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthSubject> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthSubject",
    () =>
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
 * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthEncounter {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthEncounter: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthEncounter> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthEncounter",
    () =>
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
 * The clinician performing the assessment.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthAssessor {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthAssessor: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthAssessor> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthAssessor",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthInvestigation {
    code: MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationCode;
    item: Array<MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationItem>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthInvestigation: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthInvestigation> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirthInvestigation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationCode,
                    item: MinArray(
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthInvestigationItem
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRClinicalImpressionFirstExaminationAfterChildbirth {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionFirstExaminationAfterChildbirthMeta;
    status: "completed";
    code: MRClinicalImpressionFirstExaminationAfterChildbirthCode;
    subject: MRClinicalImpressionFirstExaminationAfterChildbirthSubject;
    encounter: MRClinicalImpressionFirstExaminationAfterChildbirthEncounter;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    extension?: (
        | Extension
        | MRClinicalImpressionFirstExaminationAfterChildbirthTermine
    )[];
    assessor?: MRClinicalImpressionFirstExaminationAfterChildbirthAssessor;
    investigation?: Array<
        MRClinicalImpressionFirstExaminationAfterChildbirthInvestigation
    >;
    note?: Array<Annotation>;
}

const MRClinicalImpressionFirstExaminationAfterChildbirth: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirth> = t.recursion(
    "MRClinicalImpressionFirstExaminationAfterChildbirth",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionFirstExaminationAfterChildbirthMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionFirstExaminationAfterChildbirthCode,
                    subject: MRClinicalImpressionFirstExaminationAfterChildbirthSubject,
                    encounter: MRClinicalImpressionFirstExaminationAfterChildbirthEncounter,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    MRClinicalImpressionFirstExaminationAfterChildbirthTermine
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionFirstExaminationAfterChildbirthTermine
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthTermine,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    assessor: MRClinicalImpressionFirstExaminationAfterChildbirthAssessor,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthInvestigation
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRClinicalImpressionFirstExaminationAfterChildbirth;
