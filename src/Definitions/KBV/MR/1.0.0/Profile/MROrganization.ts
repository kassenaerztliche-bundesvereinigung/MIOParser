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
import Narrative from "../../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization"

/**
 * A reference to a code defined by a terminology system.
 */
export interface MROrganizationInstitutionskennzeichenTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MROrganizationInstitutionskennzeichenTypeXXType: t.Type<MROrganizationInstitutionskennzeichenTypeXXType> =
    t.recursion("MROrganizationInstitutionskennzeichenTypeXXType", () =>
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
export interface MROrganizationBetriebsstaettennummerTypeBSNRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const MROrganizationBetriebsstaettennummerTypeBSNRType: t.Type<MROrganizationBetriebsstaettennummerTypeBSNRType> =
    t.recursion("MROrganizationBetriebsstaettennummerTypeBSNRType", () =>
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
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface MROrganizationBetriebsstaettennummerAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const MROrganizationBetriebsstaettennummerAssignerIdentifier: t.Type<MROrganizationBetriebsstaettennummerAssignerIdentifier> =
    t.recursion("MROrganizationBetriebsstaettennummerAssignerIdentifier", () =>
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
    coding: Array<MROrganizationInstitutionskennzeichenTypeXXType>;
    id?: string;
    text?: string;
}

export const MROrganizationInstitutionskennzeichenType: t.Type<MROrganizationInstitutionskennzeichenType> =
    t.recursion("MROrganizationInstitutionskennzeichenType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, MROrganizationInstitutionskennzeichenTypeXXType)
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
export interface MROrganizationBetriebsstaettennummerType {
    coding: Array<MROrganizationBetriebsstaettennummerTypeBSNRType>;
    id?: string;
    text?: string;
}

export const MROrganizationBetriebsstaettennummerType: t.Type<MROrganizationBetriebsstaettennummerType> =
    t.recursion("MROrganizationBetriebsstaettennummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(1, MROrganizationBetriebsstaettennummerTypeBSNRType)
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
export interface MROrganizationBetriebsstaettennummerAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: MROrganizationBetriebsstaettennummerAssignerIdentifier;
}

export const MROrganizationBetriebsstaettennummerAssigner: t.Type<MROrganizationBetriebsstaettennummerAssigner> =
    t.recursion("MROrganizationBetriebsstaettennummerAssigner", () =>
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
                    identifier: MROrganizationBetriebsstaettennummerAssignerIdentifier
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
        | Extension
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
                            t.Type<Extension>,
                            t.Type<MROrganizationStrassenanschriftLineStrasse>,
                            t.Type<MROrganizationStrassenanschriftLineHausnummer>,
                            t.Type<MROrganizationStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        MROrganizationStrassenanschriftLineStrasse,
                        MROrganizationStrassenanschriftLineHausnummer,
                        MROrganizationStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
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
    extension?: (Extension | MROrganizationPostfachLinePostfach)[];
    value?: string;
}

export const MROrganizationPostfachLine: t.Type<MROrganizationPostfachLine> = t.recursion(
    "MROrganizationPostfachLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<MROrganizationPostfachLinePostfach>]
                    >,
                    t.Any
                >(
                    t.union([Extension, MROrganizationPostfachLinePostfach]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MROrganizationPostfachLinePostfach,
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
    use?: "official";
    period?: Period;
    assigner?: Reference;
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
export interface MROrganizationBetriebsstaettennummer {
    type: MROrganizationBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: MROrganizationBetriebsstaettennummerAssigner;
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
                    id: SCALARString,
                    use: Literal("official"),
                    period: Period,
                    assigner: MROrganizationBetriebsstaettennummerAssigner
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
    extension?: (Extension | MROrganizationStrassenanschriftStadtteil)[];
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
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<MROrganizationStrassenanschriftStadtteil>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, MROrganizationStrassenanschriftStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MROrganizationStrassenanschriftStadtteil,
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
    extension?: (Extension | MROrganizationPostfachStadtteil)[];
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
                    extension: ReqArray<
                        t.UnionC<
                            [t.Type<Extension>, t.Type<MROrganizationPostfachStadtteil>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, MROrganizationPostfachStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: MROrganizationPostfachStadtteil,
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
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0">;
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
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_MR_Organization|1.0.0"
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
    extension?: (Extension | MROrganizationErgaenzendeAngaben)[];
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
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<MROrganizationErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, MROrganizationErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: MROrganizationErgaenzendeAngaben,
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
