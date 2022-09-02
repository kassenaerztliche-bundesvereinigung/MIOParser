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
    MinArray,
    MaxArray,
    MinMaxArray,
    ReqArray,
    CustomReference
} from "../../../../CustomTypes";

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Annotation from "../../../../../Definitions/FHIR/4.0.1/Profile/Annotation";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth_Child"

/**
 * Content in other Language.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kind verlegt am";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kind verlegt am")
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Kind unauffällig entlassen am";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Kind unauffällig entlassen am")
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "107724000";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210731"
                        ),
                        code: Literal("107724000")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "243796009:{363589002=308283009,246090004=102506008}";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCoding> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210731"
                        ),
                        code: Literal(
                            "243796009:{363589002=308283009,246090004=102506008}"
                        )
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConcept {
    coding: Array<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConcept: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConcept> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConceptCoding
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConcept {
    coding: Array<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConcept: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConcept> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConcept",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        coding: MinMaxArray(
                            1,
                            1,
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConceptCoding
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomedContent {
    url: "content";
    valueString: "Wochenbett";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomedContent: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomedContent> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomedContent",
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum {
    url: "datum";
    valueDateTime: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum",
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kode"),
                        valueCodeableConcept:
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKodeValueCodeableConcept
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum {
    url: "datum";
    id?: string;
    valueDateTime?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum",
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode {
    url: "kode";
    valueCodeableConcept: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConcept;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("kode"),
                        valueCodeableConcept:
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKodeValueCodeableConcept
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomed {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomedContent[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomed: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomed> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomed",
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
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomedContent
                        )
                    })
                ])
            )
    );

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung {
    url: "verlegung";
    id?: string;
    extension?: (
        | MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum
        | MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung",
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
                                    t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum>,
                                    t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum,
                                MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode
                            ]),
                            [
                                {
                                    codec: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungDatum,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "datum" }
                                },
                                {
                                    codec: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegungKode,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung {
    url: "entlassung";
    id?: string;
    extension?: (
        | MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum
        | MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung",
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
                                    t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum>,
                                    t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum,
                                MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode
                            ]),
                            [
                                {
                                    codec: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungDatum,
                                    occurrence: ["1", "1"],
                                    sliceBy: { path: "url", value: "datum" }
                                },
                                {
                                    codec: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassungKode,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplay {
    id?: string;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomed[];
    value?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplay: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplay> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplay",
        () =>
            Excess(
                t.partial({
                    id: SCALARString,
                    extension: t.array(
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplayAnzeigenameCodeSnomed
                    ),
                    value: SCALARString
                })
            )
    );

/**
 * In dieser Extension kann ein ergänzendes Datum dokumentiert werden.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildTermine {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date";
    id?: string;
    extension?: (
        | MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung
        | MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung
    )[];
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildTermine: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermine> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthChildTermine", () =>
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
                                t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung>,
                                t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung,
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung
                        ]),
                        [
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineVerlegung,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "url", value: "verlegung" }
                            },
                            {
                                codec: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermineEntlassung,
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20210731";
    code: "133906008:363702006=118188004";
    id?: string;
    _display?: MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplay;
    display?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCoding: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCoding> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCoding",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        system: Literal("http://snomed.info/sct"),
                        version: Literal(
                            "http://snomed.info/sct/900000000000207008/version/20210731"
                        ),
                        code: Literal("133906008:363702006=118188004")
                    }),
                    t.partial({
                        id: SCALARString,
                        _display:
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCodingDisplay,
                        display: SCALARString
                    })
                ])
            )
    );

/**
 * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
 */
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationCode {
    text: "Untersuchungen zur ersten Untersuchung nach Entbindung / Wochenbett";
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationCode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationCode> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationCode",
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationItemReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationItemReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationItemReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationItemReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Blood_Group_Serology_Child|1.1.0",
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Observation_Direct_Coombstest|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth_Child|1.1.0">;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildMeta: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildMeta> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthChildMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_ClinicalImpression_First_Examination_After_Childbirth_Child|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildCode {
    coding: Array<MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCoding>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildCode: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildCode> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthChildCode", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildCodeCoding
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildSubjectReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildSubjectReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildSubjectReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildSubjectReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Patient_Child|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildEncounterReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildEncounterReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildEncounterReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildEncounterReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Encounter_General|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildAssessorReference {
    reference: string;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildAssessorReference: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildAssessorReference> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildAssessorReference",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        reference: CustomReference(SCALARString, [
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Practitioner|1.1.0"
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
export interface MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigation {
    code: MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationCode;
    item: Array<MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationItemReference>;
    id?: string;
}

export const MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigation: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigation> =
    t.recursion(
        "MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigation",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        code: MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationCode,
                        item: MinArray(
                            1,
                            MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigationItemReference
                        )
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

interface MRClinicalImpressionFirstExaminationAfterChildbirthChild {
    resourceType: "ClinicalImpression";
    meta: MRClinicalImpressionFirstExaminationAfterChildbirthChildMeta;
    status: "completed";
    code: MRClinicalImpressionFirstExaminationAfterChildbirthChildCode;
    subject: MRClinicalImpressionFirstExaminationAfterChildbirthChildSubjectReference;
    encounter: MRClinicalImpressionFirstExaminationAfterChildbirthChildEncounterReference;
    effectiveDateTime: string;
    id?: string;
    text?: Narrative;
    extension?: MRClinicalImpressionFirstExaminationAfterChildbirthChildTermine[];
    assessor?: MRClinicalImpressionFirstExaminationAfterChildbirthChildAssessorReference;
    investigation?: Array<MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigation>;
    note?: Array<Annotation>;
}

const MRClinicalImpressionFirstExaminationAfterChildbirthChild: t.Type<MRClinicalImpressionFirstExaminationAfterChildbirthChild> =
    t.recursion("MRClinicalImpressionFirstExaminationAfterChildbirthChild", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("ClinicalImpression"),
                    meta: MRClinicalImpressionFirstExaminationAfterChildbirthChildMeta,
                    status: Literal("completed"),
                    code: MRClinicalImpressionFirstExaminationAfterChildbirthChildCode,
                    subject:
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildSubjectReference,
                    encounter:
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildEncounterReference,
                    effectiveDateTime: SCALARDateTime
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: t.array(
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildTermine
                    ),
                    assessor:
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildAssessorReference,
                    investigation: MaxArray(
                        1,
                        MRClinicalImpressionFirstExaminationAfterChildbirthChildInvestigation
                    ),
                    note: MaxArray(1, Annotation)
                })
            ])
        )
    );

export default MRClinicalImpressionFirstExaminationAfterChildbirthChild;
