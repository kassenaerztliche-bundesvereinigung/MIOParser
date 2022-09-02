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
    ExtensibleCheck,
    MinArray,
    CustomReference
} from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "http://fhir.de/StructureDefinition/identifier-efn"

/**
 * A reference to a code defined by a terminology system.
 */
export interface IdentifierefnTypeDNType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "DN";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const IdentifierefnTypeDNType: t.Type<IdentifierefnTypeDNType> = t.recursion(
    "IdentifierefnTypeDNType",
    () =>
        t.intersection([
            t.type({
                system: Literal("http://terminology.hl7.org/CodeSystem/v2-0203"),
                code: Literal("DN")
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
export interface IdentifierefnAssignerReferenceIdentifier {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    period?: Period;
    assigner?: Reference;
}

export const IdentifierefnAssignerReferenceIdentifier: t.Type<IdentifierefnAssignerReferenceIdentifier> =
    t.recursion("IdentifierefnAssignerReferenceIdentifier", () =>
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
export interface IdentifierefnType {
    coding: Array<IdentifierefnTypeDNType>;
    id?: string;
    text?: string;
}

export const IdentifierefnType: t.Type<IdentifierefnType> = t.recursion(
    "IdentifierefnType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, IdentifierefnTypeDNType)
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
export interface IdentifierefnAssignerReference {
    display: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: IdentifierefnAssignerReferenceIdentifier;
}

export const IdentifierefnAssignerReference: t.Type<IdentifierefnAssignerReference> =
    t.recursion("IdentifierefnAssignerReference", () =>
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
                identifier: IdentifierefnAssignerReferenceIdentifier
            })
        ])
    );

interface Identifierefn {
    system: "http://fhir.de/NamingSystem/bundesaerztekammer/efn";
    value: string;
    id?: string;
    use?: "official";
    type?: IdentifierefnType;
    period?: Period;
    assigner?: IdentifierefnAssignerReference;
}

const Identifierefn: t.Type<Identifierefn> = t.recursion("Identifierefn", () =>
    t.intersection([
        t.type({
            system: Literal("http://fhir.de/NamingSystem/bundesaerztekammer/efn"),
            value: SCALARString
        }),
        t.partial({
            id: SCALARString,
            use: Literal("official"),
            type: IdentifierefnType,
            period: Period,
            assigner: IdentifierefnAssignerReference
        })
    ])
);

export default Identifierefn;
