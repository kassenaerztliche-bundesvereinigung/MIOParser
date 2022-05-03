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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/condition-ver-status

type Conditionverstatus =
    | "unconfirmed"
    | "provisional"
    | "differential"
    | "confirmed"
    | "refuted"
    | "entered-in-error";

const Conditionverstatus: t.Type<Conditionverstatus> = t.union(
    [
        t.literal("unconfirmed"),
        t.literal("provisional"),
        t.literal("differential"),
        t.literal("confirmed"),
        t.literal("refuted"),
        t.literal("entered-in-error")
    ],
    "Conditionverstatus"
);

export const ConditionverstatusArray: string[] = [
    "unconfirmed",
    "provisional",
    "differential",
    "confirmed",
    "refuted",
    "entered-in-error"
];

export const ConditionverstatusValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        concept: [
            {
                code: "unconfirmed",
                display: "Unconfirmed"
            },
            {
                code: "provisional",
                display: "Provisional"
            },
            {
                code: "differential",
                display: "Differential"
            },
            {
                code: "confirmed",
                display: "Confirmed"
            },
            {
                code: "refuted",
                display: "Refuted"
            },
            {
                code: "entered-in-error",
                display: "Entered in Error"
            }
        ]
    }
];

export default Conditionverstatus;
