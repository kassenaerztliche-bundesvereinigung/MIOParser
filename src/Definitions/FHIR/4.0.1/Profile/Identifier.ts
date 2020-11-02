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
import SCALARCode from "../../../../Definitions/FHIR/4.0.1/Scalar/Code";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import SCALARUri from "../../../../Definitions/FHIR/4.0.1/Scalar/Uri";
import CodeableConcept from "../../../../Definitions/FHIR/4.0.1/Profile/CodeableConcept";
import IdentifiertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifiertype";
import IdentifieruseVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Identifieruse";
import Period from "../../../../Definitions/FHIR/4.0.1/Profile/Period";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Identifier"

interface Identifier {
    resourceType?: string;
    id?: string;
    use?: IdentifieruseVS;
    type?: IdentifiertypeVS;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: Reference;
}

const Identifier: t.Type<Identifier> = t.recursion("Identifier", () =>
    t.partial({
        resourceType: t.string,
        id: SCALARString,
        use: IdentifieruseVS,
        type: ExtensibleCheck<t.Type<IdentifiertypeVS>>(IdentifiertypeVS),
        system: SCALARUri,
        value: SCALARString,
        period: Period,
        assigner: Reference
    })
);

export default Identifier;
