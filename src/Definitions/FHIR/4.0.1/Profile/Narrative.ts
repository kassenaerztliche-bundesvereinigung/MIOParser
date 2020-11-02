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
import SCALARXhtml from "../../../../Definitions/FHIR/4.0.1/Scalar/Xhtml";
import NarrativestatusVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Narrativestatus";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/Narrative"

interface Narrative {
    status: NarrativestatusVS;
    div: string;
    resourceType?: string;
    id?: string;
}

const Narrative: t.Type<Narrative> = t.recursion("Narrative", () =>
    t.intersection([
        t.type({
            status: NarrativestatusVS,
            div: SCALARXhtml
        }),
        t.partial({
            resourceType: t.string,
            id: SCALARString
        })
    ])
);

export default Narrative;
