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

import SCALARDateTime from "../../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARPositiveInt from "../../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";

import ContactpointsystemVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Extension from "../../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../../Definitions/KBVBase/1.01.000/ValueSet/GemRSAnlage8";
import HumanName from "../../../../../Definitions/FHIR/4.0.1/Profile/HumanName";
import IdentifiertypeVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Iso21090ADXPprecinct from "../../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import Period from "../../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization_Screening_Laboratory"

/**
 * A reference to a code defined by a terminology system.
 */
export interface CMROrganizationScreeningLaboratoryInstitutionskennzeichenTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMROrganizationScreeningLaboratoryInstitutionskennzeichenTypeXXType: t.Type<CMROrganizationScreeningLaboratoryInstitutionskennzeichenTypeXXType> = t.recursion(
    "CMROrganizationScreeningLaboratoryInstitutionskennzeichenTypeXXType",
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
export interface CMROrganizationScreeningLaboratoryBetriebsstaettennummerTypeBSNRType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const CMROrganizationScreeningLaboratoryBetriebsstaettennummerTypeBSNRType: t.Type<CMROrganizationScreeningLaboratoryBetriebsstaettennummerTypeBSNRType> = t.recursion(
    "CMROrganizationScreeningLaboratoryBetriebsstaettennummerTypeBSNRType",
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
export interface CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse: t.Type<CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse",
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
export interface CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer: t.Type<CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer",
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
export interface CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz: t.Type<CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz",
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
export interface CMROrganizationScreeningLaboratoryPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const CMROrganizationScreeningLaboratoryPostfachLinePostfach: t.Type<CMROrganizationScreeningLaboratoryPostfachLinePostfach> = t.recursion(
    "CMROrganizationScreeningLaboratoryPostfachLinePostfach",
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
export interface CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssignerIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssignerIdentifier: t.Type<CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssignerIdentifier> = t.recursion(
    "CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssignerIdentifier",
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
export interface CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct";
    valueString: string;
    id?: string;
}

export const CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil: t.Type<CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil",
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
export interface CMROrganizationScreeningLaboratoryInstitutionskennzeichenType {
    coding: Array<CMROrganizationScreeningLaboratoryInstitutionskennzeichenTypeXXType>;
    id?: string;
    text?: string;
}

export const CMROrganizationScreeningLaboratoryInstitutionskennzeichenType: t.Type<CMROrganizationScreeningLaboratoryInstitutionskennzeichenType> = t.recursion(
    "CMROrganizationScreeningLaboratoryInstitutionskennzeichenType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        CMROrganizationScreeningLaboratoryInstitutionskennzeichenTypeXXType
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
export interface CMROrganizationScreeningLaboratoryBetriebsstaettennummerType {
    coding: Array<CMROrganizationScreeningLaboratoryBetriebsstaettennummerTypeBSNRType>;
    id?: string;
    text?: string;
}

export const CMROrganizationScreeningLaboratoryBetriebsstaettennummerType: t.Type<CMROrganizationScreeningLaboratoryBetriebsstaettennummerType> = t.recursion(
    "CMROrganizationScreeningLaboratoryBetriebsstaettennummerType",
    () =>
        Excess(
            t.intersection([
                t.type({
                    coding: MinArray(
                        1,
                        CMROrganizationScreeningLaboratoryBetriebsstaettennummerTypeBSNRType
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
export interface CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssigner {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssignerIdentifier;
}

export const CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssigner: t.Type<CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssigner> = t.recursion(
    "CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssigner",
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
                    identifier: CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssignerIdentifier
                })
            ])
        )
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface CMROrganizationScreeningLaboratoryStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse
        | CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer
        | CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const CMROrganizationScreeningLaboratoryStrassenanschriftLine: t.Type<CMROrganizationScreeningLaboratoryStrassenanschriftLine> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschriftLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<
                                CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse
                            >,
                            t.Type<
                                CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer
                            >,
                            t.Type<
                                CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz
                            >
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse,
                        CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer,
                        CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMROrganizationScreeningLaboratoryStrassenanschriftLineStrasse,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                            }
                        },
                        {
                            codec: CMROrganizationScreeningLaboratoryStrassenanschriftLineHausnummer,
                            occurrence: ["0", "1"],
                            sliceBy: {
                                path: "url",
                                value:
                                    "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                            }
                        },
                        {
                            codec: CMROrganizationScreeningLaboratoryStrassenanschriftLineAdresszusatz,
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
 * Time period when address was/is in use.
 */
export interface CMROrganizationScreeningLaboratoryStrassenanschriftPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const CMROrganizationScreeningLaboratoryStrassenanschriftPeriod: t.Type<CMROrganizationScreeningLaboratoryStrassenanschriftPeriod> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschriftPeriod",
    () =>
        Excess(
            t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
        )
);

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface CMROrganizationScreeningLaboratoryPostfachLine {
    id?: string;
    extension?: (Extension | CMROrganizationScreeningLaboratoryPostfachLinePostfach)[];
    value?: string;
}

export const CMROrganizationScreeningLaboratoryPostfachLine: t.Type<CMROrganizationScreeningLaboratoryPostfachLine> = t.recursion(
    "CMROrganizationScreeningLaboratoryPostfachLine",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                extension: ReqArray<
                    t.UnionC<
                        [
                            t.Type<Extension>,
                            t.Type<CMROrganizationScreeningLaboratoryPostfachLinePostfach>
                        ]
                    >,
                    t.Any
                >(
                    t.union([
                        Extension,
                        CMROrganizationScreeningLaboratoryPostfachLinePostfach
                    ]),
                    [
                        {
                            codec: Extension,
                            occurrence: ["0", "*"],
                            sliceBy: { path: "url" }
                        },
                        {
                            codec: CMROrganizationScreeningLaboratoryPostfachLinePostfach,
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
 * Time period when address was/is in use.
 */
export interface CMROrganizationScreeningLaboratoryPostfachPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const CMROrganizationScreeningLaboratoryPostfachPeriod: t.Type<CMROrganizationScreeningLaboratoryPostfachPeriod> = t.recursion(
    "CMROrganizationScreeningLaboratoryPostfachPeriod",
    () =>
        Excess(
            t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
        )
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface CMROrganizationScreeningLaboratoryInstitutionskennzeichen {
    type: CMROrganizationScreeningLaboratoryInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: Reference;
}

export const CMROrganizationScreeningLaboratoryInstitutionskennzeichen: t.Type<CMROrganizationScreeningLaboratoryInstitutionskennzeichen> = t.recursion(
    "CMROrganizationScreeningLaboratoryInstitutionskennzeichen",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: CMROrganizationScreeningLaboratoryInstitutionskennzeichenType,
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
export interface CMROrganizationScreeningLaboratoryBetriebsstaettennummer {
    type: CMROrganizationScreeningLaboratoryBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssigner;
}

export const CMROrganizationScreeningLaboratoryBetriebsstaettennummer: t.Type<CMROrganizationScreeningLaboratoryBetriebsstaettennummer> = t.recursion(
    "CMROrganizationScreeningLaboratoryBetriebsstaettennummer",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: CMROrganizationScreeningLaboratoryBetriebsstaettennummerType,
                    system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString,
                    use: Literal("official"),
                    period: Period,
                    assigner: CMROrganizationScreeningLaboratoryBetriebsstaettennummerAssigner
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface CMROrganizationScreeningLaboratoryStrassenanschrift {
    type: "both";
    id?: string;
    extension?: (
        | Extension
        | CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil
    )[];
    text?: string;
    _line?: Array<CMROrganizationScreeningLaboratoryStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: CMROrganizationScreeningLaboratoryStrassenanschriftPeriod;
}

export const CMROrganizationScreeningLaboratoryStrassenanschrift: t.Type<CMROrganizationScreeningLaboratoryStrassenanschrift> = t.recursion(
    "CMROrganizationScreeningLaboratoryStrassenanschrift",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both")
                }),
                t.partial({
                    id: SCALARString,
                    extension: ReqArray<
                        t.UnionC<
                            [
                                t.Type<Extension>,
                                t.Type<
                                    CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            Extension,
                            CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil
                        ]),
                        [
                            {
                                codec: Extension,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "url" }
                            },
                            {
                                codec: CMROrganizationScreeningLaboratoryStrassenanschriftStadtteil,
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
                    _line: MaxArray(
                        2,
                        CMROrganizationScreeningLaboratoryStrassenanschriftLine
                    ),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                    period: CMROrganizationScreeningLaboratoryStrassenanschriftPeriod
                })
            ])
        )
);

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface CMROrganizationScreeningLaboratoryPostfach {
    type: "postal";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    text?: string;
    _line?: Array<CMROrganizationScreeningLaboratoryPostfachLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: CMROrganizationScreeningLaboratoryPostfachPeriod;
}

export const CMROrganizationScreeningLaboratoryPostfach: t.Type<CMROrganizationScreeningLaboratoryPostfach> = t.recursion(
    "CMROrganizationScreeningLaboratoryPostfach",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("postal")
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
                    _line: MaxArray(2, CMROrganizationScreeningLaboratoryPostfachLine),
                    line: MaxArray(2, SCALARString),
                    city: SCALARString,
                    state: SCALARString,
                    postalCode: SCALARString,
                    country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                    period: CMROrganizationScreeningLaboratoryPostfachPeriod
                })
            ])
        )
);

/**
 * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
 */
export interface CMROrganizationScreeningLaboratoryContactTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

export const CMROrganizationScreeningLaboratoryContactTelecom: t.Type<CMROrganizationScreeningLaboratoryContactTelecom> = t.recursion(
    "CMROrganizationScreeningLaboratoryContactTelecom",
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
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface CMROrganizationScreeningLaboratoryMeta {
    profile: Array<
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization_Screening_Laboratory|1.0.0"
    >;
    id?: string;
}

export const CMROrganizationScreeningLaboratoryMeta: t.Type<CMROrganizationScreeningLaboratoryMeta> = t.recursion(
    "CMROrganizationScreeningLaboratoryMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_CMR_Organization_Screening_Laboratory|1.0.0"
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
 * Contact for the organization for a certain purpose.
 */
export interface CMROrganizationScreeningLaboratoryContact {
    id?: string;
    name?: HumanName;
    telecom?: CMROrganizationScreeningLaboratoryContactTelecom[];
}

export const CMROrganizationScreeningLaboratoryContact: t.Type<CMROrganizationScreeningLaboratoryContact> = t.recursion(
    "CMROrganizationScreeningLaboratoryContact",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                name: HumanName,
                telecom: t.array(CMROrganizationScreeningLaboratoryContactTelecom)
            })
        )
);

interface CMROrganizationScreeningLaboratory {
    resourceType: "Organization";
    meta: CMROrganizationScreeningLaboratoryMeta;
    name: string;
    address: Array<
        | CMROrganizationScreeningLaboratoryStrassenanschrift
        | CMROrganizationScreeningLaboratoryPostfach
    >;
    id?: string;
    extension?: Extension[];
    identifier?: (
        | CMROrganizationScreeningLaboratoryInstitutionskennzeichen
        | CMROrganizationScreeningLaboratoryBetriebsstaettennummer
    )[];
    contact?: CMROrganizationScreeningLaboratoryContact[];
}

const CMROrganizationScreeningLaboratory: t.Type<CMROrganizationScreeningLaboratory> = t.recursion(
    "CMROrganizationScreeningLaboratory",
    () =>
        Excess(
            t.intersection([
                t.type({
                    resourceType: Literal("Organization"),
                    meta: CMROrganizationScreeningLaboratoryMeta,
                    name: SCALARString,
                    address: ReqArray<
                        t.UnionC<
                            [
                                t.Type<
                                    CMROrganizationScreeningLaboratoryStrassenanschrift
                                >,
                                t.Type<CMROrganizationScreeningLaboratoryPostfach>
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMROrganizationScreeningLaboratoryStrassenanschrift,
                            CMROrganizationScreeningLaboratoryPostfach
                        ]),
                        [
                            {
                                codec: CMROrganizationScreeningLaboratoryStrassenanschrift,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type", value: "both" }
                            },
                            {
                                codec: CMROrganizationScreeningLaboratoryPostfach,
                                occurrence: ["0", "1"],
                                sliceBy: { path: "type", value: "postal" }
                            }
                        ],
                        ["1", "1"]
                    )
                }),
                t.partial({
                    id: SCALARString,
                    extension: t.array(Extension),
                    identifier: ReqArray<
                        t.UnionC<
                            [
                                t.Type<
                                    CMROrganizationScreeningLaboratoryInstitutionskennzeichen
                                >,
                                t.Type<
                                    CMROrganizationScreeningLaboratoryBetriebsstaettennummer
                                >
                            ]
                        >,
                        t.Any
                    >(
                        t.union([
                            CMROrganizationScreeningLaboratoryInstitutionskennzeichen,
                            CMROrganizationScreeningLaboratoryBetriebsstaettennummer
                        ]),
                        [
                            {
                                codec: CMROrganizationScreeningLaboratoryInstitutionskennzeichen,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "type.coding.code", value: "XX" }
                            },
                            {
                                codec: CMROrganizationScreeningLaboratoryBetriebsstaettennummer,
                                occurrence: ["0", "*"],
                                sliceBy: { path: "type.coding.code", value: "BSNR" }
                            }
                        ],
                        ["0", "*"]
                    ),
                    contact: t.array(CMROrganizationScreeningLaboratoryContact)
                })
            ])
        )
);

export default CMROrganizationScreeningLaboratory;
