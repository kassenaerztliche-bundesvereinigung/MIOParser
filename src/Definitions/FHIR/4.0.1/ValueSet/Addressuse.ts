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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/address-use

type Addressuse = "home" | "work" | "temp" | "old" | "billing";

const Addressuse: t.Type<Addressuse> = t.union(
    [
        t.literal("home"),
        t.literal("work"),
        t.literal("temp"),
        t.literal("old"),
        t.literal("billing")
    ],
    "Addressuse"
);

export const AddressuseArray: string[] = ["home", "work", "temp", "old", "billing"];

export const AddressuseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/address-use",
        concept: [
            {
                code: "home",
                display: "Home"
            },
            {
                code: "work",
                display: "Work"
            },
            {
                code: "temp",
                display: "Temporary"
            },
            {
                code: "old",
                display: "Old / Incorrect"
            },
            {
                code: "billing",
                display: "Billing"
            }
        ]
    }
];

export default Addressuse;
