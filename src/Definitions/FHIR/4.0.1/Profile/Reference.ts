/*
 * Licensed to the Kassenärztliche Bundesvereinigung (KBV) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The KBV licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as t from "io-ts";
import { Excess, ExtensibleCheck } from "../../../util";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Identifier from "../../../../Definitions/FHIR/4.0.1/Profile/Identifier";
import ResourcetypesVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Resourcetypes";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Reference"

interface Reference {
    resourceType?: string;
    id?: string;
    reference?: string;
    type?: ResourcetypesVS;
    identifier?: Identifier;
    display?: string;
}

const Reference: t.Type<Reference> = t.recursion("Reference", () =>
    t.partial({
        resourceType: t.string,
        id: SCALARString,
        reference: SCALARString,
        type: ExtensibleCheck<t.Type<ResourcetypesVS>>(ResourcetypesVS),
        identifier: Identifier,
        display: SCALARString
    })
);

export default Reference;
