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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/name-use

type Nameuse =
    | "usual"
    | "official"
    | "temp"
    | "nickname"
    | "anonymous"
    | "maiden"
    | "old";

const Nameuse: t.Type<Nameuse> = t.union(
    [
        t.literal("usual"),
        t.literal("official"),
        t.literal("temp"),
        t.literal("nickname"),
        t.literal("anonymous"),
        t.literal("maiden"),
        t.literal("old")
    ],
    "Nameuse"
);

export const NameuseArray: string[] = [
    "usual",
    "official",
    "temp",
    "nickname",
    "anonymous",
    "maiden",
    "old"
];

export const NameuseValueSet: ValueSet = [
    {
        system: "http://hl7.org/fhir/name-use",
        concept: []
    }
];

export default Nameuse;
