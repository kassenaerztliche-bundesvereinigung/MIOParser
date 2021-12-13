import * as t from "io-ts";
import {
    Literal,
    Excess,
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../../CustomTypes";
import SCALARBoolean from "../../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import AddressuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMROrganizationInstitutionskennzeichenTypeCodingXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMROrganizationInstitutionskennzeichenTypeCodingXXType: t.Type<CMROrganizationInstitutionskennzeichenTypeCodingXXType> =
    t.recursion("CMROrganizationInstitutionskennzeichenTypeCodingXXType", () =>
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
export interface CMROrganizationBetriebsstaettennummerTypeCodingBSNRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMROrganizationBetriebsstaettennummerTypeCodingBSNRType: t.Type<CMROrganizationBetriebsstaettennummerTypeCodingBSNRType> =
    t.recursion("CMROrganizationBetriebsstaettennummerTypeCodingBSNRType", () =>
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
export interface CMROrganizationStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const CMROrganizationStrassenanschriftLineStrasse: t.Type<CMROrganizationStrassenanschriftLineStrasse> =
    t.recursion("CMROrganizationStrassenanschriftLineStrasse", () =>
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
export interface CMROrganizationStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const CMROrganizationStrassenanschriftLineHausnummer: t.Type<CMROrganizationStrassenanschriftLineHausnummer> =
    t.recursion("CMROrganizationStrassenanschriftLineHausnummer", () =>
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
export interface CMROrganizationStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const CMROrganizationStrassenanschriftLineAdresszusatz: t.Type<CMROrganizationStrassenanschriftLineAdresszusatz> =
    t.recursion("CMROrganizationStrassenanschriftLineAdresszusatz", () =>
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
export interface CMROrganizationPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const CMROrganizationPostfachLinePostfach: t.Type<CMROrganizationPostfachLinePostfach> =
    t.recursion("CMROrganizationPostfachLinePostfach", () =>
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
export interface CMROrganizationInstitutionskennzeichenTypeCoding {
    display: "Organisations-ID";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMROrganizationInstitutionskennzeichenTypeCoding: t.Type<CMROrganizationInstitutionskennzeichenTypeCoding> =
    t.recursion("CMROrganizationInstitutionskennzeichenTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Organisations-ID")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMROrganizationBetriebsstaettennummerTypeCoding {
    display: "Betriebsstättennummer";
    id?: string;
    system?: string;
    version?: string;
    code?: string;
    userSelected?: boolean;
}

export const CMROrganizationBetriebsstaettennummerTypeCoding: t.Type<CMROrganizationBetriebsstaettennummerTypeCoding> =
    t.recursion("CMROrganizationBetriebsstaettennummerTypeCoding", () =>
        Excess(
            t.intersection([
                t.type({
                    display: Literal("Betriebsstättennummer")
                }),
                t.partial({
                    id: SCALARString,
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    userSelected: SCALARBoolean
                })
            ])
        )
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface CMROrganizationBetriebsstaettennummerAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const CMROrganizationBetriebsstaettennummerAssignerIdentifier: t.Type<CMROrganizationBetriebsstaettennummerAssignerIdentifier> =
    t.recursion("CMROrganizationBetriebsstaettennummerAssignerIdentifier", () =>
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
export interface CMROrganizationStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const CMROrganizationStrassenanschriftStadtteil: t.Type<CMROrganizationStrassenanschriftStadtteil> =
    t.recursion("CMROrganizationStrassenanschriftStadtteil", () =>
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
export interface CMROrganizationPostfachStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    id?: string;
    valueString?: string;
}

export const CMROrganizationPostfachStadtteil: t.Type<CMROrganizationPostfachStadtteil> =
    t.recursion("CMROrganizationPostfachStadtteil", () =>
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
export interface CMROrganizationInstitutionskennzeichenType {
    coding: Array<
        | CMROrganizationInstitutionskennzeichenTypeCoding
        | CMROrganizationInstitutionskennzeichenTypeCodingXXType
    >;
    id?: string;
    text?: string;
}

export const CMROrganizationInstitutionskennzeichenType: t.Type<CMROrganizationInstitutionskennzeichenType> =
    t.recursion("CMROrganizationInstitutionskennzeichenType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMROrganizationInstitutionskennzeichenTypeCoding>,
                                t.Type<CMROrganizationInstitutionskennzeichenTypeCodingXXType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMROrganizationInstitutionskennzeichenTypeCoding,
                            CMROrganizationInstitutionskennzeichenTypeCodingXXType
                        ]),
                        [
                            {
                                codec: CMROrganizationInstitutionskennzeichenTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMROrganizationInstitutionskennzeichenTypeCodingXXType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            }
                        ],
                        ["1", "*"]
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
export interface CMROrganizationBetriebsstaettennummerType {
    coding: Array<
        | CMROrganizationBetriebsstaettennummerTypeCoding
        | CMROrganizationBetriebsstaettennummerTypeCodingBSNRType
    >;
    id?: string;
    text?: string;
}

export const CMROrganizationBetriebsstaettennummerType: t.Type<CMROrganizationBetriebsstaettennummerType> =
    t.recursion("CMROrganizationBetriebsstaettennummerType", () =>
        Excess(
            t.intersection([
                t.type({
                    coding: ReqArray<
                        t.UnionC<
                            [
                                t.Type<CMROrganizationBetriebsstaettennummerTypeCoding>,
                                t.Type<CMROrganizationBetriebsstaettennummerTypeCodingBSNRType>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMROrganizationBetriebsstaettennummerTypeCoding,
                            CMROrganizationBetriebsstaettennummerTypeCodingBSNRType
                        ]),
                        [
                            {
                                codec: CMROrganizationBetriebsstaettennummerTypeCoding,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "system" }
                            },
                            {
                                codec: CMROrganizationBetriebsstaettennummerTypeCodingBSNRType,
                                occurrence: ["1", "1"],
                                sliceBy: {
                                    path: "system",
                                    value: "http://terminology.hl7.org/CodeSystem/v2-0203"
                                }
                            }
                        ],
                        ["1", "*"]
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
 * Organization that issued/manages the identifier.
 */
export interface CMROrganizationBetriebsstaettennummerAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: CMROrganizationBetriebsstaettennummerAssignerIdentifier;
}

export const CMROrganizationBetriebsstaettennummerAssigner: t.Type<CMROrganizationBetriebsstaettennummerAssigner> =
    t.recursion("CMROrganizationBetriebsstaettennummerAssigner", () =>
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
                    identifier: CMROrganizationBetriebsstaettennummerAssignerIdentifier
                })
            ])
        )
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface CMROrganizationStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | CMROrganizationStrassenanschriftLineStrasse
        | CMROrganizationStrassenanschriftLineHausnummer
        | CMROrganizationStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const CMROrganizationStrassenanschriftLine: t.Type<CMROrganizationStrassenanschriftLine> =
    t.recursion("CMROrganizationStrassenanschriftLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMROrganizationStrassenanschriftLineStrasse>,
                            t.Type<CMROrganizationStrassenanschriftLineHausnummer>,
                            t.Type<CMROrganizationStrassenanschriftLineAdresszusatz>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMROrganizationStrassenanschriftLineStrasse,
                        CMROrganizationStrassenanschriftLineHausnummer,
                        CMROrganizationStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMROrganizationStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: CMROrganizationStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: CMROrganizationStrassenanschriftLineAdresszusatz,
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
export interface CMROrganizationPostfachLine {
    id?: string;
    extension?: (Extension | CMROrganizationPostfachLinePostfach)[];
    value?: string;
}

export const CMROrganizationPostfachLine: t.Type<CMROrganizationPostfachLine> =
    t.recursion("CMROrganizationPostfachLine", () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<CMROrganizationPostfachLinePostfach>]
                    >,
                    t.Any
                >(
                    t.union([Extension, CMROrganizationPostfachLinePostfach]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMROrganizationPostfachLinePostfach,
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
export interface CMROrganizationErgaenzendeAngaben {
    url: "https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment";
    valueString: string;
    id?: string;
}

export const CMROrganizationErgaenzendeAngaben: t.Type<CMROrganizationErgaenzendeAngaben> =
    t.recursion("CMROrganizationErgaenzendeAngaben", () =>
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
export interface CMROrganizationInstitutionskennzeichen {
    type: CMROrganizationInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: Reference;
}

export const CMROrganizationInstitutionskennzeichen: t.Type<CMROrganizationInstitutionskennzeichen> =
    t.recursion("CMROrganizationInstitutionskennzeichen", () =>
        Excess(
            t.intersection([
                t.type({
                    type: CMROrganizationInstitutionskennzeichenType,
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
export interface CMROrganizationBetriebsstaettennummer {
    type: {
        coding: {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203";
            code: "BSNR";
        }[];
    };
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: CMROrganizationBetriebsstaettennummerAssigner;
}

export const CMROrganizationBetriebsstaettennummer: t.Type<CMROrganizationBetriebsstaettennummer> =
    t.recursion("CMROrganizationBetriebsstaettennummer", () =>
        Excess(
            t.intersection([
                t.type({
                    type: t.type({
                        coding: t.array(
                            t.type({
                                system: Literal(
                                    "http://terminology.hl7.org/CodeSystem/v2-0203"
                                ),
                                code: Literal("BSNR")
                            })
                        )
                    }),
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    period: Period,
                    assigner: CMROrganizationBetriebsstaettennummerAssigner
                })
            ])
        )
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface CMROrganizationStrassenanschrift {
    type: "both";
    city: string;
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | CMROrganizationStrassenanschriftStadtteil)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<CMROrganizationStrassenanschriftLine>;
    line?: Array<string>;
    state?: string;
    postalCode?: string;
}

export const CMROrganizationStrassenanschrift: t.Type<CMROrganizationStrassenanschrift> =
    t.recursion("CMROrganizationStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS)
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<CMROrganizationStrassenanschriftStadtteil>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([Extension, CMROrganizationStrassenanschriftStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMROrganizationStrassenanschriftStadtteil,
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
                    _line: MaxArray(2, CMROrganizationStrassenanschriftLine),
                    line: MaxArray(2, SCALARString),
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
export interface CMROrganizationPostfach {
    type: "postal";
    country: GemRSAnlage8VS;
    id?: string;
    extension?: (Extension | CMROrganizationPostfachStadtteil)[];
    text?: string;
    _line?: Array<CMROrganizationPostfachLine>;
    line?: Array<string>;
    city?: string;
    postalCode?: string;
}

export const CMROrganizationPostfach: t.Type<CMROrganizationPostfach> = t.recursion(
    "CMROrganizationPostfach",
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
                            [t.Type<Extension>, t.Type<CMROrganizationPostfachStadtteil>]
                        >,
                        t.Any
                    >(
                        t.union([Extension, CMROrganizationPostfachStadtteil]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMROrganizationPostfachStadtteil,
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
                    _line: MaxArray(2, CMROrganizationPostfachLine),
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
export interface CMROrganizationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1">;
    id?: string;
}

export const CMROrganizationMeta: t.Type<CMROrganizationMeta> = t.recursion(
    "CMROrganizationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization|1.0.1"
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
export interface CMROrganizationTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
}

export const CMROrganizationTelecom: t.Type<CMROrganizationTelecom> = t.recursion(
    "CMROrganizationTelecom",
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

interface CMROrganization {
    resourceType: "Organization";
    meta: CMROrganizationMeta;
    id?: string;
    extension?: (Extension | CMROrganizationErgaenzendeAngaben)[];
    identifier?: (
        | CMROrganizationInstitutionskennzeichen
        | CMROrganizationBetriebsstaettennummer
    )[];
    name?: string;
    telecom?: CMROrganizationTelecom[];
    address?: Array<CMROrganizationStrassenanschrift | CMROrganizationPostfach>;
}

const CMROrganization: t.Type<CMROrganization> = t.recursion("CMROrganization", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Organization"),
                meta: CMROrganizationMeta
            }),
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [t.Type<Extension>, t.Type<CMROrganizationErgaenzendeAngaben>]
                    >,
                    t.Any
                >(
                    t.union([Extension, CMROrganizationErgaenzendeAngaben]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMROrganizationErgaenzendeAngaben,
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
                            t.Type<CMROrganizationInstitutionskennzeichen>,
                            t.Type<CMROrganizationBetriebsstaettennummer>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        CMROrganizationInstitutionskennzeichen,
                        CMROrganizationBetriebsstaettennummer
                    ]),
                    [
                        {
                            codec: CMROrganizationInstitutionskennzeichen,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code" }
                        },
                        {
                            codec: CMROrganizationBetriebsstaettennummer,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type.coding.code" }
                        }
                    ],
                    ["0", "*"]
                ),
                name: SCALARString,
                telecom: t.array(CMROrganizationTelecom),
                address: ReqArray<
                    t.UnionC<
                        [
                            t.Type<CMROrganizationStrassenanschrift>,
                            t.Type<CMROrganizationPostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([CMROrganizationStrassenanschrift, CMROrganizationPostfach]),
                    [
                        {
                            codec: CMROrganizationStrassenanschrift,
                            occurrence: ["0", "1"],
                            sliceBy: { path: "type", value: "both" }
                        },
                        {
                            codec: CMROrganizationPostfach,
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

export default CMROrganization;
