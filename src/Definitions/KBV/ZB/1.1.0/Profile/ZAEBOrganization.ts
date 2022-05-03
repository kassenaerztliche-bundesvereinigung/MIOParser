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
    MinMaxArray,
    ReqArray,
    ExtensibleCheck
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Organization"

/**
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface ZAEBOrganizationStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const ZAEBOrganizationStrassenanschriftLineStrasse: t.Type<ZAEBOrganizationStrassenanschriftLineStrasse> =
    t.recursion("ZAEBOrganizationStrassenanschriftLineStrasse", () =>
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
export interface ZAEBOrganizationStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const ZAEBOrganizationStrassenanschriftLineHausnummer: t.Type<ZAEBOrganizationStrassenanschriftLineHausnummer> =
    t.recursion("ZAEBOrganizationStrassenanschriftLineHausnummer", () =>
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
export interface ZAEBOrganizationStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const ZAEBOrganizationStrassenanschriftLineAdresszusatz: t.Type<ZAEBOrganizationStrassenanschriftLineAdresszusatz> =
    t.recursion("ZAEBOrganizationStrassenanschriftLineAdresszusatz", () =>
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
export interface ZAEBOrganizationInstitutionskennzeichenTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const ZAEBOrganizationInstitutionskennzeichenTypeCoding: t.Type<ZAEBOrganizationInstitutionskennzeichenTypeCoding> =
    t.recursion("ZAEBOrganizationInstitutionskennzeichenTypeCoding", () =>
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
export interface ZAEBOrganizationBetriebsstaettennummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const ZAEBOrganizationBetriebsstaettennummerTypeCoding: t.Type<ZAEBOrganizationBetriebsstaettennummerTypeCoding> =
    t.recursion("ZAEBOrganizationBetriebsstaettennummerTypeCoding", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface ZAEBOrganizationKZVAbrechnungsnummerTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "KZVA";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const ZAEBOrganizationKZVAbrechnungsnummerTypeCoding: t.Type<ZAEBOrganizationKZVAbrechnungsnummerTypeCoding> =
    t.recursion("ZAEBOrganizationKZVAbrechnungsnummerTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                    code: Literal("KZVA")
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
 * A subsection of a municipality.
 */
