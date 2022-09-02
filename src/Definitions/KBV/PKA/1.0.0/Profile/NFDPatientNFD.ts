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
    ReqArray
} from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDate from "../../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARPositiveInt from "../../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";

import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import Genderamtlichde from "../../../../../Definitions/HL7DE/0.9.13/Extension/Genderamtlichde";

import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD"

/**
 * Content in other Language.
 */
export interface NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRuleContent {
    url: "content";
    valueString: "Ansprechpartner in Notfällen";
    id?: string;
}

export const NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRuleContent: t.Type<NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRuleContent> =
    t.recursion(
        "NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRuleContent",
        () =>
            Excess(
                t.intersection([
                    t.type({
                        url: Literal("content"),
                        valueString: Literal("Ansprechpartner in Notfällen")
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
export interface NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent {
    url: "content";
    valueString: "Telefonnummer";
    id?: string;
}

export const NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent: t.Type<NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent> =
    t.recursion("NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent", () =>
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
export interface NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent: t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent> =
    t.recursion(
        "NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent",
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
 * Content in other Language.
 */
export interface NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent {
    url: "content";
    valueString: "Telefonnummer";
    id?: string;
}

export const NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent: t.Type<NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent> =
    t.recursion("NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent", () =>
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
export interface NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent {
    url: "content";
    valueString: string;
    id?: string;
}

export const NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent: t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent> =
    t.recursion(
        "NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent",
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
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRule {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRuleContent[];
}

export const NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRule: t.Type<NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRule> =
    t.recursion(
        "NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRule",
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
                            NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRuleContent
                        )
                    })
                ])
            )
    );

/**
 * Annotation eines Codes mit einem deutschen Bezeichner. In der Beschreibung sollte die entsprechende Conceptmap erwähnt werden.
 */
export interface NFDPatientNFDContactTelefonSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent)[];
}

export const NFDPatientNFDContactTelefonSystemAnzeigenameSystem: t.Type<NFDPatientNFDContactTelefonSystemAnzeigenameSystem> =
    t.recursion("NFDPatientNFDContactTelefonSystemAnzeigenameSystem", () =>
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
                                t.Type<NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDPatientNFDContactTelefonSystemAnzeigenameSystemContent,
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
export interface NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
    )[];
}

export const NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem: t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem> =
    t.recursion(
        "NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem",
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
                                    t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent,
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
* Namenszusatz als Bestandteil das Nachnamens, wie in VSDM (Versichertenstammdatenmanagement, "eGK") definiert.
Beispiele: Gräfin, Prinz oder Fürst
*/
export interface NFDPatientNFDNameFamilyNamenszusatz {
    url: "http://fhir.de/StructureDefinition/humanname-namenszusatz";
    valueString: string;
    id?: string;
}

export const NFDPatientNFDNameFamilyNamenszusatz: t.Type<NFDPatientNFDNameFamilyNamenszusatz> =
    t.recursion("NFDPatientNFDNameFamilyNamenszusatz", () =>
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
export interface NFDPatientNFDNameFamilyNachname {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-name";
    valueString: string;
    id?: string;
}

export const NFDPatientNFDNameFamilyNachname: t.Type<NFDPatientNFDNameFamilyNachname> =
    t.recursion("NFDPatientNFDNameFamilyNachname", () =>
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
export interface NFDPatientNFDNameFamilyVorsatzwort {
    url: "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix";
    valueString: string;
    id?: string;
}

export const NFDPatientNFDNameFamilyVorsatzwort: t.Type<NFDPatientNFDNameFamilyVorsatzwort> =
    t.recursion("NFDPatientNFDNameFamilyVorsatzwort", () =>
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
export interface NFDPatientNFDNamePrefixPrefixqualifier {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier";
    valueCode: "AC";
    id?: string;
}

export const NFDPatientNFDNamePrefixPrefixqualifier: t.Type<NFDPatientNFDNamePrefixPrefixqualifier> =
    t.recursion("NFDPatientNFDNamePrefixPrefixqualifier", () =>
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
export interface NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (Extension | NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent)[];
}

export const NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem: t.Type<NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem> =
    t.recursion("NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem", () =>
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
                                t.Type<NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: NFDPatientNFDTelecomTelefonSystemAnzeigenameSystemContent,
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
export interface NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Terminology_German";
    id?: string;
    extension?: (
        | Extension
        | NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
    )[];
}

export const NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem: t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem> =
    t.recursion(
        "NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem",
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
                                    t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent>
                                ]
                            >,
                            t.Any
                        >(
                            t.union([
                                Extension,
                                NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent
                            ]),
                            [
                                {
                                    codec: Extension,
                                    occurrence: ["0", "*"],
                                    sliceBy: { path: "url" }
                                },
                                {
                                    codec: NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystemContent,
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
 * A reference to a code defined by a terminology system.
 */
export interface NFDPatientNFDVersichertenIdGKVTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "GKV";
    display: "Gesetzliche Krankenversicherung";
    id?: string;
    version?: string;
}

export const NFDPatientNFDVersichertenIdGKVTypeCoding: t.Type<NFDPatientNFDVersichertenIdGKVTypeCoding> =
    t.recursion("NFDPatientNFDVersichertenIdGKVTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("GKV"),
                    display: Literal("Gesetzliche Krankenversicherung")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDPatientNFDVersichertennummerpkvTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "PKV";
    display: "Private Krankenversicherung";
    id?: string;
    version?: string;
}

export const NFDPatientNFDVersichertennummerpkvTypeCoding: t.Type<NFDPatientNFDVersichertennummerpkvTypeCoding> =
    t.recursion("NFDPatientNFDVersichertennummerpkvTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("PKV"),
                    display: Literal("Private Krankenversicherung")
                }),
                t.partial({
                    id: SCALARString,
                    version: SCALARString
                })
            ])
        )
    );

/**
 * A representation of the meaning of the code in the system, following the rules of the system.
 */
export interface NFDPatientNFDContactRelationshipCodingDisplay {
    id?: string;
    extension?: NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRule[];
    value?: string;
}

export const NFDPatientNFDContactRelationshipCodingDisplay: t.Type<NFDPatientNFDContactRelationshipCodingDisplay> =
    t.recursion("NFDPatientNFDContactRelationshipCodingDisplay", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(
                    NFDPatientNFDContactRelationshipCodingDisplayAnzeigeNamePolicyRule
                ),
                value: SCALARString
            })
        )
    );

