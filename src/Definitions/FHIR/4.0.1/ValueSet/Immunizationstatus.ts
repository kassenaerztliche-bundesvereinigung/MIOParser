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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/immunization-status

type Immunizationstatus = "completed" | "entered-in-error" | "not-done";

const Immunizationstatus: t.Type<Immunizationstatus> = t.union(
    [t.literal("completed"), t.literal("entered-in-error"), t.literal("not-done")],
    "Immunizationstatus"
);

export const ImmunizationstatusArray: string[] = [
    "completed",
    "entered-in-error",
    "not-done"
];

export const ImmunizationstatusValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/event-status",
        concept: [
            {
                code: "completed",
                display: "undefined"
            },
            {
                code: "entered-in-error",
                display: "undefined"
            },
            {
                code: "not-done",
                display: "undefined"
            }
        ]
    }
];

export default Immunizationstatus;
