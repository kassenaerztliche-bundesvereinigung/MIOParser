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
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    ReqArray
} from "../../../../util";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import MRSpecialFindingsVS from "../../../../../Definitions/KBV/MR/1.00.000/ValueSet/MRSpecialFindings";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Chart_Entry"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage (korrigiert)";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006";
    id?: string;
    _display?: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
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
                    _display: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006:246501002=278395004";
    id?: string;
    _display?: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding",
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
                    _display: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<
        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept {
    coding: Array<
        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("schwangerschaftswoche")
                }),
                t.partial({
                    id: SCALARString,
                    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("ergaenzendeTage"),
                    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert {
    url: "schwangerschaftswocheKorrigiert";
    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("schwangerschaftswocheKorrigiert"),
                    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert {
    url: "ergaenzendeTageKorrigiert";
    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("ergaenzendeTageKorrigiert"),
                    valueQuantity: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert {
    url: "korrekturKorrigiert";
    id?: string;
    valueBoolean?: true;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert",
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert {
    url: "kodeKorrigiert";
    valueCodeableConcept: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kodeKorrigiert"),
                    valueCodeableConcept: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept
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
export interface MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Gravidogramm";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Gravidogramm")
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt",
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
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "schwangerschaftswoche" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "ergaenzendeTage" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrektur" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode,
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert {
    url: "schwangerschaftszeitpunktKorrigiert";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert",
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
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "schwangerschaftswocheKorrigiert"
                                }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "ergaenzendeTageKorrigiert"
                                }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrekturKorrigiert" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert,
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
export interface MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
    )[];
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung",
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
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
                                >,
                                t.Type<
                                    MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                            MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "schwangerschaftszeitpunkt"
                                }
                            },
                            {
                                codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert,
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
export interface MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplay> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MRClinicalImpressionPregnancyChartEntryIdentifierNummer {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryIdentifierNummer: t.Type<MRClinicalImpressionPregnancyChartEntryIdentifierNummer> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryIdentifierNummer",
    () =>
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
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionPregnancyChartEntryCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyChartEntryCodeCodingDisplay: t.Type<MRClinicalImpressionPregnancyChartEntryCodeCodingDisplay> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionPregnancyChartEntryCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: string;
    code: MRSpecialFindingsVS;
    id?: string;
    _display?: MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCoding: t.Type<MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCoding> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: SCALARString,
                    code: MRSpecialFindingsVS
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionPregnancyChartEntryCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "773433004";
    id?: string;
    _display?: MRClinicalImpressionPregnancyChartEntryCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionPregnancyChartEntryCodeCoding: t.Type<MRClinicalImpressionPregnancyChartEntryCodeCoding> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("773433004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRClinicalImpressionPregnancyChartEntryCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The point in time or period over which the subject was assessed.
 */
export interface MRClinicalImpressionPregnancyChartEntryEffectiveDateTime {
    id?: string;
    extension?: (
        | Extension
        | MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung
    )[];
    value?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEffectiveDateTime: t.Type<MRClinicalImpressionPregnancyChartEntryEffectiveDateTime> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEffectiveDateTime",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionPregnancyChartEntryEffectiveDateTimeZeitpunktDerUntersuchung,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day"
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
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionPregnancyChartEntryInvestigationCode {
    text: "Gravidogrameintrag";
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryInvestigationCode: t.Type<MRClinicalImpressionPregnancyChartEntryInvestigationCode> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryInvestigationCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    text: Literal("Gravidogrameintrag")
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
export interface MRClinicalImpressionPregnancyChartEntryInvestigationItem {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryInvestigationItem: t.Type<MRClinicalImpressionPregnancyChartEntryInvestigationItem> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryInvestigationItem",
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
 * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
 */
export interface MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConcept {
    coding: Array<
        MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCoding
    >;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConcept: t.Type<MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConcept> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConceptCoding
                    )
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
export interface MRClinicalImpressionPregnancyChartEntryMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Chart_Entry|1.0.0"
    >;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryMeta: t.Type<MRClinicalImpressionPregnancyChartEntryMeta> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_Pregnancy_Chart_Entry|1.0.0"
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
 * Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
 */
export interface MRClinicalImpressionPregnancyChartEntryIdentifier {
    id?: string;
    extension?: (Extension | MRClinicalImpressionPregnancyChartEntryIdentifierNummer)[];
}

export const MRClinicalImpressionPregnancyChartEntryIdentifier: t.Type<MRClinicalImpressionPregnancyChartEntryIdentifier> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryIdentifier",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRClinicalImpressionPregnancyChartEntryIdentifierNummer
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRClinicalImpressionPregnancyChartEntryIdentifierNummer
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRClinicalImpressionPregnancyChartEntryIdentifierNummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                )
            })
        )
);

/**
 * Categorizes the type of clinical assessment performed.
 */
export interface MRClinicalImpressionPregnancyChartEntryCode {
    coding: Array<MRClinicalImpressionPregnancyChartEntryCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryCode: t.Type<MRClinicalImpressionPregnancyChartEntryCode> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionPregnancyChartEntryCodeCoding
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
export interface MRClinicalImpressionPregnancyChartEntrySubject {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntrySubject: t.Type<MRClinicalImpressionPregnancyChartEntrySubject> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntrySubject",
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
 * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
 */
export interface MRClinicalImpressionPregnancyChartEntryEncounter {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryEncounter: t.Type<MRClinicalImpressionPregnancyChartEntryEncounter> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryEncounter",
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
 * The clinician performing the assessment.
 */
export interface MRClinicalImpressionPregnancyChartEntryAssessor {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryAssessor: t.Type<MRClinicalImpressionPregnancyChartEntryAssessor> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryAssessor",
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
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface MRClinicalImpressionPregnancyChartEntryInvestigation {
    code: MRClinicalImpressionPregnancyChartEntryInvestigationCode;
    item: Array<MRClinicalImpressionPregnancyChartEntryInvestigationItem>;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryInvestigation: t.Type<MRClinicalImpressionPregnancyChartEntryInvestigation> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryInvestigation",
    () =>
        Excess(
            t.intersection([
                t.type({
                    code: MRClinicalImpressionPregnancyChartEntryInvestigationCode,
                    item: MinArray(
                        1,
                        MRClinicalImpressionPregnancyChartEntryInvestigationItem
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export interface MRClinicalImpressionPregnancyChartEntryFinding {
    itemCodeableConcept: MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionPregnancyChartEntryFinding: t.Type<MRClinicalImpressionPregnancyChartEntryFinding> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntryFinding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    itemCodeableConcept: MRClinicalImpressionPregnancyChartEntryFindingItemCodeableConcept
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRClinicalImpressionPregnancyChartEntry {
    meta: MRClinicalImpressionPregnancyChartEntryMeta;
    status: "completed";
    code: MRClinicalImpressionPregnancyChartEntryCode;
    subject: MRClinicalImpressionPregnancyChartEntrySubject;
    encounter: MRClinicalImpressionPregnancyChartEntryEncounter;
    investigation: Array<MRClinicalImpressionPregnancyChartEntryInvestigation>;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    identifier?: Array<MRClinicalImpressionPregnancyChartEntryIdentifier>;
    _effectiveDateTime?: MRClinicalImpressionPregnancyChartEntryEffectiveDateTime;
    effectiveDateTime?: string;
    assessor?: MRClinicalImpressionPregnancyChartEntryAssessor;
    finding?: MRClinicalImpressionPregnancyChartEntryFinding[];
    note?: Array<Annotation>;
}

const MRClinicalImpressionPregnancyChartEntry: t.Type<MRClinicalImpressionPregnancyChartEntry> = t.recursion(
    "MRClinicalImpressionPregnancyChartEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRClinicalImpressionPregnancyChartEntryMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionPregnancyChartEntryCode,
                    subject: MRClinicalImpressionPregnancyChartEntrySubject,
                    encounter: MRClinicalImpressionPregnancyChartEntryEncounter,
                    investigation: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionPregnancyChartEntryInvestigation
                    )
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    identifier: MaxArray(
                        1,
                        MRClinicalImpressionPregnancyChartEntryIdentifier
                    ),
                    _effectiveDateTime: MRClinicalImpressionPregnancyChartEntryEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    assessor: MRClinicalImpressionPregnancyChartEntryAssessor,
                    finding: t.array(MRClinicalImpressionPregnancyChartEntryFinding),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
);

export default MRClinicalImpressionPregnancyChartEntry;