/**
 * Telecommunications form for contact point - what communications system is required to make use of the contact.
 */
export interface NFDPatientNFDContactTelefonSystem {
    id?: string;
    extension?: (Extension | NFDPatientNFDContactTelefonSystemAnzeigenameSystem)[];
    value?: string;
}

export const NFDPatientNFDContactTelefonSystem: t.Type<NFDPatientNFDContactTelefonSystem> =
    t.recursion("NFDPatientNFDContactTelefonSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPatientNFDContactTelefonSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPatientNFDContactTelefonSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPatientNFDContactTelefonSystemAnzeigenameSystem,
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
export interface NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystem {
    id?: string;
    extension?: (
        | Extension
        | NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
    )[];
    value?: string;
}

export const NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystem: t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystem> =
    t.recursion("NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem,
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface NFDPatientNFDVersichertenIdGKVType {
    coding: Array<NFDPatientNFDVersichertenIdGKVTypeCoding>;
    id?: string;
    text?: string;
}

export const NFDPatientNFDVersichertenIdGKVType: t.Type<NFDPatientNFDVersichertenIdGKVType> =
    t.recursion("NFDPatientNFDVersichertenIdGKVType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDPatientNFDVersichertenIdGKVTypeCoding)
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
export interface NFDPatientNFDVersichertennummerpkvType {
    coding: Array<NFDPatientNFDVersichertennummerpkvTypeCoding>;
    id?: string;
    text?: string;
}

export const NFDPatientNFDVersichertennummerpkvType: t.Type<NFDPatientNFDVersichertennummerpkvType> =
    t.recursion("NFDPatientNFDVersichertennummerpkvType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        NFDPatientNFDVersichertennummerpkvTypeCoding
                    )
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
    );

/**
 * Der vollständige Familienname, einschließlich aller Vorsatz- und Zusatzwörter, mit Leerzeichen getrennt.
 */
export interface NFDPatientNFDNameFamily {
    id?: string;
    extension?: (
        | NFDPatientNFDNameFamilyNamenszusatz
        | NFDPatientNFDNameFamilyNachname
        | NFDPatientNFDNameFamilyVorsatzwort
    )[];
    value?: string;
}

export const NFDPatientNFDNameFamily: t.Type<NFDPatientNFDNameFamily> = t.recursion(
    "NFDPatientNFDNameFamily",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDPatientNFDNameFamilyNamenszusatz>,
                            t.Type<NFDPatientNFDNameFamilyNachname>,
                            t.Type<NFDPatientNFDNameFamilyVorsatzwort>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDPatientNFDNameFamilyNamenszusatz,
                        NFDPatientNFDNameFamilyNachname,
                        NFDPatientNFDNameFamilyVorsatzwort
                    ]),
                    [
                        {
                            codec: NFDPatientNFDNameFamilyNamenszusatz,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/humanname-namenszusatz"
                            }
                        },
                        {
                            codec: NFDPatientNFDNameFamilyNachname,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/humanname-own-name"
                            }
                        },
                        {
                            codec: NFDPatientNFDNameFamilyVorsatzwort,
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
export interface NFDPatientNFDNamePrefix {
    id?: string;
    extension?: (Extension | NFDPatientNFDNamePrefixPrefixqualifier)[];
    value?: string;
}

export const NFDPatientNFDNamePrefix: t.Type<NFDPatientNFDNamePrefix> = t.recursion(
    "NFDPatientNFDNamePrefix",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPatientNFDNamePrefixPrefixqualifier>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDPatientNFDNamePrefixPrefixqualifier]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPatientNFDNamePrefixPrefixqualifier,
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
export interface NFDPatientNFDTelecomTelefonSystem {
    id?: string;
    extension?: (Extension | NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem)[];
    value?: string;
}

export const NFDPatientNFDTelecomTelefonSystem: t.Type<NFDPatientNFDTelecomTelefonSystem> =
    t.recursion("NFDPatientNFDTelecomTelefonSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPatientNFDTelecomTelefonSystemAnzeigenameSystem,
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
export interface NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystem {
    id?: string;
    extension?: (
        | Extension
        | NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
    )[];
    value?: string;
}

export const NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystem: t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystem> =
    t.recursion("NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystem", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystemAnzeigenameSystem,
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
 * Provides a reason why the expected value or elements in the element that is extended are missing.
 */
export interface NFDPatientNFDBirthDateDataabsentreason {
    url: "http://hl7.org/fhir/StructureDefinition/data-absent-reason";
    valueCode: "unknown";
    id?: string;
}

export const NFDPatientNFDBirthDateDataabsentreason: t.Type<NFDPatientNFDBirthDateDataabsentreason> =
    t.recursion("NFDPatientNFDBirthDateDataabsentreason", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface NFDPatientNFDContactRelationshipCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0131";
    version: "2.9";
    code: "C";
    display: "Emergency Contact";
    id?: string;
    _display?: NFDPatientNFDContactRelationshipCodingDisplay;
}

export const NFDPatientNFDContactRelationshipCoding: t.Type<NFDPatientNFDContactRelationshipCoding> =
    t.recursion("NFDPatientNFDContactRelationshipCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0131"),
                    version: Literal("2.9"),
                    code: Literal("C"),
                    display: Literal("Emergency Contact")
                }),
                t.partial({
                    id: SCALARString,
                    _display: NFDPatientNFDContactRelationshipCodingDisplay
                })
            ])
        )
    );

