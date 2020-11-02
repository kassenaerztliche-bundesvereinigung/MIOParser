/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import {
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    Req,
    ReqArray,
    ExtensibleCheck
} from "../../../../util";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCanonical from "../../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AddresstypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import DataabsentreasonVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Dataabsentreason";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.00.002/ValueSet/GemRSAnlage8";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Iso21090ADXPprecinct from "../../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import NamepartqualifierVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Namepartqualifier";
import NameuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Nameuse";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient"

/**
 * A reference to a code defined by a terminology system.
 */
export interface ZAEBPatientPidTypeMRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "MR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const ZAEBPatientPidTypeMRType: t.Type<ZAEBPatientPidTypeMRType> = t.recursion(
    "ZAEBPatientPidTypeMRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("MR")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
);

/**
 * A reference to a code defined by a terminology system.
 */
export interface ZAEBPatientVersichertenIdGKVTypeGKVType {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    id?: string;
    version?: string;
    display?: string;
}

export const ZAEBPatientVersichertenIdGKVTypeGKVType: t.Type<ZAEBPatientVersichertenIdGKVTypeGKVType> = t.recursion(
    "ZAEBPatientVersichertenIdGKVTypeGKVType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("GKV")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    display: SCALARString
                })
            ])
        )
);

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface ZAEBPatientNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    id?: string;
    valueString?: string;
}

export const ZAEBPatientNameFamilyNamenszusatz: t.Type<ZAEBPatientNameFamilyNamenszusatz> = t.recursion(
    "ZAEBPatientNameFamilyNamenszusatz",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                    )
                }),
                t.partial({
                    id: SCALARString,
                    valueString: SCALARString
                })
            ])
        )
);

