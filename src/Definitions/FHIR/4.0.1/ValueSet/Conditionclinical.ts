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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/condition-clinical

type Conditionclinical =
    | "active"
    | "recurrence"
    | "relapse"
    | "inactive"
    | "remission"
    | "resolved";

type ConditionclinicalType = t.KeyofC<{
    active: null;
    recurrence: null;
    relapse: null;
    inactive: null;
    remission: null;
    resolved: null;
}>;

const Conditionclinical: ConditionclinicalType = t.keyof({
    active: null,
    recurrence: null,
    relapse: null,
    inactive: null,
    remission: null,
    resolved: null
});
export const ConditionclinicalArray: string[] = [
    "active",
    "recurrence",
    "relapse",
    "inactive",
    "remission",
    "resolved"
];

export const ConditionclinicalValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        concept: [
            {
                code: "active",
                display: "Active"
            },
            {
                code: "recurrence",
                display: "Recurrence"
            },
            {
                code: "relapse",
                display: "Relapse"
            },
            {
                code: "inactive",
                display: "Inactive"
            },
            {
                code: "remission",
                display: "Remission"
            },
            {
                code: "resolved",
                display: "Resolved"
            }
        ]
    }
];

export default Conditionclinical;