/**
 * A contact detail for the person, e.g. a telephone number or an email address.
 */
export interface NFDPatientNFDContactTelefon {
    system: "phone";
    value: string;
    id?: string;
    _system?: NFDPatientNFDContactTelefonSystem;
}

export const NFDPatientNFDContactTelefon: t.Type<NFDPatientNFDContactTelefon> =
    t.recursion("NFDPatientNFDContactTelefon", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("phone"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: NFDPatientNFDContactTelefonSystem
                })
            ])
        )
    );

/**
 * A contact detail for the person, e.g. a telephone number or an email address.
 */
export interface NFDPatientNFDContactWeitereKontaktMoeglichkeiten {
    value: string;
    id?: string;
    _system?: NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystem;
    system?: string;
}

export const NFDPatientNFDContactWeitereKontaktMoeglichkeiten: t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeiten> =
    t.recursion("NFDPatientNFDContactWeitereKontaktMoeglichkeiten", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: NFDPatientNFDContactWeitereKontaktMoeglichkeitenSystem,
                    system: SCALARCode
                })
            ])
        )
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface NFDPatientNFDVersichertenIdGKV {
    type: NFDPatientNFDVersichertenIdGKVType;
    system: "http://fhir.de/NamingSystem/gkv/kvid-10";
    value: string;
    id?: string;
    use?: "official";
}

