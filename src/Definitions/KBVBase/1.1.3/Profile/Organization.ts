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
    MaxArray,
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AdditionalComment from "../../../../Definitions/KBVBase/1.1.3/Extension/AdditionalComment";
import AddresstypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";
import ContactentitytypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactentitytype";
import ContactpointsystemVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointsystem";
import ContactpointuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactpointuse";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../Definitions/KBVBase/1.1.3/ValueSet/GemRSAnlage8";
import HumanName from "../../../../Definitions/FHIR/4.0.1/Profile/HumanName";
import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Iso21090ADXPprecinct from "../../../../Definitions/FHIR/4.0.1/Extension/Iso21090ADXPprecinct";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Organization"

/**
* Strassenname (ohne Hausnummer)
Bei Angabe einer Strasse in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface OrganizationStrassenanschriftLineStrasse {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName";
    valueString: string;
    id?: string;
}

export const OrganizationStrassenanschriftLineStrasse: t.Type<OrganizationStrassenanschriftLineStrasse> =
    t.recursion("OrganizationStrassenanschriftLineStrasse", () =>
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
    );

/**
* Hausnummer, sowie Zusätze (Appartmentnummer, Etage...)
Bei Angabe einer Hausnummer in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface OrganizationStrassenanschriftLineHausnummer {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber";
    valueString: string;
    id?: string;
}

export const OrganizationStrassenanschriftLineHausnummer: t.Type<OrganizationStrassenanschriftLineHausnummer> =
    t.recursion("OrganizationStrassenanschriftLineHausnummer", () =>
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
    );

/**
* Zusätzliche Informationen, wie z.B. "3. Etage", "Appartment C"
Bei Angabe einer Zusatzinformation in dieser Extension muss diese auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
*/
export interface OrganizationStrassenanschriftLineAdresszusatz {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-additionalLocator";
    valueString: string;
    id?: string;
}

export const OrganizationStrassenanschriftLineAdresszusatz: t.Type<OrganizationStrassenanschriftLineAdresszusatz> =
    t.recursion("OrganizationStrassenanschriftLineAdresszusatz", () =>
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
    );

/**
* Postfach-Adresse.
Bei Angabe eines Postfaches in dieser Extension muss das Postfach auch in Address.line angegeben werden um die Interoperabilität mit Systemen zu gewährleisten, die diese Extension nicht verwenden.
Eine Postfach-Adresse darf nicht in Verbindung mit Address.type "physical" oder "both" verwendet werden.
*/
export interface OrganizationPostfachLinePostfach {
    url: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox";
    valueString: string;
    id?: string;
}

