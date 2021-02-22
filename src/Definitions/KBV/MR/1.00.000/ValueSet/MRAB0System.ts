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
import { ValueSet } from "../../../../Interfaces";

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_MR_AB0_System

type MRAB0System = "112144000" | "112149005" | "165743006" | "58460004" | "115733006";

const MRAB0System: t.Type<MRAB0System> = t.union(
    [
        t.literal("112144000"),
        t.literal("112149005"),
        t.literal("165743006"),
        t.literal("58460004"),
        t.literal("115733006")
    ],
    "MRAB0System"
);

export const MRAB0SystemArray: string[] = [
    "112144000",
    "112149005",
    "165743006",
    "58460004",
    "115733006"
];

export const MRAB0SystemValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "112144000",
                display: "Blood group A (finding)"
            },
            {
                code: "112149005",
                display: "Blood group B (finding)"
            },
            {
                code: "165743006",
                display: "Blood group AB (finding)"
            },
            {
                code: "58460004",
                display: "Blood group O (finding)"
            },
            {
                code: "115733006",
                display: "Blood group O>h< Bombay Indian variant (finding)"
            }
        ]
    }
];

export default MRAB0System;
