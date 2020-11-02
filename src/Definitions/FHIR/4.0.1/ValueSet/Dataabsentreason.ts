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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason

type Dataabsentreason =
    | "asked-unknown"
    | "temp-unknown"
    | "not-asked"
    | "asked-declined"
    | "unknown"
    | "masked"
    | "not-applicable"
    | "unsupported"
    | "as-text"
    | "not-a-number"
    | "negative-infinity"
    | "positive-infinity"
    | "error"
    | "not-performed"
    | "not-permitted";

const Dataabsentreason: t.Type<Dataabsentreason> = t.union(
    [
        t.literal("asked-unknown"),
        t.literal("temp-unknown"),
        t.literal("not-asked"),
        t.literal("asked-declined"),
        t.literal("unknown"),
        t.literal("masked"),
        t.literal("not-applicable"),
        t.literal("unsupported"),
        t.literal("as-text"),
        t.literal("not-a-number"),
        t.literal("negative-infinity"),
        t.literal("positive-infinity"),
        t.literal("error"),
        t.literal("not-performed"),
        t.literal("not-permitted")
    ],
    "Dataabsentreason"
);

export const DataabsentreasonArray: string[] = [
    "asked-unknown",
    "temp-unknown",
    "not-asked",
    "asked-declined",
    "unknown",
    "masked",
    "not-applicable",
    "unsupported",
    "as-text",
    "not-a-number",
    "negative-infinity",
    "positive-infinity",
    "error",
    "not-performed",
    "not-permitted"
];

export const DataabsentreasonValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        concept: []
    }
];

export default Dataabsentreason;
