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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U3_U4_Physical_Exam_Skin

type CMRU3U4PhysicalExamSkin =
    | "267029006"
    | "3415004"
    | "162740002"
    | "400210000"
    | "370172004"
    | "267038008"
    | "781645001"
    | "106076001:116676008=708039003";

const CMRU3U4PhysicalExamSkin: t.Type<CMRU3U4PhysicalExamSkin> = t.union(
    [
        t.literal("267029006"),
        t.literal("3415004"),
        t.literal("162740002"),
        t.literal("400210000"),
        t.literal("370172004"),
        t.literal("267038008"),
        t.literal("781645001"),
        t.literal("106076001:116676008=708039003")
    ],
    "CMRU3U4PhysicalExamSkin"
);

export const CMRU3U4PhysicalExamSkinArray: string[] = [
    "267029006",
    "3415004",
    "162740002",
    "400210000",
    "370172004",
    "267038008",
    "781645001",
    "106076001:116676008=708039003"
];

export const CMRU3U4PhysicalExamSkinValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "267029006",
                display: "Pale - symptom (finding)"
            },
            {
                code: "3415004",
                display: "Cyanosis (finding)"
            },
            {
                code: "162740002",
                display: "On examination - jaundiced color (finding)"
            },
            {
                code: "400210000",
                display: "Hemangioma (disorder)"
            },
            {
                code: "370172004",
                display: "Skin pigmentation (finding)"
            },
            {
                code: "267038008",
                display: "Edema (finding)"
            },
            {
                code: "781645001",
                display: "Injury to skin caused by trauma (finding)"
            },
            {
                code: "106076001:116676008=708039003",
                display:
                    "Skin finding (finding) : Associated morphology (attribute) = Inflammatory lesion (morphologic abnormality)"
            }
        ]
    }
];

export default CMRU3U4PhysicalExamSkin;
