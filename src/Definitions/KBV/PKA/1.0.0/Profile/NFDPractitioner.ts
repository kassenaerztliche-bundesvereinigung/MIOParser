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
    ExtensibleCheck
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner"

/**
 * Content in other Language.
 */
export interface NFDPractitionerTelefonSystemAnzeigenameSystemContent {
    url: "content";
    valueString: "Telefonnummer";
    id?: string;
}

export const NFDPractitionerTelefonSystemAnzeigenameSystemContent: t.Type<NFDPractitionerTelefonSystemAnzeigenameSystemContent> =
    t.recursion("NFDPractitionerTelefonSystemAnzeigenameSystemContent", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal("content"),
                    valueString: Literal("Telefonnummer")
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
export interface NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent: t.Type<NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent> =
    t.recursion(
        "NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: SCALARString
                    }),
                    t.partial({
                        id: SCALARString
                    })
                ])
            )
    );

/**
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface NFDPractitionerNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const NFDPractitionerNameFamilyNamenszusatz: t.Type<NFDPractitionerNameFamilyNamenszusatz> =
    t.recursion("NFDPractitionerNameFamilyNamenszusatz", () =>
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
export interface NFDPractitionerNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const NFDPractitionerNameFamilyNachname: t.Type<NFDPractitionerNameFamilyNachname> =
    t.recursion("NFDPractitionerNameFamilyNachname", () =>
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
export interface NFDPractitionerNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const NFDPractitionerNameFamilyVorsatzwort: t.Type<NFDPractitionerNameFamilyVorsatzwort> =
    t.recursion("NFDPractitionerNameFamilyVorsatzwort", () =>
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
export interface NFDPractitionerNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const NFDPractitionerNamePrefixPrefixqualifier: t.Type<NFDPractitionerNamePrefixPrefixqualifier> =
    t.recursion("NFDPractitionerNamePrefixPrefixqualifier", () =>
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDPractitionerTelefonSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDPractitionerTelefonSystemAnzeigenameSystemContent)[];
}

export const NFDPractitionerTelefonSystemAnzeigenameSystem: t.Type<NFDPractitionerTelefonSystemAnzeigenameSystem> =
    t.recursion("NFDPractitionerTelefonSystemAnzeigenameSystem", () =>
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
                                t.Type<NFDPractitionerTelefonSystemAnzeigenameSystemContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDPractitionerTelefonSystemAnzeigenameSystemContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDPractitionerTelefonSystemAnzeigenameSystemContent,
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
    )[];
}

export const NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem: t.Type<NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem> =
    t.recursion(
        "NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem",
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
                                    t.Type<NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent,
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface NFDPractitionerStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const NFDPractitionerStrassenanschriftLineStrasse: t.Type<NFDPractitionerStrassenanschriftLineStrasse> =
    t.recursion("NFDPractitionerStrassenanschriftLineStrasse", () =>
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
export interface NFDPractitionerStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const NFDPractitionerStrassenanschriftLineHausnummer: t.Type<NFDPractitionerStrassenanschriftLineHausnummer> =
    t.recursion("NFDPractitionerStrassenanschriftLineHausnummer", () =>
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
export interface NFDPractitionerStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const NFDPractitionerStrassenanschriftLineAdresszusatz: t.Type<NFDPractitionerStrassenanschriftLineAdresszusatz> =
    t.recursion("NFDPractitionerStrassenanschriftLineAdresszusatz", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface NFDPractitionerANRTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "LANR";
    display: "Lifelong physician number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const NFDPractitionerANRTypeCoding: t.Type<NFDPractitionerANRTypeCoding> =
    t.recursion("NFDPractitionerANRTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("LANR"),
                    display: Literal("Lifelong physician number")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDPractitionerEFNTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    display: "Medical License number";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const NFDPractitionerEFNTypeCoding: t.Type<NFDPractitionerEFNTypeCoding> =
    t.recursion("NFDPractitionerEFNTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("DN"),
                    display: Literal("Medical License number")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDPractitionerZANRTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "ZANR";
    display: string;
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const NFDPractitionerZANRTypeCoding: t.Type<NFDPractitionerZANRTypeCoding> =
    t.recursion("NFDPractitionerZANRTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("ZANR"),
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface NFDPractitionerANRType {
    coding: Array<NFDPractitionerANRTypeCoding>;
    id?: string;
}

export const NFDPractitionerANRType: t.Type<NFDPractitionerANRType> = t.recursion(
    "NFDPractitionerANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDPractitionerANRTypeCoding)
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
export interface NFDPractitionerEFNType {
    coding: Array<NFDPractitionerEFNTypeCoding>;
    id?: string;
}

export const NFDPractitionerEFNType: t.Type<NFDPractitionerEFNType> = t.recursion(
    "NFDPractitionerEFNType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDPractitionerEFNTypeCoding)
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
export interface NFDPractitionerZANRType {
    coding: Array<NFDPractitionerZANRTypeCoding>;
    id?: string;
}

export const NFDPractitionerZANRType: t.Type<NFDPractitionerZANRType> = t.recursion(
    "NFDPractitionerZANRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDPractitionerZANRTypeCoding)
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
export interface NFDPractitionerNameFamily {
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerNameFamilyNamenszusatz
        | NFDPractitionerNameFamilyNachname
        | NFDPractitionerNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const NFDPractitionerNameFamily: t.Type<NFDPractitionerNameFamily> = t.recursion(
    "NFDPractitionerNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerNameFamilyNamenszusatz>,
                            t.Type<NFDPractitionerNameFamilyNachname>,
                            t.Type<NFDPractitionerNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerNameFamilyNamenszusatz,
                        NFDPractitionerNameFamilyNachname,
                        NFDPractitionerNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: NFDPractitionerNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: NFDPractitionerNameFamilyVorsatzwort,
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
export interface NFDPractitionerNamePrefix {
    id?: string;
    extension?: (Extension | NFDPractitionerNamePrefixPrefixqualifier)[];
    value?: string;
}

export const NFDPractitionerNamePrefix: t.Type<NFDPractitionerNamePrefix> = t.recursion(
    "NFDPractitionerNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDPractitionerNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerNamePrefixPrefixqualifier,
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
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
export interface NFDPractitionerTelefonSystem {
    id?: string;
    extension?: (Extension | NFDPractitionerTelefonSystemAnzeigenameSystem)[];
    value?: string;
}

export const NFDPractitionerTelefonSystem: t.Type<NFDPractitionerTelefonSystem> =
    t.recursion("NFDPractitionerTelefonSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerTelefonSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDPractitionerTelefonSystemAnzeigenameSystem]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerTelefonSystemAnzeigenameSystem,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
export interface NFDPractitionerWeitereKontaktMoeglichkeitenSystem {
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
    )[];
    value?: string;
}

export const NFDPractitionerWeitereKontaktMoeglichkeitenSystem: t.Type<NFDPractitionerWeitereKontaktMoeglichkeitenSystem> =
    t.recursion("NFDPractitionerWeitereKontaktMoeglichkeitenSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German"
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface NFDPractitionerStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | NFDPractitionerStrassenanschriftLineStrasse
        | NFDPractitionerStrassenanschriftLineHausnummer
        | NFDPractitionerStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const NFDPractitionerStrassenanschriftLine: t.Type<NFDPractitionerStrassenanschriftLine> =
    t.recursion("NFDPractitionerStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPractitionerStrassenanschriftLineStrasse>,
                            t.Type<NFDPractitionerStrassenanschriftLineHausnummer>,
                            t.Type<NFDPractitionerStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPractitionerStrassenanschriftLineStrasse,
                        NFDPractitionerStrassenanschriftLineHausnummer,
                        NFDPractitionerStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPractitionerStrassenanschriftLineStrasse,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: NFDPractitionerStrassenanschriftLineHausnummer,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: NFDPractitionerStrassenanschriftLineAdresszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator"
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
export interface NFDPractitionerANR {
    type: NFDPractitionerANRType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR";
    value: string;
    id?: string;
    use?: "official";
}

export const NFDPractitionerANR: t.Type<NFDPractitionerANR> = t.recursion(
    "NFDPractitionerANR",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: NFDPractitionerANRType,
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_ANR"),
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface NFDPractitionerEFN {
    type: NFDPractitionerEFNType;
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
}

export const NFDPractitionerEFN: t.Type<NFDPractitionerEFN> = t.recursion(
    "NFDPractitionerEFN",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: NFDPractitionerEFNType,
                    system: Literal("http://fhir.de/NamingSystem/bundesaerztekammer/efn"),
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface NFDPractitionerZANR {
    type: NFDPractitionerZANRType;
    system: "http://fhir.de/NamingSystem/kzbv/zahnarztnummer";
    value: string;
    id?: string;
    use?: "official";
}

export const NFDPractitionerZANR: t.Type<NFDPractitionerZANR> = t.recursion(
    "NFDPractitionerZANR",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: NFDPractitionerZANRType,
                    system: Literal("http://fhir.de/NamingSystem/kzbv/zahnarztnummer"),
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
export interface NFDPractitionerName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: NFDPractitionerNameFamily;
    family?: string;
    _prefix?: NFDPractitionerNamePrefix[];
    prefix?: string[];
}

export const NFDPractitionerName: t.Type<NFDPractitionerName> = t.recursion(
    "NFDPractitionerName",
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
                    _family: NFDPractitionerNameFamily,
                    family: SCALARString,
                    _prefix: t.array(NFDPractitionerNamePrefix),
                    prefix: t.array(SCALARString)
                })
            ])
        )
);

/**
 * A contact detail for the practitioner, e.g. a telephone number or an email address.
 */
