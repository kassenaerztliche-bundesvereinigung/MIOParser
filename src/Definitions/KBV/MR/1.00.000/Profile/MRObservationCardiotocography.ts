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
import SCALARDecimal from "../../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Cardiotocography"

/**
 * Content in other Language.
 */
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006";
    id?: string;
    _display?: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
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
                    _display: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<
        MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("schwangerschaftswoche")
                }),
                t.partial({
                    id: SCALARString,
                    valueQuantity: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("ergaenzendeTage"),
                    valueQuantity: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur",
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Cardiototokographie";
    id?: string;
}

export const MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Cardiototokographie")
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
    )[];
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt",
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
                                    MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche
                                >,
                                t.Type<
                                    MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage
                                >,
                                t.Type<
                                    MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur
                                >,
                                t.Type<
                                    MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche,
                            MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage,
                            MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur,
                            MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktSchwangerschaftswoche,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "schwangerschaftswoche" }
                            },
                            {
                                codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktErgaenzendeTage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "ergaenzendeTage" }
                            },
                            {
                                codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKorrektur,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrektur" }
                            },
                            {
                                codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunktKode,
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
export interface MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent
    )[];
}

export const MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed",
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
                                    MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomedContent,
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
export interface MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
    )[];
}

export const MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt: t.Type<MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt",
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
                                    MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunktSchwangerschaftszeitpunkt,
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
export interface MRObservationCardiotocographyCodeCodingDisplay {
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed
    )[];
    value?: string;
}

export const MRObservationCardiotocographyCodeCodingDisplay: t.Type<MRObservationCardiotocographyCodeCodingDisplay> = t.recursion(
    "MRObservationCardiotocographyCodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationCardiotocographyCodeCodingDisplayAnzeigenameCodeSnomed,
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
export interface MRObservationCardiotocographyCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "364363007";
    id?: string;
    _display?: MRObservationCardiotocographyCodeCodingDisplay;
    display?: string;
}

export const MRObservationCardiotocographyCodeCoding: t.Type<MRObservationCardiotocographyCodeCoding> = t.recursion(
    "MRObservationCardiotocographyCodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("364363007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRObservationCardiotocographyCodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
 */
export interface MRObservationCardiotocographyEffectiveDateTime {
    id?: string;
    extension?: (
        | Extension
        | MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt
    )[];
    value?: string;
}

export const MRObservationCardiotocographyEffectiveDateTime: t.Type<MRObservationCardiotocographyEffectiveDateTime> = t.recursion(
    "MRObservationCardiotocographyEffectiveDateTime",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MRObservationCardiotocographyEffectiveDateTimeSchwangerschaftszeitpunkt,
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRObservationCardiotocographyMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Cardiotocography|1.0.0"
    >;
    id?: string;
}

export const MRObservationCardiotocographyMeta: t.Type<MRObservationCardiotocographyMeta> = t.recursion(
    "MRObservationCardiotocographyMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Cardiotocography|1.0.0"
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
export interface MRObservationCardiotocographyCode {
    coding: Array<MRObservationCardiotocographyCodeCoding>;
    id?: string;
}

export const MRObservationCardiotocographyCode: t.Type<MRObservationCardiotocographyCode> = t.recursion(
    "MRObservationCardiotocographyCode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRObservationCardiotocographyCodeCoding)
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
export interface MRObservationCardiotocographySubject {
    reference: string;
    id?: string;
}

export const MRObservationCardiotocographySubject: t.Type<MRObservationCardiotocographySubject> = t.recursion(
    "MRObservationCardiotocographySubject",
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
export interface MRObservationCardiotocographyEncounter {
    reference: string;
    id?: string;
}

export const MRObservationCardiotocographyEncounter: t.Type<MRObservationCardiotocographyEncounter> = t.recursion(
    "MRObservationCardiotocographyEncounter",
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
export interface MRObservationCardiotocographyPerformer {
    reference: string;
    id?: string;
}

export const MRObservationCardiotocographyPerformer: t.Type<MRObservationCardiotocographyPerformer> = t.recursion(
    "MRObservationCardiotocographyPerformer",
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

interface MRObservationCardiotocography {
    meta: MRObservationCardiotocographyMeta;
    status: "final";
    code: MRObservationCardiotocographyCode;
    subject: MRObservationCardiotocographySubject;
    encounter: MRObservationCardiotocographyEncounter;
    valueString: string;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    _effectiveDateTime?: MRObservationCardiotocographyEffectiveDateTime;
    effectiveDateTime?: string;
    performer?: Array<MRObservationCardiotocographyPerformer>;
}

const MRObservationCardiotocography: t.Type<MRObservationCardiotocography> = t.recursion(
    "MRObservationCardiotocography",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRObservationCardiotocographyMeta,
                    status: Literal("final"),
                    code: MRObservationCardiotocographyCode,
                    subject: MRObservationCardiotocographySubject,
                    encounter: MRObservationCardiotocographyEncounter,
                    valueString: SCALARString
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    _effectiveDateTime: MRObservationCardiotocographyEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    performer: MaxArray(1, MRObservationCardiotocographyPerformer)
                })
            ])
        )
);

export default MRObservationCardiotocography;
