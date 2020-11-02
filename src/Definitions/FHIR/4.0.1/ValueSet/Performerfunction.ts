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

// Canonical URL for ValueSet: http://hl7.org/fhir/ValueSet/performer-function

type Performerfunction =
    | "TRANS"
    | "PART"
    | "ATND"
    | "CON"
    | "AUT"
    | "INF"
    | "ENT"
    | "WIT"
    | "PPRF"
    | "SPRF"
    | "RESP"
    | "VRF"
    | "AUTHEN"
    | "LA";

const Performerfunction: t.Type<Performerfunction> = t.union(
    [
        t.literal("TRANS"),
        t.literal("PART"),
        t.literal("ATND"),
        t.literal("CON"),
        t.literal("AUT"),
        t.literal("INF"),
        t.literal("ENT"),
        t.literal("WIT"),
        t.literal("PPRF"),
        t.literal("SPRF"),
        t.literal("RESP"),
        t.literal("VRF"),
        t.literal("AUTHEN"),
        t.literal("LA")
    ],
    "Performerfunction"
);

export const PerformerfunctionArray: string[] = [
    "TRANS",
    "PART",
    "ATND",
    "CON",
    "AUT",
    "INF",
    "ENT",
    "WIT",
    "PPRF",
    "SPRF",
    "RESP",
    "VRF",
    "AUTHEN",
    "LA"
];

export const PerformerfunctionValueSet: ValueSet = [
    {
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        concept: [
            {
                code: "TRANS",
                display: "undefined"
            },
            {
                code: "PART",
                display: "undefined"
            },
            {
                code: "ATND",
                display: "undefined"
            },
            {
                code: "CON",
                display: "undefined"
            },
            {
                code: "AUT",
                display: "undefined"
            },
            {
                code: "INF",
                display: "undefined"
            },
            {
                code: "ENT",
                display: "undefined"
            },
            {
                code: "WIT",
                display: "undefined"
            },
            {
                code: "PPRF",
                display: "undefined"
            },
            {
                code: "SPRF",
                display: "undefined"
            },
            {
                code: "RESP",
                display: "undefined"
            },
            {
                code: "VRF",
                display: "undefined"
            },
            {
                code: "AUTHEN",
                display: "undefined"
            },
            {
                code: "LA",
                display: "undefined"
            }
        ]
    }
];

export default Performerfunction;
