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
import { Literal, MinArray } from "../../../CustomTypes";
import SCALARBoolean from "../../../../Definitions/FHIR/4.0.1/Scalar/Boolean";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";

import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://fhir.de/StructureDefinition/identifier-iknr"

/**
 * A reference to a code defined by a terminology system.
 */
export interface IdentifieriknrTypeXXType {
    system: "http://terminology.hl7.org/CodeSystem/v2-0203";
    code: "XX";
    id?: string;
    version?: string;
    display?: string;
    userSelected?: boolean;
}

export const IdentifieriknrTypeXXType: t.Type<IdentifieriknrTypeXXType> = t.recursion(
    "IdentifieriknrTypeXXType",
    () =>
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
 * A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
 */
export interface IdentifieriknrType {
    coding: Array<IdentifieriknrTypeXXType>;
    id?: string;
    text?: string;
}

export const IdentifieriknrType: t.Type<IdentifieriknrType> = t.recursion(
    "IdentifieriknrType",
    () =>
        t.intersection([
            t.type({
                coding: MinArray(1, IdentifieriknrTypeXXType)
            }),
            t.partial({
                id: SCALARString,
                text: SCALARString
            })
        ])
);

interface Identifieriknr {
    system: "http://fhir.de/NamingSystem/arge-ik/iknr";
    value: string;
    resourceType?: "Identifier";
    id?: string;
    use?: "official";
    type?: IdentifieriknrType;
    period?: Period;
    assigner?: Reference;
}

const Identifieriknr: t.Type<Identifieriknr> = t.recursion("Identifieriknr", () =>
    t.intersection([
        t.type({
            system: Literal("http://fhir.de/NamingSystem/arge-ik/iknr"),
            value: SCALARString
        }),
        t.partial({
            resourceType: Literal("Identifier"),
            id: SCALARString,
            use: Literal("official"),
            type: IdentifieriknrType,
            period: Period,
            assigner: Reference
        })
    ])
);

export default Identifieriknr;
