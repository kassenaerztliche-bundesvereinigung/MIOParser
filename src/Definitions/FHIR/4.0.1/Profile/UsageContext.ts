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
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import Coding from "../../../../Definitions/FHIR/4.0.1/Profile/Coding";
import Quantity from "../../../../Definitions/FHIR/4.0.1/Quantity/Quantity";
import Range from "../../../../Definitions/FHIR/4.0.1/Profile/Range";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import UsagecontexttypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Usagecontexttype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/UsageContext"

interface UsageContext {
    code: UsagecontexttypeVS;
    resourceType?: string;
    id?: string;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
}

const UsageContext: t.Type<UsageContext> = t.recursion("UsageContext", () =>
    t.intersection([
        t.type({
            code: ExtensibleCheck<t.Type<UsagecontexttypeVS>>(UsagecontexttypeVS)
        }),
        t.partial({
            resourceType: t.string,
            id: SCALARString,
            valueCodeableConcept: CodeableConcept,
            valueQuantity: Quantity,
            valueRange: Range,
            valueReference: Reference
        })
    ])
);

export default UsageContext;
