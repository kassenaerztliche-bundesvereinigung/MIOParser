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
import { Literal, Excess, MinMaxArray, ReqArray } from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Physician"

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface NFDPractitionerPhysicianNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const NFDPractitionerPhysicianNameFamilyNamenszusatz: t.Type<NFDPractitionerPhysicianNameFamilyNamenszusatz> =
    t.recursion("NFDPractitionerPhysicianNameFamilyNamenszusatz", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz"
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
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface NFDPractitionerPhysicianNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const NFDPractitionerPhysicianNameFamilyNachname: t.Type<NFDPractitionerPhysicianNameFamilyNachname> =
    t.recursion("NFDPractitionerPhysicianNameFamilyNachname", () =>
        Excess(
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
        )
    );

/**
* Vorsatzwort wie z.B.: von, van, zu
Vgl. auch VSDM-Spezifikation der Gematik (Versichertenstammdatenmanagement, "eGK")
*/
export interface NFDPractitionerPhysicianNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const NFDPractitionerPhysicianNameFamilyVorsatzwort: t.Type<NFDPractitionerPhysicianNameFamilyVorsatzwort> =
    t.recursion("NFDPractitionerPhysicianNameFamilyVorsatzwort", () =>
        Excess(
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
        )
    );

/**
 * Spezialisierung der Art des Präfixes, z.B. "AC" für Akademische Titel
 */
export interface NFDPractitionerPhysicianNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const NFDPractitionerPhysicianNamePrefixPrefixqualifier: t.Type<NFDPractitionerPhysicianNamePrefixPrefixqualifier> =
    t.recursion("NFDPractitionerPhysicianNamePrefixPrefixqualifier", () =>
        Excess(
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
        )
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface NFDPractitionerPhysicianNameFamily {
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerPhysicianNameFamilyNamenszusatz
        | NFDPractitionerPhysicianNameFamilyNachname
        | NFDPractitionerPhysicianNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const NFDPractitionerPhysicianNameFamily: t.Type<NFDPractitionerPhysicianNameFamily> =
    t.recursion("NFDPractitionerPhysicianNameFamily", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerPhysicianNameFamilyNamenszusatz>,
                            t.Type<NFDPractitionerPhysicianNameFamilyNachname>,
                            t.Type<NFDPractitionerPhysicianNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerPhysicianNameFamilyNamenszusatz,
                        NFDPractitionerPhysicianNameFamilyNachname,
                        NFDPractitionerPhysicianNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerPhysicianNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: NFDPractitionerPhysicianNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: NFDPractitionerPhysicianNameFamilyVorsatzwort,
                            occurrence: ["0", "1"],
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
        )
    );

/**
 * Namensteile vor dem Vornamen, z.B. akademischer Titel.
 */
export interface NFDPractitionerPhysicianNamePrefix {
    id?: string;
    extension?: (Extension | NFDPractitionerPhysicianNamePrefixPrefixqualifier)[];
    value?: string;
}

export const NFDPractitionerPhysicianNamePrefix: t.Type<NFDPractitionerPhysicianNamePrefix> =
    t.recursion("NFDPractitionerPhysicianNamePrefix", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerPhysicianNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerPhysicianNamePrefixPrefixqualifier
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerPhysicianNamePrefixPrefixqualifier,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
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
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface NFDPractitionerPhysicianName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: NFDPractitionerPhysicianNameFamily;
    family?: string;
    _prefix?: NFDPractitionerPhysicianNamePrefix[];
    prefix?: string[];
}

export const NFDPractitionerPhysicianName: t.Type<NFDPractitionerPhysicianName> =
    t.recursion("NFDPractitionerPhysicianName", () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("official"),
                    given: MinMaxArray(1, 1, SCALARString)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: NFDPractitionerPhysicianNameFamily,
                    family: SCALARString,
                    _prefix: t.array(NFDPractitionerPhysicianNamePrefix),
                    prefix: t.array(SCALARString)
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface NFDPractitionerPhysicianStrassenanschrift {
    type: "both";
    city: string;
    id?: string;
    text?: string;
}

export const NFDPractitionerPhysicianStrassenanschrift: t.Type<NFDPractitionerPhysicianStrassenanschrift> =
    t.recursion("NFDPractitionerPhysicianStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDPractitionerPhysicianMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Physician|1.0.0">;
    id?: string;
}

export const NFDPractitionerPhysicianMeta: t.Type<NFDPractitionerPhysicianMeta> =
    t.recursion("NFDPractitionerPhysicianMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner_Physician|1.0.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

interface NFDPractitionerPhysician {
    resourceType: "Practitioner";
    meta: NFDPractitionerPhysicianMeta;
    name: Array<NFDPractitionerPhysicianName>;
    address: Array<NFDPractitionerPhysicianStrassenanschrift>;
    id?: string;
}

const NFDPractitionerPhysician: t.Type<NFDPractitionerPhysician> = t.recursion(
    "NFDPractitionerPhysician",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Practitioner"),
                    meta: NFDPractitionerPhysicianMeta,
                    name: MinMaxArray(1, 1, NFDPractitionerPhysicianName),
                    address: MinMaxArray(1, 1, NFDPractitionerPhysicianStrassenanschrift)
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

export default NFDPractitionerPhysician;
