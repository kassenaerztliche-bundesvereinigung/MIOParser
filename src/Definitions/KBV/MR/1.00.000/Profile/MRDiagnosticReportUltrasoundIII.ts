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

import DiagnosticreportstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Diagnosticreportstatus";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_III"

/**
 * Content in other Language.
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                    extension: t.array(
                        MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
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
                    _display: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<
        MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
    >;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("schwangerschaftswoche")
                }),
                t.partial({
                    id: SCALARString,
                    valueQuantity: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("ergaenzendeTage"),
                    valueQuantity: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    valueBoolean: false;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("korrektur"),
                    valueBoolean: Literal(false)
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "III. Screening";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomedContent> = t.recursion(
    "MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomedContent",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("III. Screening")
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
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
        | MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
        | MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
    )[];
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt",
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
                                t.Type<
                                    MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
                                >,
                                t.Type<
                                    MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
                                >,
                                t.Type<
                                    MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
                                >,
                                t.Type<
                                    MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                            MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                            MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                            MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                        ]),
                        [
                            {
                                codec: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "schwangerschaftswoche" }
                            },
                            {
                                codec: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "ergaenzendeTage" }
                            },
                            {
                                codec: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "korrektur" }
                            },
                            {
                                codec: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode,
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
export interface MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomed> = t.recursion(
    "MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomed",
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
                    extension: t.array(
                        MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomedContent
                    )
                })
            ])
        )
);

/**
 * In dieser Extension können Schwangerschaftswoche und ergänzende Tage dokumentiert werden.
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt[];
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchung: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchung> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchung",
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
                    extension: t.array(
                        MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
                    )
                })
            ])
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRDiagnosticReportUltrasoundIIICodeCodingDisplay {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIIICodeCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIIICodeCodingDisplay> = t.recursion(
    "MRDiagnosticReportUltrasoundIIICodeCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRDiagnosticReportUltrasoundIIICodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDiagnosticReportUltrasoundIIICodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "446353007";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIIICodeCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIIICodeCoding: t.Type<MRDiagnosticReportUltrasoundIIICodeCoding> = t.recursion(
    "MRDiagnosticReportUltrasoundIIICodeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("446353007")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRDiagnosticReportUltrasoundIIICodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
 */
export interface MRDiagnosticReportUltrasoundIIIEffectiveDateTime {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchung[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIIIEffectiveDateTime: t.Type<MRDiagnosticReportUltrasoundIIIEffectiveDateTime> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEffectiveDateTime",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRDiagnosticReportUltrasoundIIIEffectiveDateTimeZeitpunktDerUntersuchung
                ),
                value: SCALARDateTime
            })
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRDiagnosticReportUltrasoundIIIMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_III|1.0.0"
    >;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIMeta: t.Type<MRDiagnosticReportUltrasoundIIIMeta> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_III|1.0.0"
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
export interface MRDiagnosticReportUltrasoundIIICode {
    coding: Array<MRDiagnosticReportUltrasoundIIICodeCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIICode: t.Type<MRDiagnosticReportUltrasoundIIICode> = t.recursion(
    "MRDiagnosticReportUltrasoundIIICode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRDiagnosticReportUltrasoundIIICodeCoding)
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
export interface MRDiagnosticReportUltrasoundIIISubject {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIISubject: t.Type<MRDiagnosticReportUltrasoundIIISubject> = t.recursion(
    "MRDiagnosticReportUltrasoundIIISubject",
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
 * The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about.
 */
export interface MRDiagnosticReportUltrasoundIIIEncounter {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIEncounter: t.Type<MRDiagnosticReportUltrasoundIIIEncounter> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIEncounter",
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
 * The diagnostic service that is responsible for issuing the report.
 */
export interface MRDiagnosticReportUltrasoundIIIPerformer {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIPerformer: t.Type<MRDiagnosticReportUltrasoundIIIPerformer> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIPerformer",
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
 * [Observations](observation.html)  that are part of this diagnostic report.
 */
export interface MRDiagnosticReportUltrasoundIIIResult {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIIResult: t.Type<MRDiagnosticReportUltrasoundIIIResult> = t.recursion(
    "MRDiagnosticReportUltrasoundIIIResult",
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

interface MRDiagnosticReportUltrasoundIII {
    meta: MRDiagnosticReportUltrasoundIIIMeta;
    status: DiagnosticreportstatusVS;
    code: MRDiagnosticReportUltrasoundIIICode;
    subject: MRDiagnosticReportUltrasoundIIISubject;
    encounter: MRDiagnosticReportUltrasoundIIIEncounter;
    resourceType?: string;
    id?: string;
    text?: Narrative;
    extension?: Extension[];
    _effectiveDateTime?: MRDiagnosticReportUltrasoundIIIEffectiveDateTime;
    effectiveDateTime?: string;
    performer?: Array<MRDiagnosticReportUltrasoundIIIPerformer>;
    result?: MRDiagnosticReportUltrasoundIIIResult[];
}

const MRDiagnosticReportUltrasoundIII: t.Type<MRDiagnosticReportUltrasoundIII> = t.recursion(
    "MRDiagnosticReportUltrasoundIII",
    () =>
        Excess(
            t.intersection([
                t.type({
                    meta: MRDiagnosticReportUltrasoundIIIMeta,
                    status: DiagnosticreportstatusVS,
                    code: MRDiagnosticReportUltrasoundIIICode,
                    subject: MRDiagnosticReportUltrasoundIIISubject,
                    encounter: MRDiagnosticReportUltrasoundIIIEncounter
                }),
                t.partial({
                    resourceType: t.string,
                    id: SCALARString,
                    text: Narrative,
                    extension: t.array(Extension),
                    _effectiveDateTime: MRDiagnosticReportUltrasoundIIIEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    performer: MaxArray(1, MRDiagnosticReportUltrasoundIIIPerformer),
                    result: t.array(MRDiagnosticReportUltrasoundIIIResult)
                })
            ])
        )
);

export default MRDiagnosticReportUltrasoundIII;
