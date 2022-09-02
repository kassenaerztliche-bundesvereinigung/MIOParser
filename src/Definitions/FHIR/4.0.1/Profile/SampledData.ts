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

import SCALARDecimal from "../../../../Definitions/FHIR/4.0.1/Scalar/Decimal";
import SCALARPositiveInt from "../../../../Definitions/FHIR/4.0.1/Scalar/PositiveInt";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SimpleQuantity from "../../../../Definitions/FHIR/4.0.1/Quantity/SimpleQuantity";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/SampledData"

interface SampledData {
    origin: SimpleQuantity;
    period: number;
    dimensions: number;
    id?: string;
    factor?: number;
    lowerLimit?: number;
    upperLimit?: number;
    data?: string;
}

const SampledData: t.Type<SampledData> = t.recursion("SampledData", () =>
    t.intersection([
        t.type({
            origin: SimpleQuantity,
            period: SCALARDecimal,
            dimensions: SCALARPositiveInt
        }),
        t.partial({
            id: SCALARString,
            factor: SCALARDecimal,
            lowerLimit: SCALARDecimal,
            upperLimit: SCALARDecimal,
            data: SCALARString
        })
    ])
);

export default SampledData;
