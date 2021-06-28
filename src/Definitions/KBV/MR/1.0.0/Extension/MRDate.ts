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
import { Literal, Excess, ReqArray, MinMaxArray } from "../../../../CustomTypes";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import TerminologyGerman from "../../../../../Definitions/KBVBase/1.1.0/Extension/TerminologyGerman";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date"

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRDateVerlegungKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: TerminologyGerman[];
    value?: string;
}

export const MRDateVerlegungKodeValueCodeableConceptCodingDisplay: t.Type<MRDateVerlegungKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRDateVerlegungKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(TerminologyGerman),
                value: SCALARString
            })
        )
);

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRDateEntlassungKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: TerminologyGerman[];
    value?: string;
}

export const MRDateEntlassungKodeValueCodeableConceptCodingDisplay: t.Type<MRDateEntlassungKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRDateEntlassungKodeValueCodeableConceptCodingDisplay",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(TerminologyGerman),
                value: SCALARString
            })
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDateVerlegungKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: string;
    id?: string;
    _display?: MRDateVerlegungKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDateVerlegungKodeValueCodeableConceptCoding: t.Type<MRDateVerlegungKodeValueCodeableConceptCoding> = t.recursion(
    "MRDateVerlegungKodeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRDateVerlegungKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface MRDateEntlassungKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: string;
    id?: string;
    _display?: MRDateEntlassungKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRDateEntlassungKodeValueCodeableConceptCoding: t.Type<MRDateEntlassungKodeValueCodeableConceptCoding> = t.recursion(
    "MRDateEntlassungKodeValueCodeableConceptCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://snomed.info/sct"),
                    version: Literal(
                        "http://snomed.info/sct/900000000000207008/version/20200731"
                    ),
                    code: SCALARCode
                }),
                t.partial({
                    id: SCALARString,
                    _display: MRDateEntlassungKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRDateVerlegungKodeValueCodeableConcept {
    coding: Array<MRDateVerlegungKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRDateVerlegungKodeValueCodeableConcept: t.Type<MRDateVerlegungKodeValueCodeableConcept> = t.recursion(
    "MRDateVerlegungKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRDateVerlegungKodeValueCodeableConceptCoding
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
export interface MRDateEntlassungKodeValueCodeableConcept {
    coding: Array<MRDateEntlassungKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRDateEntlassungKodeValueCodeableConcept: t.Type<MRDateEntlassungKodeValueCodeableConcept> = t.recursion(
    "MRDateEntlassungKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRDateEntlassungKodeValueCodeableConceptCoding
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
export interface MRDateVerlegungDatum {
    url: "datum";
    id?: string;
    valueDateTime?: string;
}

export const MRDateVerlegungDatum: t.Type<MRDateVerlegungDatum> = t.recursion(
    "MRDateVerlegungDatum",
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
export interface MRDateVerlegungKode {
    url: "kode";
    id?: string;
    valueCodeableConcept?: MRDateVerlegungKodeValueCodeableConcept;
}

export const MRDateVerlegungKode: t.Type<MRDateVerlegungKode> = t.recursion(
    "MRDateVerlegungKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode")
                }),
                t.partial({
                    id: SCALARString,
                    valueCodeableConcept: MRDateVerlegungKodeValueCodeableConcept
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDateEntlassungDatum {
    url: "datum";
    id?: string;
    valueDateTime?: string;
}

export const MRDateEntlassungDatum: t.Type<MRDateEntlassungDatum> = t.recursion(
    "MRDateEntlassungDatum",
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
export interface MRDateEntlassungKode {
    url: "kode";
    id?: string;
    valueCodeableConcept?: MRDateEntlassungKodeValueCodeableConcept;
}

export const MRDateEntlassungKode: t.Type<MRDateEntlassungKode> = t.recursion(
    "MRDateEntlassungKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode")
                }),
                t.partial({
                    id: SCALARString,
                    valueCodeableConcept: MRDateEntlassungKodeValueCodeableConcept
                })
            ])
        )
);

/**
 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 */
export interface MRDateVerlegung {
    url: "verlegung";
    id?: string;
    extension?: (MRDateVerlegungDatum | MRDateVerlegungKode)[];
}

export const MRDateVerlegung: t.Type<MRDateVerlegung> = t.recursion(
    "MRDateVerlegung",
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
                            [t.Type<MRDateVerlegungDatum>, t.Type<MRDateVerlegungKode>]
                        >,
                        t.Any
                    >(
                        t.union([MRDateVerlegungDatum, MRDateVerlegungKode]),
                        [
                            {
                                codec: MRDateVerlegungDatum,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "datum" }
                            },
                            {
                                codec: MRDateVerlegungKode,
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
export interface MRDateEntlassung {
    url: "entlassung";
    id?: string;
    extension?: (MRDateEntlassungDatum | MRDateEntlassungKode)[];
}

export const MRDateEntlassung: t.Type<MRDateEntlassung> = t.recursion(
    "MRDateEntlassung",
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
                            [t.Type<MRDateEntlassungDatum>, t.Type<MRDateEntlassungKode>]
                        >,
                        t.Any
                    >(
                        t.union([MRDateEntlassungDatum, MRDateEntlassungKode]),
                        [
                            {
                                codec: MRDateEntlassungDatum,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "url", value: "datum" }
                            },
                            {
                                codec: MRDateEntlassungKode,
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

interface MRDate {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date";
    id?: string;
    extension?: (MRDateVerlegung | MRDateEntlassung)[];
}

const MRDate: t.Type<MRDate> = t.recursion("MRDate", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal("https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Date")
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<MRDateVerlegung>, t.Type<MRDateEntlassung>]>,
                    t.Any
                >(
                    t.union([MRDateVerlegung, MRDateEntlassung]),
                    [
                        {
                            codec: MRDateVerlegung,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "url", value: "verlegung" }
                        },
                        {
                            codec: MRDateEntlassung,
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

export default MRDate;
