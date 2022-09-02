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
import { Literal, Excess, MaxArray, MinMaxArray } from "../../../../CustomTypes";

import SCALARCode from "../../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Organization"

/**
 * A reference to a code defined by a terminology system.
 */
export interface NFDOrganizationTypeCoding {
    system: string;
    version: string;
    code: string;
    display: string;
    id?: string;
}

export const NFDOrganizationTypeCoding: t.Type<NFDOrganizationTypeCoding> = t.recursion(
    "NFDOrganizationTypeCoding",
    () =>
        Excess(
            t.intersection([
                t.type({
                    system: SCALARUri,
                    version: SCALARString,
                    code: SCALARCode,
                    display: SCALARString
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
export interface NFDOrganizationStrassenanschrift {
    type: "both";
    city: string;
    id?: string;
}

export const NFDOrganizationStrassenanschrift: t.Type<NFDOrganizationStrassenanschrift> =
    t.recursion("NFDOrganizationStrassenanschrift", () =>
        Excess(
            t.intersection([
                t.type({
                    type: Literal("both"),
                    city: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
    );

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDOrganizationMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Organization|1.0.0">;
    id?: string;
}

export const NFDOrganizationMeta: t.Type<NFDOrganizationMeta> = t.recursion(
    "NFDOrganizationMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFD_Organization|1.0.0"
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
 * The kind(s) of organization that this is.
 */
export interface NFDOrganizationType {
    id?: string;
    coding?: Array<NFDOrganizationTypeCoding>;
    text?: string;
}

export const NFDOrganizationType: t.Type<NFDOrganizationType> = t.recursion(
    "NFDOrganizationType",
    () =>
        Excess(
            t.partial({
                id: SCALARString,
                coding: MaxArray(1, NFDOrganizationTypeCoding),
                text: SCALARString
            })
        )
);

interface NFDOrganization {
    resourceType: "Organization";
    meta: NFDOrganizationMeta;
    type: Array<NFDOrganizationType>;
    name: string;
    address: Array<NFDOrganizationStrassenanschrift>;
    id?: string;
}

const NFDOrganization: t.Type<NFDOrganization> = t.recursion("NFDOrganization", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Organization"),
                meta: NFDOrganizationMeta,
                type: MinMaxArray(1, 1, NFDOrganizationType),
                name: SCALARString,
                address: MinMaxArray(1, 1, NFDOrganizationStrassenanschrift)
            }),
            t.partial({
                id: SCALARString
            })
        ])
    )
);

export default NFDOrganization;
