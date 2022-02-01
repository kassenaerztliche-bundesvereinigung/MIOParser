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
import { Literal } from "../../../CustomTypes";

import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import CurrenciesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Currencies";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Money"

interface Money {
    resourceType?: "Money";
    id?: string;
    value?: number;
    currency?: CurrenciesVS;
}

const Money: t.Type<Money> = t.recursion("Money", () =>
    t.partial({
        resourceType: Literal("Money"),
        id: SCALARString,
        value: SCALARDecimal,
        currency: CurrenciesVS
    })
);

export default Money;
