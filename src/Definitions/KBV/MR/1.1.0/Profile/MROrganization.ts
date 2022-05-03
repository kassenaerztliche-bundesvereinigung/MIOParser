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

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";

import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";

import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization"

/**
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface MROrganizationStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const MROrganizationStrassenanschriftLineStrasse: t.Type<MROrganizationStrassenanschriftLineStrasse> =
    t.recursion("MROrganizationStrassenanschriftLineStrasse", () =>
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
export interface MROrganizationStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const MROrganizationStrassenanschriftLineHausnummer: t.Type<MROrganizationStrassenanschriftLineHausnummer> =
    t.recursion("MROrganizationStrassenanschriftLineHausnummer", () =>
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
export interface MROrganizationStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const MROrganizationStrassenanschriftLineAdresszusatz: t.Type<MROrganizationStrassenanschriftLineAdresszusatz> =
    t.recursion("MROrganizationStrassenanschriftLineAdresszusatz", () =>
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
export interface MROrganizationPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const MROrganizationPostfachLinePostfach: t.Type<MROrganizationPostfachLinePostfach> =
    t.recursion("MROrganizationPostfachLinePostfach", () =>
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
 * A reference to a code defined by a terminology system.
 */
export interface MROrganizationInstitutionskennzeichenTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    display: "Organisations-ID";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MROrganizationInstitutionskennzeichenTypeCoding: t.Type<MROrganizationInstitutionskennzeichenTypeCoding> =
    t.recursion("MROrganizationInstitutionskennzeichenTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("XX"),
                    display: Literal("Organisations-ID")
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
export interface MROrganizationBetriebsstaettennummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    display: "Betriebsstättennummer";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const MROrganizationBetriebsstaettennummerTypeCoding: t.Type<MROrganizationBetriebsstaettennummerTypeCoding> =
    t.recursion("MROrganizationBetriebsstaettennummerTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("BSNR"),
                    display: Literal("Betriebsstättennummer")
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
 * A subsection of a municipality.
 */
export interface MROrganizationStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const MROrganizationStrassenanschriftStadtteil: t.Type<MROrganizationStrassenanschriftStadtteil> =
    t.recursion("MROrganizationStrassenanschriftStadtteil", () =>
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
 * A subsection of a municipality.
 */
export interface MROrganizationPostfachStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const MROrganizationPostfachStadtteil: t.Type<MROrganizationPostfachStadtteil> =
    t.recursion("MROrganizationPostfachStadtteil", () =>
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
export interface MROrganizationInstitutionskennzeichenType {
    coding: Array<MROrganizationInstitutionskennzeichenTypeCoding>;
    id?: string;
}

export const MROrganizationInstitutionskennzeichenType: t.Type<MROrganizationInstitutionskennzeichenType> =
    t.recursion("MROrganizationInstitutionskennzeichenType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MROrganizationInstitutionskennzeichenTypeCoding
                    )
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
export interface MROrganizationBetriebsstaettennummerType {
    coding: Array<MROrganizationBetriebsstaettennummerTypeCoding>;
    id?: string;
}

export const MROrganizationBetriebsstaettennummerType: t.Type<MROrganizationBetriebsstaettennummerType> =
    t.recursion("MROrganizationBetriebsstaettennummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinMaxArray(
                        1,
                        1,
                        MROrganizationBetriebsstaettennummerTypeCoding
                    )
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
export interface MROrganizationStrassenanschriftLine {
    id?: string;
    extension?: (
        | MROrganizationStrassenanschriftLineStrasse
        | MROrganizationStrassenanschriftLineHausnummer
        | MROrganizationStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const MROrganizationStrassenanschriftLine: t.Type<MROrganizationStrassenanschriftLine> =
    t.recursion("MROrganizationStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MROrganizationStrassenanschriftLineStrasse>,
                            t.Type<MROrganizationStrassenanschriftLineHausnummer>,
                            t.Type<MROrganizationStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MROrganizationStrassenanschriftLineStrasse,
                        MROrganizationStrassenanschriftLineHausnummer,
                        MROrganizationStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: MROrganizationStrassenanschriftLineStrasse,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: MROrganizationStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: MROrganizationStrassenanschriftLineAdresszusatz,
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
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface MROrganizationPostfachLine {
    id?: string;
    extension?: MROrganizationPostfachLinePostfach[];
    value?: string;
}

export const MROrganizationPostfachLine: t.Type<MROrganizationPostfachLine> = t.recursion(
    "MROrganizationPostfachLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: t.array(MROrganizationPostfachLinePostfach),
                value: SCALARString
            })
        )
);

/**
 * Mit diesem Profil ist eine zusätzlicher Kommentar/Information definiert worden. Dieser kann an diverse Ressourcen hinzugefügt werden. Der Informationsgehalt der beinhaltenden Ressource darf nicht grundlegend verändert oder negiert werden.
 */
export interface MROrganizationErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const MROrganizationErgaenzendeAngaben: t.Type<MROrganizationErgaenzendeAngaben> =
    t.recursion("MROrganizationErgaenzendeAngaben", () =>
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
export interface MROrganizationInstitutionskennzeichen {
    type: MROrganizationInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
}

export const MROrganizationInstitutionskennzeichen: t.Type<MROrganizationInstitutionskennzeichen> =
    t.recursion("MROrganizationInstitutionskennzeichen", () =>
        Excess(
            t.intersection([
                t.type({
                    type: MROrganizationInstitutionskennzeichenType,
                    system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
                    value: SCALARString
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
export interface MROrganizationBetriebsstaettennummer {
    type: MROrganizationBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
}

export const MROrganizationBetriebsstaettennummer: t.Type<MROrganizationBetriebsstaettennummer> =
    t.recursion("MROrganizationBetriebsstaettennummer", () =>
        Excess(
            t.intersection([
                t.type({
                    type: MROrganizationBetriebsstaettennummerType,
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface MROrganizationStrassenanschrift {
    type: "both";
    city: string;
    postalCode: string;
    country: GemRSAnlage8VS;
    id?: string;
    extension?: MROrganizationStrassenanschriftStadtteil[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<MROrganizationStrassenanschriftLine>;
    line?: Array<string>;
}

export const MROrganizationStrassenanschrift: t.Type<MROrganizationStrassenanschrift> =
    t.recursion("MROrganizationStrassenanschrift", () =>
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
                    extension: t.array(MROrganizationStrassenanschriftStadtteil),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MaxArray(2, MROrganizationStrassenanschriftLine),
                    line: MaxArray(2, SCALARString)
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface MROrganizationPostfach {
    type: "postal";
    id?: string;
    extension?: MROrganizationPostfachStadtteil[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<MROrganizationPostfachLine>;
    line?: Array<string>;
    city?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
}

export const MROrganizationPostfach: t.Type<MROrganizationPostfach> = t.recursion(
    "MROrganizationPostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("postal")
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(MROrganizationPostfachStadtteil),
                    use: AddressuseVS,
                    text: SCALARString,
                    _line: MaxArray(2, MROrganizationPostfachLine),
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
export interface MROrganizationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0">;
    id?: string;
}

export const MROrganizationMeta: t.Type<MROrganizationMeta> = t.recursion(
    "MROrganizationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.1.0"
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
export interface MROrganizationTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const MROrganizationTelecom: t.Type<MROrganizationTelecom> = t.recursion(
    "MROrganizationTelecom",
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

interface MROrganization {
    resourceType: "Organization";
    meta: MROrganizationMeta;
    id?: string;
    text?: Narrative;
    extension?: MROrganizationErgaenzendeAngaben[];
    identifier?: (
        | MROrganizationInstitutionskennzeichen
        | MROrganizationBetriebsstaettennummer
    )[];
    name?: string;
    telecom?: MROrganizationTelecom[];
    address?: (MROrganizationStrassenanschrift | MROrganizationPostfach)[];
}

const MROrganization: t.Type<MROrganization> = t.recursion("MROrganization", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Organization"),
                meta: MROrganizationMeta
            }),
            t.partial({
                id: SCALARString,
                text: Narrative,
                extension: t.array(MROrganizationErgaenzendeAngaben),
                identifier: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MROrganizationInstitutionskennzeichen>,
                            t.Type<MROrganizationBetriebsstaettennummer>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        MROrganizationInstitutionskennzeichen,
                        MROrganizationBetriebsstaettennummer
                    ]),
                    [
                        {
                            codec: MROrganizationInstitutionskennzeichen,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "XX" }
                        },
                        {
                            codec: MROrganizationBetriebsstaettennummer,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code", value: "BSNR" }
                        }
                    ],
                    ["0", "*"]
                ),
                name: SCALARString,
                telecom: t.array(MROrganizationTelecom),
                address: ReqArray<
                    t.UnionC<
                        [
                            t.Type<MROrganizationStrassenanschrift>,
                            t.Type<MROrganizationPostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([MROrganizationStrassenanschrift, MROrganizationPostfach]),
                    [
                        {
                            codec: MROrganizationStrassenanschrift,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "both" }
                        },
                        {
                            codec: MROrganizationPostfach,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "postal" }
                        }
                    ],
                    ["0", "*"]
                )
            })
        ])
    )
);

export default MROrganization;