export const NFDPatientNFDVersichertenIdGKV: t.Type<NFDPatientNFDVersichertenIdGKV> =
    t.recursion("NFDPatientNFDVersichertenIdGKV", () =>
        Excess(
            t.intersection([
                t.type({
                    type: NFDPatientNFDVersichertenIdGKVType,
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface NFDPatientNFDVersichertennummerpkv {
    type: NFDPatientNFDVersichertennummerpkvType;
    value: string;
    id?: string;
    use?: "secondary";
    system?: string;
}

export const NFDPatientNFDVersichertennummerpkv: t.Type<NFDPatientNFDVersichertennummerpkv> =
    t.recursion("NFDPatientNFDVersichertennummerpkv", () =>
        Excess(
            t.intersection([
                t.type({
                    type: NFDPatientNFDVersichertennummerpkvType,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("secondary"),
                    system: SCALARUri
                })
            ])
        )
    );

/**
 * Personenname mit in Deutschland üblichen Erweiterungen
 */
export interface NFDPatientNFDName {
    use: "official";
    given: Array<string>;
    id?: string;
    text?: string;
    _family?: NFDPatientNFDNameFamily;
    family?: string;
    _prefix?: Array<NFDPatientNFDNamePrefix>;
    prefix?: Array<string>;
}

export const NFDPatientNFDName: t.Type<NFDPatientNFDName> = t.recursion(
    "NFDPatientNFDName",
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
                    _family: NFDPatientNFDNameFamily,
                    family: SCALARString,
                    _prefix: MaxArray(1, NFDPatientNFDNamePrefix),
                    prefix: MaxArray(1, SCALARString)
                })
            ])
        )
);

/**
 * A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
 */
export interface NFDPatientNFDTelecomTelefon {
    system: "phone";
    value: string;
    id?: string;
    _system?: NFDPatientNFDTelecomTelefonSystem;
}

export const NFDPatientNFDTelecomTelefon: t.Type<NFDPatientNFDTelecomTelefon> =
    t.recursion("NFDPatientNFDTelecomTelefon", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("phone"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: NFDPatientNFDTelecomTelefonSystem
                })
            ])
        )
    );

/**
 * A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
 */
export interface NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten {
    value: string;
    id?: string;
    _system?: NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystem;
    system?: string;
}

export const NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten: t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten> =
    t.recursion("NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten", () =>
        Excess(
            t.intersection([
                t.type({
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    _system: NFDPatientNFDTelecomWeitereKontaktMoeglichkeitenSystem,
                    system: SCALARCode
                })
            ])
        )
    );

/**
 * The nature of the relationship between the patient and the contact person.
 */
export interface NFDPatientNFDContactRelationship {
    coding: Array<NFDPatientNFDContactRelationshipCoding>;
    text: string;
    id?: string;
}

