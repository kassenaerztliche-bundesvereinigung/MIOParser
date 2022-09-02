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
    MinMaxArray,
    ReqArray,
    ExtensibleCheck,
    CustomReference
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import AdditionalComment from "../../../../Definitions/KBVBase/1.2.1/Extension/AdditionalComment";
import AddresstypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import ContactPoint from "../../../../Definitions/FHIR/4.0.1/Profile/ContactPoint";
import ContactentitytypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Contactentitytype";
import DatatypeContactpoint from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypeContactpoint";
import DatatypePostOfficeBox from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypePostOfficeBox";
import DatatypeStreetAddress from "../../../../Definitions/KBVBase/1.2.1/Profile/DatatypeStreetAddress";
import Extension from "../../../../Definitions/FHIR/4.0.1/Extension/Extension";
import GemRSAnlage8VS from "../../../../Definitions/KBVBase/1.2.1/ValueSet/GemRSAnlage8";
import HumanName from "../../../../Definitions/FHIR/4.0.1/Profile/HumanName";
import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";
import Narrative from "../../../../Definitions/FHIR/4.0.1/Profile/Narrative";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Resource from "../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Organization"

/**
 * A reference to a code defined by a terminology system.
 */
export interface OrganizationInstitutionskennzeichenTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    display: "Organisations-ID";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const OrganizationInstitutionskennzeichenTypeCoding: t.Type<OrganizationInstitutionskennzeichenTypeCoding> =
    t.recursion("OrganizationInstitutionskennzeichenTypeCoding", () =>
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
    );

/**
 * A reference to a code defined by a terminology system.
 */
export interface OrganizationBetriebsstaettennummerTypeCoding {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "BSNR";
    display: "Betriebsstättennummer";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const OrganizationBetriebsstaettennummerTypeCoding: t.Type<OrganizationBetriebsstaettennummerTypeCoding> =
    t.recursion("OrganizationBetriebsstaettennummerTypeCoding", () =>
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
    display: "National Insurance Payor Identifier (Payor)";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const OrganizationVKNRTypeCoding: t.Type<OrganizationVKNRTypeCoding> = t.recursion(
    "OrganizationVKNRTypeCoding",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("NIIP"),
                display: Literal("National Insurance Payor Identifier (Payor)")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
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
    display: "KZVAbrechnungsnummer";
    id?: string;
    version?: string;
    userSelected?: boolean;
}

export const OrganizationKZVAbrechnungsnummerTypeCoding: t.Type<OrganizationKZVAbrechnungsnummerTypeCoding> =
    t.recursion("OrganizationKZVAbrechnungsnummerTypeCoding", () =>
        t.intersection([
            t.type({
                system: Literal("http://fhir.de/CodeSystem/identifier-type-de-basis"),
                code: Literal("KZVA"),
                display: Literal("KZVAbrechnungsnummer")
            }),
            t.partial({
                id: SCALARString,
                version: SCALARString,
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
    telecom?: DatatypeContactpoint[];
    address?: (DatatypeStreetAddress | DatatypePostOfficeBox)[];
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
        telecom: t.array(DatatypeContactpoint),
        address: ReqArray<
            t.UnionC<[t.Type<DatatypeStreetAddress>, t.Type<DatatypePostOfficeBox>]>,
            t.Any
        >(
            t.union([DatatypeStreetAddress, DatatypePostOfficeBox]),
            [
                {
                    codec: DatatypeStreetAddress,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        path: "type",
                        value: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Street_Address"
                    }
                },
                {
                    codec: DatatypePostOfficeBox,
                    occurrence: ["0", "*"],
                    sliceBy: {
                        path: "type",
                        value: "https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Post_Office_Box"
                    }
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
