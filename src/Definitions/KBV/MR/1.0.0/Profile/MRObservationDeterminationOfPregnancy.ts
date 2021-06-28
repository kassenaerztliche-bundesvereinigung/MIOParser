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

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import ObservationstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Observationstatus";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Determination_Of_Pregnancy"

/**
 * Content in other Language.
 */
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006";
    id?: string;
    _display?: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
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
                    _display: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<
        MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("schwangerschaftswoche")
                }),
                t.partial({
                    id: SCALARString,
                    valueQuantity: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("ergaenzendeTage"),
                    valueQuantity: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur",
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaft festgestellt am/in der";
    id?: string;
}

export const MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Schwangerschaft festgestellt am/in der")
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
    )[];
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt",
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
                                    MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche
                                >,
                                t.Type<
                                    MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage
                                >,
                                t.Type<
                                    MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur
                                >,
                                t.Type<
                                    MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche,
                            MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage,
                            MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur,
                            MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "schwangerschaftswoche" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "ergaenzendeTage" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrektur" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
    )[];
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt",
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
                                    MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "schwangerschaftszeitpunkt"
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
export interface MRObservationDeterminationOfPregnancyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationDeterminationOfPregnancyCodeCodingDisplay: t.Type<MRObservationDeterminationOfPregnancyCodeCodingDisplay> = t.recursion(
    "MRObservationDeterminationOfPregnancyCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationDeterminationOfPregnancyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationDeterminationOfPregnancyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "74036000:370130000=410672004";
    id?: string;
    _display?: MRObservationDeterminationOfPregnancyCodeCodingDisplay;
    display?: string;
}

export const MRObservationDeterminationOfPregnancyCodeCoding: t.Type<MRObservationDeterminationOfPregnancyCodeCoding> = t.recursion(
    "MRObservationDeterminationOfPregnancyCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("74036000:370130000=410672004")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationDeterminationOfPregnancyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
 */
export interface MRObservationDeterminationOfPregnancyEffectiveDateTime {
    id?: string;
    extension?: (
        | Extension
        | MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt
    )[];
    value?: string;
}

export const MRObservationDeterminationOfPregnancyEffectiveDateTime: t.Type<MRObservationDeterminationOfPregnancyEffectiveDateTime> = t.recursion(
    "MRObservationDeterminationOfPregnancyEffectiveDateTime",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationDeterminationOfPregnancyEffectiveDateTimeSchwangerschaftszeitpunkt,
                            occurrence: ["1", "1"],
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationDeterminationOfPregnancyMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Determination_Of_Pregnancy|1.0.0"
    >;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyMeta: t.Type<MRObservationDeterminationOfPregnancyMeta> = t.recursion(
    "MRObservationDeterminationOfPregnancyMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Determination_Of_Pregnancy|1.0.0"
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
export interface MRObservationDeterminationOfPregnancyCode {
    coding: Array<MRObservationDeterminationOfPregnancyCodeCoding>;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyCode: t.Type<MRObservationDeterminationOfPregnancyCode> = t.recursion(
    "MRObservationDeterminationOfPregnancyCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationDeterminationOfPregnancyCodeCoding
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
export interface MRObservationDeterminationOfPregnancySubject {
    reference: string;
    id?: string;
}

export const MRObservationDeterminationOfPregnancySubject: t.Type<MRObservationDeterminationOfPregnancySubject> = t.recursion(
    "MRObservationDeterminationOfPregnancySubject",
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made.
 */
export interface MRObservationDeterminationOfPregnancyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyEncounter: t.Type<MRObservationDeterminationOfPregnancyEncounter> = t.recursion(
    "MRObservationDeterminationOfPregnancyEncounter",
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
 * Who was responsible for asserting the observed value as "true".
 */
export interface MRObservationDeterminationOfPregnancyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationDeterminationOfPregnancyPerformer: t.Type<MRObservationDeterminationOfPregnancyPerformer> = t.recursion(
    "MRObservationDeterminationOfPregnancyPerformer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRObservationDeterminationOfPregnancy {
    resourceType: "Observation";
    meta: MRObservationDeterminationOfPregnancyMeta;
    status: ObservationstatusVS;
    code: MRObservationDeterminationOfPregnancyCode;
    subject: MRObservationDeterminationOfPregnancySubject;
    encounter: MRObservationDeterminationOfPregnancyEncounter;
    valueBoolean: true;
    id?: string;
    _effectiveDateTime?: MRObservationDeterminationOfPregnancyEffectiveDateTime;
    effectiveDateTime?: string;
    performer?: Array<MRObservationDeterminationOfPregnancyPerformer>;
}

const MRObservationDeterminationOfPregnancy: t.Type<MRObservationDeterminationOfPregnancy> = t.recursion(
    "MRObservationDeterminationOfPregnancy",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Observation"),
                    meta: MRObservationDeterminationOfPregnancyMeta,
                    status: ObservationstatusVS,
                    code: MRObservationDeterminationOfPregnancyCode,
                    subject: MRObservationDeterminationOfPregnancySubject,
                    encounter: MRObservationDeterminationOfPregnancyEncounter,
                    valueBoolean: Literal(true)
                }),
                t.partial({
                    id: SCALARString,
                    _effectiveDateTime: MRObservationDeterminationOfPregnancyEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    performer: MaxArray(1, MRObservationDeterminationOfPregnancyPerformer)
                })
            ])
        )
);

export default MRObservationDeterminationOfPregnancy;
