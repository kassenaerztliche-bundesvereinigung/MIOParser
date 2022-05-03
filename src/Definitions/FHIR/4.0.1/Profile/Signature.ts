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
import SCALARBase64Binary from "../../../../Definitions/FHIR/4.0.1/Scalar/Base64Binary";

import SCALARInstant from "../../../../Definitions/FHIR/4.0.1/Scalar/Instant";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import MimetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Mimetypes";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Signature"

interface Signature {
    type: Array<Coding>;
    when: string;
    who: Reference;
    resourceType?: "Signature";
    id?: string;
    onBehalfOf?: Reference;
    targetFormat?: MimetypesVS;
    sigFormat?: MimetypesVS;
    data?: string;
}

const Signature: t.Type<Signature> = t.recursion("Signature", () =>
    t.intersection([
        t.type({
            type: MinArray(1, Coding),
            when: SCALARInstant,
            who: Reference
        }),
        t.partial({
            resourceType: Literal("Signature"),
            id: SCALARString,
            onBehalfOf: Reference,
            targetFormat: MimetypesVS,
            sigFormat: MimetypesVS,
            data: SCALARBase64Binary
        })
    ])
);

export default Signature;
