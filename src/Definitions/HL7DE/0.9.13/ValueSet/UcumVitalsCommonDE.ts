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

type UcumVitalsCommonDEType = t.KeyofC<{
    "%": null;
    cm: null;
    m: null;
    kg: null;
    g: null;
    Cel: null;
    "mm[Hg]": null;
    "/min": null;
    "/h": null;
    "/d": null;
    "kg/m2": null;
    m2: null;
    "L/min": null;
}>;

const UcumVitalsCommonDE: UcumVitalsCommonDEType = t.keyof({
    "%": null,
    cm: null,
    m: null,
    kg: null,
    g: null,
    Cel: null,
    "mm[Hg]": null,
    "/min": null,
    "/h": null,
    "/d": null,
    "kg/m2": null,
    m2: null,
    "L/min": null
});
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
