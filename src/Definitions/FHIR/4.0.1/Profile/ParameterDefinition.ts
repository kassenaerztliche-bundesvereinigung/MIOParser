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
import SCALARCanonical from "../../../../Definitions/FHIR/4.0.1/Scalar/Canonical";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARInteger from "../../../../Definitions/FHIR/4.0.1/Scalar/Integer";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import AlltypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Alltypes";
import OperationparameteruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Operationparameteruse";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/ParameterDefinition"

interface ParameterDefinition {
    use: OperationparameteruseVS;
    type: AlltypesVS;
    resourceType?: "ParameterDefinition";
    id?: string;
    name?: string;
    min?: number;
    max?: string;
    documentation?: string;
    profile?: string;
}

const ParameterDefinition: t.Type<ParameterDefinition> = t.recursion(
    "ParameterDefinition",
    () =>
        t.intersection([
            t.type({
                use: OperationparameteruseVS,
                type: AlltypesVS
            }),
            t.partial({
                resourceType: Literal("ParameterDefinition"),
                id: SCALARString,
                name: SCALARCode,
                min: SCALARInteger,
                max: SCALARString,
                documentation: SCALARString,
                profile: SCALARCanonical
            })
        ])
);

export default ParameterDefinition;