export const OrganizationPostfachLinePostfach: t.Type<OrganizationPostfachLinePostfach> =
    t.recursion("OrganizationPostfachLinePostfach", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface OrganizationInstitutionskennzeichenTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const OrganizationInstitutionskennzeichenTypeCoding: t.Type<OrganizationInstitutionskennzeichenTypeCoding> =
    t.recursion("OrganizationInstitutionskennzeichenTypeCoding", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface OrganizationBetriebsstaettennummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const OrganizationBetriebsstaettennummerTypeCoding: t.Type<OrganizationBetriebsstaettennummerTypeCoding> =
    t.recursion("OrganizationBetriebsstaettennummerTypeCoding", () =>
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
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface OrganizationBetriebsstaettennummerAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const OrganizationBetriebsstaettennummerAssignerReferenceIdentifier: t.Type<OrganizationBetriebsstaettennummerAssignerReferenceIdentifier> =
    t.recursion("OrganizationBetriebsstaettennummerAssignerReferenceIdentifier", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface OrganizationVKNRTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "NIIP";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const OrganizationVKNRTypeCoding: t.Type<OrganizationVKNRTypeCoding> = t.recursion(
    "OrganizationVKNRTypeCoding",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("NIIP")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
                display: SCALARString,
                userSelected: SCALARBoolean
            })
        ])
);

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface OrganizationVKNRAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const OrganizationVKNRAssignerReferenceIdentifier: t.Type<OrganizationVKNRAssignerReferenceIdentifier> =
    t.recursion("OrganizationVKNRAssignerReferenceIdentifier", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface OrganizationKZVAbrechnungsnummerTypeCoding {
    system: "http://fhir.de/CodeSystem/identifier-type-de-basis";
    code: "KZVA";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const OrganizationKZVAbrechnungsnummerTypeCoding: t.Type<OrganizationKZVAbrechnungsnummerTypeCoding> =
    t.recursion("OrganizationKZVAbrechnungsnummerTypeCoding", () =>
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
    );

/**
 * An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.
 */
export interface OrganizationKZVAbrechnungsnummerAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const OrganizationKZVAbrechnungsnummerAssignerReferenceIdentifier: t.Type<OrganizationKZVAbrechnungsnummerAssignerReferenceIdentifier> =
    t.recursion("OrganizationKZVAbrechnungsnummerAssignerReferenceIdentifier", () =>
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
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface OrganizationInstitutionskennzeichenType {
    coding: Array<OrganizationInstitutionskennzeichenTypeCoding>;
    id?: string;
    text?: string;
}

export const OrganizationInstitutionskennzeichenType: t.Type<OrganizationInstitutionskennzeichenType> =
    t.recursion("OrganizationInstitutionskennzeichenType", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, OrganizationInstitutionskennzeichenTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface OrganizationBetriebsstaettennummerType {
    coding: Array<OrganizationBetriebsstaettennummerTypeCoding>;
    id?: string;
    text?: string;
}

export const OrganizationBetriebsstaettennummerType: t.Type<OrganizationBetriebsstaettennummerType> =
    t.recursion("OrganizationBetriebsstaettennummerType", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, OrganizationBetriebsstaettennummerTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Organization that issued/manages the identifier.
 */
export interface OrganizationBetriebsstaettennummerAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: OrganizationBetriebsstaettennummerAssignerReferenceIdentifier;
}

export const OrganizationBetriebsstaettennummerAssignerReference: t.Type<OrganizationBetriebsstaettennummerAssignerReference> =
    t.recursion("OrganizationBetriebsstaettennummerAssignerReference", () =>
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
                identifier: OrganizationBetriebsstaettennummerAssignerReferenceIdentifier
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface OrganizationVKNRType {
    coding: Array<OrganizationVKNRTypeCoding>;
    id?: string;
    text?: string;
}

export const OrganizationVKNRType: t.Type<OrganizationVKNRType> = t.recursion(
    "OrganizationVKNRType",
    () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, OrganizationVKNRTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
);

/**
 * Organization that issued/manages the identifier.
 */
export interface OrganizationVKNRAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: OrganizationVKNRAssignerReferenceIdentifier;
}

export const OrganizationVKNRAssignerReference: t.Type<OrganizationVKNRAssignerReference> =
    t.recursion("OrganizationVKNRAssignerReference", () =>
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
                identifier: OrganizationVKNRAssignerReferenceIdentifier
            })
        ])
    );

/**
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface OrganizationKZVAbrechnungsnummerType {
    coding: Array<OrganizationKZVAbrechnungsnummerTypeCoding>;
    id?: string;
    text?: string;
}

export const OrganizationKZVAbrechnungsnummerType: t.Type<OrganizationKZVAbrechnungsnummerType> =
    t.recursion("OrganizationKZVAbrechnungsnummerType", () =>
        t.intersection([
            t.type({
                coding: MinMaxArray(1, 1, OrganizationKZVAbrechnungsnummerTypeCoding)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
    );

/**
 * Organization that issued/manages the identifier.
 */
export interface OrganizationKZVAbrechnungsnummerAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: OrganizationKZVAbrechnungsnummerAssignerReferenceIdentifier;
}

export const OrganizationKZVAbrechnungsnummerAssignerReference: t.Type<OrganizationKZVAbrechnungsnummerAssignerReference> =
    t.recursion("OrganizationKZVAbrechnungsnummerAssignerReference", () =>
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
                identifier: OrganizationKZVAbrechnungsnummerAssignerReferenceIdentifier
            })
        ])
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface OrganizationStrassenanschriftLine {
    id?: string;
    extension?: (
        | Extension
        | OrganizationStrassenanschriftLineStrasse
        | OrganizationStrassenanschriftLineHausnummer
        | OrganizationStrassenanschriftLineAdresszusatz
    )[];
    value?: string;
}

