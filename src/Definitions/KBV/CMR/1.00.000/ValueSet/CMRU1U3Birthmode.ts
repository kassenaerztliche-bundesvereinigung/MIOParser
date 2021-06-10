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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U1_U3_Birthmode

type CMRU1U3Birthmode = "395683001" | "394699000" | "407614003" | "395681004";

const CMRU1U3Birthmode: t.Type<CMRU1U3Birthmode> = t.union(
    [
        t.literal("395683001"),
        t.literal("394699000"),
        t.literal("407614003"),
        t.literal("395681004")
    ],
    "CMRU1U3Birthmode"
);

export const CMRU1U3BirthmodeArray: string[] = [
    "395683001",
    "394699000",
    "407614003",
    "395681004"
];

export const CMRU1U3BirthmodeValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "395683001",
                display: "Born by normal vaginal delivery (situation)"
            },
            {
                code: "394699000",
                display: "Born by cesarean section (situation)"
            },
            {
                code: "407614003",
                display: "Born by ventouse delivery (situation)"
            },
            {
                code: "395681004",
                display: "Born by forceps delivery (situation)"
            }
        ]
    }
];

export default CMRU1U3Birthmode;
