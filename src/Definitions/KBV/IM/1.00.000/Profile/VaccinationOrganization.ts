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
    Excess,
    Literal,
    MinArray,
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck
} from "../../../../util";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.00.002/ValueSet/GemRSAnlage8";

import Iso21090ADXPprecinct from "../../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import VaccinationAdditionalComment from "../../../../../Definitions/KBV/IM/1.00.000/Extension/VaccinationAdditionalComment";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationOrganizationInstitutionskennzeichenTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationOrganizationInstitutionskennzeichenTypeXXType: t.Type<VaccinationOrganizationInstitutionskennzeichenTypeXXType> = t.recursion(
    "VaccinationOrganizationInstitutionskennzeichenTypeXXType",
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
export interface VaccinationOrganizationBetriebsstaettennummerTypeBSNRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const VaccinationOrganizationBetriebsstaettennummerTypeBSNRType: t.Type<VaccinationOrganizationBetriebsstaettennummerTypeBSNRType> = t.recursion(
    "VaccinationOrganizationBetriebsstaettennummerTypeBSNRType",
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
export interface VaccinationOrganizationStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationStrassenanschriftLineStrasse: t.Type<VaccinationOrganizationStrassenanschriftLineStrasse> = t.recursion(
    "VaccinationOrganizationStrassenanschriftLineStrasse",
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
export interface VaccinationOrganizationStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationStrassenanschriftLineHausnummer: t.Type<VaccinationOrganizationStrassenanschriftLineHausnummer> = t.recursion(
    "VaccinationOrganizationStrassenanschriftLineHausnummer",
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
export interface VaccinationOrganizationStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationStrassenanschriftLineAdresszusatz: t.Type<VaccinationOrganizationStrassenanschriftLineAdresszusatz> = t.recursion(
    "VaccinationOrganizationStrassenanschriftLineAdresszusatz",
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
export interface VaccinationOrganizationPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationPostfachLinePostfach: t.Type<VaccinationOrganizationPostfachLinePostfach> = t.recursion(
    "VaccinationOrganizationPostfachLinePostfach",
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationOrganizationInstitutionskennzeichenType {
    coding: Array<VaccinationOrganizationInstitutionskennzeichenTypeXXType>;
    id?: string;
    text?: string;
}

export const VaccinationOrganizationInstitutionskennzeichenType: t.Type<VaccinationOrganizationInstitutionskennzeichenType> = t.recursion(
    "VaccinationOrganizationInstitutionskennzeichenType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        VaccinationOrganizationInstitutionskennzeichenTypeXXType
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface VaccinationOrganizationBetriebsstaettennummerType {
    coding: Array<VaccinationOrganizationBetriebsstaettennummerTypeBSNRType>;
    id?: string;
    text?: string;
}

export const VaccinationOrganizationBetriebsstaettennummerType: t.Type<VaccinationOrganizationBetriebsstaettennummerType> = t.recursion(
    "VaccinationOrganizationBetriebsstaettennummerType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        VaccinationOrganizationBetriebsstaettennummerTypeBSNRType
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface VaccinationOrganizationStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | VaccinationOrganizationStrassenanschriftLineStrasse
        | VaccinationOrganizationStrassenanschriftLineHausnummer
        | VaccinationOrganizationStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const VaccinationOrganizationStrassenanschriftLine: t.Type<VaccinationOrganizationStrassenanschriftLine> = t.recursion(
    "VaccinationOrganizationStrassenanschriftLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationOrganizationStrassenanschriftLineStrasse>,
                            t.Type<
                                VaccinationOrganizationStrassenanschriftLineHausnummer
                            >,
                            t.Type<
                                VaccinationOrganizationStrassenanschriftLineAdresszusatz
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationOrganizationStrassenanschriftLineStrasse,
                        VaccinationOrganizationStrassenanschriftLineHausnummer,
                        VaccinationOrganizationStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationOrganizationStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: VaccinationOrganizationStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: VaccinationOrganizationStrassenanschriftLineAdresszusatz,
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
export interface VaccinationOrganizationPostfachLine {
    id?: string;
    extension?: (Extension | VaccinationOrganizationPostfachLinePostfach)[];
    value?: string;
}

export const VaccinationOrganizationPostfachLine: t.Type<VaccinationOrganizationPostfachLine> = t.recursion(
    "VaccinationOrganizationPostfachLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationOrganizationPostfachLinePostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([Extension, VaccinationOrganizationPostfachLinePostfach]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationOrganizationPostfachLinePostfach,
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
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationOrganizationInstitutionskennzeichen {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationOrganizationInstitutionskennzeichenType;
}

export const VaccinationOrganizationInstitutionskennzeichen: t.Type<VaccinationOrganizationInstitutionskennzeichen> = t.recursion(
    "VaccinationOrganizationInstitutionskennzeichen",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    type: VaccinationOrganizationInstitutionskennzeichenType
                })
            ])
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface VaccinationOrganizationBetriebsstaettennummer {
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
    type?: VaccinationOrganizationBetriebsstaettennummerType;
}

export const VaccinationOrganizationBetriebsstaettennummer: t.Type<VaccinationOrganizationBetriebsstaettennummer> = t.recursion(
    "VaccinationOrganizationBetriebsstaettennummer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    type: VaccinationOrganizationBetriebsstaettennummerType
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface VaccinationOrganizationStrassenanschrift {
    type: "both";
    postalCode: string;
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    text?: string;
    _line?: Array<VaccinationOrganizationStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    country?: GemRSAnlage8VS;
}

export const VaccinationOrganizationStrassenanschrift: t.Type<VaccinationOrganizationStrassenanschrift> = t.recursion(
    "VaccinationOrganizationStrassenanschrift",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    postalCode: SCALARString
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
                    text: SCALARString,
                    _line: MaxArray(2, VaccinationOrganizationStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface VaccinationOrganizationPostfach {
    type: "postal";
    postalCode: string;
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    _line?: Array<VaccinationOrganizationPostfachLine>;
    line?: Array<string>;
    city?: string;
    country?: GemRSAnlage8VS;
}

export const VaccinationOrganizationPostfach: t.Type<VaccinationOrganizationPostfach> = t.recursion(
    "VaccinationOrganizationPostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("postal"),
                    postalCode: SCALARString
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
                    _line: MaxArray(2, VaccinationOrganizationPostfachLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                })
            ])
        )
);

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface VaccinationOrganizationMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization|1.00.000"
    >;
    id?: string;
}

export const VaccinationOrganizationMeta: t.Type<VaccinationOrganizationMeta> = t.recursion(
    "VaccinationOrganizationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization|1.00.000"
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
export interface VaccinationOrganizationTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const VaccinationOrganizationTelecom: t.Type<VaccinationOrganizationTelecom> = t.recursion(
    "VaccinationOrganizationTelecom",
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

interface VaccinationOrganization {
    id: string;
    meta: VaccinationOrganizationMeta;
    name: string;
    address: Array<
        VaccinationOrganizationStrassenanschrift | VaccinationOrganizationPostfach
    >;
    resourceType?: string;
    text?: Narrative;
    extension?: (Extension | VaccinationAdditionalComment)[];
    identifier?: Array<
        | VaccinationOrganizationInstitutionskennzeichen
        | VaccinationOrganizationBetriebsstaettennummer
    >;
    telecom?: VaccinationOrganizationTelecom[];
}

const VaccinationOrganization: t.Type<VaccinationOrganization> = t.recursion(
    "VaccinationOrganization",
    () =>
        Excess(
            t.intersection([
                t.type({
                    id: SCALARString,
                    meta: VaccinationOrganizationMeta,
                    name: SCALARString,
                    address: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationOrganizationStrassenanschrift>,
                                t.Type<VaccinationOrganizationPostfach>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationOrganizationStrassenanschrift,
                            VaccinationOrganizationPostfach
                        ]),
                        [
                            {
                                codec: VaccinationOrganizationStrassenanschrift,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type", value: "both" }
                            },
                            {
                                codec: VaccinationOrganizationPostfach,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type", value: "postal" }
                            }
                        ],
                        ["1", "1"]
                    )
                }),
                t.partial({
                    resourceType: t.string,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<
                            [t.Type<Extension>, t.Type<VaccinationAdditionalComment>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, VaccinationAdditionalComment]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: VaccinationAdditionalComment,
                                occurrence: ["0", "*"],
                                sliceBy: {
                                    path: "url",
                                    value:
                                        "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_Vaccination_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    identifier: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationOrganizationInstitutionskennzeichen>,
                                t.Type<VaccinationOrganizationBetriebsstaettennummer>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationOrganizationInstitutionskennzeichen,
                            VaccinationOrganizationBetriebsstaettennummer
                        ]),
                        [
                            {
                                codec: VaccinationOrganizationInstitutionskennzeichen,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "XX" }
                            },
                            {
                                codec: VaccinationOrganizationBetriebsstaettennummer,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "BSNR" }
                            }
                        ],
                        ["0", "1"]
                    ),
                    telecom: t.array(VaccinationOrganizationTelecom)
                })
            ])
        )
);

export default VaccinationOrganization;
