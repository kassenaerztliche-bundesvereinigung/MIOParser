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

import AdditionalComment from "../../../../../Definitions/KBVBase/1.1.0/Extension/AdditionalComment";
import DiagnosticreportstatusVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Diagnosticreportstatus";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_II"

/**
 * Content in other Language.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Schwangerschaftswoche+Tage (korrigiert)";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding",
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
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "57036006:246501002=278395004";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding",
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
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept {
    coding: Array<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConceptCoding
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity {
    value: number;
    unit: "Wochen";
    system: "http://unitsofmeasure.org";
    code: "wk";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity {
    value: number;
    unit: "Tage";
    system: "http://unitsofmeasure.org";
    code: "d";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept {
    coding: Array<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConceptCoding
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche {
    url: "schwangerschaftswoche";
    id?: string;
    valueQuantity?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswoche")
                    }),
                    t.partial({
                        id: SCALARString,
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswocheValueQuantity
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage {
    url: "ergaenzendeTage";
    valueQuantity: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTage"),
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTageValueQuantity
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur {
    url: "korrektur";
    id?: string;
    valueBoolean?: false;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur",
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode {
    url: "kode";
    valueCodeableConcept: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kode"),
                        valueCodeableConcept:
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKodeValueCodeableConcept
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert {
    url: "schwangerschaftswocheKorrigiert";
    valueQuantity: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("schwangerschaftswocheKorrigiert"),
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiertValueQuantity
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert {
    url: "ergaenzendeTageKorrigiert";
    valueQuantity: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("ergaenzendeTageKorrigiert"),
                        valueQuantity:
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiertValueQuantity
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert {
    url: "korrekturKorrigiert";
    valueBoolean: true;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("korrekturKorrigiert"),
                        valueBoolean: Literal(true)
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert {
    url: "kodeKorrigiert";
    valueCodeableConcept: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kodeKorrigiert"),
                        valueCodeableConcept:
                            MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiertValueCodeableConcept
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
export interface MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "II. Screening";
    id?: string;
}

export const MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("II. Screening")
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt {
    url: "schwangerschaftszeitpunkt";
    id?: string;
    extension?: (
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
    )[];
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt",
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
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode
                            ]),
                            [
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktSchwangerschaftswoche,
                                    occurrence: ["1", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftswoche"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktErgaenzendeTage,
                                    occurrence: ["0", "1"],
                                    sliceBy: { path: "url", value: "ergaenzendeTage" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrektur,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "korrektur" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKode,
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
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert {
    url: "schwangerschaftszeitpunktKorrigiert";
    id?: string;
    extension?: (
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
    )[];
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert",
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
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert
                            ]),
                            [
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertSchwangerschaftswocheKorrigiert,
                                    occurrence: ["1", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftswocheKorrigiert"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertErgaenzendeTageKorrigiert,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "ergaenzendeTageKorrigiert"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKorrekturKorrigiert,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "korrekturKorrigiert" }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiertKodeKorrigiert,
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
export interface MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * In dieser Extension können Schwangerschaftswoche und ergänzende Tage dokumentiert werden.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchung {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Pregnancy_Week_And_Day";
    id?: string;
    extension?: (
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt
        | MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
    )[];
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchung: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchung> =
    t.recursion(
        "MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchung",
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
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt>,
                                    t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                                MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert
                            ]),
                            [
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunkt,
                                    occurrence: ["0", "1"],
                                    sliceBy: {
                                        path: "url",
                                        value: "schwangerschaftszeitpunkt"
                                    }
                                },
                                {
                                    codec: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchungSchwangerschaftszeitpunktKorrigiert,
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
export interface MRDiagnosticReportUltrasoundIICodeCodingDisplay {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIICodeCodingDisplay: t.Type<MRDiagnosticReportUltrasoundIICodeCodingDisplay> =
    t.recursion("MRDiagnosticReportUltrasoundIICodeCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRDiagnosticReportUltrasoundIICodeCodingDisplayAnzeigenameCodeSnomed
                ),
                value: SCALARString
            })
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDiagnosticReportUltrasoundIICodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: "169670003";
    id?: string;
    _display?: MRDiagnosticReportUltrasoundIICodeCodingDisplay;
    display?: string;
}

export const MRDiagnosticReportUltrasoundIICodeCoding: t.Type<MRDiagnosticReportUltrasoundIICodeCoding> =
    t.recursion("MRDiagnosticReportUltrasoundIICodeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: Literal("169670003")
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRDiagnosticReportUltrasoundIICodeCodingDisplay,
                    display: SCALARString
                })
            ])
        )
    );

/**
 * The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
 */
