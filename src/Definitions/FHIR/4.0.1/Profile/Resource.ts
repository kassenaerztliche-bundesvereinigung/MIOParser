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
import { Excess } from "../../../util";
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import Meta from "../../../../Definitions/FHIR/4.0.1/Profile/Meta";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Resource"

interface Resource {
    resourceType?: string;
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
}

const Resource: t.Type<Resource> = t.recursion("Resource", () =>
    t.partial({
        resourceType: t.string,
        id: SCALARString,
        meta: Meta,
        implicitRules: SCALARUri,
        language: SCALARCode
    })
);

export default Resource;
