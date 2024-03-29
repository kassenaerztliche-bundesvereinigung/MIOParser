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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/expression-language

type Expressionlanguage = "text/cql" | "text/fhirpath" | "application/x-fhir-query";

type ExpressionlanguageType = t.KeyofC<{
    "text/cql": null;
    "text/fhirpath": null;
    "application/x-fhir-query": null;
}>;

const Expressionlanguage: ExpressionlanguageType = t.keyof({
    "text/cql": null,
    "text/fhirpath": null,
    "application/x-fhir-query": null
});
export const ExpressionlanguageArray: string[] = [
    "text/cql",
    "text/fhirpath",
    "application/x-fhir-query"
];

export const ExpressionlanguageValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/expression-language",
        concept: [
            {
                code: "text/cql",
                display: "CQL"
            },
            {
                code: "text/fhirpath",
                display: "FHIRPath"
            },
            {
                code: "application/x-fhir-query",
                display: "FHIR Query"
            }
        ]
    }
];

export default Expressionlanguage;