export interface MRDiagnosticReportUltrasoundIIEffectiveDateTime {
    id?: string;
    extension?: MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchung[];
    value?: string;
}

export const MRDiagnosticReportUltrasoundIIEffectiveDateTime: t.Type<MRDiagnosticReportUltrasoundIIEffectiveDateTime> =
    t.recursion("MRDiagnosticReportUltrasoundIIEffectiveDateTime", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    MRDiagnosticReportUltrasoundIIEffectiveDateTimeZeitpunktDerUntersuchung
                ),
                value: SCALARDateTime
            })
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface MRDiagnosticReportUltrasoundIIMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_II|1.0.0">;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIMeta: t.Type<MRDiagnosticReportUltrasoundIIMeta> =
    t.recursion("MRDiagnosticReportUltrasoundIIMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_DiagnosticReport_Ultrasound_II|1.0.0"
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
export interface MRDiagnosticReportUltrasoundIICode {
    coding: Array<MRDiagnosticReportUltrasoundIICodeCoding>;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIICode: t.Type<MRDiagnosticReportUltrasoundIICode> =
    t.recursion("MRDiagnosticReportUltrasoundIICode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, MRDiagnosticReportUltrasoundIICodeCoding)
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
export interface MRDiagnosticReportUltrasoundIISubjectReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIISubjectReference: t.Type<MRDiagnosticReportUltrasoundIISubjectReference> =
    t.recursion("MRDiagnosticReportUltrasoundIISubjectReference", () =>
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
export interface MRDiagnosticReportUltrasoundIIEncounterReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIEncounterReference: t.Type<MRDiagnosticReportUltrasoundIIEncounterReference> =
    t.recursion("MRDiagnosticReportUltrasoundIIEncounterReference", () =>
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
export interface MRDiagnosticReportUltrasoundIIPerformerReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIPerformerReference: t.Type<MRDiagnosticReportUltrasoundIIPerformerReference> =
    t.recursion("MRDiagnosticReportUltrasoundIIPerformerReference", () =>
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

/**
 * [Observations](observation.html)  that are part of this diagnostic report.
 */
export interface MRDiagnosticReportUltrasoundIIResultReference {
    reference: string;
    id?: string;
}

export const MRDiagnosticReportUltrasoundIIResultReference: t.Type<MRDiagnosticReportUltrasoundIIResultReference> =
    t.recursion("MRDiagnosticReportUltrasoundIIResultReference", () =>
        Excess(
            t.intersection([
                t.type({
                    reference: CustomReference(SCALARString, [
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Singleton_Pregnancy|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Heart_Action|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Localisation_Placenta|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Biometrics_II|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Percentile|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Morphology|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Timely_Development|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Findings_Required_Control|1.0.0",
                        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Consultation_Initiated|1.0.0"
                    ])
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface MRDiagnosticReportUltrasoundII {
    resourceType: "DiagnosticReport";
    meta: MRDiagnosticReportUltrasoundIIMeta;
    status: DiagnosticreportstatusVS;
    code: MRDiagnosticReportUltrasoundIICode;
    subject: MRDiagnosticReportUltrasoundIISubjectReference;
    encounter: MRDiagnosticReportUltrasoundIIEncounterReference;
    id?: string;
    text?: Narrative;
    extension?: AdditionalComment[];
    _effectiveDateTime?: MRDiagnosticReportUltrasoundIIEffectiveDateTime;
    effectiveDateTime?: string;
    performer?: Array<MRDiagnosticReportUltrasoundIIPerformerReference>;
    result?: MRDiagnosticReportUltrasoundIIResultReference[];
}

const MRDiagnosticReportUltrasoundII: t.Type<MRDiagnosticReportUltrasoundII> =
    t.recursion("MRDiagnosticReportUltrasoundII", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("DiagnosticReport"),
                    meta: MRDiagnosticReportUltrasoundIIMeta,
                    status: DiagnosticreportstatusVS,
                    code: MRDiagnosticReportUltrasoundIICode,
                    subject: MRDiagnosticReportUltrasoundIISubjectReference,
                    encounter: MRDiagnosticReportUltrasoundIIEncounterReference
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: t.array(AdditionalComment),
                    _effectiveDateTime: MRDiagnosticReportUltrasoundIIEffectiveDateTime,
                    effectiveDateTime: SCALARDateTime,
                    performer: MaxArray(
                        1,
                        MRDiagnosticReportUltrasoundIIPerformerReference
                    ),
                    result: t.array(MRDiagnosticReportUltrasoundIIResultReference)
                })
            ])
        )
    );

export default MRDiagnosticReportUltrasoundII;
