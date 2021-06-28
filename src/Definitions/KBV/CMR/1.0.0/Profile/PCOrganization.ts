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
import {
    Literal,
    Excess,
    MinArray,
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.0/ValueSet/GemRSAnlage8";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Iso21090ADXPprecinct from "../../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Organization"

/**
 * A reference to a code defined by a terminology system.
 */
export interface PCOrganizationInstitutionskennzeichenTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCOrganizationInstitutionskennzeichenTypeXXType: t.Type<PCOrganizationInstitutionskennzeichenTypeXXType> = t.recursion(
    "PCOrganizationInstitutionskennzeichenTypeXXType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("XX")
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
export interface PCOrganizationBetriebsstaettennummerTypeBSNRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const PCOrganizationBetriebsstaettennummerTypeBSNRType: t.Type<PCOrganizationBetriebsstaettennummerTypeBSNRType> = t.recursion(
    "PCOrganizationBetriebsstaettennummerTypeBSNRType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("BSNR")
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface PCOrganizationStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const PCOrganizationStrassenanschriftLineStrasse: t.Type<PCOrganizationStrassenanschriftLineStrasse> = t.recursion(
    "PCOrganizationStrassenanschriftLineStrasse",
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
export interface PCOrganizationStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const PCOrganizationStrassenanschriftLineHausnummer: t.Type<PCOrganizationStrassenanschriftLineHausnummer> = t.recursion(
    "PCOrganizationStrassenanschriftLineHausnummer",
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
export interface PCOrganizationStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const PCOrganizationStrassenanschriftLineAdresszusatz: t.Type<PCOrganizationStrassenanschriftLineAdresszusatz> = t.recursion(
    "PCOrganizationStrassenanschriftLineAdresszusatz",
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
* Postfach-Adresse.
Bei Angabe eines Postfaches in dieser Extension muss das Postfach auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
Eine Postfach-Adresse darf nicht in Verbindung mit Address.type "physical" oder "both" verwendet werden.
*/
export interface PCOrganizationPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const PCOrganizationPostfachLinePostfach: t.Type<PCOrganizationPostfachLinePostfach> = t.recursion(
    "PCOrganizationPostfachLinePostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
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
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface PCOrganizationBetriebsstaettennummerAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const PCOrganizationBetriebsstaettennummerAssignerIdentifier: t.Type<PCOrganizationBetriebsstaettennummerAssignerIdentifier> = t.recursion(
    "PCOrganizationBetriebsstaettennummerAssignerIdentifier",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: IdentifieruseVS,
                    type: ExtensibleCheck<t.Type<IdentifiertypeVS>>(IdentifiertypeVS),
                    period: Period,
                    assigner: Reference
                })
            ])
        )
);

/**
 * A subsection of a municipality.
 */
export interface PCOrganizationPostfachStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    valueString: string;
    id?: string;
}

export const PCOrganizationPostfachStadtteil: t.Type<PCOrganizationPostfachStadtteil> = t.recursion(
    "PCOrganizationPostfachStadtteil",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
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
export interface PCOrganizationInstitutionskennzeichenType {
    coding: Array<PCOrganizationInstitutionskennzeichenTypeXXType>;
    id?: string;
    text?: string;
}

export const PCOrganizationInstitutionskennzeichenType: t.Type<PCOrganizationInstitutionskennzeichenType> = t.recursion(
    "PCOrganizationInstitutionskennzeichenType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCOrganizationInstitutionskennzeichenTypeXXType)
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
export interface PCOrganizationBetriebsstaettennummerType {
    coding: Array<PCOrganizationBetriebsstaettennummerTypeBSNRType>;
    id?: string;
    text?: string;
}

export const PCOrganizationBetriebsstaettennummerType: t.Type<PCOrganizationBetriebsstaettennummerType> = t.recursion(
    "PCOrganizationBetriebsstaettennummerType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, PCOrganizationBetriebsstaettennummerTypeBSNRType)
                }),
                t.partial({
                    id: SCALARString,
                    text: SCALARString
                })
            ])
        )
);

/**
 * Organization that issued/manages the identifier.
 */
export interface PCOrganizationBetriebsstaettennummerAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: PCOrganizationBetriebsstaettennummerAssignerIdentifier;
}

