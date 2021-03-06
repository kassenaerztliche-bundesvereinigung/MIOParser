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
import { ValueSet } from "../../../Interfaces";

// Canonical URL for ValueSet: http://fhir.de/ValueSet/UcumVitalsCommonDE

type UcumVitalsCommonDE =
    | "%"
    | "cm"
    | "m"
    | "kg"
    | "g"
    | "Cel"
    | "mm[Hg]"
    | "/min"
    | "/h"
    | "/d"
    | "kg/m2"
    | "m2"
    | "L/min";

const UcumVitalsCommonDE: t.Type<UcumVitalsCommonDE> = t.union(
    [
        t.literal("%"),
        t.literal("cm"),
        t.literal("m"),
        t.literal("kg"),
        t.literal("g"),
        t.literal("Cel"),
        t.literal("mm[Hg]"),
        t.literal("/min"),
        t.literal("/h"),
        t.literal("/d"),
        t.literal("kg/m2"),
        t.literal("m2"),
        t.literal("L/min")
    ],
    "UcumVitalsCommonDE"
);

export const UcumVitalsCommonDEArray: string[] = [
    "%",
    "cm",
    "m",
    "kg",
    "g",
    "Cel",
    "mm[Hg]",
    "/min",
    "/h",
    "/d",
    "kg/m2",
    "m2",
    "L/min"
];

export const UcumVitalsCommonDEValueSet: ValueSet = [
    {
        system: "http://unitsofmeasure.org",
        concept: [
            {
                code: "%",
                display: "percent"
            },
            {
                code: "cm",
                display: "centimeter"
            },
            {
                code: "m",
                display: "meter"
            },
            {
                code: "kg",
                display: "kilogram"
            },
            {
                code: "g",
                display: "gram"
            },
            {
                code: "Cel",
                display: "degree Celsius"
            },
            {
                code: "mm[Hg]",
                display: "millimeter of mecury"
            },
            {
                code: "/min",
                display: "per min"
            },
            {
                code: "/h",
                display: "per hour"
            },
            {
                code: "/d",
                display: "per day"
            },
            {
                code: "kg/m2",
                display: "kilogram / (meter ^ 2)"
            },
            {
                code: "m2",
                display: "square meter"
            },
            {
                code: "L/min",
                display: "liter per minute"
            }
        ]
    }
];

export default UcumVitalsCommonDE;
