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

// Canonical URL for ValueSet: https://fhir.kbv.de/ValueSet/KBV_VS_MIO_CMR_U6_U7_Physical_Exam_Chest_Lung_Respiratory_Tract

type CMRU6U7PhysicalExamChestLungRespiratoryTract =
    | "301272007"
    | "301273002"
    | "17077006"
    | "67909005"
    | "298706004"
    | "423230008";

const CMRU6U7PhysicalExamChestLungRespiratoryTract: t.Type<CMRU6U7PhysicalExamChestLungRespiratoryTract> = t.union(
    [
        t.literal("301272007"),
        t.literal("301273002"),
        t.literal("17077006"),
        t.literal("67909005"),
        t.literal("298706004"),
        t.literal("423230008")
    ],
    "CMRU6U7PhysicalExamChestLungRespiratoryTract"
);

export const CMRU6U7PhysicalExamChestLungRespiratoryTractArray: string[] = [
    "301272007",
    "301273002",
    "17077006",
    "67909005",
    "298706004",
    "423230008"
];

export const CMRU6U7PhysicalExamChestLungRespiratoryTractValueSet: ValueSet = [
    {
        system: "http://snomed.info/sct",
        concept: [
            {
                code: "301272007",
                display: "Chest auscultation finding (finding)"
            },
            {
                code: "301273002",
                display: "Abnormal breath sounds (finding)"
            },
            {
                code: "17077006",
                display: "Abnormal respiratory rate (finding)"
            },
            {
                code: "67909005",
                display: "Chest wall retraction (finding)"
            },
            {
                code: "298706004",
                display: "Finding of appearance of thorax (finding)"
            },
            {
                code: "423230008",
                display: "Wide spaced nipples (finding)"
            }
        ]
    }
];

export default CMRU6U7PhysicalExamChestLungRespiratoryTract;