export interface ZAEBOrganizationStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const ZAEBOrganizationStrassenanschriftStadtteil: t.Type<ZAEBOrganizationStrassenanschriftStadtteil> =
    t.recursion("ZAEBOrganizationStrassenanschriftStadtteil", () =>
        Excess(
            t.intersection([
                t.type({
                    url: Literal(
                        "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface ZAEBOrganizationInstitutionskennzeichenType {
    coding: Array<ZAEBOrganizationInstitutionskennzeichenTypeCoding>;
    id?: string;
    text?: string;
}

export const ZAEBOrganizationInstitutionskennzeichenType: t.Type<ZAEBOrganizationInstitutionskennzeichenType> =
    t.recursion("ZAEBOrganizationInstitutionskennzeichenType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        ZAEBOrganizationInstitutionskennzeichenTypeCoding
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
export interface ZAEBOrganizationBetriebsstaettennummerType {
    coding: Array<ZAEBOrganizationBetriebsstaettennummerTypeCoding>;
    id?: string;
    text?: string;
}

export const ZAEBOrganizationBetriebsstaettennummerType: t.Type<ZAEBOrganizationBetriebsstaettennummerType> =
    t.recursion("ZAEBOrganizationBetriebsstaettennummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        ZAEBOrganizationBetriebsstaettennummerTypeCoding
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
export interface ZAEBOrganizationKZVAbrechnungsnummerType {
    coding: Array<ZAEBOrganizationKZVAbrechnungsnummerTypeCoding>;
    id?: string;
    text?: string;
}

export const ZAEBOrganizationKZVAbrechnungsnummerType: t.Type<ZAEBOrganizationKZVAbrechnungsnummerType> =
    t.recursion("ZAEBOrganizationKZVAbrechnungsnummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        ZAEBOrganizationKZVAbrechnungsnummerTypeCoding
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
export interface ZAEBOrganizationStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | ZAEBOrganizationStrassenanschriftLineStrasse
        | ZAEBOrganizationStrassenanschriftLineHausnummer
        | ZAEBOrganizationStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const ZAEBOrganizationStrassenanschriftLine: t.Type<ZAEBOrganizationStrassenanschriftLine> =
    t.recursion("ZAEBOrganizationStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<ZAEBOrganizationStrassenanschriftLineStrasse>,
                            t.Type<ZAEBOrganizationStrassenanschriftLineHausnummer>,
                            t.Type<ZAEBOrganizationStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        ZAEBOrganizationStrassenanschriftLineStrasse,
                        ZAEBOrganizationStrassenanschriftLineHausnummer,
                        ZAEBOrganizationStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: ZAEBOrganizationStrassenanschriftLineStrasse,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: ZAEBOrganizationStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: ZAEBOrganizationStrassenanschriftLineAdresszusatz,
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
export interface ZAEBOrganizationInstitutionskennzeichen {
    type: ZAEBOrganizationInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
}

export const ZAEBOrganizationInstitutionskennzeichen: t.Type<ZAEBOrganizationInstitutionskennzeichen> =
    t.recursion("ZAEBOrganizationInstitutionskennzeichen", () =>
        Excess(
            t.intersection([
                t.type({
                    type: ZAEBOrganizationInstitutionskennzeichenType,
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
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
export interface ZAEBOrganizationBetriebsstaettennummer {
    type: ZAEBOrganizationBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
}

export const ZAEBOrganizationBetriebsstaettennummer: t.Type<ZAEBOrganizationBetriebsstaettennummer> =
    t.recursion("ZAEBOrganizationBetriebsstaettennummer", () =>
        Excess(
            t.intersection([
                t.type({
                    type: ZAEBOrganizationBetriebsstaettennummerType,
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
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
export interface ZAEBOrganizationKZVAbrechnungsnummer {
    type: ZAEBOrganizationKZVAbrechnungsnummerType;
    system: "http://fhir.de/NamingSystem/kzbv/kzvabrechnungsnummer";
    value: string;
    id?: string;
    use?: "official";
}

export const ZAEBOrganizationKZVAbrechnungsnummer: t.Type<ZAEBOrganizationKZVAbrechnungsnummer> =
    t.recursion("ZAEBOrganizationKZVAbrechnungsnummer", () =>
        Excess(
            t.intersection([
                t.type({
                    type: ZAEBOrganizationKZVAbrechnungsnummerType,
                    system: Literal(
                        "http://fhir.de/NamingSystem/kzbv/kzvabrechnungsnummer"
                    ),
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
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface ZAEBOrganizationStrassenanschrift {
    type: "both";
    city: string;
    postalCode: string;
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | ZAEBOrganizationStrassenanschriftStadtteil)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<ZAEBOrganizationStrassenanschriftLine>;
    line?: Array<string>;
}

export const ZAEBOrganizationStrassenanschrift: t.Type<ZAEBOrganizationStrassenanschrift> =
    t.recursion("ZAEBOrganizationStrassenanschrift", () =>
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
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<ZAEBOrganizationStrassenanschriftStadtteil>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, ZAEBOrganizationStrassenanschriftStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: ZAEBOrganizationStrassenanschriftStadtteil,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MinMaxArray(1, 2, ZAEBOrganizationStrassenanschriftLine),
                    line: MinMaxArray(1, 2, SCALARString)
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface ZAEBOrganizationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Organization|1.1.0">;
    id?: string;
}

export const ZAEBOrganizationMeta: t.Type<ZAEBOrganizationMeta> = t.recursion(
    "ZAEBOrganizationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_ZAEB_Organization|1.1.0"
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
export interface ZAEBOrganizationTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const ZAEBOrganizationTelecom: t.Type<ZAEBOrganizationTelecom> = t.recursion(
    "ZAEBOrganizationTelecom",
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

interface ZAEBOrganization {
    resourceType: "Organization";
    identifier: Array<
        | ZAEBOrganizationInstitutionskennzeichen
        | ZAEBOrganizationBetriebsstaettennummer
        | ZAEBOrganizationKZVAbrechnungsnummer
    >;
    name: string;
    address: Array<ZAEBOrganizationStrassenanschrift>;
    id?: string;
    meta?: ZAEBOrganizationMeta;
    text?: Narrative;
    extension?: Extension[];
    active?: boolean;
    telecom?: ZAEBOrganizationTelecom[];
}

const ZAEBOrganization: t.Type<ZAEBOrganization> = t.recursion("ZAEBOrganization", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Organization"),
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<ZAEBOrganizationInstitutionskennzeichen>,
                            t.Type<ZAEBOrganizationBetriebsstaettennummer>,
                            t.Type<ZAEBOrganizationKZVAbrechnungsnummer>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        ZAEBOrganizationInstitutionskennzeichen,
                        ZAEBOrganizationBetriebsstaettennummer,
                        ZAEBOrganizationKZVAbrechnungsnummer
                    ]),
                    [
                        {
                            codec: ZAEBOrganizationInstitutionskennzeichen,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "XX" }
                        },
                        {
                            codec: ZAEBOrganizationBetriebsstaettennummer,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "BSNR" }
                        },
                        {
                            codec: ZAEBOrganizationKZVAbrechnungsnummer,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "KZVA" }
                        }
                    ],
                    ["1", "1"]
                ),
                name: SCALARString,
                address: MinMaxArray(1, 1, ZAEBOrganizationStrassenanschrift)
            }),
            t.partial({
                id: SCALARString,
                meta: ZAEBOrganizationMeta,
                text: Narrative,
                extension: t.array(Extension),
                active: SCALARBoolean,
                telecom: t.array(ZAEBOrganizationTelecom)
            })
        ])
    )
);

export default ZAEBOrganization;