export const NFDPatientNFDContactRelationship: t.Type<NFDPatientNFDContactRelationship> =
    t.recursion("NFDPatientNFDContactRelationship", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(1, 1, NFDPatientNFDContactRelationshipCoding),
                    text: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * A name associated with the contact person.
 */
export interface NFDPatientNFDContactName {
    family: string;
    id?: string;
    text?: string;
    given?: string[];
}

export const NFDPatientNFDContactName: t.Type<NFDPatientNFDContactName> = t.recursion(
    "NFDPatientNFDContactName",
    () =>
        Excess(
            t.intersection([
                t.type({
                    family: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString,
                    given: t.array(SCALARString)
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDPatientNFDMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0">;
    id?: string;
}

export const NFDPatientNFDMeta: t.Type<NFDPatientNFDMeta> = t.recursion(
    "NFDPatientNFDMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Patient_NFD|1.0.0"
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
 * A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
 */
export interface NFDPatientNFDTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

export const NFDPatientNFDTelecom: t.Type<NFDPatientNFDTelecom> = t.recursion(
    "NFDPatientNFDTelecom",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: ContactpointsystemVS,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: ContactpointuseVS,
                    rank: SCALARPositiveInt,
                    period: Period
                })
            ])
        )
);

/**
 * Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
 */
export interface NFDPatientNFDGender {
    id?: string;
    extension?: (Extension | Genderamtlichde)[];
    value?: string;
}

export const NFDPatientNFDGender: t.Type<NFDPatientNFDGender> = t.recursion(
    "NFDPatientNFDGender",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<[t.Type<Extension>, t.Type<Genderamtlichde>]>,
                    t.Any
                >(
                    t.union([Extension, Genderamtlichde]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: Genderamtlichde,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://fhir.de/StructureDefinition/gender-amtlich-de"
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
 * The date of birth for the individual.
 */
export interface NFDPatientNFDBirthDate {
    id?: string;
    extension?: (Extension | NFDPatientNFDBirthDateDataabsentreason)[];
    value?: string;
}

export const NFDPatientNFDBirthDate: t.Type<NFDPatientNFDBirthDate> = t.recursion(
    "NFDPatientNFDBirthDate",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<NFDPatientNFDBirthDateDataabsentreason>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, NFDPatientNFDBirthDateDataabsentreason]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: NFDPatientNFDBirthDateDataabsentreason,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                value: SCALARDate
            })
        )
);

/**
 * A contact party (e.g. guardian, partner, friend) for the patient.
 */
export interface NFDPatientNFDContact {
    relationship: Array<NFDPatientNFDContactRelationship>;
    name: NFDPatientNFDContactName;
    telecom: Array<
        NFDPatientNFDContactTelefon | NFDPatientNFDContactWeitereKontaktMoeglichkeiten
    >;
    id?: string;
}

export const NFDPatientNFDContact: t.Type<NFDPatientNFDContact> = t.recursion(
    "NFDPatientNFDContact",
    () =>
        Excess(
            t.intersection([
                t.type({
                    relationship: MinMaxArray(1, 1, NFDPatientNFDContactRelationship),
                    name: NFDPatientNFDContactName,
                    telecom: ReqArray<
                        t.UnionC<
                            [
                                t.Type<NFDPatientNFDContactTelefon>,
                                t.Type<NFDPatientNFDContactWeitereKontaktMoeglichkeiten>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            NFDPatientNFDContactTelefon,
                            NFDPatientNFDContactWeitereKontaktMoeglichkeiten
                        ]),
                        [
                            {
                                codec: NFDPatientNFDContactTelefon,
                                occurrence: ["1", "1"],
                                sliceBy: { path: "system", value: "phone" }
                            },
                            {
                                codec: NFDPatientNFDContactWeitereKontaktMoeglichkeiten,
                                occurrence: ["0", "2"],
                                sliceBy: { path: "system" }
                            }
                        ],
                        ["1", "3"]
                    )
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface NFDPatientNFD {
    resourceType: "Patient";
    meta: NFDPatientNFDMeta;
    identifier: Array<
        NFDPatientNFDVersichertenIdGKV | NFDPatientNFDVersichertennummerpkv
    >;
    name: Array<NFDPatientNFDName>;
    telecom: Array<
        | NFDPatientNFDTelecom
        | NFDPatientNFDTelecomTelefon
        | NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten
    >;
    id?: string;
    _gender?: NFDPatientNFDGender;
    gender?: string;
    _birthDate?: NFDPatientNFDBirthDate;
    birthDate?: string;
    contact?: Array<NFDPatientNFDContact>;
}

const NFDPatientNFD: t.Type<NFDPatientNFD> = t.recursion("NFDPatientNFD", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Patient"),
                meta: NFDPatientNFDMeta,
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDPatientNFDVersichertenIdGKV>,
                            t.Type<NFDPatientNFDVersichertennummerpkv>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDPatientNFDVersichertenIdGKV,
                        NFDPatientNFDVersichertennummerpkv
                    ]),
                    [
                        {
                            codec: NFDPatientNFDVersichertenIdGKV,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "GKV" }
                        },
                        {
                            codec: NFDPatientNFDVersichertennummerpkv,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "PKV" }
                        }
                    ],
                    ["1", "1"]
                ),
                name: MinMaxArray(1, 1, NFDPatientNFDName),
                telecom: ReqArray<
                    t.UnionC<
                        [
                            t.Type<NFDPatientNFDTelecom>,
                            t.Type<NFDPatientNFDTelecomTelefon>,
                            t.Type<NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        NFDPatientNFDTelecom,
                        NFDPatientNFDTelecomTelefon,
                        NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten
                    ]),
                    [
                        {
                            codec: NFDPatientNFDTelecom,
                            occurrence: ["0", "0"],
                            sliceBy: { path: "system" }
                        },
                        {
                            codec: NFDPatientNFDTelecomTelefon,
                            occurrence: ["1", "1"],
                            sliceBy: { path: "system", value: "phone" }
                        },
                        {
                            codec: NFDPatientNFDTelecomWeitereKontaktMoeglichkeiten,
                            occurrence: ["0", "2"],
                            sliceBy: { path: "system" }
                        }
                    ],
                    ["1", "3"]
                )
            }),
            t.partial({
                id: SCALARString,
                _gender: NFDPatientNFDGender,
                gender: SCALARCode,
                _birthDate: NFDPatientNFDBirthDate,
                birthDate: SCALARDate,
                contact: MaxArray(1, NFDPatientNFDContact)
            })
        ])
    )
);

export default NFDPatientNFD;