export interface NFDPractitionerTelefon {
    system: "phone";
    value: string;
    id?: string;
    _system?: NFDPractitionerTelefonSystem;
}

export const NFDPractitionerTelefon: t.Type<NFDPractitionerTelefon> = t.recursion(
    "NFDPractitionerTelefon",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("phone"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: NFDPractitionerTelefonSystem
                })
            ])
        )
);

/**
 * A contact detail for the practitioner, e.g. a telephone number or an email address.
 */
export interface NFDPractitionerWeitereKontaktMoeglichkeiten {
    value: string;
    id?: string;
    _system?: NFDPractitionerWeitereKontaktMoeglichkeitenSystem;
    system?: string;
}

export const NFDPractitionerWeitereKontaktMoeglichkeiten: t.Type<NFDPractitionerWeitereKontaktMoeglichkeiten> =
    t.recursion("NFDPractitionerWeitereKontaktMoeglichkeiten", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: NFDPractitionerWeitereKontaktMoeglichkeitenSystem,
                    system: SCALARCode
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface NFDPractitionerStrassenanschrift {
    type: "both";
    city: string;
    postalCode: string;
    id?: string;
    text?: string;
    _line?: Array<NFDPractitionerStrassenanschriftLine>;
    line?: Array<string>;
    country?: GemRSAnlage8VS;
}

export const NFDPractitionerStrassenanschrift: t.Type<NFDPractitionerStrassenanschrift> =
    t.recursion("NFDPractitionerStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString,
                    postalCode: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    _line: MaxArray(2, NFDPractitionerStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDPractitionerMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner|1.0.0">;
    id?: string;
}

export const NFDPractitionerMeta: t.Type<NFDPractitionerMeta> = t.recursion(
    "NFDPractitionerMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Practitioner|1.0.0"
                        )
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface NFDPractitioner {
    resourceType: "Practitioner";
    meta: NFDPractitionerMeta;
    name: Array<NFDPractitionerName>;
    telecom: Array<NFDPractitionerTelefon | NFDPractitionerWeitereKontaktMoeglichkeiten>;
    id?: string;
    identifier?: Array<NFDPractitionerANR | NFDPractitionerEFN | NFDPractitionerZANR>;
    address?: Array<NFDPractitionerStrassenanschrift>;
}

const NFDPractitioner: t.Type<NFDPractitioner> = t.recursion("NFDPractitioner", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Practitioner"),
                meta: NFDPractitionerMeta,
                name: MinMaxArray(1, 1, NFDPractitionerName),
                telecom: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDPractitionerTelefon>,
                            t.Type<NFDPractitionerWeitereKontaktMoeglichkeiten>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDPractitionerTelefon,
                        NFDPractitionerWeitereKontaktMoeglichkeiten
                    ]),
                    [
                        {
                            codec: NFDPractitionerTelefon,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "phone" }
                        },
                        {
                            codec: NFDPractitionerWeitereKontaktMoeglichkeiten,
                            occurrence: ["0", "2"],
                            sliceBy: { path: "system" }
                        }
                    ],
                    ["1", "3"]
                )
            }),
            t.partial({
                id: SCALARString,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDPractitionerANR>,
                            t.Type<NFDPractitionerEFN>,
                            t.Type<NFDPractitionerZANR>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDPractitionerANR,
                        NFDPractitionerEFN,
                        NFDPractitionerZANR
                    ]),
                    [
                        {
                            codec: NFDPractitionerANR,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "type.coding.code", value: "LANR" }
                        },
                        {
                            codec: NFDPractitionerEFN,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "DN" }
                        },
                        {
                            codec: NFDPractitionerZANR,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "ZANR" }
                        }
                    ],
                    ["0", "1"]
                ),
                address: MaxArray(1, NFDPractitionerStrassenanschrift)
            })
        ])
    )
);

export default NFDPractitioner;