/**
* Nachname ohne Vor- und Zusätze.
Dient z.B. der alphabetischen Einordnung des Namens.
*/
export interface ZAEBPatientNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const ZAEBPatientNameFamilyNachname: t.Type<ZAEBPatientNameFamilyNachname> = t.recursion(
    "ZAEBPatientNameFamilyNachname",
    () =>
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
export interface ZAEBPatientNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const ZAEBPatientNameFamilyVorsatzwort: t.Type<ZAEBPatientNameFamilyVorsatzwort> = t.recursion(
    "ZAEBPatientNameFamilyVorsatzwort",
    () =>
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
export interface ZAEBPatientNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const ZAEBPatientNamePrefixPrefixqualifier: t.Type<ZAEBPatientNamePrefixPrefixqualifier> = t.recursion(
    "ZAEBPatientNamePrefixPrefixqualifier",
    () =>
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface ZAEBPatientStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const ZAEBPatientStrassenanschriftLineStrasse: t.Type<ZAEBPatientStrassenanschriftLineStrasse> = t.recursion(
    "ZAEBPatientStrassenanschriftLineStrasse",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
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
* Hausnummer, sowie Zusätze (Appartmentnummer, Etage...)
Bei Angabe einer Hausnummer in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface ZAEBPatientStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const ZAEBPatientStrassenanschriftLineHausnummer: t.Type<ZAEBPatientStrassenanschriftLineHausnummer> = t.recursion(
    "ZAEBPatientStrassenanschriftLineHausnummer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
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
* Zusätzliche Informationen, wie z.B. "3. Etage", "Appartment C"
Bei Angabe einer Zusatzinformation in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface ZAEBPatientStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const ZAEBPatientStrassenanschriftLineAdresszusatz: t.Type<ZAEBPatientStrassenanschriftLineAdresszusatz> = t.recursion(
    "ZAEBPatientStrassenanschriftLineAdresszusatz",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface ZAEBPatientPidType {
    coding: Array<ZAEBPatientPidTypeMRType>;
    id?: string;
    text?: string;
}

export const ZAEBPatientPidType: t.Type<ZAEBPatientPidType> = t.recursion(
    "ZAEBPatientPidType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, ZAEBPatientPidTypeMRType)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface ZAEBPatientVersichertenIdGKVType {
    coding: Array<ZAEBPatientVersichertenIdGKVTypeGKVType>;
    id?: string;
}

export const ZAEBPatientVersichertenIdGKVType: t.Type<ZAEBPatientVersichertenIdGKVType> = t.recursion(
    "ZAEBPatientVersichertenIdGKVType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, ZAEBPatientVersichertenIdGKVTypeGKVType)
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
export interface ZAEBPatientNameFamily {
    id?: string;
    extension?: (
        | Extension
        | ZAEBPatientNameFamilyNamenszusatz
        | ZAEBPatientNameFamilyNachname
        | ZAEBPatientNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const ZAEBPatientNameFamily: t.Type<ZAEBPatientNameFamily> = t.recursion(
    "ZAEBPatientNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ZAEBPatientNameFamilyNamenszusatz>,
                            t.Type<ZAEBPatientNameFamilyNachname>,
                            t.Type<ZAEBPatientNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ZAEBPatientNameFamilyNamenszusatz,
                        ZAEBPatientNameFamilyNachname,
                        ZAEBPatientNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ZAEBPatientNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: ZAEBPatientNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: ZAEBPatientNameFamilyVorsatzwort,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix"
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
export interface ZAEBPatientNamePrefix {
    id?: string;
    extension?: (Extension | ZAEBPatientNamePrefixPrefixqualifier)[];
    value?: string;
}

export const ZAEBPatientNamePrefix: t.Type<ZAEBPatientNamePrefix> = t.recursion(
    "ZAEBPatientNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<ZAEBPatientNamePrefixPrefixqualifier>]
                    >,
                    t.Any
                >(
                    t.union([Extension, ZAEBPatientNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ZAEBPatientNamePrefixPrefixqualifier,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface ZAEBPatientBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const ZAEBPatientBirthDateDataabsentreason: t.Type<ZAEBPatientBirthDateDataabsentreason> = t.recursion(
    "ZAEBPatientBirthDateDataabsentreason",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                    ),
                    valueCode: Literal("unknown")
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface ZAEBPatientStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | ZAEBPatientStrassenanschriftLineStrasse
        | ZAEBPatientStrassenanschriftLineHausnummer
        | ZAEBPatientStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const ZAEBPatientStrassenanschriftLine: t.Type<ZAEBPatientStrassenanschriftLine> = t.recursion(
    "ZAEBPatientStrassenanschriftLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ZAEBPatientStrassenanschriftLineStrasse>,
                            t.Type<ZAEBPatientStrassenanschriftLineHausnummer>,
                            t.Type<ZAEBPatientStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ZAEBPatientStrassenanschriftLineStrasse,
                        ZAEBPatientStrassenanschriftLineHausnummer,
                        ZAEBPatientStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ZAEBPatientStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: ZAEBPatientStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: ZAEBPatientStrassenanschriftLineAdresszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface ZAEBPatientPid {
    type: ZAEBPatientPidType;
    system: string;
    value: string;
    id?: string;
    use?: "usual";
}

export const ZAEBPatientPid: t.Type<ZAEBPatientPid> = t.recursion("ZAEBPatientPid", () =>
    Excess(
        t.intersection([
            t.type({
                type: ZAEBPatientPidType,
                system: SCALARUri,
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("usual")
            })
        ])
    )
);

/**
 * Unveränderlicher Teil der einheitlichen Krankenversicherungsnummer der GKV gemäß § 290 SGB V.
 */
export interface ZAEBPatientVersichertenIdGKV {
    type: ZAEBPatientVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
}

export const ZAEBPatientVersichertenIdGKV: t.Type<ZAEBPatientVersichertenIdGKV> = t.recursion(
    "ZAEBPatientVersichertenIdGKV",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: ZAEBPatientVersichertenIdGKVType,
                    system: Literal("http://fhir.de/NamingSystem/gkv/kvid-10"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official")
                })
            ])
        )
);

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface ZAEBPatientName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: ZAEBPatientNameFamily;
    family?: string;
    _prefix?: Array<ZAEBPatientNamePrefix>;
    prefix?: Array<string>;
}

export const ZAEBPatientName: t.Type<ZAEBPatientName> = t.recursion(
    "ZAEBPatientName",
    () =>
        Excess(
            t.intersection([
                t.type({
                    use: Literal("official"),
                    given: MinMaxArray(1, 1, SCALARString)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _family: ZAEBPatientNameFamily,
                    family: SCALARString,
                    _prefix: MaxArray(1, ZAEBPatientNamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface ZAEBPatientStrassenanschrift {
    type: "both";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    _line?: Array<ZAEBPatientStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
}

export const ZAEBPatientStrassenanschrift: t.Type<ZAEBPatientStrassenanschrift> = t.recursion(
    "ZAEBPatientStrassenanschrift",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<[t.Type<Extension>, t.Type<Iso21090ADXPprecinct>]>,
                        t.Any
                    >(
                        t.union([Extension, Iso21090ADXPprecinct]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: Iso21090ADXPprecinct,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    use: AddressuseVS,
                    _line: MaxArray(2, ZAEBPatientStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface ZAEBPatientMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.00.000"
    >;
    id?: string;
}

export const ZAEBPatientMeta: t.Type<ZAEBPatientMeta> = t.recursion(
    "ZAEBPatientMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Patient|1.00.000"
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
 * The date of birth for the individual.
 */
export interface ZAEBPatientBirthDate {
    id?: string;
    extension?: (Extension | ZAEBPatientBirthDateDataabsentreason)[];
    value?: string;
}

export const ZAEBPatientBirthDate: t.Type<ZAEBPatientBirthDate> = t.recursion(
    "ZAEBPatientBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<ZAEBPatientBirthDateDataabsentreason>]
                    >,
                    t.Any
                >(
                    t.union([Extension, ZAEBPatientBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ZAEBPatientBirthDateDataabsentreason,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARDate
            })
        )
);

interface ZAEBPatient {
    meta: ZAEBPatientMeta;
    identifier: Array<ZAEBPatientPid | ZAEBPatientVersichertenIdGKV>;
    name: Array<ZAEBPatientName>;
    address: Array<ZAEBPatientStrassenanschrift>;
    resourceType?: string;
    id?: string;
    _birthDate?: ZAEBPatientBirthDate;
    birthDate?: string;
}

const ZAEBPatient: t.Type<ZAEBPatient> = t.recursion("ZAEBPatient", () =>
    Excess(
        t.intersection([
            t.type({
                meta: ZAEBPatientMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [t.Type<ZAEBPatientPid>, t.Type<ZAEBPatientVersichertenIdGKV>]
                    >,
                    t.Any
                >(
                    t.union([ZAEBPatientPid, ZAEBPatientVersichertenIdGKV]),
                    [
                        {
                            codec: ZAEBPatientPid,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "MR" }
                        },
                        {
                            codec: ZAEBPatientVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "GKV" }
                        }
                    ],
                    ["1", "*"]
                ),
                name: MinMaxArray(1, 1, ZAEBPatientName),
                address: MinMaxArray(1, 1, ZAEBPatientStrassenanschrift)
            }),
            t.partial({
                resourceType: t.string,
                id: SCALARString,
                _birthDate: ZAEBPatientBirthDate,
                birthDate: SCALARDate
            })
        ])
    )
);

export default ZAEBPatient;
