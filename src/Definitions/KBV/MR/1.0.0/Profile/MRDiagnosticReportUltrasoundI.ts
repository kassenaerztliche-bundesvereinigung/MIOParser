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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_I"

/**
 * Content in other Language.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Schwangerschaftswoche+Tage")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage (korrigiert)";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Schwangerschaftswoche+Tage (korrigiert)")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("57036006")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006:246501002=278395004";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20200731"
                        ),
                        code: Literal("57036006:246501002=278395004")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: Literal("Wochen"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("wk")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: Literal("Tage"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("d")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: Literal("Wochen"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("wk")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        value: SCALARDecimal,
                        unit: Literal("Tage"),
                        system: Literal("http://unitsofmeasure.org"),
                        code: Literal("d")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept {
    coding: Array<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding
                        )
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswoche")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTage"),
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("korrektur")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueBoolean: Literal(false)
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kode"),
                        valueCodeableConcept:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert {
    url: "schwangerschaftswocheKorrigiert";
    valueQuantity: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswocheKorrigiert"),
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert {
    url: "ergaenzendeTageKorrigiert";
    valueQuantity: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTageKorrigiert"),
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert {
    url: "korrekturKorrigiert";
    id?: string;
    valueBoolean?: true;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("korrekturKorrigiert")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueBoolean: Literal(true)
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert {
    url: "kodeKorrigiert";
    valueCodeableConcept: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kodeKorrigiert"),
                        valueCodeableConcept:
                            MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept
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
export interface MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "I. Screening";
    id?: string;
}

export const MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("I. Screening")
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
    )[];
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftszeitpunkt")
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                    occurrence: ["1", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftswoche"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                    occurrence: ["0", "1"],
                                    sliceBy: { path: "url", value: "ergaenzendeTage" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "korrektur" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode,
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
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert {
    url: "schwangerschaftszeitpunktKorrigiert";
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
    )[];
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftszeitpunktKorrigiert")
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                                    occurrence: ["1", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftswocheKorrigiert"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "ergaenzendeTageKorrigiert"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "korrekturKorrigiert" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "kodeKorrigiert" }
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
export interface MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    t.Type<MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomedContent,
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
 * In dieser Extension können Schwangerschaftswoche und ergänzende Tage dokumentiert werden.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
    )[];
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        extension: ReqArray<
                            t.UnionC<
                                [
                                    t.Type<Extension>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt>,
                                    t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                                MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftszeitpunkt"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftszeitpunktKorrigiert"
                                    }
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
export interface MRDiagnosticReportUltrasoundICodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundICodeCodingDisplay: t.Type<MRDiagnosticReportUltrasoundICodeCodingDisplay> =
    t.recursion("MRDiagnosticReportUltrasoundICodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRDiagnosticReportUltrasoundICodeCodingDisplayAnzeigenameCodeSnomed,
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRDiagnosticReportUltrasoundIErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIErgaenzendeAngaben: t.Type<MRDiagnosticReportUltrasoundIErgaenzendeAngaben> =
    t.recursion("MRDiagnosticReportUltrasoundIErgaenzendeAngaben", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                    ),
                    valueString: SCALARString
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
export interface MRDiagnosticReportUltrasoundICodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "446522006";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundICodeCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundICodeCoding: t.Type<MRDiagnosticReportUltrasoundICodeCoding> =
    t.recursion("MRDiagnosticReportUltrasoundICodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("446522006")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRDiagnosticReportUltrasoundICodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
 */
export interface MRDiagnosticReportUltrasoundIEffectiveDateTime {
    id?: string;
    extension?: (
        | Extension
        | MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung
    )[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIEffectiveDateTime: t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTime> =
    t.recursion("MRDiagnosticReportUltrasoundIEffectiveDateTime", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRDiagnosticReportUltrasoundIEffectiveDateTimeZeitpunktDerUntersuchung,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARDateTime
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRDiagnosticReportUltrasoundIMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_I|1.0.0">;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIMeta: t.Type<MRDiagnosticReportUltrasoundIMeta> =
    t.recursion("MRDiagnosticReportUltrasoundIMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_I|1.0.0"
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
export interface MRDiagnosticReportUltrasoundICode {
    coding: Array<MRDiagnosticReportUltrasoundICodeCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundICode: t.Type<MRDiagnosticReportUltrasoundICode> =
    t.recursion("MRDiagnosticReportUltrasoundICode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRDiagnosticReportUltrasoundICodeCoding)
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
export interface MRDiagnosticReportUltrasoundISubjectReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundISubjectReference: t.Type<MRDiagnosticReportUltrasoundISubjectReference> =
    t.recursion("MRDiagnosticReportUltrasoundISubjectReference", () =>
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
 */
export interface MRDiagnosticReportUltrasoundIEncounterReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIEncounterReference: t.Type<MRDiagnosticReportUltrasoundIEncounterReference> =
    t.recursion("MRDiagnosticReportUltrasoundIEncounterReference", () =>
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
 * The diagnostic service that is responsible for issuing the report.
 */
export interface MRDiagnosticReportUltrasoundIPerformerReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIPerformerReference: t.Type<MRDiagnosticReportUltrasoundIPerformerReference> =
    t.recursion("MRDiagnosticReportUltrasoundIPerformerReference", () =>
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

/**
 * [Observations](observation.html)  that are part of this diagnostic report.
 */
export interface MRDiagnosticReportUltrasoundIResultReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIResultReference: t.Type<MRDiagnosticReportUltrasoundIResultReference> =
    t.recursion("MRDiagnosticReportUltrasoundIResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Pregnancy_Information|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_General_Information|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_I|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Abnormalities|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRDiagnosticReportUltrasoundI {
    resourceType: "DiagnosticReport";
    meta: MRDiagnosticReportUltrasoundIMeta;
    status: "final";
    code: MRDiagnosticReportUltrasoundICode;
    subject: MRDiagnosticReportUltrasoundISubjectReference;
    encounter: MRDiagnosticReportUltrasoundIEncounterReference;
    id?: string;
    text?: Narrative;
    extension?: (Extension | MRDiagnosticReportUltrasoundIErgaenzendeAngaben)[];
    _effectiveDateTime?: MRDiagnosticReportUltrasoundIEffectiveDateTime;
    effectiveDateTime?: string;
    performer?: Array<MRDiagnosticReportUltrasoundIPerformerReference>;
    result?: MRDiagnosticReportUltrasoundIResultReference[];
}

const MRDiagnosticReportUltrasoundI: t.Type<MRDiagnosticReportUltrasoundI> = t.recursion(
    "MRDiagnosticReportUltrasoundI",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: MRDiagnosticReportUltrasoundIMeta,
                    status: Literal("final"),
                    code: MRDiagnosticReportUltrasoundICode,
                    subject: MRDiagnosticReportUltrasoundISubjectReference,
                    encounter: MRDiagnosticReportUltrasoundIEncounterReference
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MRDiagnosticReportUltrasoundIErgaenzendeAngaben>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRDiagnosticReportUltrasoundIErgaenzendeAngaben
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRDiagnosticReportUltrasoundIErgaenzendeAngaben,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    _effectiveDateTime: MRDiagnosticReportUltrasoundIEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    performer: MaxArray(
                        1,
                        MRDiagnosticReportUltrasoundIPerformerReference
                    ),
                    result: t.array(MRDiagnosticReportUltrasoundIResultReference)
                })
            ])
        )
);

export default MRDiagnosticReportUltrasoundI;
