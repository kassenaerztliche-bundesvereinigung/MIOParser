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
    MinArray,
    MinMaxArray,
    ValueSetCheck
} from "../../../../CustomTypes";

import SCALARInstant from "../../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../../Definitions/FHIR/4.0.1/Scalar/Uri";

import NFDxDPEBundleTypeVS from "../../../../../Definitions/KBV/PKA/1.0.0/ValueSet/NFDxDPEBundleType";
import Resource from "../../../../../Definitions/FHIR/4.0.1/Profile/Resource";
import Signature from "../../../../../Definitions/FHIR/4.0.1/Profile/Signature";

// Definition for URL: "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Bundle"

/**
 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export interface NFDxDPEBundleMeta {
    profile: Array<"https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Bundle|1.0.0">;
    id?: string;
}

export const NFDxDPEBundleMeta: t.Type<NFDxDPEBundleMeta> = t.recursion(
    "NFDxDPEBundleMeta",
    () =>
        Excess(
            t.intersection([
                t.type({
                    profile: MinMaxArray(
                        1,
                        1,
                        Literal(
                            "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_NFDxDPE_Bundle|1.0.0"
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
 * A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
 */
export interface NFDxDPEBundleIdentifier {
    type: {
        coding: {
            system?: string;
            version?: string;
            code?: NFDxDPEBundleTypeVS;
            display?: string;
            userSelected?: boolean;
        }[];
    };
    system: "urn:ietf:rfc:3986";
    value: string;
    id?: string;
}

export const NFDxDPEBundleIdentifier: t.Type<NFDxDPEBundleIdentifier> = t.recursion(
    "NFDxDPEBundleIdentifier",
    () =>
        Excess(
            t.intersection([
                t.type({
                    type: t.type({
                        coding: t.array(
                            t.partial({
                                system: t.string,
                                version: t.string,
                                code: ValueSetCheck<t.Type<NFDxDPEBundleTypeVS>>(
                                    NFDxDPEBundleTypeVS
                                ),
                                display: t.string,
                                userSelected: t.boolean
                            })
                        )
                    }),
                    system: Literal("urn:ietf:rfc:3986"),
                    value: SCALARString
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

/**
 * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 */
export interface NFDxDPEBundleEntry {
    fullUrl: string;
    resource: Resource;
    id?: string;
}

export const NFDxDPEBundleEntry: t.Type<NFDxDPEBundleEntry> = t.recursion(
    "NFDxDPEBundleEntry",
    () =>
        Excess(
            t.intersection([
                t.type({
                    fullUrl: SCALARUri,
                    resource: Resource
                }),
                t.partial({
                    id: SCALARString
                })
            ])
        )
);

interface NFDxDPEBundle {
    resourceType: "Bundle";
    meta: NFDxDPEBundleMeta;
    identifier: NFDxDPEBundleIdentifier;
    type: "document";
    timestamp: string;
    entry: Array<NFDxDPEBundleEntry>;
    id?: string;
    signature?: Signature;
}

const NFDxDPEBundle: t.Type<NFDxDPEBundle> = t.recursion("NFDxDPEBundle", () =>
    Excess(
        t.intersection([
            t.type({
                resourceType: Literal("Bundle"),
                meta: NFDxDPEBundleMeta,
                identifier: NFDxDPEBundleIdentifier,
                type: Literal("document"),
                timestamp: SCALARInstant,
                entry: MinArray(1, NFDxDPEBundleEntry)
            }),
            t.partial({
                id: SCALARString,
                signature: Signature
            })
        ])
    )
);

export default NFDxDPEBundle;
