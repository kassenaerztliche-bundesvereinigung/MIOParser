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
import { Literal } from "../../../CustomTypes";

import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import AddresstypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addresstype";
import AddressuseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Addressuse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Address"

interface Address {
    resourceType?: "Address";
    id?: string;
    use?: AddressuseVS;
    type?: AddresstypeVS;
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: Period;
}

const Address: t.Type<Address> = t.recursion("Address", () =>
    t.partial({
        resourceType: Literal("Address"),
        id: SCALARString,
        use: AddressuseVS,
        type: AddresstypeVS,
        text: SCALARString,
        line: t.array(SCALARString),
        city: SCALARString,
        district: SCALARString,
        state: SCALARString,
        postalCode: SCALARString,
        country: SCALARString,
        period: Period
    })
);

export default Address;