export const OrganizationStrassenanschriftLine: t.Type<OrganizationStrassenanschriftLine> =
    t.recursion("OrganizationStrassenanschriftLine", () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<
                    [
                        t.Type<Extension>,
                        t.Type<OrganizationStrassenanschriftLineStrasse>,
                        t.Type<OrganizationStrassenanschriftLineHausnummer>,
                        t.Type<OrganizationStrassenanschriftLineAdresszusatz>
                    ]
                >,
                t.Any
            >(
                t.union([
                    Extension,
                    OrganizationStrassenanschriftLineStrasse,
                    OrganizationStrassenanschriftLineHausnummer,
                    OrganizationStrassenanschriftLineAdresszusatz
                ]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: OrganizationStrassenanschriftLineStrasse,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
                        }
                    },
                    {
                        codec: OrganizationStrassenanschriftLineHausnummer,
                        occurrence: ["0", "1"],
                        sliceBy: {
                            path: "url",
                            value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
                        }
                    },
                    {
                        codec: OrganizationStrassenanschriftLineAdresszusatz,
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
    );

/**
 * Time period when address was/is in use.
 */
export interface OrganizationStrassenanschriftPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const OrganizationStrassenanschriftPeriod: t.Type<OrganizationStrassenanschriftPeriod> =
    t.recursion("OrganizationStrassenanschriftPeriod", () =>
        t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
    );

/**
* Diese Komponente kann Straßennamen, Hausnummer, Appartmentnummer, Postfach, c/o sowie weitere Zustellungshinweise enthalten. Die Informationen können in mehrere line-Komponenten aufgeteilt werden.
Bei Verwendung der Extensions, um Straße, Hausnnummer und Postleitzahl strukturiert zu übermitteln, müssen diese Informationen stets vollständig auch in der line-Komponente, die sie erweitern, enthalten sein, um es Systemen, die diese Extensions nicht verwenden zu ermöglichen, auf diese Informationen zugreifen zu können.
*/
export interface OrganizationPostfachLine {
    id?: string;
    extension?: (Extension | OrganizationPostfachLinePostfach)[];
    value?: string;
}

export const OrganizationPostfachLine: t.Type<OrganizationPostfachLine> = t.recursion(
    "OrganizationPostfachLine",
    () =>
        t.partial({
            id: SCALARString,
            extension: ReqArray<
                t.UnionC<[t.Type<Extension>, t.Type<OrganizationPostfachLinePostfach>]>,
                t.Any
            >(
                t.union([Extension, OrganizationPostfachLinePostfach]),
                [
                    {
                        codec: Extension,
                        occurrence: ["0", "*"],
                        sliceBy: { path: "url" }
                    },
                    {
                        codec: OrganizationPostfachLinePostfach,
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
);

/**
 * Time period when address was/is in use.
 */
export interface OrganizationPostfachPeriod {
    id?: string;
    start?: string;
    end?: string;
}

export const OrganizationPostfachPeriod: t.Type<OrganizationPostfachPeriod> = t.recursion(
    "OrganizationPostfachPeriod",
    () => t.partial({ id: SCALARString, start: SCALARDateTime, end: SCALARDateTime })
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface OrganizationInstitutionskennzeichen {
    type: OrganizationInstitutionskennzeichenType;
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: Reference;
}

export const OrganizationInstitutionskennzeichen: t.Type<OrganizationInstitutionskennzeichen> =
    t.recursion("OrganizationInstitutionskennzeichen", () =>
        t.intersection([
            t.type({
                type: OrganizationInstitutionskennzeichenType,
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
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface OrganizationBetriebsstaettennummer {
    type: OrganizationBetriebsstaettennummerType;
    system: "https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: OrganizationBetriebsstaettennummerAssignerReference;
}

export const OrganizationBetriebsstaettennummer: t.Type<OrganizationBetriebsstaettennummer> =
    t.recursion("OrganizationBetriebsstaettennummer", () =>
        t.intersection([
            t.type({
                type: OrganizationBetriebsstaettennummerType,
                system: Literal("https://fhir.kbv.de/NamingSystem/KBV_NS_Base_BSNR"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("official"),
                period: Period,
                assigner: OrganizationBetriebsstaettennummerAssignerReference
            })
        ])
    );

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface OrganizationVKNR {
    type: OrganizationVKNRType;
    system: "http://fhir.de/NamingSystem/kbv/vknr";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: OrganizationVKNRAssignerReference;
}

export const OrganizationVKNR: t.Type<OrganizationVKNR> = t.recursion(
    "OrganizationVKNR",
    () =>
        t.intersection([
            t.type({
                type: OrganizationVKNRType,
                system: Literal("http://fhir.de/NamingSystem/kbv/vknr"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("official"),
                period: Period,
                assigner: OrganizationVKNRAssignerReference
            })
        ])
);

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface OrganizationKZVAbrechnungsnummer {
    type: OrganizationKZVAbrechnungsnummerType;
    system: "http://fhir.de/NamingSystem/kzbv/kzvabrechnungsnummer";
    value: string;
    id?: string;
    use?: "official";
    period?: Period;
    assigner?: OrganizationKZVAbrechnungsnummerAssignerReference;
}

export const OrganizationKZVAbrechnungsnummer: t.Type<OrganizationKZVAbrechnungsnummer> =
    t.recursion("OrganizationKZVAbrechnungsnummer", () =>
        t.intersection([
            t.type({
                type: OrganizationKZVAbrechnungsnummerType,
                system: Literal("http://fhir.de/NamingSystem/kzbv/kzvabrechnungsnummer"),
                value: SCALARString
            }),
            t.partial({
                id: SCALARString,
                use: Literal("official"),
                period: Period,
                assigner: OrganizationKZVAbrechnungsnummerAssignerReference
            })
        ])
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface OrganizationStrassenanschrift {
    type: "both";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<OrganizationStrassenanschriftLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: OrganizationStrassenanschriftPeriod;
}

export const OrganizationStrassenanschrift: t.Type<OrganizationStrassenanschrift> =
    t.recursion("OrganizationStrassenanschrift", () =>
        t.intersection([
            t.type({
                type: Literal("both")
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
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(2, OrganizationStrassenanschriftLine),
                line: MaxArray(2, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: OrganizationStrassenanschriftPeriod
            })
        ])
    );

/**
* Eine Adresse gemäß postalischer Konventionen (im Gegensatz zu bspw. GPS-Koordinaten). Die Adresse kann sowohl zur Zustellung von Postsendungen oder zum Aufsuchen von Orten, die keine gültige Postadresse haben, verwendet werden.

Die verwendeten Extensions in diesem Profil bilden die Struktur der Adresse ab, wie sie im VSDM-Format der elektronischen Versichertenkarte verwendet wird.

Insbesondere bei ausländischen Adresse oder Adressen, die nicht durch Einlesen einer elektronischen Versichertenkarte erfasst wurden, sind abweichende Strukturen möglich. Die Verwendung der Extensions ist nicht verpflichtend.
*/
export interface OrganizationPostfach {
    type: "postal";
    id?: string;
    extension?: (Extension | Iso21090ADXPprecinct)[];
    use?: AddressuseVS;
    text?: string;
    _line?: Array<OrganizationPostfachLine>;
    line?: Array<string>;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: OrganizationPostfachPeriod;
}

export const OrganizationPostfach: t.Type<OrganizationPostfach> = t.recursion(
    "OrganizationPostfach",
    () =>
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
                                value: "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct"
                            }
                        }
                    ],
                    ["0", "*"]
                ),
                use: AddressuseVS,
                text: SCALARString,
                _line: MaxArray(2, OrganizationPostfachLine),
                line: MaxArray(2, SCALARString),
                city: SCALARString,
                state: SCALARString,
                postalCode: SCALARString,
                country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
                period: OrganizationPostfachPeriod
            })
        ])
);

/**
 * Visiting or postal addresses for the contact.
 */
export interface OrganizationContactAddress {
    id?: string;
    use?: AddressuseVS;
    type?: AddresstypeVS;
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: GemRSAnlage8VS;
    period?: Period;
}

export const OrganizationContactAddress: t.Type<OrganizationContactAddress> = t.recursion(
    "OrganizationContactAddress",
    () =>
        t.partial({
            id: SCALARString,
            use: AddressuseVS,
            type: AddresstypeVS,
            text: SCALARString,
            line: t.array(SCALARString),
            city: SCALARString,
            district: SCALARString,
            state: SCALARString,
            postalCode: SCALARString,
            country: ExtensibleCheck<t.Type<GemRSAnlage8VS>>(GemRSAnlage8VS),
            period: Period
        })
);

/**
 * A contact detail for the organization.
 */
export interface OrganizationTelecom {
    system: ContactpointsystemVS;
    value: string;
    id?: string;
    use?: ContactpointuseVS;
    rank?: number;
    period?: Period;
}

export const OrganizationTelecom: t.Type<OrganizationTelecom> = t.recursion(
    "OrganizationTelecom",
    () =>
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
);

/**
 * Contact for the organization for a certain purpose.
 */
export interface OrganizationContact {
    id?: string;
    purpose?: ContactentitytypeVS;
    name?: HumanName;
    telecom?: ContactPoint[];
    address?: OrganizationContactAddress;
}

export const OrganizationContact: t.Type<OrganizationContact> = t.recursion(
    "OrganizationContact",
    () =>
        t.partial({
            id: SCALARString,
            purpose: ExtensibleCheck<t.Type<ContactentitytypeVS>>(ContactentitytypeVS),
            name: HumanName,
            telecom: t.array(ContactPoint),
            address: OrganizationContactAddress
        })
);

interface Organization {
    resourceType?: "Organization";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    extension?: (Extension | AdditionalComment)[];
    identifier?: (
        | OrganizationInstitutionskennzeichen
        | OrganizationBetriebsstaettennummer
        | OrganizationVKNR
        | OrganizationKZVAbrechnungsnummer
    )[];
    active?: boolean;
    type?: CodeableConcept[];
    name?: string;
    alias?: string[];
    telecom?: OrganizationTelecom[];
    address?: (OrganizationStrassenanschrift | OrganizationPostfach)[];
    partOf?: Reference;
    contact?: OrganizationContact[];
    endpoint?: Reference[];
}

const Organization: t.Type<Organization> = t.recursion("Organization", () =>
    t.partial({
        resourceType: Literal("Organization"),
        id: SCALARString,
        meta: Meta,
        implicitRules: SCALARUri,
        language: SCALARCode,
        text: Narrative,
        contained: t.array(Resource),
        extension: ReqArray<
            t.UnionC<[t.Type<Extension>, t.Type<AdditionalComment>]>,
            t.Any
        >(
            t.union([Extension, AdditionalComment]),
            [
                { codec: Extension, occurrence: ["0", "*"], sliceBy: { path: "url" } },
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
                    t.Type<OrganizationInstitutionskennzeichen>,
                    t.Type<OrganizationBetriebsstaettennummer>,
                    t.Type<OrganizationVKNR>,
                    t.Type<OrganizationKZVAbrechnungsnummer>
                ]
            >,
            t.Any
        >(
            t.union([
                OrganizationInstitutionskennzeichen,
                OrganizationBetriebsstaettennummer,
                OrganizationVKNR,
                OrganizationKZVAbrechnungsnummer
            ]),
            [
                {
                    codec: OrganizationInstitutionskennzeichen,
                    occurrence: ["0", "*"],
                    sliceBy: { path: "type.coding.code", value: "XX" }
                },
                {
                    codec: OrganizationBetriebsstaettennummer,
                    occurrence: ["0", "*"],
                    sliceBy: { path: "type.coding.code", value: "BSNR" }
                },
                {
                    codec: OrganizationVKNR,
                    occurrence: ["0", "*"],
                    sliceBy: { path: "type.coding.code", value: "NIIP" }
                },
                {
                    codec: OrganizationKZVAbrechnungsnummer,
                    occurrence: ["0", "1"],
                    sliceBy: { path: "type.coding.code", value: "KZVA" }
                }
            ],
            ["0", "*"]
        ),
        active: SCALARBoolean,
        type: t.array(CodeableConcept),
        name: SCALARString,
        alias: t.array(SCALARString),
        telecom: t.array(OrganizationTelecom),
        address: ReqArray<
            t.UnionC<
                [t.Type<OrganizationStrassenanschrift>, t.Type<OrganizationPostfach>]
            >,
            t.Any
        >(
            t.union([OrganizationStrassenanschrift, OrganizationPostfach]),
            [
                {
                    codec: OrganizationStrassenanschrift,
                    occurrence: ["0", "1"],
                    sliceBy: { path: "type", value: "both" }
                },
                {
                    codec: OrganizationPostfach,
                    occurrence: ["0", "1"],
                    sliceBy: { path: "type", value: "postal" }
                }
            ],
            ["0", "*"]
        ),
        partOf: Reference,
        contact: t.array(OrganizationContact),
        endpoint: t.array(Reference)
    })
);

export default Organization;
