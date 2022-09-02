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

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Name"

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface DatatypeNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const DatatypeNameFamilyNamenszusatz: t.Type<DatatypeNameFamilyNamenszusatz> =
    t.recursion("DatatypeNameFamilyNamenszusatz", () =>
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
export interface DatatypeNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const DatatypeNameFamilyNachname: t.Type<DatatypeNameFamilyNachname> = t.recursion(
    "DatatypeNameFamilyNachname",
    () =>
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
export interface DatatypeNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const DatatypeNameFamilyVorsatzwort: t.Type<DatatypeNameFamilyVorsatzwort> =
    t.recursion("DatatypeNameFamilyVorsatzwort", () =>
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
 * Spezialisierung der Art des Präfixes, z.B. "AC" für Akademische Titel
 */
export interface DatatypeNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const DatatypeNamePrefixPrefixqualifier: t.Type<DatatypeNamePrefixPrefixqualifier> =
    t.recursion("DatatypeNamePrefixPrefixqualifier", () =>
        t.intersection([
            t.type({
                url: Literal(
                    "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
                ),
                valueCode: Literal("AC")
            }),
            t.partial({
                id: SCALARString
            })
        ])
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface DatatypeNameFamily {
    id?: string;
    extension?: (
        | Extension
        | DatatypeNameFamilyNamenszusatz
        | DatatypeNameFamilyNachname
        | DatatypeNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const DatatypeNameFamily: t.Type<DatatypeNameFamily> = t.recursion(
    "DatatypeNameFamily",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<DatatypeNameFamilyNamenszusatz>,
                        t.Type<DatatypeNameFamilyNachname>,
                        t.Type<DatatypeNameFamilyVorsatzwort>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    DatatypeNameFamilyNamenszusatz,
                    DatatypeNameFamilyNachname,
                    DatatypeNameFamilyVorsatzwort
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: DatatypeNameFamilyNamenszusatz,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                        }
                    },
                    {
                        codec: DatatypeNameFamilyNachname,
                        occurrence: ["0", "*"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                        }
                    },
                    {
                        codec: DatatypeNameFamilyVorsatzwort,
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

/**
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface DatatypeNamePrefix {
    extension: Array<Extension | DatatypeNamePrefixPrefixqualifier>;
    id?: string;
    value?: string;
}

export const DatatypeNamePrefix: t.Type<DatatypeNamePrefix> = t.recursion(
    "DatatypeNamePrefix",
    () =>
        t.intersection([
            t.type({
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<DatatypeNamePrefixPrefixqualifier>]
                    >,
                    t.Any
                >(
                    t.union([Extension, DatatypeNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: DatatypeNamePrefixPrefixqualifier,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
                            }
                        }
                    ],
                    ["1", "*"]
                )
            }),
            t.partial({
                id: SCALARString,
                value: SCALARString
            })
        ])
);

interface DatatypeName {
    use: "official";
    id?: string;
    text?: string;
    _family?: DatatypeNameFamily;
    family?: string;
    given?: Array<string>;
    _prefix?: DatatypeNamePrefix[];
    prefix?: string[];
    suffix?: string[];
    period?: Period;
}

const DatatypeName: t.Type<DatatypeName> = t.recursion("DatatypeName", () =>
    t.intersection([
        t.type({
            use: Literal("official")
        }),
        t.partial({
            id: SCALARString,
            text: SCALARString,
            _family: DatatypeNameFamily,
            family: SCALARString,
            given: MaxArray(1, SCALARString),
            _prefix: t.array(DatatypeNamePrefix),
            prefix: t.array(SCALARString),
            suffix: t.array(SCALARString),
            period: Period
        })
    ])
);

export default DatatypeName;
