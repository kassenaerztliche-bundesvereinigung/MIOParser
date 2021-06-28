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
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import TerminologyGerman from "../../../../../Definitions/KBVBase/1.1.0/Extension/TerminologyGerman";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed"

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface MRControlNeededKodeValueCodeableConceptCodingDisplay {
    id?: string;
    extension?: TerminologyGerman[];
    value?: string;
}

export const MRControlNeededKodeValueCodeableConceptCodingDisplay: t.Type<MRControlNeededKodeValueCodeableConceptCodingDisplay> = t.recursion(
    "MRControlNeededKodeValueCodeableConceptCodingDisplay",
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
export interface MRControlNeededKodeValueCodeableConceptCoding {
    system: "http://snomed.info/sct";
    version: "http://snomed.info/sct/900000000000207008/version/20200731";
    code: string;
    id?: string;
    _display?: MRControlNeededKodeValueCodeableConceptCodingDisplay;
    display?: string;
}

export const MRControlNeededKodeValueCodeableConceptCoding: t.Type<MRControlNeededKodeValueCodeableConceptCoding> = t.recursion(
    "MRControlNeededKodeValueCodeableConceptCoding",
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
                    _display: MRControlNeededKodeValueCodeableConceptCodingDisplay,
                    display: SCALARString
                })
            ])
        )
);

/**
 * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
 */
export interface MRControlNeededKodeValueCodeableConcept {
    coding: Array<MRControlNeededKodeValueCodeableConceptCoding>;
    id?: string;
}

export const MRControlNeededKodeValueCodeableConcept: t.Type<MRControlNeededKodeValueCodeableConcept> = t.recursion(
    "MRControlNeededKodeValueCodeableConcept",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MRControlNeededKodeValueCodeableConceptCoding
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
export interface MRControlNeededKode {
    url: "kode";
    valueCodeableConcept: MRControlNeededKodeValueCodeableConcept;
    id?: string;
}

export const MRControlNeededKode: t.Type<MRControlNeededKode> = t.recursion(
    "MRControlNeededKode",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kode"),
                    valueCodeableConcept: MRControlNeededKodeValueCodeableConcept
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
export interface MRControlNeededKontrollbeduerftig {
    url: "kontrollbeduerftig";
    valueBoolean: boolean;
    id?: string;
}

export const MRControlNeededKontrollbeduerftig: t.Type<MRControlNeededKontrollbeduerftig> = t.recursion(
    "MRControlNeededKontrollbeduerftig",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("kontrollbeduerftig"),
                    valueBoolean: SCALARBoolean
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface MRControlNeeded {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed";
    id?: string;
    extension?: (MRControlNeededKode | MRControlNeededKontrollbeduerftig)[];
}

const MRControlNeeded: t.Type<MRControlNeeded> = t.recursion("MRControlNeeded", () =>
    Excess(
        t.intersection([
            t.type({
                url: Literal(
                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_MR_Control_Needed"
                )
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MRControlNeededKode>,
                            t.Type<MRControlNeededKontrollbeduerftig>
                        ]
                    >,
                    t.Any
                >(
                    t.union([MRControlNeededKode, MRControlNeededKontrollbeduerftig]),
                    [
                        {
                            codec: MRControlNeededKode,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "kode" }
                        },
                        {
                            codec: MRControlNeededKontrollbeduerftig,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "url", value: "kontrollbeduerftig" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    )
);

export default MRControlNeeded;
