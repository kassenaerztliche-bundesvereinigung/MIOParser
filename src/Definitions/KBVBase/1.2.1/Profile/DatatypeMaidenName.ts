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
import { Literal, ReqArray, MaxArray } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";

import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Maiden_Name"

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface DatatypeMaidenNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const DatatypeMaidenNameFamilyNamenszusatz: t.Type<DatatypeMaidenNameFamilyNamenszusatz> =
    t.recursion("DatatypeMaidenNameFamilyNamenszusatz", () =>
        t.intersection([
            t.type({
                url: Literal("http://fhir.de/StructureDefinition/humanname-namenszusatz"),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface DatatypeMaidenNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const DatatypeMaidenNameFamilyNachname: t.Type<DatatypeMaidenNameFamilyNachname> =
    t.recursion("DatatypeMaidenNameFamilyNachname", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
* Vorsatzwort wie z.B.: von, van, zu
Vgl. auch VSDM-Spezifikation der Gematik (Versichertenstammdatenmanagement, "eGK")
*/
export interface DatatypeMaidenNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const DatatypeMaidenNameFamilyVorsatzwort: t.Type<DatatypeMaidenNameFamilyVorsatzwort> =
    t.recursion("DatatypeMaidenNameFamilyVorsatzwort", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
                ),
                valueString: SCALARString
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface DatatypeMaidenNameFamily {
    id?: string;
    extension?: (
        | Extension
        | DatatypeMaidenNameFamilyNamenszusatz
        | DatatypeMaidenNameFamilyNachname
        | DatatypeMaidenNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const DatatypeMaidenNameFamily: t.Type<DatatypeMaidenNameFamily> = t.recursion(
    "DatatypeMaidenNameFamily",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DatatypeMaidenNameFamilyNamenszusatz>,
                        t.Type<DatatypeMaidenNameFamilyNachname>,
                        t.Type<DatatypeMaidenNameFamilyVorsatzwort>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    DatatypeMaidenNameFamilyNamenszusatz,
                    DatatypeMaidenNameFamilyNachname,
                    DatatypeMaidenNameFamilyVorsatzwort
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DatatypeMaidenNameFamilyNamenszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: DatatypeMaidenNameFamilyNachname,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: DatatypeMaidenNameFamilyVorsatzwort,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
                        }
                    }
                ],
                ["0", "*"]
            ),
            value: SCALARString
        })
);

interface DatatypeMaidenName {
    use: "maiden";
    id?: string;
    text?: string;
    _family?: DatatypeMaidenNameFamily;
    family?: string;
    suffix?: Array<string>;
    period?: Period;
}

const DatatypeMaidenName: t.Type<DatatypeMaidenName> = t.recursion(
    "DatatypeMaidenName",
    () =>
        t.intersection([
            t.type({
                use: Literal("maiden")
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString,
                _family: DatatypeMaidenNameFamily,
                family: SCALARString,
                suffix: MaxArray(1, SCALARString),
                period: Period
            })
        ])
);

export default DatatypeMaidenName;
