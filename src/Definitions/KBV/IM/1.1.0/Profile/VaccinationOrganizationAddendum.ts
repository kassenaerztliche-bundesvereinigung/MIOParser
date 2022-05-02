import * as t from "io-ts";
import {
    Literal,
    Excess,
    MinArray,
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck
} from "../../../../CustomTypes";

import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import AdditionalComment from "../../../../../Definitions/KBVBase/1.1.1/Extension/AdditionalComment";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.1/ValueSet/GemRSAnlage8";

import Iso21090ADXPprecinct from "../../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization_Addendum"

/**
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType: t.Type<VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType> =
    t.recursion("VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("XX")
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
 * A reference to a code defined by a terminology system.
 */
export interface VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
}

export const VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType: t.Type<VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType> =
    t.recursion("VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType", () =>
        Excess(
            t.intersection([
                t.type({
                    system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                    code: Literal("BSNR")
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
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface VaccinationOrganizationAddendumStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationAddendumStrassenanschriftLineStrasse: t.Type<VaccinationOrganizationAddendumStrassenanschriftLineStrasse> =
    t.recursion("VaccinationOrganizationAddendumStrassenanschriftLineStrasse", () =>
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
export interface VaccinationOrganizationAddendumStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationAddendumStrassenanschriftLineHausnummer: t.Type<VaccinationOrganizationAddendumStrassenanschriftLineHausnummer> =
    t.recursion("VaccinationOrganizationAddendumStrassenanschriftLineHausnummer", () =>
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
export interface VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz: t.Type<VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz> =
    t.recursion("VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz", () =>
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
export interface VaccinationOrganizationAddendumPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const VaccinationOrganizationAddendumPostfachLinePostfach: t.Type<VaccinationOrganizationAddendumPostfachLinePostfach> =
    t.recursion("VaccinationOrganizationAddendumPostfachLinePostfach", () =>
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
export interface VaccinationOrganizationAddendumInstitutionskennzeichenType {
    coding: Array<VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType>;
    id?: string;
}

export const VaccinationOrganizationAddendumInstitutionskennzeichenType: t.Type<VaccinationOrganizationAddendumInstitutionskennzeichenType> =
    t.recursion("VaccinationOrganizationAddendumInstitutionskennzeichenType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        VaccinationOrganizationAddendumInstitutionskennzeichenTypeXXType
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
export interface VaccinationOrganizationAddendumBetriebsstaettennummerType {
    coding: Array<VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType>;
    id?: string;
}

export const VaccinationOrganizationAddendumBetriebsstaettennummerType: t.Type<VaccinationOrganizationAddendumBetriebsstaettennummerType> =
    t.recursion("VaccinationOrganizationAddendumBetriebsstaettennummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        VaccinationOrganizationAddendumBetriebsstaettennummerTypeBSNRType
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
export interface VaccinationOrganizationAddendumStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | VaccinationOrganizationAddendumStrassenanschriftLineStrasse
        | VaccinationOrganizationAddendumStrassenanschriftLineHausnummer
        | VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const VaccinationOrganizationAddendumStrassenanschriftLine: t.Type<VaccinationOrganizationAddendumStrassenanschriftLine> =
    t.recursion("VaccinationOrganizationAddendumStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationOrganizationAddendumStrassenanschriftLineStrasse>,
                            t.Type<VaccinationOrganizationAddendumStrassenanschriftLineHausnummer>,
                            t.Type<VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationOrganizationAddendumStrassenanschriftLineStrasse,
                        VaccinationOrganizationAddendumStrassenanschriftLineHausnummer,
                        VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationOrganizationAddendumStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: VaccinationOrganizationAddendumStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: VaccinationOrganizationAddendumStrassenanschriftLineAdresszusatz,
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
export interface VaccinationOrganizationAddendumPostfachLine {
    id?: string;
    extension?: (Extension | VaccinationOrganizationAddendumPostfachLinePostfach)[];
    value?: string;
}

export const VaccinationOrganizationAddendumPostfachLine: t.Type<VaccinationOrganizationAddendumPostfachLine> =
    t.recursion("VaccinationOrganizationAddendumPostfachLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<VaccinationOrganizationAddendumPostfachLinePostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        VaccinationOrganizationAddendumPostfachLinePostfach
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: VaccinationOrganizationAddendumPostfachLinePostfach,
                            occurrence: ["1", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox"
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
export interface VaccinationOrganizationAddendumInstitutionskennzeichen {
    type: VaccinationOrganizationAddendumInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
}

export const VaccinationOrganizationAddendumInstitutionskennzeichen: t.Type<VaccinationOrganizationAddendumInstitutionskennzeichen> =
    t.recursion("VaccinationOrganizationAddendumInstitutionskennzeichen", () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationOrganizationAddendumInstitutionskennzeichenType,
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
export interface VaccinationOrganizationAddendumBetriebsstaettennummer {
    type: VaccinationOrganizationAddendumBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
}

export const VaccinationOrganizationAddendumBetriebsstaettennummer: t.Type<VaccinationOrganizationAddendumBetriebsstaettennummer> =
    t.recursion("VaccinationOrganizationAddendumBetriebsstaettennummer", () =>
        Excess(
            t.intersection([
                t.type({
                    type: VaccinationOrganizationAddendumBetriebsstaettennummerType,
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
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface VaccinationOrganizationAddendumStrassenanschrift {
    type: "both";
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    text?: string;
    _line?: Array<VaccinationOrganizationAddendumStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
}

export const VaccinationOrganizationAddendumStrassenanschrift: t.Type<VaccinationOrganizationAddendumStrassenanschrift> =
    t.recursion("VaccinationOrganizationAddendumStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
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
                                    value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    text: SCALARString,
                    _line: MaxArray(
                        2,
                        VaccinationOrganizationAddendumStrassenanschriftLine
                    ),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    postalCode: SCALARString
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface VaccinationOrganizationAddendumPostfach {
    type: "postal";
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    _line?: Array<VaccinationOrganizationAddendumPostfachLine>;
    line?: Array<string>;
    city?: string;
    postalCode?: string;
}

export const VaccinationOrganizationAddendumPostfach: t.Type<VaccinationOrganizationAddendumPostfach> =
    t.recursion("VaccinationOrganizationAddendumPostfach", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("postal"),
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
                                    value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    _line: MaxArray(2, VaccinationOrganizationAddendumPostfachLine),
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
export interface VaccinationOrganizationAddendumMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization_Addendum|1.1.0">;
    id?: string;
}

export const VaccinationOrganizationAddendumMeta: t.Type<VaccinationOrganizationAddendumMeta> =
    t.recursion("VaccinationOrganizationAddendumMeta", () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_Vaccination_Organization_Addendum|1.1.0"
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
export interface VaccinationOrganizationAddendumTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const VaccinationOrganizationAddendumTelecom: t.Type<VaccinationOrganizationAddendumTelecom> =
    t.recursion("VaccinationOrganizationAddendumTelecom", () =>
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

interface VaccinationOrganizationAddendum {
    resourceType: "Organization";
    meta: VaccinationOrganizationAddendumMeta;
    name: string;
    id?: string;
    text?: Narrative;
    extension?: (Extension | AdditionalComment)[];
    identifier?: Array<
        | VaccinationOrganizationAddendumInstitutionskennzeichen
        | VaccinationOrganizationAddendumBetriebsstaettennummer
    >;
    telecom?: VaccinationOrganizationAddendumTelecom[];
    address?: Array<
        | VaccinationOrganizationAddendumStrassenanschrift
        | VaccinationOrganizationAddendumPostfach
    >;
}

const VaccinationOrganizationAddendum: t.Type<VaccinationOrganizationAddendum> =
    t.recursion("VaccinationOrganizationAddendum", () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Organization"),
                    meta: VaccinationOrganizationAddendumMeta,
                    name: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    text: Narrative,
                    extension: ReqArray<
                        t.UnionC<[t.Type<Extension>, t.Type<AdditionalComment>]>,
                        t.Any
                    >(
                        t.union([Extension, AdditionalComment]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: AdditionalComment,
                                occurrence: ["0", "1"],
                                sliceBy: {
                                    path: "url",
                                    value: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"
                                }
                            }
                        ],
                        ["0", "*"]
                    ),
                    identifier: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationOrganizationAddendumInstitutionskennzeichen>,
                                t.Type<VaccinationOrganizationAddendumBetriebsstaettennummer>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationOrganizationAddendumInstitutionskennzeichen,
                            VaccinationOrganizationAddendumBetriebsstaettennummer
                        ]),
                        [
                            {
                                codec: VaccinationOrganizationAddendumInstitutionskennzeichen,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type.coding.code", value: "XX" }
                            },
                            {
                                codec: VaccinationOrganizationAddendumBetriebsstaettennummer,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "type.coding.code", value: "BSNR" }
                            }
                        ],
                        ["0", "1"]
                    ),
                    telecom: t.array(VaccinationOrganizationAddendumTelecom),
                    address: ReqArray<
                        t.UnionC<
                            [
                                t.Type<VaccinationOrganizationAddendumStrassenanschrift>,
                                t.Type<VaccinationOrganizationAddendumPostfach>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            VaccinationOrganizationAddendumStrassenanschrift,
                            VaccinationOrganizationAddendumPostfach
                        ]),
                        [
                            {
                                codec: VaccinationOrganizationAddendumStrassenanschrift,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type", value: "both" }
                            },
                            {
                                codec: VaccinationOrganizationAddendumPostfach,
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

export default VaccinationOrganizationAddendum;