export const PCOrganizationBetriebsstaettennummerAssigner: t.Type<PCOrganizationBetriebsstaettennummerAssigner> = t.recursion(
    "PCOrganizationBetriebsstaettennummerAssigner",
    () =>
        Excess(
            t.intersection([
                t.type({
                    display: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    reference: CustomReference(SCALARString, [
                        "http://hl7.org/fhir/StructureDefinition/Organization"
                    ]),
                    type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS),
                    identifier: PCOrganizationBetriebsstaettennummerAssignerIdentifier
                })
            ])
        )
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PCOrganizationStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | PCOrganizationStrassenanschriftLineStrasse
        | PCOrganizationStrassenanschriftLineHausnummer
        | PCOrganizationStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const PCOrganizationStrassenanschriftLine: t.Type<PCOrganizationStrassenanschriftLine> = t.recursion(
    "PCOrganizationStrassenanschriftLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<PCOrganizationStrassenanschriftLineStrasse>,
                            t.Type<PCOrganizationStrassenanschriftLineHausnummer>,
                            t.Type<PCOrganizationStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        PCOrganizationStrassenanschriftLineStrasse,
                        PCOrganizationStrassenanschriftLineHausnummer,
                        PCOrganizationStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCOrganizationStrassenanschriftLineStrasse,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: PCOrganizationStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: PCOrganizationStrassenanschriftLineAdresszusatz,
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface PCOrganizationPostfachLine {
    id?: string;
    extension?: (Extension | PCOrganizationPostfachLinePostfach)[];
    value?: string;
}

export const PCOrganizationPostfachLine: t.Type<PCOrganizationPostfachLine> = t.recursion(
    "PCOrganizationPostfachLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PCOrganizationPostfachLinePostfach>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PCOrganizationPostfachLinePostfach]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCOrganizationPostfachLinePostfach,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
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
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface PCOrganizationErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const PCOrganizationErgaenzendeAngaben: t.Type<PCOrganizationErgaenzendeAngaben> = t.recursion(
    "PCOrganizationErgaenzendeAngaben",
    () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PCOrganizationInstitutionskennzeichen {
    type: PCOrganizationInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: Reference;
}

export const PCOrganizationInstitutionskennzeichen: t.Type<PCOrganizationInstitutionskennzeichen> = t.recursion(
    "PCOrganizationInstitutionskennzeichen",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PCOrganizationInstitutionskennzeichenType,
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    period: Period,
                    assigner: Reference
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface PCOrganizationBetriebsstaettennummer {
    type: PCOrganizationBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: PCOrganizationBetriebsstaettennummerAssigner;
}

export const PCOrganizationBetriebsstaettennummer: t.Type<PCOrganizationBetriebsstaettennummer> = t.recursion(
    "PCOrganizationBetriebsstaettennummer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: PCOrganizationBetriebsstaettennummerType,
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    period: Period,
                    assigner: PCOrganizationBetriebsstaettennummerAssigner
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface PCOrganizationStrassenanschrift {
    type: "both";
    city: string;
    postalCode: string;
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<PCOrganizationStrassenanschriftLine>;
    line?: Array<string>;
    state?: string;
}

export const PCOrganizationStrassenanschrift: t.Type<PCOrganizationStrassenanschrift> = t.recursion(
    "PCOrganizationStrassenanschrift",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
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
                    text: SCALARString,
                    _line: MaxArray(2, PCOrganizationStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    state: SCALARString
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface PCOrganizationPostfach {
    type: "postal";
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | PCOrganizationPostfachStadtteil)[];
    text?: string;
    _line?: Array<PCOrganizationPostfachLine>;
    line?: Array<string>;
    city?: string;
    postalCode?: string;
}

export const PCOrganizationPostfach: t.Type<PCOrganizationPostfach> = t.recursion(
    "PCOrganizationPostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("postal"),
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [t.Type<Extension>, t.Type<PCOrganizationPostfachStadtteil>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, PCOrganizationPostfachStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: PCOrganizationPostfachStadtteil,
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
                    text: SCALARString,
                    _line: MaxArray(2, PCOrganizationPostfachLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    postalCode: SCALARString
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface PCOrganizationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Organization|1.0.0"
    >;
    id?: string;
}

export const PCOrganizationMeta: t.Type<PCOrganizationMeta> = t.recursion(
    "PCOrganizationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_PC_Organization|1.0.0"
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
 * A contact detail for the organization.
 */
export interface PCOrganizationTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const PCOrganizationTelecom: t.Type<PCOrganizationTelecom> = t.recursion(
    "PCOrganizationTelecom",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: ContactpointsystemVS,
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface PCOrganization {
    resourceType: "Organization";
    meta: PCOrganizationMeta;
    id?: string;
    text?: Narrative;
    extension?: (Extension | PCOrganizationErgaenzendeAngaben)[];
    identifier?: (
        | PCOrganizationInstitutionskennzeichen
        | PCOrganizationBetriebsstaettennummer
    )[];
    name?: string;
    telecom?: PCOrganizationTelecom[];
    address?: Array<PCOrganizationStrassenanschrift | PCOrganizationPostfach>;
}

const PCOrganization: t.Type<PCOrganization> = t.recursion("PCOrganization", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Organization"),
                meta: PCOrganizationMeta
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<PCOrganizationErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, PCOrganizationErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: PCOrganizationErgaenzendeAngaben,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<PCOrganizationInstitutionskennzeichen>,
                            t.Type<PCOrganizationBetriebsstaettennummer>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        PCOrganizationInstitutionskennzeichen,
                        PCOrganizationBetriebsstaettennummer
                    ]),
                    [
                        {
                            codec: PCOrganizationInstitutionskennzeichen,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "XX" }
                        },
                        {
                            codec: PCOrganizationBetriebsstaettennummer,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "BSNR" }
                        }
                    ],
                    ["0", "*"]
                ),
                name: SCALARString,
                telecom: t.array(PCOrganizationTelecom),
                address: ReqArray<
                    t.UnionC<
                        [
                            t.Type<PCOrganizationStrassenanschrift>,
                            t.Type<PCOrganizationPostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([PCOrganizationStrassenanschrift, PCOrganizationPostfach]),
                    [
                        {
                            codec: PCOrganizationStrassenanschrift,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "both" }
                        },
                        {
                            codec: PCOrganizationPostfach,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "postal" }
                        }
                    ],
                    ["0", "1"]
                )
            })
        ])
    )
);

export default PCOrganization;
