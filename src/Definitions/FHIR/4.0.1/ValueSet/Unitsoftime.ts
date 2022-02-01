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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/units-of-time

type Unitsoftime = "s" | "min" | "h" | "d" | "wk" | "mo" | "a";

const Unitsoftime: t.Type<Unitsoftime> = t.union(
    [
        t.literal("s"),
        t.literal("min"),
        t.literal("h"),
        t.literal("d"),
        t.literal("wk"),
        t.literal("mo"),
        t.literal("a")
    ],
    "Unitsoftime"
);

export const UnitsoftimeArray: string[] = ["s", "min", "h", "d", "wk", "mo", "a"];

export const UnitsoftimeValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "s",
                display: "second"
            },
            {
                code: "min",
                display: "minute"
            },
            {
                code: "h",
                display: "hour"
            },
            {
                code: "d",
                display: "day"
            },
            {
                code: "wk",
                display: "week"
            },
            {
                code: "mo",
                display: "month"
            },
            {
                code: "a",
                display: "year"
            }
        ]
    }
];

export default Unitsoftime;
