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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U2_U3_Physical_Exam_Abdomen_Genitals

type CMRU2U3PhysicalExamAbdomenGenitals =
    | "822987005:{116676008=21390004,363698007=818987002}"
    | "249537008"
    | "65476007:{363698007=10200004,363698007=62167004}"
    | "128545000";

const CMRU2U3PhysicalExamAbdomenGenitals: t.Type<CMRU2U3PhysicalExamAbdomenGenitals> = t.union(
    [
        t.literal("822987005:{116676008=21390004,363698007=818987002}"),
        t.literal("249537008"),
        t.literal("65476007:{363698007=10200004,363698007=62167004}"),
        t.literal("128545000")
    ],
    "CMRU2U3PhysicalExamAbdomenGenitals"
);

export const CMRU2U3PhysicalExamAbdomenGenitalsArray: string[] = [
    "822987005:{116676008=21390004,363698007=818987002}",
    "249537008",
    "65476007:{363698007=10200004,363698007=62167004}",
    "128545000"
];

export const CMRU2U3PhysicalExamAbdomenGenitalsValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "822987005:{116676008=21390004,363698007=818987002}",
                display:
                    "Finding of abdominopelvic segment of trunk (finding) : {Associated morphology (attribute)  = Developmental anomaly (morphologic abnormality) , Finding site (attribute) = Structure of abdominopelvic cavity (body structure) }"
            },
            {
                code: "249537008",
                display: "Umbilicus finding (finding)"
            },
            {
                code: "65476007:{363698007=10200004,363698007=62167004}",
                display:
                    "Abnormal size (finding) : {Finding site (attribute) = Liver structure (body structure , Finding site (attribute) = Splenic structure (body structure)}"
            },
            {
                code: "128545000",
                display: "Hernia of abdominal wall (disorder)"
            }
        ]
    }
];

export default CMRU2U3PhysicalExamAbdomenGenitals;
