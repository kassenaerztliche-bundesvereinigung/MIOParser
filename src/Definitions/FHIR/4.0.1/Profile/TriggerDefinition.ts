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

import SCALARDate from "../../../../Definitions/FHIR/4.0.1/Scalar/Date";
import SCALARDateTime from "../../../../Definitions/FHIR/4.0.1/Scalar/DateTime";
import SCALARString from "../../../../Definitions/FHIR/4.0.1/Scalar/String";
import DataRequirement from "../../../../Definitions/FHIR/4.0.1/Profile/DataRequirement";
import Expression from "../../../../Definitions/FHIR/4.0.1/Profile/Expression";
import Reference from "../../../../Definitions/FHIR/4.0.1/Profile/Reference";
import Timing from "../../../../Definitions/FHIR/4.0.1/Profile/Timing";
import TriggertypeVS from "../../../../Definitions/FHIR/4.0.1/ValueSet/Triggertype";

// Definition for URL: "http://hl7.org/fhir/StructureDefinition/TriggerDefinition"

interface TriggerDefinition {
    type: TriggertypeVS;
    resourceType?: "TriggerDefinition";
    id?: string;
    name?: string;
    timingTiming?: Timing;
    timingReference?: Reference;
    timingDate?: string;
    timingDateTime?: string;
    data?: DataRequirement[];
    condition?: Expression;
}

const TriggerDefinition: t.Type<TriggerDefinition> = t.recursion(
    "TriggerDefinition",
    () =>
        t.intersection([
            t.type({
                type: TriggertypeVS
            }),
            t.partial({
                resourceType: Literal("TriggerDefinition"),
                id: SCALARString,
                name: SCALARString,
                timingTiming: Timing,
                timingReference: Reference,
                timingDate: SCALARDate,
                timingDateTime: SCALARDateTime,
                data: t.array(DataRequirement),
                condition: Expression
            })
        ])
);

export default TriggerDefinition;
